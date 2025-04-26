import React, { useState, useEffect } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

// Styled TableCell component
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Dummy data for players
const players = [
  {
    id: 1,
    photo:
      "https://media.gettyimages.com/id/1331553272/photo/day-8.webp?s=1024x1024&w=gi&k=20&c=JcgeredkvEJjeqjytAeCmJanpNgyDKE7gzX9mQbA78A=",
    name: "Viktor Axelsen",
    age: 29,
    state: "Copenhagen",
    country: "Denmark",
    countryCode: "dk",
    currentRank: 4,
    rankType: "World",
    worldRank: 4,
    nationalRank: 1,
    bestRank: 1,
    gender: "Male",
    points: 87610,
  },
  {
    id: 2,
    photo:
      "https://media.gettyimages.com/id/1163662153/photo/daihatsu-yonex-japan-open-day-1.webp?s=1024x1024&w=gi&k=20&c=Y0Q88r9A5Qj8y9njyd3m3rNfyECMBHnuNg-rnVAMvbI=",
    name: "Kento Momota",
    age: 28,
    state: "Kagawa",
    country: "Japan",
    countryCode: "jp",
    currentRank: 8,
    rankType: "World",
    worldRank: 8,
    nationalRank: 5, // Japan has multiple top players; Momota is 8th globally but not national #1 anymore
    bestRank: 1,
    gender: "Male",
    points: 75387,
  },
  {
    id: 3,
    photo:
      "https://cdn.britannica.com/42/256942-050-835841C2/PV-Sindhu-2016-Rio-Olympics.jpg",
    name: "P.V. Sindhu",
    age: 27,
    state: "Telangana",
    country: "India",
    countryCode: "in",
    currentRank: 7,
    rankType: "World",
    worldRank: 7,
    nationalRank: 1,
    bestRank: 2,
    gender: "Female",
    points: 72000, // Approximate recent points from general knowledge, as exact points not in search results
  },
  {
    id: 4,
    photo:
      "https://media.gettyimages.com/id/2165072921/photo/badminton-olympic-games-paris-2024-day-8.webp?s=1024x1024&w=gi&k=20&c=2EMljrXByk3STKOJwYFt3dEuATjZcw4iQsR9zHhfFm8=",
    name: "Carolina Marin",
    age: 29,
    state: "Huelva",
    country: "Spain",
    countryCode: "es",
    currentRank: 9,
    rankType: "World",
    worldRank: 9,
    nationalRank: 1,
    bestRank: 1,
    gender: "Female",
    points: 68000, // Approximate recent points from general knowledge
  },
];

function PlayerList() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  useEffect(() => {
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlayers(filtered);
  }, [searchQuery]);

  const handleRowClick = (player) => {
    navigate("/card", { state: { player } });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 6 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Player List
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search Player"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 3 }}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="player table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Photo</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>State</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player) => (
                <TableRow
                  key={player.id}
                  onClick={() => handleRowClick(player)}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <TableCell>
                    <img
                      src={player.photo}
                      alt={player.name}
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </TableCell>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.age}</TableCell>
                  <TableCell>{player.state}</TableCell>
                  <TableCell>{player.country}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="h6" sx={{ py: 3 }}>
                    No players found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PlayerList;
