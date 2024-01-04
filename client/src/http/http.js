import axios from "axios";
/* company */

// all companies
// export const getCompanies = async () => {
//   try {
//     const res = await axios.get("http://localhost:3000/company");

//     if (!res) {
//       throw new Error("Nepodařilo se načíst");
//     }

//     const allCompanies = [...res.data.data];
//     const filteredTypeCompanies = allCompanies.map((company) => {
//       return company.select;
//     });
//     const uniqueResult = [...new Set(filteredTypeCompanies)];
//     return uniqueResult;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

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

// get company
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
