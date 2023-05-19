import User from "../models/User.js";
import geoip from "geoip-lite";

export const createUser = async (req, res, next) => {
  try {
    const existUser = await User.findOne({ username: req.body.username });
    const ip = req.header("x-forwarded-for") || req.socket.remoteAddress;
    const geo = await geoip.lookup(ip);

    if (existUser) {
      const updatedUser = await User.findByIdAndUpdate(
        existUser._id,
        {
          ...req.body,
          ip,
          country: geo?.country,
          city: geo?.city,
          timeZone: geo?.timezone,
        },
        { new: true }
      );
      const { password, ...user } = updatedUser._doc;
      return res
        .status(200)
        .json({ message: "Update user successfully", user });
    } else {
      const newUser = await User.create({
        ...req.body,
        ip,
        country: geo?.country,
        city: geo?.city,
        timeZone: geo?.timezone,
      });
      const { password, ...user } = newUser._doc;
      return res
        .status(200)
        .json({ message: "Create user successfully", user });
    }
  } catch (error) {
    next(error);
  }
};

export const listUser = async (req, res, next) => {
  try {
    const listUsers = await User.find({ isAdmin: false });
    return res
      .status(200)
      .json({ message: "Get list user successfully", data: listUsers });
  } catch (error) {
    next(error);
  }
};
