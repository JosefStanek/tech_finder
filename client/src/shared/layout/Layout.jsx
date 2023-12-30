import { Card, Stack } from "@mui/material";
// links icon
import FolderIcon from "@mui/icons-material/Folder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// socialLinks
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import Header from "./Header";
import Drawer from "./Drawer";
import MobileDrawer from "./MobileDrawer";
import { useState } from "react";

const links = [
  { name: "společnosti", id: 1, href: "/companies", icon: <FolderIcon /> },
  {
    name: "přidat",
    id: 2,
    href: "/company/new",
    icon: <AddBoxIcon />,
  },
  {
    name: "nastavení",
    id: 3,
    href: "/setting",
    icon: <SettingsApplicationsIcon />,
  },
];

const socialLinks = [
  {
    id: 1,
    icon: <GitHubIcon />,
    href: "https://github.com/JosefStanek",
  },
  {
    id: 2,
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/josef-stan%C4%9Bk-21982922a/",
  },
  {
    id: 3,
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/josef.destiny",
  },
];

export default function Layout({ children }) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const mobileDrawerHandler = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const closeMobileDrawer = () => {
    setMobileDrawerOpen(false);
  };
  return (
    <div
      style={{
        background: "#F2EEF8",
        width: "100%",
        height: "100vh",
      }}
    >
      <Header setMobileDrawer={mobileDrawerHandler} />
      <Stack flexDirection={"row"} m={2}>
        <Drawer links={links} socialLinks={socialLinks} />
        <MobileDrawer
          links={links}
          mobileDrawerOpen={mobileDrawerOpen}
          closeMobileDrawer={closeMobileDrawer}
        />
        <Card
          elevation={3}
          sx={{
            p: "1rem",
            width: "100%",

            overflow: "auto",
            height: { xs: "88vh", md: "auto" },
          }}
        >
          {children}
        </Card>
      </Stack>
    </div>
  );
}
