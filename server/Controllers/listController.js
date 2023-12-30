import { List } from "../Schemas/listModel.js";
export const getList = async (req, res, next) => {
  try {
    const list = await List.find();
    if (!list) {
      return res.status(404).json({
        status: "fail",
        message: "Nepodařilo se načíst z databáze",
      });
    }
    return res.status(200).json({
      status: "success",
      list: list,
    });
  } catch (error) {
    return res.status(500).json({
      status: "success",
      message: error.message,
    });
  }
};

export const postList = async (req, res, next) => {
  try {
    const { name } = req.body;
    const list = await List.create({ name: name });
    if (!list) {
      return res.status(404).json({
        status: "fail",
        message: "Nepodařilo se načíst z databáze",
      });
    }
    return res.status(200).json({
      status: "success",
      list: list,
    });
  } catch (error) {
    return res.status(500).json({
      status: "success",
      message: error.message,
    });
  }
};
