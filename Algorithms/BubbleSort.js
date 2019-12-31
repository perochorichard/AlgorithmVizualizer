import Algorithm from './Algorithm.js';

export default class BubbleSort extends Algorithm {
    constructor(arr) {
        super(arr);
    }

    async sort() {
        for (var i = this.arr.length; i > 0; i--) {
            for (var j = 1; j < i; j++) {
                if (this.arr[j - 1] > this.arr[j]) {
                    this.swap(j - 1, j);
                    await this.updateEvent(j - 1, j);
                }
            }
        }
        await this.completedEvent();
    }
}