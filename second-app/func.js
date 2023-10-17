const sum = (a, b) => {
    return a + b;
};

(function (sumy) {
    const substract = "soustraction";
    console.log(sumy, substract);
})(sum(2,3));

module.exports = sum;
