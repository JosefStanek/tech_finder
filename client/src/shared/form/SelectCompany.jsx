import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const SelectCompany = ({ list }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel
        id="select-label"
        sx={{ color: errors.select ? " #d32f2f" : "" }}
      >
        vyber společnost
      </InputLabel>
      <Controller
        name="select"
        control={control}
        rules={{ required: true, message: "error" }}
        defaultValue=""
        render={({ field }) => (
          <Select
            sx={{ borderBottom: errors.select ? "1px solid red" : "" }}
            {...field}
            labelId="select-label"
            id="select"
            variant="standard"
          >
            {list.map((item) => {
              return (
                <MenuItem key={item._id} value={item.name}>
                  {item.name.toUpperCase()}
                </MenuItem>
              );
            })}
          </Select>
        )}
      />
      {errors.select && (
        <Typography variant="body2" fontSize={"0.75rem"} color={"error"}>
          pole nesmí být prázdné{" "}
        </Typography>
      )}
    </FormControl>
  );
};

export default SelectCompany;
