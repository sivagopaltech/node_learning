
module.exports.add = (a, b) => a+b;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b);
    },500) 
}
module.exports.square = (x) => x*x;
