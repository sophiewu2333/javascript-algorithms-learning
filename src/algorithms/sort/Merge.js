const Sort = require('./Sort.js');

const temp = [];
class Merge extends Sort {
    constructor() {
        super();
    }
    sort(array) {
        this._sort(array, 0, array.length - 1);
    }
    _sort(array, start, end) {
        if (start >= end) return;
        let mid = Math.round((start+end)/2);
        this._sort(array, start, mid - 1); // sort the left
        this._sort(array, mid, end); // sort the right
        this.merge(array, start, mid, end);
    }

    merge(arr, start, mid, end) {
        console.log('start', start, mid, end);
        let i = start;
        let j = mid;
        for (let k = start; k <= end; k++) {
            temp[k] = arr[k];
        }
        console.log('temp', temp);
        for (let k = start; k <= end; k++) {
            console.log(i,j,mid);
            console.log('temp', temp);
            if (i > j) return;
            else if (i >= mid) {
                arr[k] = temp[j];
                j++;
            }
            else if (j > end) {
                arr[k] = temp[i];
                i++;
            }
            else if (this.less(temp[i], temp[j])) {
                arr[k] = temp[i];
                i++;
            }
            else {
                arr[k] = temp[j];
                j++;
            }
            console.log('arr[',k, arr[k]);
        }
    }
}
var merge = new Merge();
const sortedArray = [4, 32, 64, 12];
merge.sort(sortedArray);
console.log(merge.isSorted(sortedArray));
merge.show(sortedArray);

module.exports = Merge;

