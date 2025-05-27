import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider, Typography, Box } from "@mui/material";
import PhotoSlider from "./components/PhotoSlider";
import "./App.css";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.5rem",
      "@media (min-width:600px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "4rem",
      },
    },
  },
  customComponents: {
    photoSlider: {
      overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
        borderRadius: 1,
      },
      controls: {
        background: "rgba(255, 255, 255, 0.8)",
        hoverBackground: "rgba(255, 255, 255, 0.9)",
      },
    },
  },
});

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            py: 4,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              mb: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Prime Photo Slider
          </Typography>
          <PhotoSlider />
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
