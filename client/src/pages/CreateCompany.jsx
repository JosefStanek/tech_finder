import { Container } from "@mui/material";
import Form from "../shared/form/Form";
import { getList } from "../http/http";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../shared/Spinner";
export default function CreateCompany() {
  const { data, isPending } = useQuery({
    queryKey: ["list"],
    queryFn: () => getList(),
  });
  return (
    <Container>
      {isPending && <Spinner />}
      {data && <Form list={data} />}
    </Container>
  );
}
