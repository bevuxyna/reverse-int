module.exports = function reverse (n) {
    return Number(n.toString().replace('-', '').split('').reverse().join(''));
}
