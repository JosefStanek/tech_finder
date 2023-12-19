import axios from "axios";

export const getCompanies = async () => {
  try {
    const res = await axios.get("http://localhost:3000/company");

    if (!res) {
      throw new Error("Nepodařilo se načíst");
    }

    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getTypeCompanies = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/company/companytype/${id}`
    );

    if (!res) {
      throw new Error("Nepodařilo se načíst");
    }

    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCompany = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/company/${id}`);

    if (!res) {
      throw new Error("Nepodařilo se načíst");
    }

    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
};
