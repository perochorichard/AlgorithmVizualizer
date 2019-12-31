export default class Algorithm {
    constructor(arr) {
        this.arr = arr;
    }

    sort() {
        throw new Error('Sorting is not implemented');
    }

    async updateEvent() {
        throw new Error('Update event is not implemented');
    }

    async completedEvent() {
        throw new Error('Completed event is not implemented');
    }

    swap(a, b) {
        let tmp = this.arr[a];
        this.arr[a] = this.arr[b];
        this.arr[b] = tmp;
    }
}