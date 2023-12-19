import React from "react";
import { Icon, Grid, Typography, Button, Tooltip } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { Link } from "react-router-dom";
export default function CompanyItem({ name }) {
  return (
    <Grid item xs={3} sm={2}>
      <Tooltip title={name}>
        <Button
          sx={{ display: "flex", flexDirection: "column" }}
          component={Link}
          to={`/company/type/${name}`}
        >
          <Icon sx={{ height: "100%" }}>
            <FolderIcon />
          </Icon>
          <Typography variant="body2" color={"secondary"}>
            {name}
          </Typography>
        </Button>
      </Tooltip>
    </Grid>
  );
}
