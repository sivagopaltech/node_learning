var mongoose = require("mongoose");

var User = mongoose.model("user", {
    eamil: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {
    User: User
}
