import React from "react";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import BadgeBtn from "../FaqCard/BadgeBtn";
 

export function QuastionStuts({ status }) {
  return (
<>
<BadgeBtn
        variant={"contained"}
        // startIcon={<QuickreplyIcon  size={'1.3em'} />}
        count={status==="1" ? "Open" : "Closed"}
        xpad={"3px 5px 3px 5px"}
        xcolor={status==="1" ? "success" : "error"}
        // xcolor={"common"}
        iconcolor={"primary.light"}
        xborder={0.5}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="background.paper"
        direction="row"
        // onClick={() => {
        //   setdataToshow(`/category/getUserCategory/${userId}`);

        //   setOpenGroups(true);
        //   setTypeOfShow("tracking");
        // }}
        toolTip="Answer's"
      />










    </>
  );
}
