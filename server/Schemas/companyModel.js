import mongoose from "mongoose";

const Schema = mongoose.Schema;
const companySchema = new Schema(
  {
    creator: {
      type: String,
      required: true,
    },
    image: {
      destination: {
        type: String,
      },
      filename: {
        type: String,
      },
    },
    name: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    orientationNumber: {
      type: String,
    },
    select: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
