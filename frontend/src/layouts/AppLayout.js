import React from "react";

import { Box, Container } from "@mui/material";

import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <Box
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fafafa",
      }}
    >
      <Navbar />
      <Container maxWidth="lg">
        <Box padding={3}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};
