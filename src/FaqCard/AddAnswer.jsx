import React from "react";
import IconButton from "@mui/material/IconButton";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Typography } from "@mui/material";

export function AddAnswer({ faqcolseoropen}) {
  
  return (
    // <Tooltip title="Add Answer">
      <IconButton
        // component="span"
        size="small"
        // color={faqcolseoropen==="1" ?  "error":"grey"}
        disabled={faqcolseoropen==="1" ? false:true}
      >
        <RateReviewIcon fontSize="large" sx={{ color: faqcolseoropen==="1" ? "error.main":"grey" }} />
        <Typography variant="caption">{faqcolseoropen==="1" ? "Answer":"Closed"} </Typography>
         
      </IconButton>
    // </Tooltip>
  );
}
