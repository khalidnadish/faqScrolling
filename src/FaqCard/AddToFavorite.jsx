import React,{useContext} from "react";
import BadgeBtn from "../FaqCard/BadgeBtn";
// import { UserDetail } from "@/helper/context/userContext";
// import { axios } from "../../../../helper/axios/axios";

import {  MdOutlineFavoriteBorder,MdOutlineFavorite } from "react-icons/md";






export function AddToFavorite({faqid }) {
  // const {userId:currentUser,setForceRenderToggole,forceRenderToggole} = useContext(UserDetail)
  



  
  const handleAddToFavorite = async (currentUser,faqid) => {
    try {
      const resposn = await axios.get(`/faq/addOrRemoveFavorte/${currentUser}/${faqid}`);
      if (resposn) {
        setForceRenderToggole(!forceRenderToggole)
          // setFollowingTarget(resposn.data[0].PepoleYouFollow)
        }
    } catch (error) {
      console.log("favorte Error :", error);
    }
  };






  return (
    <>

<BadgeBtn
        variant={"contained"}
        startIcon={<MdOutlineFavoriteBorder size="1em" color="red" />}
        // count={followerCounter}
        xpad={"3px 10px 3px 10px"}
        // xcolor={"warning"}
        xcolor={"common"}
        iconcolor={"primary.main"}
        xborder={0}
        // xbtmborder={4}
        // xborderColor={"error.main"}

        xdisableElevation={true}
        TypographyVariant="button"
        TypographyColor="primary.main"
        onClick={() => {
         
          handleAddToFavorite(currentUser,faqid);
          // setTypeOfShow("following");
        }}
        toolTip="Faviore It.."
      />








    
    
    </>
  );
}
