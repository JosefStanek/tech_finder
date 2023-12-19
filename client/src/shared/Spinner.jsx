import { Box, CircularProgress } from "@mui/material";

export default function Spinner({ height }) {
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      p={10}
      m={10}
      minHeight={height}
    >
      <CircularProgress size={50} />
    </Box>
  );
}
