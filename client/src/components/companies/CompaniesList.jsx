import React, { useState } from "react";
import { Container, Grid, Box, TextField, Divider } from "@mui/material";
import Folder from "./Folder";

export default function CompaniesList({ companies }) {
  const allCompanies = [...companies];
  const filteredTypeCompanies = allCompanies.map((company) => {
    return company.select;
  });
  const uniqueResult = [...new Set(filteredTypeCompanies)];
  //
  const [filter, setFilter] = useState("");
  const [filterCompanies, setFilterCompanies] = useState(uniqueResult);
  const filterChangeHandler = (e) => {
    const inputValue = e.target.value;
    setFilter(inputValue);
    const filtered = uniqueResult.filter((item) => {
      return item.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilterCompanies(filtered);
  };

  return (
    <>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={2}
        >
          <TextField
            label="hledat firmu"
            size="small"
            variant="standard"
            value={filter}
            onChange={filterChangeHandler}
          />
        </Box>
        <Divider />

        <Grid container gap={2} m={2}>
          {filterCompanies.map((company, index) => {
            return <Folder key={index} name={company} />;
          })}
        </Grid>
      </Container>
    </>
  );
}
