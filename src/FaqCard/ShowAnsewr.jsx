import React, { useContext, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
// import { axios } from "../../../../helper/axios/axios";
// import { UserDetail } from "@/helper/context/userContext";
// import QandA from "@/component/QuastionControl/QandA";

export function ShowAnsewr({ Quastion, groupid, qid }) {
  const [open, setOpen] = useState(false);
  // const { userId, setHistoryCounter } = useContext(UserDetail);

  const reCheckHistorycounter = async (userId) => {
    try {
      const resposn = await axios.get(`/user/histoyQuastionCount/${userId}`);
      if (resposn) {
        setHistoryCounter(resposn.data[0].historyQ);
      }
    } catch (error) {
      console.log("FollowUser Error :", error);
    }
  };

  const addToHistoy = async (userId, qid, groupid) => {
    try {
      const resposn = await axios.post(`user/addToHistory`, {
        userId,
        qid,
        groupid,
      });
      if (resposn) {
        reCheckHistorycounter(userId);
      }
    } catch (error) {
      console.log("History Error :", error);
    }
  };

  return (
    <>
      <Tooltip title="click to see Answer's">
        <CardContent
          onClick={() => {
            addToHistoy(userId, qid, groupid);
            setOpen(true);
          }}
          sx={{
            cursor: "pointer",
            "&:hover": {
              borderBottom: "5px solid",
              borderColor: "warning.dark",
              backgroundColor: "primary.dark",
              color: "background.paper",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography
            sx={{
              wordBreak: "break-word",
            }}
          >
            {Quastion}
          </Typography>
        </CardContent>
      </Tooltip>
      {/* {open && <QandA id={qid} open={open} setOpen={setOpen} />} */}
    </>
  );
}
