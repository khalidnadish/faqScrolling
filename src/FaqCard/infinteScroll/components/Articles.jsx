import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import Loading from "./Loading";
import { useQuery } from "react-query";
import { useInView ,InView} from "react-intersection-observer";

// if (!articles) return <div />;
const endmsg = {
  textAlign: "center",
  fontSize: "1.8rem",
  marginBottom: "4rem",
};
const wraper = {
  // backgroundColor: "lightyellow",
};

const fetchdata=(page)=>{
 return  axios.get("http://localhost:3001/faq", {
    params: { page: `${page}`, perPage: 4 },
  })
}
const Articles = () => {

  const [page, setPage] = useState(1);
  const [FAQ, setFAQ] = useState([]);
  
  const { isLoading, isFetched, isFetching,isSuccess, isError, error, data, refetch } =

    useQuery("khalid", () => fetchdata(page) ,
      {
          refetchOnWindowFocus:false,
          // keepPreviousData: true 
      }
    );
    
    useEffect(() => {
      if(isFetched){
     
        setFAQ(data?.data)
     
      }
    }, [])
    useEffect(() => {
      if(isFetched){
        refetch()
        setFAQ((prev) => {    return [...prev, ...data?.data]});
      }
    }, [page])
    
    
    // console.log(FAQ);

  

  
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
 
const handleOnChangeOserve=(inView)=>{
  if(inView){

     setPage(prev=>prev+1)
    
    }
}
 
  
  return (
    <>
      <h1>{(document.title = isSuccess)}</h1>
      <div  style={wraper}>
        {FAQ.map((article ) => {
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
        })}
        ;
        <InView
          as="div"
          onChange={(inView, entry) =>handleOnChangeOserve(inView)}
        >
          <h2>
          loding.... {page} 
          <Loading/>
          </h2>
        </InView>
      </div>
    </>
  );
};

export default Articles;
