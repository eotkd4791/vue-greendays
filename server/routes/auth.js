const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const cors = require('cors');
const nodemailer = require('nodemailer');

const {
  isLoggedIn,
  isNotLoggedIn
} = require('./middlewares');
const {
  User
} = require('../models');

const router = express.Router();

router.use(cors());
router.use((req, res, next) => {
  cors()(req, res, next);
});

let checkCode, emailChecked;

router.post('/email/send', isNotLoggedIn, async (req, res, next) => {
  checkCode = Math.floor(Math.random() * parseInt(process.env.RANDOM_LIMIT)).toString();

  const transporter = nodemailer.createTransport({
    service: 'naver',
    host: "smtp.naver.com",
    port: 465,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASSWORD
    }
  });
  const mailOptions = {
    from: process.env.MAIL_EMAIL,
    to: req.body.email,
    subject: 'Greendays',
    text: `인증번호 [${checkCode}]를 입력해주세요.`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(400).json({
        code: 400,
        message: '이메일 인증 코드 전송을 실패하였습니다.'
      })
    } else {
      console.log('Email sent: ' + info.response);
      return res.json({
        code: 200,
        message: '이메일 인증 코드를 성공적으로 전송하였습니다!'
      })
    }
  });
});

router.post('/email/check', isNotLoggedIn, (req, res, next) => {
  emailChecked = false;
  if (req.body.code === checkCode) {
    emailChecked = true;
    return res.json({
      code: 200,
      message: '인증을 성공하였습니다.'
    });
  } else {
    return res.status(401).json({
      code: 401, //인증 실패
      message: '인증 코드가 일치하지 않습니다.'
    })
  }
});


// POST /auth/signup
router.post('/signup', isNotLoggedIn, async (req, res, next) => {
  console.log(req.body);
  const userInfo = {
    ...req.body.userInfo
  };
  try {
    const exUser = await User.findOne({
      where: {
        email: userInfo.email
      }
    });
    if (exUser) {
      req.flash('signupError', '이미 가입된 이메일입니다.');
      return res.redirect('/signup');
    }

    let point = 0;
    const matchPromotionCode = await User.findOne({
      where: {
        promotionCode: userInfo.recommendCode
      }
    });
    if (matchPromotionCode) {
      point += 2000;
    }

    const hash = await bcrypt.hash(userInfo.password, 12);

    await User.create({
      email: userInfo.email,
      password: hash,
      name: userInfo.name,
      position: 'admin',
      age: new Date().getFullYear() - parseInt(userInfo.selectedBirthYear),
      gender: userInfo.selectedGender,
      address: `${userInfo.postCode} ${userInfo.address} ${userInfo.detailAddress}`,
      promotionCode: Math.random().toString(36).substr(2, 6).toUpperCase(),
      point,
    });
    return res.redirect('/');
  } catch (err) {
    console.log(err);
    next(err);
  }
});


// POST /auth/login
router.post('/login', isNotLoggedIn, async (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      req.flash('/loginError', info.message);
      return res.redirect('/');
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next);
});

router.get('/logout', isLoggedIn, async (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;