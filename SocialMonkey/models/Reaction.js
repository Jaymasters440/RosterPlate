// Reaction Schema only
    // reactionId 
        // use Mongoose's ObjectId data type
        //Default value set to new ObjectID

    // reaction Body
        //string
        //required
        //280 character maximum

    // username
        //string
        //required

    // createdAt
        // Date
        // default value to current timestamp
        // use a getter method to format the timestamp on query