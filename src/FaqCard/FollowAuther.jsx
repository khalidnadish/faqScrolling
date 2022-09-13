import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export function FollowAuther({ }) {
  return (
    <Tooltip title="Like Quastion">
      <IconButton aria-label="add to favorites" component="span" size="small">
        <PersonAddIcon size="small" color="success" />
      </IconButton>
    </Tooltip>
  );
}
