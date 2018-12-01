const Sort = require('./Sort.js');

const temp = [];
class MergeBU extends Sort {
    constructor() {
        super();
    }
    sort(array) {
        const N = array.length;
        for (let len = 1; len < N; len = len+len) {
            for (let k = 0; k < N - len; k += len+len) {
                this.merge(array, k, k+len, Math.min(k+len+len-1, N-1))
            }
        }
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
const mergeBU = new MergeBU();
const sortedArray = [4, 32, 64, 12];
mergeBU.sort(sortedArray);
console.log(mergeBU.isSorted(sortedArray));
mergeBU.show(sortedArray);

module.exports = MergeBU;

