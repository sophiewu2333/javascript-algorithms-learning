class Sort {
    constructor() {
    }
    sort(array) {
    }
    less(a, b) {
        return a < b;
    }
    show(array) {
        for (const element of array) {
            console.log(element);
        }
    }
    isSorted(array) {
        for (let i = 0; i < array.length - 1; i++) {
            if (!this.less(array[i], array[i + 1])) {
                return false;
            }
        }
        return true;

    }
    exch(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] =  temp; 
    }
}

module.exports = Sort;

