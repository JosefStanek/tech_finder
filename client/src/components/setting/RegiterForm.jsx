import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import React from "react";

const RegiterForm = () => {
  return (
    <Grid item xs={12} m={2}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        mx={"auto"}
        maxWidth={500}
      >
        <Typography
          variant="h6"
          color={"primary"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Přidat uživatele
        </Typography>

        <TextField label="email" type="email" />
        <TextField label="heslo" type="password" />
        <Button variant="contained">přidat uživatele</Button>
      </Box>
    </Grid>
  );
};

export default RegiterForm;
