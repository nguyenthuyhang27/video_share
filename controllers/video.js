import Video from "../models/Video.js";

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Video.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: "Update video successfully" });
  } catch (error) {
    next(error);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    return res.status(200).json({ message: "Delete video successfully" });
  } catch (error) {
    next(error);
  }
};

export const get = async (req, res, next) => {
  try {
    const video = await Video.find();
    return res
      .status(200)
      .json({ message: "Get video successfully", data: video });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const newVideo = new Video(req.body);
    await newVideo.save();
    return res.status(200).json({ message: "Create video successfully" });
  } catch (error) {
    next(error);
  }
};
