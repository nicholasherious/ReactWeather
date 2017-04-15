
function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City not Found');
        }, 1000);
    });
}

getTempPromise('Philadelphia').then(function (temp) {
    console.log('Promise Success', temp);
}, function (err) {
    console.log('Promise Error', err);
})
    



function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('A & B need to be numbers');
        }
    });
}

addPromise(2, 3).then(function (sum) {
    console.log('success', sum);

}, function (err) {
    console.log('error', err);
});

addPromise('hello', 6).then(function(sum) {
    console.log('This should not show up');
}, function (err) {
    console.log('this should not appear', err);
});