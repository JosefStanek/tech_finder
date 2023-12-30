import { Drawer, Stack, Button, Box, Icon } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";

import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "../../store/user/userSlice";
export default function MobileDrawer({
  links,
  mobileDrawerOpen,
  closeMobileDrawer,
}) {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    Cookies.remove("jwt");
    dispatch(logout());
  };
  return (
    <>
      <Drawer
        open={mobileDrawerOpen}
        onClose={closeMobileDrawer}
        anchor="top"
        sx={{ display: { md: "none" } }}
      >
        <Box textAlign={"center"} m={2}>
          <Icon sx={{ color: "#845EC2" }}>
            <GridViewIcon />
          </Icon>
        </Box>
        <Stack p={1} m={1} spacing={2}>
          {links.map((link) => {
            return (
              <Button
                key={link.id}
                component={NavLink}
                startIcon={link.icon}
                variant="contained"
                to={link.href}
                size="medium"
                onClick={closeMobileDrawer}
                sx={{
                  borderRadius: 0,
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  color: "white",
                  ":hover": {
                    bgcolor: "#4B4453",
                    color: "white",
                  },
                  "&.active": {
                    bgcolor: "#4B4453",
                    color: "white",
                  },
                }}
                fullWidth
              >
                {link.name}
              </Button>
            );
          })}
        </Stack>
        <Box
          my={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button variant="contained" onClick={logoutHandler}>
            odhlásit
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
