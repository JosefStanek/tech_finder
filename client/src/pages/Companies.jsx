import { useQuery } from "@tanstack/react-query";
import CompaniesList from "../components/companies/CompaniesList";
import Spinner from "../shared/Spinner";
import { getCompanies } from "../http/http";
import { Typography } from "@mui/material";

export default function Companies() {
  const { data, isPending, error } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  return (
    <>
      <Typography
        variant="h6"
        color={"primary"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        SEZNAM SPOLEČNOSTÍ
      </Typography>
      {isPending && <Spinner />}
      {error && <p>error</p>}
      {data && <CompaniesList companies={data} />}
    </>
  );
}
