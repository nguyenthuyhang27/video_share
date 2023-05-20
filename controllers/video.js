import Video from "../models/Video.js";

export const update = async (req, res, next) => {
  try {
    const updatedVideo = await Video.findOne();
    await Video.findOneAndUpdate(updatedVideo._id, req.body);
    return res.status(200).json({ message: "Update video successfully" });
  } catch (error) {
    next(error);
  }
};

export const get = async (req, res, next) => {
  try {
    const video = await Video.findOne();
    return res
      .status(200)
      .json({ message: "Get video successfully", data: video });
  } catch (error) {
    next(error);
  }
};
