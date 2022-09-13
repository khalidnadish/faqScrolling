import React from "react";
import Chip from "@mui/material/Chip";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

 function  CardId ({ userid, groupid,qid })  {
  return (
    <Chip

      label={`U${userid} - Q${qid} -G${groupid}` }
      variant="filled"
      color="warning"
      size="small"
      // onClick={() => {
      //   handleClick();
      // }}
      // icon={<PersonAddIcon />}
      sx={{
        marginTop: 1,
        marginLeft: 1
      }} />
  );
}



export default CardId;
