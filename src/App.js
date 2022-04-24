import React from "react";
import { Box, Stack } from "@mui/material";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Chakra Petch", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <LeftBar />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
