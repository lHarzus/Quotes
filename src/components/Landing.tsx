import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuote } from "../actions/quotes";

const Landing = ({ getQuote, quotes }: { getQuote: any; quotes: any }) => {
  const [category, setCategory] = useState("happiness");

  useEffect(() => {
    getQuote(category);
  }, []);

  if (!quotes.quotes) return <div>Loading</div>;

  return (
    <>
      <div>Landing : {quotes.quotes[0].quote}</div>
      <img src="https://picsum.photos/200/300"></img>
    </>
  );
};

Landing.propTypes = {
  getQuote: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
  quotes: state.quotes,
});

export default connect(mapStateToProps, { getQuote })(Landing);
