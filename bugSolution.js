```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } });
//or if the field needs to be initialized
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 }, $setOnInsert: {field: 0} });
```