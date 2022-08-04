import React from "react";

import { Box, Container } from "@mui/material";

import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box padding={3}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};
