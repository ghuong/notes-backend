const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const DATABASE_NAME = "note-app";
const url = `mongodb+srv://fullstack:${password}@cluster0.gyglp.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

/**
// const note = new Note({
//   content: "HTML is easy",
//   date: new Date(),
//   important: true,
// });

// const note = new Note({
//   content: "Browser can execute only Javascript",
//   date: "2019-05-30T18:39:34.091Z",
//   important: false,
// });

// const note = new Note({
t//   content: "GET and POST are the most important methods of HTTP protocol",
//   date: "2019-05-30T19:20:14.298Z",
//   important: true,
// });

note.save().then((result) => {
  console.log("note saved!");
  mongoose.connection.close();
});
*/

Note.find({ important: true }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
