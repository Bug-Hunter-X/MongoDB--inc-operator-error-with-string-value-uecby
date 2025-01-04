# MongoDB $inc operator error with string value
This repository demonstrates an incorrect usage of the MongoDB $inc operator and provides a solution.

## Bug Description
The $inc operator in MongoDB is used to increment a numeric field in a document.  However, attempting to increment a field with a string value results in an error.

## Bug Reproduction
The `bug.js` file contains code that attempts to increment a field with a string value using the $inc operator.

## Solution
The `bugSolution.js` file demonstrates the correct way to use the $inc operator.  Before incrementing, ensure that the field is of a numeric type.  If it's not, the field should be properly initialized to a numeric value first.