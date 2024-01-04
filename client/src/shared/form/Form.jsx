import { Box, Button, Card, Stack, TextField } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import SelectCompany from "./SelectCompany";
import FileInput from "./FileInput";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { postCompany } from "../../http/http";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
export default function Form({ list }) {
  const navigate = useNavigate();
  const { useremail } = useSelector((state) => state.user);
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
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: postCompany,
    onSuccess: () => {
      queryClient.setQueryData("companies");
      toast.success("Uložení proběhlo v pořádku");
      navigate("/");
    },
    onError: (error) => {
      toast.error(
        `Něco se pokazilo, opakujte prosím akci později. ${error.message}`
      );
    },
  });

  return (
    <FormProvider {...methods}>
      <Box
        component={"form"}
        encType="multipart/form-data"
        onSubmit={methods.handleSubmit((data) => {
          data.creator = useremail;
          const { image, ...rest } = data;
          const formData = new FormData();
          formData.append("image", image);
          formData.append("data", JSON.stringify(rest));
          mutate(formData);
        })}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ maxWidth: "500px", p: "2rem" }} elevation={10}>
          <Stack spacing={3}>
            <SelectCompany list={list} />
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
              {isPending ? "odesílám" : "přidat"}
            </Button>
          </Stack>
        </Card>
      </Box>
    </FormProvider>
  );
}
