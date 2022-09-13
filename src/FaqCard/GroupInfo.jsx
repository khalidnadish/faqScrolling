import React from "react";
import Chip from "@mui/material/Chip";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export function GroupInfo({ faqGroup, handleClick }) {
  return (
    <Chip
      label={faqGroup}
      variant="filled"
      // color="warning"
      size="small"
      onClick={() => {
        handleClick();
      }}
      icon={<PersonAddIcon />}
      sx={{
        marginTop: 1,
        marginLeft: 1
      }} />
  );
}
