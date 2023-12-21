import { Icon, Stack, Toolbar, Typography, Box, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({}) {
  return (
    <Toolbar>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={4}>
        <Stack>
          <Typography variant="h6" color={"primary"}>
            Tech. Finder
          </Typography>
        </Stack>
        <Icon
          variant="contained"
          color={"primary"}
          sx={{ display: { sm: "block", md: "none" } }}
        >
          <MenuIcon />
        </Icon>
      </Box>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginLeft: "auto" }}
      >
        <Switch />
        <Typography variant="body2" color={"primary"}>
          verze 0.0.1
        </Typography>
      </Stack>
    </Toolbar>
  );
}
