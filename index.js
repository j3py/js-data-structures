const StackAlgo = require('./algorithms/stacks').Stack;
const ESStackAlgo = require('./algorithms/stacks').ESStack;


// ES6 class declarations
class Algorithms {
  constructor(){}

  get Stack() {
    return StackAlgo;
  }

  get ESStack() {
    return ESStackAlgo;
  }
};
module.exports.Algorithms = new Algorithms;


// Need to figure out a good way to extend this
// class from Algorithms. Using methods and getters
// as it stands now is too redundant.
class Stacks {
  constructor(){}

  get Stack() {
    return StackAlgo;
  }

  get ESStack() {
    return ESStackAlgo;
  }
};
module.exports.Stacks = new Stacks;
