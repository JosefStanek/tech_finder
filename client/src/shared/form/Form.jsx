import {
  Box,
  Button,
  Card,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import SelectCompany from "./SelectCompany";
import FileInput from "./FileInput";
export default function Form() {
  const methods = useForm({
    defaultValues: {
      name: "",
      street: "",
      orientationNumber: "",
      zipCode: "",
      select: "",
      note: "",
      image: null,
    },
  });
  const { errors } = methods.formState;
  return (
    <FormProvider {...methods}>
      <Box
        component={"form"}
        onSubmit={methods.handleSubmit((data) => console.log(data))}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ maxWidth: "500px", p: "2rem" }} elevation={10}>
          <Stack spacing={3}>
            <SelectCompany />
            <TextField
              label="název"
              {...methods.register("name", {
                required: "název je povinné pole",
              })}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
              variant="standard"
            />

            <TextField
              label="ulice"
              variant="standard"
              {...methods.register("street", {
                required: "název je povinné pole",
              })}
              error={!!errors.street?.message}
              helperText={errors.street?.message}
            />
            <Stack direction={"row"} justifyContent={"center"} spacing={2}>
              <TextField
                label={"orientační číslo"}
                type="number"
                variant="standard"
                {...methods.register("orientationNumber")}
              />
              <TextField
                label={"číslo popisné"}
                type="number"
                variant="standard"
                {...methods.register("zipCode")}
              />
            </Stack>
            <TextField
              label={"poznámka"}
              variant="standard"
              {...methods.register("note")}
            />
            <FileInput />
            <Button type="submit" variant="contained">
              přidat
            </Button>
          </Stack>
        </Card>
      </Box>
    </FormProvider>
  );
}
