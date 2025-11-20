import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Modal,
  Box
} from "@mui/material";

import Grow from "@mui/material/Grow";

import AOS from "aos";
import "aos/dist/aos.css";

import klia from "../../assets/klia.jpg";
import solar from "../../assets/solar.jpg";
import bank from "../../assets/bank_rakyat.png";

const projects = [
  {
    title: "KLIA Pavement Maintenance",
    desc: "RM12.4 million (2020–2023). Runway and pavement resurfacing.",
    img: klia,
  },
  {
    title: "Solar Hybrid System (MOE Rural Schools)",
    desc: "RM11.9 million (2016–2018). Solar hybrid maintenance in rural schools.",
    img: solar,
  },
  {
    title: "Bank Rakyat Branch Renovations",
    desc: "Branch refurbishment and maintenance works nationwide.",
    img: bank,
  },
];

export default function ProjectsGrid() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{   fontWeight: "bold",mb: 6,
    color: "#333",
    position: "relative",
    display: "inline-block",
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: -10,
      width: "60%",
      height: "4px",
      backgroundColor: "#1976d2",
      borderRadius: "2px",} }}
      >
        Featured Maintenance Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((p, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200} // stagger effect
          >
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={p.img}
                alt={p.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" fontWeight="bold">
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=> handleOpen(p)}>Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
         {selectedProject && (
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 420,
              bgcolor: "white",
              boxShadow: 24,
              borderRadius: 3,
              p: 3,
            }}
          >
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />

            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {selectedProject.title}
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
              {selectedProject.desc}
            </Typography>

            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ mt: 2, display: "block", ml: "auto" }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </Box>
  );
}