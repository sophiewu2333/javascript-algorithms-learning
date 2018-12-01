const Sort = require('./Sort.js');

class Selection extends Sort {
    constructor() {
        super();
    }
    sort(array) {
        const N = array.length;
        for (let i = 0; i < N; i++) {
            let min = i;
            for (let j = i+1; j < N; j++) {
                if (this.less(array[j], array[min]))
                  min = j;
            }
            this.exch(array, i, min)
        }
    }
}
var selection = new Selection();
const sortedArray = [4, 32342, 3243, 12, 32];
selection.sort(sortedArray);
console.log(selection.isSorted(sortedArray));
selection.show(sortedArray);

module.export = Selection;

