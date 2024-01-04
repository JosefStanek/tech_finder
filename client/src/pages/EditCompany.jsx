import { Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCompany } from "../http/http";
import { Test } from "../components/companyItem/Test";
import Form from "../shared/form/Form";
export default function EditCompany() {
  const companyId = useParams().id;
  const { data } = useQuery({
    queryKey: ["company", companyId],
    queryFn: () => getCompany(companyId),
  });
  return (
    <Container>
      <Typography
        variant="h6"
        color={"primary"}
        fontWeight={"bold"}
        textAlign={"center"}
        textTransform={"uppercase"}
      >
        Upravit společnost
      </Typography>
      <Test data={data} />
      {/* <Form /> */}
    </Container>
  );
}
