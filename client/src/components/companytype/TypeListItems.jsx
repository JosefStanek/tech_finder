import { Grid } from "@mui/material";
import TypeItem from "./TypeItem";
export default function TypeListItems({ typeCompanies }) {
  return (
    <Grid container display={"flex"} gap={2} m={2}>
      {typeCompanies.map((item) => {
        return (
          <TypeItem
            key={item._id}
            address={item.address}
            id={item._id}
          ></TypeItem>
        );
      })}
    </Grid>
  );
}
