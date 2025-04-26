import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import Navbar from "../components/Navbar";
function PlayerCard({ player }) {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          py: 4,
        }}
      >
        <Card
          sx={{
            maxWidth: 360,
            width: "100%",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            transition: "all 0.4s ease-in-out",
            "&:hover": {
              boxShadow: "0 16px 32px rgba(0,0,0,0.16)",
              transform: "translateY(-8px) scale(1.01)",
            },
          }}
        >
          {/* Player Photo */}
          <CardMedia
            component="img"
            height="250"
            image={player.photo}
            alt={player.name}
            sx={{
              objectFit: "cover",
              borderBottom: "3px solid #1976d2",
            }}
          />

          <CardContent sx={{ p: 3 }}>
            {/* Player Name with Country Flag */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography
                variant="h5" // Reduced from h4 to h5
                sx={{
                  fontWeight: "bold",
                  color: "#1976d2",
                  fontSize: "1.4rem", // Smaller font size
                  letterSpacing: "-0.5px",
                }}
              >
                {player.name}
              </Typography>
            </Box>

            {/* Player Stats */}
            <Grid container spacing={1.5}>
              {[
                { label: "Age", value: player.age },
                { label: "Country", value: player.country },
                { label: "State", value: player.state },
                { label: "Current Rank", value: player.currentRank },
                { label: `${player.rankType} Rank`, value: player.worldRank },
                { label: "National Rank", value: player.nationalRank },
                { label: "Best Rank", value: player.bestRank },
                { label: "Points", value: player.points },
                { label: "Gender", value: player.gender },
              ].map((item) => (
                <Grid item xs={4} key={item.label}>
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: "rgba(25, 118, 210, 0.05)",
                      borderRadius: 2,
                      height: "100%",
                      transition: "all 0.2s",
                      "&:hover": {
                        bgcolor: "rgba(25, 118, 210, 0.1)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{
                        fontSize: "0.75rem", // Smaller font
                        mb: 0.5,
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1rem", // Smaller font
                        fontWeight: 600,
                        color: "#333",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default PlayerCard;
