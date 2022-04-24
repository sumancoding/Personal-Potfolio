import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
const LeftBar = () => {
  return (
    <Box flex={4} p={5}>
      {" "}
      <Typography variant="h4">Hello Everyone, My Name is </Typography>
      <Typography variant="h3">Suman Malla </Typography>
      <Box sx={{ width: "20%" }}>
        <Card>
          <CardContent>
            <Typography variant="h5">Developer</Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5">UI Developer</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default LeftBar;
