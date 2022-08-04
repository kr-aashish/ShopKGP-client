import { Avatar } from "@mui/material";
import React from "react";
import PrimarySearchAppBar from "../../components/appbar/Appbar";
import Header from "../../components/Header";

export default function Account() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Avatar sx={{ width: 90, height: 90 }} />
    </div>
  );
}
