import { Company } from "../Schemas/companyModel.js";
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
