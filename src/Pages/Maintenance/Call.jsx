import React, { useEffect } from "react";
import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import {Link} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import callImg from "../../assets/engineerlady.jpg"; 

export default function Call() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#c8cebcff",
        py: 10,
        px: 4,
        mt: 6,
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
    
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Box
            sx={{
              width: "100%",
              height: 350,
              backgroundImage:`url("${callImg}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 3,
              boxShadow: 4,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0))",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} data-aos="fade-left">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#3a3b36ff",
            }}
          >
            Looking for reliable facility maintenance?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: "#3a3b36ff",
              lineHeight: 1.5,
            }}
          >
            Let’s keep your assets running at their best — with professional
            maintenance you can trust.
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#587521ff",
                color: "#fff",
                px: 3,
                py: 1.2,
                fontWeight: "bold",
                borderRadius: 2,
                textTransform: "none",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#6c8c2aff",
                  transform: "translateY(-3px)",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            ><Link to="/GetAquote">
              Request a Quote</Link>
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#587521ff",
                color: "#587521ff",
                px: 3,
                py: 1.2,
                fontWeight: "bold",
                borderRadius: 2,
                textTransform: "none",
                transition: "0.3s",
                "&:hover": {
                  borderColor: "#6c8c2aff",
                  color: "#6c8c2aff",
                  transform: "translateY(-3px)",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Link to="/Contact">Contact Us</Link>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
