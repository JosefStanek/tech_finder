import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Companies from "./pages/Companies";
import EditCompany from "./pages/EditCompany";
import CompanyItem from "./pages/CompanyItem";
import CreateCompany from "./pages/CreateCompany";
import Spinner from "./shared/Spinner";
import CompanyType from "./pages/CompanyType";
import Setting from "./pages/Setting";
import Auth from "./pages/Auth";
import ProtectRoutes from "./routes/ProtectRoutes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#845EC2",
    },
    secondary: {
      main: "#D65DB1",
    },
    text: {
      primary: "#4B4453",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/auth" element={<Auth />}></Route>

          {/* Protect routes */}
          <Route element={<ProtectRoutes />}>
            <Route path="/" element={<Navigate to="/companies" />}></Route>

            <Route path="/companies" element={<Companies />}></Route>
            <Route path="/companies/type/:id" element={<CompanyType />}></Route>
            <Route
              path="/companies/type/:id/company/:companyId"
              element={<CompanyItem />}
            ></Route>
            <Route path="/company/edit/:id" element={<EditCompany />}></Route>
            <Route path="/company/new" element={<CreateCompany />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="*" element={<Spinner />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
