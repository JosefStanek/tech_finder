import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Companies from "./pages/Companies";
import EditCompany from "./pages/EditCompany";
import CompanyItem from "./pages/CompanyItem";
import CreateCompany from "./pages/CreateCompany";
import Spinner from "./shared/Spinner";
import CompanyType from "./pages/CompanyType";
import Layout from "./shared/layout/Layout";
const client = new QueryClient();
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
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Companies />}></Route>
              <Route path="/company/edit/:id" element={<EditCompany />}></Route>
              <Route path="/company/new" element={<CreateCompany />}></Route>
              <Route path="/company/:id" element={<CompanyItem />}></Route>
              <Route path="/company/type/:id" element={<CompanyType />}></Route>
              <Route path="*" element={<Spinner />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default App;
