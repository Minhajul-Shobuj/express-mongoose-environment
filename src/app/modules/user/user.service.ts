import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserInDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};
const getMe = async (email: string) => {
  const result = await User.findOne({ email: email });
  return result;
};

export const UserService = {
  createUserInDB,
  getMe,
  getAllUserFromDB,
};
