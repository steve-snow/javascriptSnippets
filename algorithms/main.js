class Node {
    constructor(value) {
        // constructor(key, value) {
        // this.key = key
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.table = [];
        this.hashfunction = 7;

        for (let i = 0; i < this.hashFunction; i++) {
            this.table.push(null);
        }
    }

    insert(value) {
        node = new Node(value);
        let index = this.hashfunction(value);

        if(!this.table[index]) {
            this.table[index] = new Node(value);
        } else {
            let walker = this.table[index];
            while (walker.next) {
                let walker = walker.next;
            }
            walker.next = new Node(value);
        }
    }

    remove(value) {
        if(this.table[index]) {
            let walker = this.table[index];
            if(walker.value == value) {
                while(walker.value != value) {
                    walker = walker.next;
                }
                    // INCOMPLETE
            }
         }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            str = "[" + i + "]: ";
            if(!this.table[index]) {
                str += "Empty";
            } else {
                walker = this.table[i];
                while (walker.next) {
                    str += (" -> ", walker.value) ;
                    walker = wakler.next;
                }
            }
            console.log(str)
        }
    }

    hashfunction(key) {
        return key % hashfunction; // prime
    }


}

function insertionSort(arr) {

    for(let i = 1; i < arr.length; i++){

        let j = i -1;
        let temp = nums[i];
        while (j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j];
            j--;
        }
        num[J + 1] = temp
    }



    let str = "["
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if(i != arr.length - 1){
            str += ", ";
        }
    }
    console.log(str + "]");
}

function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

    }



    let str = "["
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if(i != arr.length - 1){
            str += ", ";
        }
    }
    console.log(str + "]");

}


function selectionSort(arr) {
    
    for(let m = 0; m< arr.length-1; m++){

        let smallest = m;
        let swapholder;
        for (let n = m+1; n< arr.length; n++){
            if(arr[n]< arr[smallest]) {
                arr[smallest] = arr[n];
            }
        }
        if(smallest !== m){
            swapholder = arr[m];
            arr[m] = arr[smallest];
            arr[smallest] = swapholder;
        }
    }





    let str = "["
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if(i != arr.length - 1){
            str += ", ";
        }
    }
    console.log(str + "]");
}

function printArray(arr) {
    let str = "["
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if(i != arr.length - 1){
            str += ", ";
        }
    }

    console.log(str + "]");
}


function main() {
    console.log("hello World");
    insertionSort([]);
    insertionSort([1]);
    insertionSort([1,2]);
    insertionSort([2,1]);
    insertionSort([1,2,3]);
    insertionSort([3,2,1]);
    insertionSort([2,1, 3]);
    insertionSort([1, 3, 5, 2, 4]);

    bubbleSort([]);
    bubbleSort([1]);
    bubbleSort([1,2]);
    bubbleSort([2,1]);
    bubbleSort([1,2,3]);
    bubbleSort([3,2,1]);
    bubbleSort([2,1, 3]);
    bubbleSort([1, 3, 5, 2, 4]);


    selectionSort([]);
    selectionSort([1]);
    selectionSort([1,2]);
    selectionSort([2,1]);
    selectionSort([1,2,3]);
    selectionSort([3,2,1]);
    selectionSort([2,1, 3]);
    selectionSort([1, 3, 5, 2, 4]);

    table = new HashTable();
    table.insert(24);
    table.insert(21);
    table.insert(14);


}

main();