import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import { FormBuilderScreen } from "./screens/FormBuilderScreen";

function App() {
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: 1, borderBottomColor: "divider" }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                FormBuilder
              </Typography>

              <Box display="flex" gap={4}>
                <Button variant="outlined">All Forms</Button>
                <Button variant="contained">Create Form</Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        <FormBuilderScreen />
      </Container>
    </>
  );
}

export default App;
