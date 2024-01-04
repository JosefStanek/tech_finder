import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompany } from "../http/http";
import moment from "moment";
import {
  Card,
  Container,
  Typography,
  Button,
  Stack,
  Box,
  CardContent,
  CardActions,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Skeleton,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function CompanyItem() {
  const { companyId } = useParams();
  const { data, error, isPending } = useQuery({
    queryKey: ["company", companyId],
    queryFn: () => getCompany(companyId),
  });

  return (
    <Container>
      {isPending && <p>Loading</p>}
      {data && (
        <Card sx={{ p: 2, maxWidth: 500, marginX: "auto" }} elevation={5}>
          <Stack display={"flex"} justifyContent={"center"}>
            <Box display={"flex"} justifyContent={"right"}>
              <Button
                variant="contained"
                component={Link}
                to={`/companies/type/${data.select}`}
              >
                back
              </Button>
            </Box>
          </Stack>

          <Card sx={{ mt: 3 }} elevation={0}>
            <Box display={"flex"} justifyContent={"center"}>
              {data.image.filename && (
                <img
                  src={`http://localhost:3000/${data.image.filename}`}
                  alt="company image"
                  style={{
                    mawWidth: "100%",
                    maxHeight: 180,
                  }}
                />
              )}

              {!data.image.filename && (
                <>
                  <Typography variant="body2" textTransform={"uppercase"}>
                    obrázek není k dispozici
                  </Typography>
                </>
              )}
            </Box>

            <CardContent>
              <Typography variant="h6">{data.name.toUpperCase()}</Typography>
              <Typography variant="body2">
                adresa: {data.street} {data.orientationNumber} / {data.zipCode}
              </Typography>
              <Typography variant="body2">vytvořil: {data.creator}</Typography>
              <Typography variant="body2">
                vytvořeno: {moment(data.createdAt).format("DD.MM.YYYY")}
              </Typography>
              <Typography variant="body2">
                upraveno: {moment(data.updatedAt).format("DD.MM.YYYY")}
              </Typography>
              <Accordion elevation={0}>
                <AccordionSummary
                  sx={{ paddingLeft: 0 }}
                  expandIcon={<KeyboardArrowDownIcon />}
                >
                  poznámka
                </AccordionSummary>
                <AccordionDetails sx={{ paddingLeft: 0 }}>
                  {data.note}
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardActions>
              <Button variant="outlined">upravit</Button>
              <Button variant="contained" color="error">
                smazat
              </Button>
            </CardActions>
          </Card>
        </Card>
      )}
      {error && <p>error</p>}
    </Container>
  );
}
