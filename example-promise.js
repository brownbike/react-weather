function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('Cannot add NaN');
		}
	});
}

addPromise(1, 2).then(function (sum) {
	console.log('Promise success', sum);
}, function (err) {
	console.log('Promise Error', err);
});
