import {
  Card,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import React from "react";
import RegiterForm from "../components/setting/RegiterForm";

export default function Setting() {
  return (
    <Container>
      <Card>
        <Typography
          variant="h6"
          color={"primary"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          NASTAVENÍ
        </Typography>
        <Grid
          container
          gap={2}
          mt={2}
          justifyContent={"center"}
          alignItems={"center"}
          p={2}
        >
          <Grid item xs={12} sm={5}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TextField label={"přidat firmu"} />
              <Button variant="contained" size="small">
                přidat
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TextField label={"smazat firmu"} />
              <Button variant="contained" color="error" size="small">
                odebrat
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>
          <RegiterForm />
        </Grid>
      </Card>
    </Container>
  );
}
