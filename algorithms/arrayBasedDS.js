class Person {
  constructor() {
    this.name;
    this.age;
    this.height;
  }
}

class ArrayQueue {
  // circular array list
  constructor() {
    this.a = []; // array
    this.n = 0; // size
    this.j = 0; // start position
  } // (j + n - 1 ) % length
  // search O(n)   O(n/2)
  // insert O(1)
  // space O(n).. O(2n)
  // delete O(1)

  resize() {
    let size = this.n;

    if (size == 0) {
      size = 1;
    }

    for (let i = 0; i < size; i++) {
      this.a.push(null);
    }

    if (this.j != 0) {
      // console.log("resizing")
      let swap = null;
      for (let i = 0; i < size; i++) {
        swap = this.a[i];
        this.a[i] = this.a[this.j];
        this.a[this.j] = swap;
      }
      this.j = 0;
    }
  }

  push(value) {
    if (this.n == this.a.length) {
      this.resize();
    }
    this.a[(this.j + this.n) % this.a.length] = value;
    this.n++;
  }

  pop() {
    let poppedValue = this.a[this.j];
    this.a[this.j] = null;
    this.j = (this.j + 1) % this.a.length;
    this.n--;
    return poppedValue;
  }

  display() {
    let displayString =
      "n: " + this.n + ", a.length" + this.a.length + ", j: " + this.j + "\n[";
    for (let i = 0; i < this.n - 1; i++) {
      displayString += this.a[(i + this.j) % this.a.length] + ", ";
    }
    console.log(
      displayString + this.a[(this.j + this.n - 1) % this.a.length] + "]\n"
    );
  }
}

class ArrayBST {
  // binary search tree  4,
  //(i + 1)* 2 = right child = 2i + 2
  //(i + 1)* 2 -1 = 2i + 1 = left chld
  // OlogN search / insert / delete
  // inorder traversal   dfs  depth first search
  // space O(n)... O(2n)

  constructor() {
    this.a = [];
    this.n = 0;
  }

  resize() {
    let size = this.n;

    if (size == 0) {
      size = 1;
    }

    for (let i = 0; i < this.n; i++) {
      this.a.push(null);
    }
  }

  right(i) {
    return 2 * i + 2;
  }

  left(i) {
    return 2 * i + 1;
  }

  insert(value) {
    if (this.a.length == this.n) {
      this.resize();
    }

    let walker = this.a[0];
    let i = 0;

    if (!this.a[i]) {
      this.a[i] = value;
    } else {
      while (this.a[i]) {
        if (value < this.a[i]) {
          i = this.left(i);
        } else {
          i = this.right(i);
        }
        if (i > this.a.length) {
          this.resize();
        }
      }
      this.a[i] = value;
    }
    this.n++;
  }

  search() {}

  inOrderDisplay(i = 0) {
    if (i < this.a.length && this.a[i]) {
      this.inOrderDisplay(this.left(i));
      console.log(this.a[i]);
      this.inOrderDisplay(this.right(i));
    }
    if (i == 0) {
      console.log("n: " + this.n);
      console.log("Length of a: " + this.a.length);
    }
  }

  preOrderDisplay(i = 0) {
    if (i == 0) {
      console.log("\ninOrderDisplay");
    }
    if (i < this.a.length && this.a[i]) {
      console.log(this.a[i]);
      this.preOrderDisplay(this.left(i));
      this.preOrderDisplay(this.right(i));
    }
    if (i == 0) {
      console.log("n: " + this.n);
      console.log("Length of a: " + this.a.length);
    }
  }

  postOrderDisplay(i = 0) {
    if (i < this.a.length && this.a[i]) {
      this.postOrderDisplay(this.right(i));
      this.postOrderDisplay(this.left(i));
      console.log(this.a[i]);
    }
    if (i == 0) {
      console.log("n: " + this.n);
      console.log("Length of a: " + this.a.length);
    }
  }
  // breadthFirstSearch  bfs
}
class ArrayX {}

function testBST() {
  tree = new ArrayBST();

  tree.inOrderDisplay();
  console.log(tree.a);
  console.log(tree.n);
  // console.log(tree.a.length);

  tree.insert(4);
  tree.insert(2);

  // console.log(tree.a);
  // console.log(tree.n);
  // console.log(tree.a.length);

  tree.insert(1);

  // console.log(tree.a);
  // console.log(tree.n);
  // console.log(tree.a.length);

  tree.insert(6);

  // console.log(tree.a);
  // console.log(tree.n);
  // console.log(tree.a.length);

  tree.insert(7);

  // console.log(tree.a);
  // console.log(tree.n);
  // console.log(tree.a.length);

  tree.insert(5);

  // console.log(tree.a);
  // console.log(tree.n);
  // console.log(tree.a.length);
  console.log("===========");

  console.log(tree.a);
  // tree.insert(3);
  console.log("===========");
  tree.inOrderDisplay();
  console.log("===========");
  console.log("preOrderDisplay");
  tree.preOrderDisplay();
}

