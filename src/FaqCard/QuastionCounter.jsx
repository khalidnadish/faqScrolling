import React from "react";
import Chip from "@mui/material/Chip";

export function QuastionCounter({ rowIndex }) {
  return (
    <Chip
      label={rowIndex + 1}
      variant="filled"
      // color="warning"
      size="small"
      sx={{
        marginTop: 1,
        marginLeft: 1
      }} />
  );
}
