const Sort = require('./Sort.js');

class Insertion extends Sort {
    constructor() {
        super();
        console.log('sort');
        const sortedArray = [55,24, 32342, 3243, 12, 32];
        this.sort(sortedArray);
        console.log(this.isSorted(sortedArray));
        this.show(sortedArray);
    }
    sort(array) {
        const N = array.length;
        for (let i = 1; i < N; i++) {
            for (let j = i; j > 0 && this.less(array[j], array[j-1]); j--) {
                this.exch(array, j, j-1);
            }
        }
    }
}
var insertion = new Insertion();
const sortedArray = [4, 32342, 3243, 12, 32];
insertion.sort(sortedArray);
console.log(insertion.isSorted(sortedArray));
insertion.show(sortedArray);

module.exports = Insertion;

