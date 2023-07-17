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
  const [category, setCategory] = useState("Happiness");

  const [generate, setGenerate] = useState(0);

  const categories = getCategory();

  useEffect(() => {
    getQuote(category);
    getImage();
  }, [category, generate]);

  if (!quotes.quotes || !image.image) return <div>Loading</div>;

  return (
    <>
      <Categories
        categories={categories}
        nrPerPage={8}
        setCategory={setCategory}
        selected={category}
      />
      <h1>{category} Quote</h1>
      <div className="quote">
        {quotes.quotes[0] ? <p>{quotes.quotes[0].quote}</p> : <p>error</p>}
        <div>
          <img src={"data:image/png;base64, " + image.image}></img>
        </div>
      </div>
      <button className="btn" onClick={() => setGenerate(generate + 1)}>
        Generate Quote
      </button>
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
