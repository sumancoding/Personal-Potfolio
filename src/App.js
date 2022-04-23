import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-around">
        <h1>Left</h1>
        <h1>Right</h1>
      </Stack>
    </Box>
  );
}

export default App;
