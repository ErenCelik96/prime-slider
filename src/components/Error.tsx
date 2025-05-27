import { Box, Typography, useTheme } from "@mui/material";

const ErrorComponent = ({ refetch }: { refetch: () => void }) => {
  const theme = useTheme();
  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      <Typography color="error">Error loading photos</Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Please try again later or{" "}
        <span
          style={{ cursor: "pointer", color: theme.palette.primary.main }}
          onClick={() => refetch()}
        >
          retry
        </span>
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
