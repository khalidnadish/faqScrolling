import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export function ExtraOptionRule({ }) {
  return (
    <IconButton aria-label="settings" variant="filled" size="small">
      <MoreVertIcon fontSize="small" />
    </IconButton>
  );
}
