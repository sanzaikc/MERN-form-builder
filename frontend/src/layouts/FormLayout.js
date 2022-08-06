import React from "react";

import { Outlet } from "react-router-dom";

import { Container, Paper } from "@mui/material";

export const FormLayout = () => {
  return (
    <Container maxWidth="sm">
      <Paper>
        <Outlet />
      </Paper>
    </Container>
  );
};
