const Sort = require('./Sort.js');

class Shell extends Sort {
    constructor() {
        super();
    }
    sort(array) {
        const N = array.length;//5
        let h = 1;
        while(h < (N/3)) {
            h = 3*h + 1;//4
        }
        while (h >= 1) {
            for (let i = h; i < N; i ++){
                for (let j = i; j >= h && this.less(array[j], array[j-h]); j -= h) {
                    this.exch(array, j, j-h);
                }
            }
            this.show(array);
            h = Math.floor(h/3);
        }
    }
}
var shell = new Shell();
const sortedArray = [4, 32342, 3243, 12, 32];
shell.sort(sortedArray);
console.log(shell.isSorted(sortedArray));
shell.show(sortedArray);

module.exports = Shell;

