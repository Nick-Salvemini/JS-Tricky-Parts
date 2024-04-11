function curriedAdd(num) {
    let total = 0;

    function add(nextNum) {
        if (nextNum !== undefined) {
            total += nextNum;
            return add;
        } else {
            return total;
        }
    }

    if (num === undefined) {
        return total
    } else {
        total += num;
        return add
    }
}



module.exports = { curriedAdd };
