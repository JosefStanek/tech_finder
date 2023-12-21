import { MuiFileInput } from "mui-file-input";
import { Controller, useFormContext } from "react-hook-form";

const FileInput = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="image"
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <MuiFileInput label={"vyber obrázek"} variant="standard" {...field} />
      )}
    />
  );
};

export default FileInput;
