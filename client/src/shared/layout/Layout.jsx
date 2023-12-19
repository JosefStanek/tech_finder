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
import MobileDrawer from "./Drawer";
const links = [
  { name: "společnosti", id: 1, href: "/", icon: <FolderIcon /> },
  {
    name: "přidat",
    id: 2,
    href: "/company/new",
    icon: <AddBoxIcon />,
  },
  {
    name: "nastavení",
    id: 3,
    href: "/company/new",
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
  return (
    <div
      style={{
        background: "#F2EEF8",
        width: "100%",
        height: "100vh",
      }}
    >
      <Header />
      <Stack flexDirection={"row"} m={2}>
        <Drawer links={links} socialLinks={socialLinks} />
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
