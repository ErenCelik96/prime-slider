import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  const theme = createTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}></ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
