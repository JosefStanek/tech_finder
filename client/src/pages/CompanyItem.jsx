import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompany } from "../http/http";
import { Card, Container, Typography, Button, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function CompanyItem() {
  const { id } = useParams();

  const { data, error, isPending } = useQuery({
    queryKey: ["company", id],
    queryFn: () => getCompany(id),
  });
  return (
    <Container>
      {isPending && <p>Loading</p>}
      {data && (
        <Card sx={{ p: 2 }}>
          <Stack display={"flex"} justifyContent={"center"}>
            <Box display={"flex"} justifyContent={"right"}>
              <Button
                variant="contained"
                component={Link}
                to={`/company/type/${data.name}`}
              >
                back
              </Button>
            </Box>
          </Stack>
          <Typography> {data.address}</Typography>
        </Card>
      )}
      {error && <p>error</p>}
    </Container>
  );
}
