import express from "express";
import { Company } from "../Schemas/companyModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, address, employeeCount } = req.body;
    if (!name || !address || !employeeCount) {
      return res.status(500).json({
        status: "fail",
        message: "Prosím vyplň všechna povinná pole",
      });
    }
    const newCompany = {
      name: name,
      address: address,
      employeeCount: employeeCount,
    };
    const company = await Company.create(newCompany);
    return res.status(201).json(company);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

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

router.delete("/:id", async (req, res) => {
  try {
    const id = req.body.id;
    const company = await Company.findOneAndDelete(id);

    if (!company) {
      return res.status(404).json({
        status: "fail",
        message: "Společnost nebyla nalezena",
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
});

export default router;
