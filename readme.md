js-data-structures
=========================

This is an NPM package of example code from [Learning JavaScript Data Structures and Algorithms, 2nd Ed. by Loiane Groner](https://www.packtpub.com/web-development/learning-javascript-data-structures-and-algorithms-second-edition)

Because the package is still in it's infancy, I have not made it available publicly via NPM, but you can clone the repo and use it locally (see "Running the things" below).

The Project
------------

All the things:
- Index contains an ES6 class which on instantiation has methods which are the examples from Groner's book.
- The idea is that as I go through the book I will update this class with new methods.
- I intend to create additional classes to organize the examples so they can be imported as smaller, more organized objects.
- Each method that I add will also have tests written using Jest.
- NOTE: I do make minor changes to the examples Groner provides.
- NOTE: I refer to Groner's 2nd edition which makes use of some ES6 and ES7.

Running the things:
- tests:
```
npm test
```
- import the module after cloning the repo:  

```
cd <repo root>
npm link
cd <your project to import into>
npm link js-data-structures
```
