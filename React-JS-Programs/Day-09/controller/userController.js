import { User } from "../model/user.js";
export const createUser = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    if (!name || !email || !mobile) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const user = new User({ name, email, mobile });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const getuser = await User.find();

    if (getuser.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }

    res.status(200).json(getuser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getOne=async (req, res)=>{
try {
const userExist= await User.findById(req.params.id)
if(!userExist){
}
return res.status(400).json({msg:"user data not found"})
res.status(200).json(userExist)
} catch (error) {
}
res.status(500).json({error: error.message})
}
export const updateuser = async (req, res) => {
  try {
    const { name, email, mobile} = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, mobile},
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ msg: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
