import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

function CardPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const player = location.state?.player;

  const handleClose = () => {
    navigate("/");
  };

  if (!player) {
    return navigate("/");
  }

  return <Card player={player} open={true} onClose={handleClose} />;
}

export default CardPage;
