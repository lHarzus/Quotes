import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuote } from "../actions/quotes";
import { getCategory } from "../actions/quotes";
import { Categories } from "./Categories";
import { getImage } from "../actions/image";

const Landing = ({
  getQuote,
  quotes,
  getImage,
  image,
}: {
  getQuote: any;
  quotes: any;
  getImage: any;
  image: any;
}) => {
  const [category, setCategory] = useState("happiness");

  const categories = getCategory();

  useEffect(() => {
    getQuote(category);
    getImage();
  }, [category]);

  console.log(image.image);

  if (!quotes.quotes || !image.image) return <div>Loading</div>;

  return (
    <>
      <Categories
        categories={categories}
        nrPerPage={8}
        setCategory={setCategory}
      />
      <div>
        {category} Quote : {quotes.quotes[0].quote}
      </div>
      <img src={"data:image/png;base64, " + image.image}></img>
    </>
  );
};

Landing.propTypes = {
  getQuote: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
  quotes: state.quotes,
  image: state.image,
});

export default connect(mapStateToProps, { getQuote, getImage })(Landing);
