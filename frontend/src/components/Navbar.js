import React from "react";

import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: 1, borderBottomColor: "divider" }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              FormBuilder
            </Typography>

            <Box display="flex" gap={4}>
              {/* <Button variant="outlined" onClick={() => navigate("/forms")}>
                Forms
              </Button> */}
              {/* <Button
                variant="outlined"
                onClick={() => navigate("/submissions")}
              >
                Submissions
              </Button> */}
              <Button
                variant="contained"
                onClick={() => navigate("/forms/create")}
              >
                Create Form
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
