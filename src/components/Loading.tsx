import { Box, Skeleton } from "@mui/material";

const LoadingComponent = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
      <Skeleton
        variant="rounded"
        width="100%"
        height={400}
        animation="wave"
        sx={{
          borderRadius: 2,
          bgcolor: "grey.300",
        }}
      />
      <Skeleton
        variant="text"
        width="100%"
        height={40}
        animation="wave"
        sx={{
          mt: 2,
          bgcolor: "grey.300",
          borderRadius: 1,
        }}
      />
    </Box>
  );
};

export default LoadingComponent;
