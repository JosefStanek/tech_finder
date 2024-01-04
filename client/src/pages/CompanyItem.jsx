import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompany } from "../http/http";
import { Container, Typography } from "@mui/material";
import { Item } from "../components/companyItem/Item";
import Spinner from "../shared/Spinner";
export default function CompanyItem() {
  const { companyId } = useParams();
  const { data, error, isPending } = useQuery({
    queryKey: ["company", companyId],
    queryFn: () => getCompany(companyId),
  });

  return (
    <Container>
      {isPending && <Spinner />}
      {data && <Item data={data} />}
      {error && (
        <Typography variant="h6" textAlign={"center"}>
          Něco se pokazilo, opakujte akci později.
        </Typography>
      )}
    </Container>
  );
}
