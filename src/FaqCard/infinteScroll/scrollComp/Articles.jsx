import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import Loading from "./Loading";
 

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasEnded, setHasEnded] = useState(false); // to indicate whether or not we've fetched all the records
  const [loading, setLoading] = useState(true);

  const container = useRef(null);

  useEffect(() => {
    if (!hasEnded) {
      fetch(page);
    }

    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [page]);

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
  }, [articles]);

  const trackScrolling = () => {
    if (
      container.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      setPage(page + 1);

      document.removeEventListener("scroll", trackScrolling);
    }
  };

  const fetch = async () => {
    setLoading(true);
    // `http://localhost:4080/api/articles?page=${page}`

    const { data } = await axios.get(
      `http://localhost:3001/faq` ,{
        params:{
          page:`${page}`,
          perPage:7

        
      }
      } );
    console.log(data.length);

    if (data.length === 0) {
      setHasEnded(true);
    } else {
      setArticles([...articles, ...data]);
    }

    setLoading(false);
  };

  const renderArticles = () => {
    return articles.map((article,idx) => {
      return (
        <Article
          key={article.faqid}
          image={article.avatar}
          title={article.faq}
          author={article.autherName}
          date={article.create_at}
          body={article.faqid}
        />
      );
    });
  };

  if (!articles) return <div />;
  const endmsg={
      textAlign: "center",
      fontSize: "1.8rem",
      marginBottom: "4rem"
    }
    const wraper={
      backgroundColor:"red",
      
    }
  return (
    <div ref={container}  style={wraper}>
      {renderArticles()}
      {loading && <Loading />}
      {hasEnded && (
        <div style={endmsg}>
          <p>You're all caught up!</p>
        </div>
      )}
    </div>
  );
};

export default Articles;
