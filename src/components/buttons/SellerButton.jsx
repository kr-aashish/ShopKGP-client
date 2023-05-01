import { Button } from "@mui/material";
import React from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';

const SellerButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        display: 'flex',
        gap: '5px',
      }}
    >
      <StorefrontIcon/>
      {text}
    </Button>
  );
};

export default SellerButton;
