import { Box, Button, Card, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit((data) => console.log(data))}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card sx={{ maxWidth: "500px", p: "2rem" }} elevation={10}>
        <Stack spacing={3}>
          <TextField
            label="název"
            {...register("name", { required: "název je povinné pole" })}
            error={!!errors.name?.message}
            helperText={errors.name?.message}
            variant="standard"
          />

          <TextField
            label="ulice"
            variant="standard"
            {...register("street", { required: "název je povinné pole" })}
            error={!!errors.street?.message}
            helperText={errors.street?.message}
          />
          <Stack direction={"row"} justifyContent={"center"} spacing={2}>
            <TextField
              label={"orientační číslo"}
              type="number"
              variant="standard"
            />
            <TextField
              label={"číslo popisné"}
              type="number"
              variant="standard"
            />
          </Stack>
          <TextField label={"poznámka"} variant="standard" />
          <Button type="submit" variant="contained">
            přidat
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
