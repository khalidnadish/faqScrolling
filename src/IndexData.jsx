import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import FaqCrads from "./FaqCard/FaqCrads";
const getdata = () => {
  return axios.get("http://localhost:3001/faq");
};

function IndexData() {
  const [count, setCount] = useState(0);
  const [isShow, setIsshow] = useState(false);
  const { isLoading, isFetched, isFetching, isError, error, data, refetch } =
    useQuery("khalid", getdata, {
      // refetchOnMount:true,
      // refetchOnWindowFocus:"always",
      // // cacheTime:0,
    });

  const handleShowData = () => {
    setCount(data?.data.length);
    setIsshow(!isShow);
  };

  // if(isLoading){return<h1>loading.....</h1>}
  if (isError) {
    return <h1>{error.message}.....</h1>;
  }

  console.log({ isLoading, isFetched, isFetching });

  return (
    <>
      <button
        onClick={() => {
          refetch;
        }}
      >
        refech data
      </button>
      <div>count is {count}</div>
      {isFetching ? (
        <h1>loading faq.....</h1>
      ) : (
        <CardFaq dataToshow={data?.data} />
      )}
    </>
  );
}

// ---------------------------------
const CardFaq = ({ dataToshow }) => {
  const [page, setPage] = useState(0);
  const [pageTop, setPageTop] = useState(0);
  const [pageBottom, setPageBottom] = useState(8);
  const [scrollData, setScrollData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScrollBottom = async () => {
    const sc = document.documentElement.scrollHeight - window.innerHeight;
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPageBottom((prev) => prev + 10);
    }
  };
  let preData = [];
  useEffect(() => {
    preData = dataToshow.slice(pageBottom - 8, pageBottom);
    setScrollData((prev) => {
      return [...prev, ...preData];
    });
  }, [pageBottom, dataToshow]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBottom);
    return () => window.removeEventListener("scroll", handleScrollBottom);
  }, []);

  return (
    <>
      <p>
        Bottom :{pageBottom} Top :{pageTop}
      </p>
      <div style={wraperDivSyle}>
        {scrollData.map((faq, index) => {
          return (
            <React.Fragment key={faq.faqid + index}>

<FaqCrads
            Quastion={faq.faq}
            src={faq.avatar}
            count={faq.AnswerCount}
            faqid={faq.faqid}
            autherName={faq.autherName}
            faqGroup={faq.catName}
            Groupid={faq.catId}
            isClose={faq.faqcolseoropen}
            create_at={faq.create_at}
            userid={faq.userid}
            faqcolseoropen={faq.faqcolseoropen}
            rowIndex={index}
          />




              {/* <div style={cardstyle}>
                <span
                  style={{
                    backgroundColor: "lightgreen",
                    width: "50px",
                    marginLeft: "3px",
                    marginRight: "13px",
                    padding: "5px 0px 0px 5px",
                  }}
                >
                  <span style={{ color: "red" }}>{index}</span> / {faq.faqid}
                </span>
                <span>{faq.faq} </span>
              </div> */}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};




















// ----------------------------------------------------------------------

const wraperDivSyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
  marginBottom: "7px",
  marginTop: "6px",
  marginLeft: "17px",
  borderRadius: "4px",
};

const cardstyle = {
  display: "inline",
  backgroundColor: "lightsalmon",
  justifyContent: "space-between",
  minWidth: "250px",
  maxWidth: "250px",

  minHeight: "200px",
  border: "1px solid",
  marginBottom: "7px",
  marginLeft: "17px",
  borderRadius: "4px",
};
// -----------------------------------------
const Card = ({ dataToshow }) => {
  const [page, setPage] = useState(0);
  const [pageTop, setPageTop] = useState(0);
  const [pageBottom, setPageBottom] = useState(8);
  const [scrollData, setScrollData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScrollBottom = async () => {
    const sc = document.documentElement.scrollHeight - window.innerHeight;
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPageBottom((prev) => prev + 10);
    }
  };
  let preData = [];
  useEffect(() => {
    preData = dataToshow.slice(pageBottom - 8, pageBottom);
    setScrollData((prev) => {
      return [...prev, ...preData];
    });
  }, [pageBottom, dataToshow]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBottom);
    return () => window.removeEventListener("scroll", handleScrollBottom);
  }, []);

  return (
    <>
      <p>
        Bottom :{pageBottom} Top :{pageTop}
      </p>
      <div style={wraperDivSyle}>
        {scrollData.map((faq, index) => {
          return (
            <React.Fragment key={faq.faqid + index}>
              <div style={cardstyle}>
                <span
                  style={{
                    backgroundColor: "lightgreen",
                    width: "50px",
                    marginLeft: "3px",
                    marginRight: "13px",
                    padding: "5px 0px 0px 5px",
                  }}
                >
                  <span style={{ color: "red" }}>{index}</span> / {faq.faqid}
                </span>
                <span>{faq.faq} </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default IndexData;
