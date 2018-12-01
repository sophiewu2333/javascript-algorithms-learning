const Sort = require('./Sort.js');

const temp = [];
class Quick extends Sort {
    constructor() {
        super();
    }
    sort(array) {
        this._sort(array, 0, array.length - 1);
    }
    _sort(array, start, end) {
        if (start >= end) return;
        let part = this.partition(array, start, end);
        console.log('part', part);
        this._sort(array, start, part - 1);
        this._sort(array, part + 1, end);
    }
    partition(array, start, end) {
        let i = start;
        let j = end + 1;
        let v = array[start];
        while(true) {
            while (this.less(array[++i], v)) {
                // i++;
                if (i === end) {
                    break;
                }
            }
            while (this.less(v, array[--j])) {
                // j--;
                if (j === start) {
                    break;
                }
            }
            console.log(i,j);
            if (i >= j) {
                break;
            }
            this.exch(array, i, j);
        }
        this.exch(array, start, j);
        return j;
    }


}
var quick = new Quick();
const sortedArray = [4, 32, 64, 12];
quick.sort(sortedArray);
console.log(quick.isSorted(sortedArray));
quick.show(sortedArray);

module.exports = Quick;

