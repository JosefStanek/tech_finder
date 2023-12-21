import React from "react";
import { Container, Grid, Box, TextField, Divider } from "@mui/material";
import Folder from "./Folder";

export default function CompaniesList({ companies }) {
  const allCompanies = [...companies];
  const filteredTypeCompanies = allCompanies.map((company) => {
    return company.name;
  });
  const uniqueResult = [...new Set(filteredTypeCompanies)];

  return (
    <>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={2}
        >
          <TextField label="hledat firmu" size="small" variant="standard" />
        </Box>
        <Divider />
        <Grid container gap={2} m={2}>
          {uniqueResult.map((company, index) => {
            return <Folder key={index} name={company} />;
          })}
        </Grid>
      </Container>
    </>
  );
}
