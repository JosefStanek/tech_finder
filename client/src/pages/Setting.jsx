import {
  Card,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import React from "react";

export default function Setting() {
  return (
    <Container>
      <Card>
        <Typography variant="h6" textAlign={"center"}>
          Nastavení
        </Typography>
        <Grid container gap={2}>
          <Grid item xs={5}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TextField label={"přidat firmu"} />
              <Button variant="contained">přidat</Button>
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TextField label={"přidat firmu"} />
              <Button variant="contained">přidat</Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
