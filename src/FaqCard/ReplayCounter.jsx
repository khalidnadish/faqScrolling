import React from "react";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import BadgeBtn from "../FaqCard/BadgeBtn";
 

export function ReplayCounter({ answerCount }) {
  return (
<>
<BadgeBtn
        variant={"contained"}
        startIcon={<QuickreplyIcon  size={'1.3em'} />}
        count={answerCount}
        xpad={"3px 5px 3px 5px"}
        xcolor={"grey"}
        // xcolor={"common"}
        iconcolor={"primary.light"}
        xborder={"10px 10px 10px 10px solid"}
        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"
        // xbtmborder={4}
        // xborderColor={"info.main"}
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
