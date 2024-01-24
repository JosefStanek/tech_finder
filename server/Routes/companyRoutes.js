import express from "express";
import { Company } from "../Schemas/companyModel.js";
import {
  postCompany,
  deleteCompany,
} from "../Controllers/companyController.js";
import upload from "../Multer/multer.js";

const router = express.Router();

router.post("/", upload.single("image"), postCompany);

router.get("/", async (req, res) => {
  try {
    const companies = await Company.find({});

    if (!companies) {
      return res.status(500).json({
        status: "fail",
        message: "Nepodařilo se načíst ze serveru",
      });
    }
    return res.status(200).json({
      status: "success",
      counts: companies.length,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

router.get("/companytype/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const companies = await Company.find({ select: id });
    if (!companies) {
      return res.status(500).json({
        status: "fail",
        message: "Nepodařilo se načíst ze serveru",
      });
    }
    return res.status(200).json({
      status: "success",
      counts: companies.length,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        status: "fail",
        message: "Společnost nebyla nalezena",
      });
    }
    return res.status(200).json({
      status: "success",
      data: company,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.name || !req.body.address || !req.body.employeeCount) {
      return res.status(400).json({
        status: "fail",
        message: "Prosím vyplň všechna povinná pole",
      });
    }
    const id = req.params.id;

    const result = await Company.findByIdAndUpdate(id, {
      name: req.body.name,
      address: req.body.adress,
      employeeCount: req.body.employeeCount,
    });

    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "Tato společnost nebyla nalezena",
      });
    }
    return res.status(200).json({
      data: "success",
      message: "Aktualizace proběhla v pořádku",
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

router.delete("/:id", deleteCompany);

export default router;
