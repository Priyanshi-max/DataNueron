const User = require("../model/User");


const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!email) {
      return res.status(400).send("Email is required!");
    }
    if (!phone) {
      return res.status(400).send("Phone is required!");
    }
    if (!name) {
      return res.status(400).send("Name is required!");
    }
    const user = await User.create({ name, email, phone });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update user by id
const updateUser = async (req, res) => {
//   const _id = req.params.id;
//   try {
//     if (!mongoose.Types.ObjectId.isValid(_id)) {
//       return res.status(404).json({ message: "Invalid User Id" });
//     }
//     const user = await User.findById(_id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found!" });
//     }
//     // update the fields of user which are sent from client side
//     const { name, email, phone } = req.body;
//     user.name = name ? name : user.name;
//     user.email = email ? email : user.email;
//     user.phone = phone ? phone : user.phone;

//     const updatedUser = await user.save();
//     res.status(200).json(updatedUser);
//   } catch (e) {
//     res.status(400).json({ message: "Internal server error" });
//  }
const { id } = req.params;
console.log("get body", req.body);
console.log("get id", id);

try {
  const updatedUser = await User.findByIdAndUpdate(id, {$set: req.body});
  // const updatedUser = await User.findByIdAndUpdate(id, req.body, {new:true});
  res.send(updatedUser);
} catch (err) {
  res.status(500).json({ err: err.message });
}
};


module.exports = { getUser, createUser,  updateUser };
