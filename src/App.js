import React from "react";
import { Box, Stack } from "@mui/material";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

const App = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftBar />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default App;
