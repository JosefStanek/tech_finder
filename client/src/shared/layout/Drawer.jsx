import { Card, Stack, Button, Divider, Icon, Box, Paper } from "@mui/material";

import GridViewIcon from "@mui/icons-material/GridView";
import { NavLink } from "react-router-dom";
const navLinkStyles = ({ isActive }) => {
  return {
    color: "#845EC2",
    fontWeight: isActive ? "700" : "400",
    textDecoration: isActive ? "underline" : "none",
    letterSpacing: "1px",
  };
};
export default function MobileDrawer({ links, socialLinks }) {
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
        >
          odhlásit
        </Button>
      </Box>
    </Card>
  );
}
