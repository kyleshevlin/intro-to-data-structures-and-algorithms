

/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const node = new Node(value);
        this.length ++;
        if(!this.head) {
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
    }

    pop() {
        return this.delete(this.length - 1)
    }

    _find(value, test = this._test) {
        let current = this.head
        let i = 0
        while (current) {
            if(test(value, current.value, i, current)) {
                return current
            }
            current = current.next
            i++
        }
        return null
    }

    _test(a, b) {
        return a === b
    }

    get(index) {
        const node = this._find(index, this._testIndex)
        if(!node) return null;
        return node.value
    }

    delete(index) {
        if(index === 0) {
            const head = this.head
            if(head) {
                this.head = head.next
            } else {
                this.head = this.tail = null
            }
            this.length --;
            return head.value
        } else {
            const node = this._find(index-1, this._testIndex)
            const excise = node.next
            if(!excise) return null
            node.next = excise.next
            if(node.next && !node.next.next) {
                this.tail = node.next
            }
            this.length--;
            return excise.value

        }
    }

    _testIndex(search, __, i) {
        return search === i
    }

}



// unit tests
// do not modify the below code
describe('LinkedList', function() {
    const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
    const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
    let list;
    
    beforeEach( () => {
      list = new LinkedList();
    })
    
    it('constructor', () => {
      expect(list).toEqual(jasmine.any(LinkedList));
    });
    
    it('push', () => {
      abcRange(26).map( character => list.push(character) );
      expect(list.length).toEqual(26);
    });
    
    it('pop', () => {
      abcRange(13).map( character => list.push(character) );
      expect(list.length).toEqual(13);
      range(10).map( () => list.pop() );
      expect(list.length).toEqual(3);
      expect(list.pop()).toEqual('c');
    });
    
    it('get', () => {
      list.push('first');
      expect(list.get(0)).toEqual('first');
      list.push('second');
      expect(list.get(1)).toEqual('second');
      expect(list.get(0)).toEqual('first');
      abcRange(26).map( character => list.push(character));
      expect(list.get(27)).toEqual('z');
      expect(list.get(0)).toEqual('first');
      expect(list.get(9)).toEqual('h');
      list.pop();
      expect(list.get(list.length-1)).toEqual('y');
    });
    
    it('delete', () => {
      abcRange(26).map( character => list.push(character) );
      list.delete(13);
      expect(list.length).toEqual(25);
      expect(list.get(12)).toEqual('m');
      expect(list.get(13)).toEqual('o');
      list.delete(0);
      expect(list.length).toEqual(24);
      expect(list.get(0)).toEqual('b');
    });
    
  });