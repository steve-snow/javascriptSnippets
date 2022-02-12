class Node {
    constructor(value) {
        this.value = value;
        this.ahead = null;
        this.behind = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    pushBack(value) {
        if(!this.front) {
            newNode = new Node(value);
            this.front = newNode;
            this.back = this.front;
        } else {
            let newNode = new Node(value);
            this.back.behind = newNode;
            newNode.ahead = this.back;
            this.back = newNode.next;
        }
        this.size++;
    }

    pushFront() {

    }

    popFront() {
        if(this.size) {
            let poppedNode = this.front;
            if(poppedNode.behind) {
                this.front = poppedNode.behind;
            } 
            this.front.ahead = null;
            poppedNode.behind = null;
            
            this.size--;

            if(!this.size ) {
                this.front = null;
                this.back = null;
            }
            return poppedNode;
        }
        return -1;
    }

    popBack() {
        if(this.size) {
            this.size--;
        }
    }
 
    display() {
        if (!this.back){
            console.log("Stack is empty.");
        } else {
            let walker  =this.back;
            let displayString = "(Size: " + this.size + "): ";

            while(walker.ahead) {
                displayString += walker.value + " -> ";
                walker = walker.ahead;
            }
            console.log(displayString + walker.value);
        }
    }
}

function main() {
    q = new Queue();
    q.display();

    let counter = 1;
    while(true) {
        console.log(counter++)
        q.push(1);
    }

    q.push(24);
    q.push(48);
    q.push(0);

    q.display();

    let x = q.pop();
    console.log(x)
    q.pop();
    q.pop();

    q.display();

    // console.log(stack);
}

main();
