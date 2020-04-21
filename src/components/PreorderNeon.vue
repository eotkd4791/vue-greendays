<template>
  <div class="container-neon">
    <section class="wrapper-neon">
      <header class="header-neon">한정된 기간동안만 열리는 특별한 타임세일!</header>
      <div class="letters-neon" ref="switch">
        <span class="neon-light-off neon-first-group">P</span>
        <span class="neon-light-off neon-first-group">R</span>
        <span class="neon-light-off neon-first-group" id="letters-neon-space">E</span>
        <span class="neon-light-off neon-second-group">O</span>
        <span class="neon-light-off neon-second-group">R</span>
        <span class="neon-light-off neon-second-group">D</span>
        <span class="neon-light-off neon-second-group">E</span>
        <span class="neon-light-off neon-second-group">R</span>
      </div>
      <footer class="footer-neon">
        <span class="preorder-count">지금 <span id="many-preorder">{{ howManyPreorder }}</span>개의 프리오더 진행 중</span>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      howManyPreorder: 8,
      intervalsId: '',
    };
  },
  mounted() {
    const neonSwitch = this.$refs.switch.childNodes;

    const interval = setInterval(() => {
      for(let i=0; i<neonSwitch.length; i++) {
        setTimeout(() => {
          neonSwitch[i].classList.remove('neon-light-off');
          neonSwitch[i].classList.add('neon-light-on');
        }, 500 * (i+1));
      }
      setTimeout(()=> {
        for(let i=0; i<neonSwitch.length; i++) {
          setTimeout(() => {
            neonSwitch[i].classList.toggle('neon-light-off');
            neonSwitch[i].classList.toggle('neon-light-on');
          }, 5200);
        }
      }, 2500);
    },1000);
    this.intervalsId = interval;
  },
  beforeDestroy() {
    clearInterval(this.intervalsId);
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'Monoton';
  src: url('../assets/fonts/Monoton-Regular.ttf');
} 
.container-neon {
  width: 100%;
  height: 280px;
  margin-top: 200px;
  margin-right: auto;
  margin-left: auto;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
  cursor: default;
}
.wrapper-neon {
  max-width: 1100px;
  margin: 0 auto;
  background-image: url('../assets/img/preorder_background.png');
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;  
  color: #fff;

  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
} 
.header-neon {
  font-size: 22px;
  font-weight: 800;
  margin-top: 30px;
}
.letters-neon {
  font-family: 'Monoton';
  font-size: 100px;
}
#letters-neon-space {
  margin-right: 50px;
}
.neon-light-on {
  color: #8bc34a;
  filter: drop-shadow(0 0 25px #4dcf34);
}
.neon-light-off {
  color: #7C7C7C;
}
.footer-neon {
  margin-bottom: 30px;
  font-weight: 700;
}
#many-preorder {
  color: #9AECDB;
  font-size: 18px;
}
</style>