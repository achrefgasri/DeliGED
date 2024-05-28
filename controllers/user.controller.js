// get all users
  const getUsers = async (req, res) => {
    try {
      const listUsers = await User.find();
      res
        .status(200)
        .send({ msg: "This is the list of users.....", listUsers });
    } catch (error) {
      res.status(400).send({ msg: " Can not get all  users !!! ", error });
    }
  };
  // delete user
  const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      await User.deleteOne({ _id: userId });
      res.status(200).send({ msg: "User deleted succ ....." });
    } catch (error) {
      res
        .status(400)
        .send({ msg: " Can not delete  user with this id !!! ", error });
    }
  };
  // get one user
  const getUser = async (req, res) => {
    try {
      const { _id } = req.params;
      const UserToFind = await User.findOne({ _id });
  
      res.status(200).send({ msg: "I find  the user.....", UserToFind });
    } catch (error) {
      res
        .status(400)
        .send({ msg: " Can not get user with this id !!! ", error });
    }
  };
  // update user
  const updateUser = async (req, res) => {
    try {
      const { _id } = req.params;
      const newUser = req.body;
      let result = await Product.updateOne({ _id }, { $set: { ...newUser } });
      if (result.modifiedCount === 0) {
        return res.status(400).send({ msg: " User already updated  !!! " });
      }
      res.status(200).send({ msg: " User updated succ ..... " });
    } catch (error) {
      res
        .status(400)
        .send({ msg: " Can not update user with this id !!! ", error });
    }
  };
  
  module.exports = controllers = {
    getUsers,
    deleteUser,
    getUser,
    updateUser,
  };