import {
  Box,
  Button,
  Card,
  TextField,
  InputAdornment,
  Stack,
  Grid,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function AuthForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginHandler = async (data) => {
    const { email, password } = data;
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (!res.data) {
        throw new Error("Uživatel nebyl nalezen ");
      }

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit((data) => {
        loginHandler(data);
      })}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "370px",
      }}
    >
      <Card
        elevation={4}
        sx={{
          display: "flex",
          maxWidth: "700px",
          minWidth: "360px",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.5rem",
        }}
      >
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={"row"}
          spacing={2}
          gap={2}
        >
          <Grid item xs={12} md={5}>
            <Stack
              gap={3}
              justifyContent={"center"}
              alignItems={"center"}
              p={2}
            >
              <img src="/logo.png" style={{ width: "150px" }} alt="logo" />
              <TextField
                label="email"
                {...register("email", {
                  required: "Email nesmí být prázdný",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Zadej platný email formát ",
                  },
                })}
                type="email"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              ></TextField>
              <TextField
                label="heslo"
                {...register("password", {
                  required: "Heslo nesmí být prázdné",
                })}
                type="password"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                autoComplete=""
                error={!!errors.password}
                helperText={errors.password?.message}
              ></TextField>
              <Button variant="contained" type="submit">
                přihlásit se
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{ display: { xs: "none", md: "block" } }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Divider
              orientation="vertical"
              style={{ height: "300px", width: "10px" }}
            />
          </Grid>
          <Grid item xs={5} sx={{ display: { xs: "none", md: "block" } }}>
            <Box>
              <img
                src="/login-wallpaper.svg"
                alt="login"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
