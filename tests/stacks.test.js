const algorithms = require('../index').Algorithms;
const stacks = require('../index').Stacks;

var valuesMaker = (cb) => {
  // fill empty array with random number of random values
  let values = [];
  let randomLength = Math.round(Math.random()*100);

  for(let i = 0; i < randomLength; i++){
    values.push(Math.round(Math.random()*100));
    if(i === randomLength-1){
      return cb(values);
    }
  }
};

// Stack via Algorithms class
describe('Algorithms Stack instances', () => {
  var stack;
  var currentVals;
  beforeEach(() => {
    valuesMaker((values) => {
      // note: this implicitly tests the push method
      currentVals = values;
      stack = new algorithms.Stack();
      currentVals.forEach((val) => {
        return stack.push(val);
      });
    });
  });

  test('Test Stack instance peek method.', () => {
    expect(stack.peek()).toBe(currentVals[currentVals.length-1]);
  });

  test('Test Stack instance isEmpty method.', () => {
    expect(stack.isEmpty()).toBe(false);
  });

  test('Test Stack instance size method.', () => {
    expect(stack.size()).toBe(currentVals.length);
  });

  test('Test Stack instance print method.', () => {
    // this is just a console log
    stack.print();
    console.log('Jest test print method:', currentVals.toString());
  });

  // because this modifies the array do it penultimately
  test('Test Stack instance pop method.', () => {
    expect(stack.pop()).toBe(currentVals.pop());
  });

  test('Test Stack instance clear method.', () => {
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});

// ES6 Stack via Algorithms class
describe('ES6 Stack Algorithms instances', () => {
  var stack;
  var currentVals;
  beforeEach(() => {
    valuesMaker((values) => {
      // note: this implicitly tests the push method
      currentVals = values;
      stack = new algorithms.ESStack();
      currentVals.forEach((val) => {
        return stack.push(val);
      });
    });
  });

  test('Test ES6 Stack instance peek method.', () => {
    expect(stack.peek()).toBe(currentVals[currentVals.length-1]);
  });

  test('Test ES6 Stack instance isEmpty method.', () => {
    expect(stack.isEmpty()).toBe(false);
  });

  test('Test ES6 Stack instance size method.', () => {
    expect(stack.size()).toBe(currentVals.length);
  });

  test('Test ES6 Stack instance print method.', () => {
    // this is just a console log
    stack.print();
    console.log('Jest test print method:', currentVals.toString());
  });

  // because this modifies the array do it penultimately
  test('Test ES6 Stack instance pop method.', () => {
    expect(stack.pop()).toBe(currentVals.pop());
  });

  test('Test ES6 Stack instance clear method.', () => {
    stack.clear();
    expect(stack.items).toEqual([]);
  });
});

// Stack via Stacks class
describe('Stack Stacks instances', () => {
  var stack;
  var currentVals;
  beforeEach(() => {
    valuesMaker((values) => {
      // note: this implicitly tests the push method
      currentVals = values;
      stack = new stacks.Stack();
      currentVals.forEach((val) => {
        return stack.push(val);
      });
    });
  });

  test('Test Stack instance peek method.', () => {
    expect(stack.peek()).toBe(currentVals[currentVals.length-1]);
  });

  test('Test Stack instance isEmpty method.', () => {
    expect(stack.isEmpty()).toBe(false);
  });

  test('Test Stack instance size method.', () => {
    expect(stack.size()).toBe(currentVals.length);
  });

  test('Test Stack instance print method.', () => {
    // this is just a console log
    stack.print();
    console.log('Jest test print method:', currentVals.toString());
  });

  // because this modifies the array do it penultimately
  test('Test Stack instance pop method.', () => {
    expect(stack.pop()).toBe(currentVals.pop());
  });

  test('Test Stack instance clear method.', () => {
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});

// ES6 Stack via Stacks class
describe('ES6 Stack Stacks instances', () => {
  var stack;
  var currentVals;
  beforeEach(() => {
    valuesMaker((values) => {
      // note: this implicitly tests the push method
      currentVals = values;
      stack = new stacks.ESStack();
      currentVals.forEach((val) => {
        return stack.push(val);
      });
    });
  });

  test('Test ES6 Stack instance peek method.', () => {
    expect(stack.peek()).toBe(currentVals[currentVals.length-1]);
  });

  test('Test ES6 Stack instance isEmpty method.', () => {
    expect(stack.isEmpty()).toBe(false);
  });

  test('Test ES6 Stack instance size method.', () => {
    expect(stack.size()).toBe(currentVals.length);
  });

  test('Test ES6 Stack instance print method.', () => {
    // this is just a console log
    stack.print();
    console.log('Jest test print method:', currentVals.toString());
  });

  // because this modifies the array do it penultimately
  test('Test ES6 Stack instance pop method.', () => {
    expect(stack.pop()).toBe(currentVals.pop());
  });

  test('Test ES6 Stack instance clear method.', () => {
    stack.clear();
    expect(stack.items).toEqual([]);
  });
});
