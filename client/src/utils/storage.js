// export const getItem = key =>
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(JSON.parse(localStorage.getItem(key)));
// 		}, 100);
// 	});

// export const setItem = (key, value) =>
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			localStorage.setItem(key, JSON.stringify(value));
// 			resolve(true);
// 		}, 100);
// 	});

export const getItem = key => JSON.parse(localStorage.getItem(key));
export const setItem = (key, value) =>
	localStorage.setItem(key, JSON.stringify(value));
