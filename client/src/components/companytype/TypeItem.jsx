import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Button, Icon, Typography, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
export default function TypeItem({ name, id }) {
  const { id: companyId } = useParams();
  return (
    <Grid item xs={5} sm={3} md={4} alignSelf={"start"}>
      <Button
        sx={{ display: "flex", flexDirection: "column" }}
        component={Link}
        to={`/companies/type/${companyId}/company/${id}`}
      >
        <Icon sx={{ height: "100%" }}>
          <InsertDriveFileIcon />
        </Icon>
        <Typography variant="body2" color={"secondary"} fontSize={"11px"}>
          {name}
        </Typography>
      </Button>
    </Grid>
  );
}
