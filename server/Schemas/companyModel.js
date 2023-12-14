import mongoose from "mongoose";

const Schema = mongoose.Schema;
const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    employeeCount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
