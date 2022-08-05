import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";

export const FormCard = ({ form }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} lg={2} xl={1.5}>
      <Card
        variant="outlined"
        style={{
          cursor: "pointer",
        }}
      >
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <FeedIcon
              style={{
                height: 150,
                width: 100,
                color: "lightgray",
              }}
            />
            <Typography variant="body1">{form.name}</Typography>
            <Typography variant="subtitle2">{`${form.fields.length} fields`}</Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Box display="flex" justifyContent="flex-end" flexGrow={1}>
            <Button
              size="small"
              onClick={() => navigate(`/forms/${form._id}/edit`)}
            >
              Edit
            </Button>
          </Box>
          {/* <Button size="small">View</Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
};
