import { Grid, Stack } from "@mui/material";
import TypeItem from "./TypeItem";
export default function TypeListItems({ typeCompanies }) {
  console.log(typeCompanies);
  return (
    <Grid container m={1}>
      {typeCompanies.map((item) => {
        return <TypeItem key={item._id} name={item.name} id={item._id} />;
      })}
    </Grid>
  );
}