class ArrayStack {
  // FILO LIFO
  constructor() {
    this.a = [];
    this.n = 0;
    this.overflowLimit = 1024;
  }

  resize() {
    if (this.n < this.overflowLimit) {
      let size = this.n;

      if (size == 0) {
        size = 1;
      }

      for (let i = 0; i < this.n; i++) {
        this.a.push(null);
      }
    } else {
      console.log("Stack is going to overflow.");
    }
  }

  push(value) {
    if (this.n == this.overflowLimit) {
      console.log("Stack cannot push in " + value + ", else overflow");
    } else if (this.n == this.a.length && this.n <= this.overflowLimit) {
      this.resize();
    }
    this.a[this.n++] = value;
  }
  pop() {
    let poppedValue = null;
    if (this.n) {
      poppedValue = this.a[this.n];
      this.a[this.n--] = null;
    }
    return poppedValue;
  }

  display() {
    let displayString = "Stack is empty";
    if (this.n) {
      displayString = "[";
      for (let i = 0; i < this.n; i++) {
        displayString += this.a[i] + ", ";
      }
      displayString += this.a[this.n - 1] + "]";
    }

    console.log(displayString);
  }
}

function testStack() {
  console.log("testStack");
  stack = new ArrayStack();

  stack.display();
  stack.push(24);
  stack.push(12);

  stack.display();

  for (let i = 1; i <= 1025; i++) {
    stack.push(i);
    // if (i % 2 == 0) {
    //   console.log("popped: " + stack.pop());
    // }
  }
  stack.display();
}

function testQ() {
  queue = new ArrayQueue();
  queue.push(12);
  queue.push(20);
  queue.push(48);
  queue.push(24);
  // console.log(queue.a);
  queue.display();
  console.log(queue.a, "\n");

  console.log("popping ", queue.pop(), "\n");

  queue.display();
  console.log(queue.a, "\n");

  queue.push(50);
  queue.display();
  console.log("popping ", queue.pop(), "\n");
  console.log("popping ", queue.pop(), "\n");
  console.log(queue.a, "\n");
  queue.push(100);
  queue.push(700);
  queue.push(8100);
  queue.push(900);
  queue.display();
  console.log(queue.a, "\n");
}

function maximizeLongProfit(a) {
  let result = 0;
  if (a.length >= 5) {


  }

  return result;
}

function maximizeShortProfit(a) {
    const start = 1000;
    let bankroll = start;
    let positions = 0;
    const fee = 10;

    if(a.length == 5) {

        for(let i = 0; i < a.length; i ++) {
            if(a[i] != 0) {
                let currentPrice = a[i];
                if(positions) {

                } 
                if(currentPrice - fee > a[i+1]) {
                    // sell(Math.floor(bankroll / currentPrice), currentPrice);
                    positions -= Math.floor(bankroll / currentPrice)
                    bankroll += Math.floor(bankroll / currentPrice) * currentPrice;
                    bankroll -= 10;
                } else if (currentPrice > a[i+1]) {
                    bankroll += Math.floor(bankroll / currentPrice) * currentPrice;

                }



            }
        }

    }

    return start - bankroll;
    function sell(count, price) {
        positions = positions - count;
        bankroll = bankroll + (count * price);
    }
    function buy(count, price) {
        
    }
}

function maximizeTotalProfit(a) {}

function main() {
  console.log("Hello World");

  // You can only trade if you have a full week of trading data
  // You can only buy or sell at most 1 share at a time
  // You do multiple transactions in a day
  // You can start with $1000
  // You cannot transact on worthless equities
  // You can only buy in whole share increments
  // You can only hold long positions( you want the stock to go up)
  
  // You can only hold short positions( you want the stock to go down)
    // Borrowing Fee of $10 per day regardless of how long the position is open, unless you don't have any position
    // Commission Fees: $5 per transaction open or close
  console.log(maximizeLongProfit([]));
  console.log(maximizeLongProfit([0, 0, 0, 0]));
  console.log(maximizeLongProfit([0, 0, 0, 0, 0]));
  console.log(maximizeLongProfit([100, 100, 100, 100, 100]));
  console.log(maximizeLongProfit([1, 100, 1, 100, 1]));
  console.log(maximizeLongProfit([24, 12, 48, 100, 72]));

  /*
    maximizeTotalProfit([]);
    maximizeTotalProfit([0,0,0,0]);
    maximizeTotalProfit([0,0,0,0,0]);
    maximizeTotalProfit([100,100,100,100,100]);
    maximizeTotalProfit([1,100,1,100,1]);
    maximizeTotalProfit([24, 12, 48, 100, 72]);

*/
  /*
   testStack();
    
*/
}

main();
