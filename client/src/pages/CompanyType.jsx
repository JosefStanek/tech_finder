import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTypeCompanies } from "../http/http";
import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import TypeListItems from "../components/companytype/TypeListItems";
import Spinner from "../shared/Spinner";
export default function CompanyType() {
  const { id } = useParams();
  const { data, isPending, error } = useQuery({
    queryKey: ["companiesType"],
    queryFn: () => getTypeCompanies(id),
  });
  return (
    <>
      <Container>
        <Box display={"flex"} justifyContent={"right"}>
          <Button variant="contained" component={Link} to={`/`}>
            back
          </Button>
        </Box>
        <Stack
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
          m={2}
        >
          <Typography variant="h6" color={"primary"} fontWeight={"bold"}>
            {`SPOLEČNOST ${id.toLocaleUpperCase()}`}
          </Typography>
          <TextField label={"hledat"} size="small" variant="standard" />
        </Stack>
        <Divider />
        {isPending && <Spinner />}
        {error && <p>error</p>}
        {data && <TypeListItems typeCompanies={data} />}
      </Container>
    </>
  );
}
