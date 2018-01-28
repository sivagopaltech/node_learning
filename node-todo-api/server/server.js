var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

// var Todo = mongoose.model("Todo", {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({text: " ab   "
// });

// newTodo.save().then((doc) => {
//     console.log("Saved todo", doc);
// }, (e) => {
//     console.log("unable to Save todo");
// });


var User = mongoose.model("user", {
    eamil: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({eamil: "s@s.com"
});

newUser.save().then((doc) => {
    console.log("Saved user", doc);
}, (e) => {
    console.log("unable to Save user");
});