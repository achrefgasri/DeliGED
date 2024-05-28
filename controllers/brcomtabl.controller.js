// add Brcomtable
const addBrcomtable = async (req, res) => {
  try {
    const newBrcomtable = req.body;

    // create new document
    const BrcomtableToAdd = new Product(newBrcomtable);
    await BrcomtableToAdd.save();
    res.status(200).send({ msg: "Brcomtable added succ .....", BrcomtableToAdd });
  } catch (error) {
    res.status(400).send({ msg: " Can not add new Brcomtable !!! ", error });
  }
};
// get all Brcomtable
const getBrcomtables = async (req, res) => {
  try {
    const listBrcomtables = await Brcomtable.find();
    res
      .status(200)
      .send({ msg: "This is the list of brcomtables.....", listBrcomtables });
  } catch (error) {
    res.status(400).send({ msg: " Can not get all  brcomtables !!! ", error });
  }
};
// delete Brcomtable
const deleteBrcomtable = async (req, res) => {
  try {
    const brcomtableId = req.params.id;
    await Brcomtable.deleteOne({ _id: brcomtableId });
    res.status(200).send({ msg: "Brcomtable deleted succ ....." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: " Can not delete  brcomtable with this id !!! ", error });
  }
};
// get one Brcomtable
const getBrcomtable = async (req, res) => {
  try {
    const { _id } = req.params;
    const brcomtableToFind = await Brcomtable.findOne({ _id });

    res.status(200).send({ msg: "I find  the brcomtable.....", brcomtableToFind });
  } catch (error) {
    res
      .status(400)
      .send({ msg: " Can not get brcomtable with this id !!! ", error });
  }
};
// update Brcomtable
const updateBrcomtable = async (req, res) => {
  try {
    const { _id } = req.params;
    const newBrcomtable = req.body;
    let result = await Brcomtable.updateOne({ _id }, { $set: { ...newBrcomtable } });
    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: " Brcomtable already updated  !!! " });
    }
    res.status(200).send({ msg: " Brcomtable updated succ ..... " });
  } catch (error) {
    res
      .status(400)
      .send({ msg: " Can not update Brcomtable with this id !!! ", error });
  }
};

module.exports = controllers = {
  addBrcomtable,
  getBrcomtables,
  deleteBrcomtable,
  getBrcomtable,
  updateBrcomtable,
};
