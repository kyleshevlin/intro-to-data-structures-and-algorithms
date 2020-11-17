
/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/



class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(value) {
        this.data[this.length] = value
        this.length++;
    }

    delete(index) {
        const ans = this.data[index]
        this._collapseTo(index)
        return ans

    }

    pop() {
        const ans = this.data[this.length -1]
        delete this.data[this.length -1]
        this.length--;
        return ans
    }

    _collapseTo(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1]
        this.length--;
    }

}



// unit tests
// do not modify the below code
describe('ArrayList', function() {
    const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
    const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
    let list;
    
    beforeEach( () => {
      list = new ArrayList();
    })
    
    it('constructor', () => {
      expect(list).toEqual(jasmine.any(ArrayList));
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