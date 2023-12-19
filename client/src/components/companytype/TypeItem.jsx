import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Button, Icon, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
export default function TypeItem({ address, id }) {
  return (
    <Grid item xs={3} sm={2} alignSelf={"start"}>
      <Button
        sx={{ display: "flex", flexDirection: "column" }}
        component={Link}
        to={`/company/${id}`}
      >
        <Icon sx={{ height: "100%" }}>
          <InsertDriveFileIcon />
        </Icon>
        <Typography variant="body2" color={"secondary"}>
          {address}
        </Typography>
      </Button>
    </Grid>
  );
}
