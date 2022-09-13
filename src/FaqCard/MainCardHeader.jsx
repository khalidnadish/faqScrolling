import React, { useState, Suspense } from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { AddAnswer } from "./AddAnswer";
import { ExtraOptionRule } from "./ExtraOptionRule";
import { Loader, LeftDrawer, AvatarPrsonInfo } from "./FaqCards";

export const MainCardHeader = ({ userid, src, autherName, create_at, faqGroup, faqcolseoropen }) => {
  const [avatarInfo, setAvatarInfo] = useState(false);
  const [imageUrl, setImageUrl] = useState(src);
  const fallbackImage = "http://localhost:3001/images/avatar/notExisit.jpg";
  const hadleAvatarClick = () => {
    setAvatarInfo(true);
  };
  const errorHandler = () => {
    setImageUrl(fallbackImage);
  };
  return (
    <>
      <CardHeader
        component="div"
        action={<>

          <Grid
            container
            direction="row"
            // justifyContent="space-between"
            alignItems="center"
            
            spacing={0}

          >
            <Grid item xs={1} align="center"  >
              
              <IconButton onClick={() => hadleAvatarClick()}>
                <Avatar
                  src={imageUrl}
                  aria-label="recipe"
                  alt={faqGroup}
                  imgProps={{
                    onError: errorHandler
                  }}
                  sx={{ width: "32px", height: "32px" }} />
              </IconButton>
            </Grid>
            <Grid item xs={1} align="left"  >
              <Grid container direction="column">
                <Grid item xs={6}>
                  <Typography fontSize={"1rem"}>{autherName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontSize={".5rem"}>
                    {new Date(create_at).toLocaleDateString()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={true}> </Grid>
            <Grid item xs={1} align="right">
              <AddAnswer faqcolseoropen={faqcolseoropen} />
            </Grid>

            <Grid item xs={1} align="center">
              <ExtraOptionRule />
            </Grid>
          </Grid>
          {avatarInfo && (
            <Suspense fallback={<Loader />}>
              <LeftDrawer
                open={avatarInfo}
                setOpen={setAvatarInfo}
                drawerWidth={300}
                anchor="left"
                drHight={"100vh"}
              >
                <AvatarPrsonInfo targetUserid={userid} />
              </LeftDrawer>
            </Suspense>
          )}
        </>}
        sx={{
          bgcolor: "grey.300",
          padding: 0,
          display: "block",
          paddingTop: 1,
          paddingBottom: 1
        }} />
    </>
  );
};
