import mongoose from "mongoose";

const Schema = mongoose.Schema;
const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const List = mongoose.model("List", listSchema);
