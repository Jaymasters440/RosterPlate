const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res){
    try {
        const user = await User.findByIdAndUpdate( req.params.userId, req.body )
        
        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
          res.status(200).json(user)

    
    }   catch (err) {
        res.status(500).json(err);
    }
  },
  async deleteUser(req, res){
    try {
        const user = await User.findByIdAndRemove( req.params.userId, )
        
        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
          res.status(200).json(user)

    
    }   catch (err) {
        res.status(500).json(err);
    }
},

async createFriend(req, res) {
  try {
    const user = await User.findByIdAndUpdate( req.params.userId, {$push:{friends:req.bodyfriendId}} )
    
    if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json(user)


}   catch (err) {
    res.status(500).json(err);
}  

},

async deleteFriend(req, res) {
  try {
    const user = await User.findByIdAndUpdate( req.params.userId, {$pull:{friends:req.bodyfriendId}} )
    
    if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json(user)


}   catch (err) {
    res.status(500).json(err);
}  

},



};
