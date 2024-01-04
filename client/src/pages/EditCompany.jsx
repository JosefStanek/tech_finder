import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
export default function EditCompany() {
  const companyId = useParams().id;
  // const { data, isPending, error } = useQuery({
  //   queryKey: "",
  //   queryFn: () => getCompany(companyId),
  // });
  return (
    <Container>
      <p>{companyId}</p>
      <p>edit</p>
    </Container>
  );
}
