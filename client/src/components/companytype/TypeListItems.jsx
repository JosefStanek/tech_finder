import { Grid } from "@mui/material";
import TypeItem from "./TypeItem";
export default function TypeListItems({ typeCompanies }) {
  console.log(typeCompanies);
  return (
    <Grid container display={"flex"} gap={2} m={2}>
      {typeCompanies.map((item) => {
        return <TypeItem key={item._id} name={item.name} id={item._id} />;
      })}
    </Grid>
  );
}
