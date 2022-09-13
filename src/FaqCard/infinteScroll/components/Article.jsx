import React from "react";
import moment from "moment";
import Avatar from "@mui/material/Avatar";
import { AddToFavorite } from "../../AddToFavorite";
import { display, width } from "@mui/system";
const article = {
  // border: "1px solid #eee",
  border: "1px solid #eee",
  borderRadius: "12px",
  fontSize: "1rem",
  margin: "1rem 4rem",
  boxShadow: "0px 7px 12px rgba(0, 0, 0, 0.1)",
  display: "flex",
};

const articleimage = {
  height: "5rem",
  padding: ".5rem",
  // display:"flex",
  // justifyContent:"space-between",
  //  justifyContent:"space-between",
  // alignItems:"center",
  // width:"100%"
};

const article__content = {
  padding: "1rem 2rem",
};

const article__title = {
  fontSize: "1.3rem",
  textTransform: "capitalize",
  paddingBottom: "0.4rem",
};

const article__info = {
  paddingBottom: "0.8rem",
  opacity: "0.7",
  fontStyle: "italic",
};

const article__body = {
  fontFamily: "sans-serif, helvetica",
  fontWeight: "300",
  color: "#666",
  opacity: "0.7",
};

const Article = ({ image, title, author, date, body }) => {
  return (
    <div style={article}>
      <div style={articleimage}>
        <Avatar src={image} />
        {/* <img  style={article__image} src={image} alt="article thumbnail" /> */}
        <AddToFavorite />
      </div>

      <div style={article__content}>
        <div style={article__info}>
          {author} . {moment(new Date(date)).fromNow()}
        </div>
        <div style={article__title}>{title}</div>
        <div style={article__body}>{body}</div>
      </div>
    </div>
  );
};

export default Article;
