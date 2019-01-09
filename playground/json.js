

// var obj = {
//   name: 'Brian'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);



// //JSON String
// var personString = '{"name": "Brian", "age": 25}';
//
// //converts JSON string back to object
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body',
};
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var notesString = fs.readFileSync('notes.json');
var note = JSON.parse(notesString);
console.log(typeof note);
console.log(note.title);
