import {
  Card,
  Stack,
  Button,
  Divider,
  Icon,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/user/userSlice";
import GridViewIcon from "@mui/icons-material/GridView";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

export default function Drawer({ links, socialLinks }) {
  const dispatch = useDispatch();
  const { useremail } = useSelector((state) => state.user);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return (
    <Card
      elevation={3}
      sx={{
        width: "250px",
        height: "88vh",
        background: "#845EC2",
        display: { xs: "none", md: "block" },
      }}
    >
      <Box textAlign={"center"} m={2}>
        <Icon sx={{ color: "#F2EEF8" }}>
          <GridViewIcon />
        </Icon>
      </Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        mb={2}
      >
        <Avatar sx={{ width: 24, height: 24 }}></Avatar>
        <Typography variant="body2" sx={{ color: "white" }}>
          {useremail}
        </Typography>
      </Stack>
      <Divider
        sx={{
          background: "#845EC2",
          width: "80%",
          m: "auto",
        }}
      />

      <Stack p={1} m={1} spacing={2}>
        {links.map((link) => {
          return (
            <Button
              key={link.id}
              component={NavLink}
              startIcon={link.icon}
              variant="outlined"
              to={link.href}
              size="medium"
              sx={{
                borderRadius: 0,
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                background: "#F2EEF8",
                color: "#845EC2",
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

      <Divider
        sx={{
          background: "#845EC2",
          width: "80%",
          m: "auto",
        }}
      />
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        m={2}
      >
        {socialLinks.map((item) => {
          return (
            <Icon
              key={item.id}
              component={"a"}
              href={item.href}
              sx={{
                color: "white",
                ":hover": {
                  scale: "1.5",
                  transition: "all .5s ease",
                },
              }}
            >
              {item.icon}
            </Icon>
          );
        })}
      </Stack>
      <Box
        my={4}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button
          variant="contained"
          sx={{
            background: "#F2EEF8",
            color: "#845EC2",
            ":hover": {
              background: "#4B4453",
              color: "white",
            },
          }}
          onClick={logoutHandler}
        >
          odhlásit
        </Button>
      </Box>
    </Card>
  );
}
