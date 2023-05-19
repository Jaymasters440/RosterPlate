const { Schema, model } = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// const to create thoughtText


// const to created dreatedAt date w/ current timestamp as default AND use a getter method to format the timestamp on query

// const for "username" who crated thought in a string with a "required" attribute

// const for "reactions" with array of nested documents created within the reactionSchema

// Schema settings  create a virtual called reactionCount that retrieves the legth of the thoughts's "reactions" aray field

