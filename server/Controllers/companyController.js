import { Company } from "../Schemas/companyModel.js";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

export const postCompany = async (req, res, next) => {
  try {
    const destination = req.file?.destination || "";
    const filename = req.file?.filename || "";
    const formData = JSON.parse(req.body.data);
    const company = { image: { destination, filename }, ...formData };
    if (
      !company.name ||
      !company.creator ||
      !company.select ||
      !company.street
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Prosím vyplň všechna povinná pole",
      });
    }

    const data = await Company.create(company);
    res.status(200).json({
      message: "success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deleteCompany = async (req, res) => {
  const id = req.params.id;
  try {
    const company = await Company.findOneAndDelete(id);
    if (!company) {
      return res.status(404).json({
        status: "fail",
        message: "Společnost nebyla nalezena",
      });
    }
    if (company) {
      fs.unlink(`${rootDir}/Images/${company.image.filename}`, (err) => {
        console.log(err);
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Smazání problěhlo úspěšně",
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
