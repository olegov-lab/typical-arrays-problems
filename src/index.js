
exports.min = function min (array) {

    if (!Array.isArray(array) || array.length == 0 || array == undefined) {
        return 0;
    }

    let small = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] < small) {
           small = array[i];
        }
    }
    return small;
}

exports.max = function max (array) {

    if (!Array.isArray(array) || array.length == 0 || array == undefined) {
        return 0;
    }

    let max = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] > max) {
           max = array[i];
        }
    }
    return max;
}

exports.avg = function avg (array) {

    if (!Array.isArray(array) || array.length == 0 || array == undefined) {
        return 0;
    }

    let sum = 0;
    let avg = 0;

   for (let i = 0; i < array.length; i++) {

       sum += array[i];
   }

    avg = sum/+array.length;
    return avg;

}

