import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "./profile.png";

const RightBar = () => {
  return (
    <Box flex={4} bgcolor="pink" p={3}>
      {" "}
      <Typography variant="h5">RightSide</Typography>
      <img src={Logo} alt="profile-pic" width="50%" />
    </Box>
  );
};

export default RightBar;
