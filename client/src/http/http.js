import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
export const client = new QueryClient();
/* company */

// get company
export const getCompanies = async () => {
  try {
    // const res = await axios.get("http://localhost:3000/company");
    const res = await axios.get("http://localhost:3000/company");

    if (!res) {
      throw new Error("Nepodařilo se načíst");
    }

    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

// get companyType (alza)
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

// get company/type/id
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

// post company

export const postCompany = async (formData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  try {
    const res = await axios.post(
      "http://localhost:3000/company",
      formData,
      config
    );
    console.log(res);
    if (!res.data) {
      throw Error("data nejsou");
    }

    return res.data;
  } catch (error) {
    throw Error(error.message);
  }
};

export const deleteCompany = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/company/${id}`);
    if (!res) {
      throw new Error("Nepodařilo se načíst");
    }
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

/* list */

// get list
export const getList = async () => {
  try {
    const res = await axios.get("http://localhost:3000/list");
    return res.data.list;
  } catch (error) {
    console.log(error);
  }
};

// post list
