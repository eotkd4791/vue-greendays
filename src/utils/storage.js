// export const getItem = key =>
// 	new Promise((resolve, reject) => {
// 		const data = JSON.parse(localStorage.getItem(key));
// 		setTimeout(() => {
// 			data
// 				? resolve({ data, status: 200, message: 'OK' })
// 				: reject({ data: null, status: 400, message: 'Bad Request' });
// 		}, 500);
// 	});

// export const setItem = (key, value) =>
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			localStorage.setItem(key, JSON.stringify(value));
// 			resolve({ data: true, status: 201, message: 'Created' });
// 		}, 500);
// 	});

export const getItem = key => JSON.parse(localStorage.getItem(key));
export const setItem = (key, value) =>
	localStorage.setItem(key, JSON.stringify(value));
