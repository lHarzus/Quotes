import React, { useState } from "react";

export const Categories = ({
  categories,
  nrPerPage,
  setCategory,
}: {
  categories: any;
  nrPerPage: any;
  setCategory: any;
}) => {
  const pages = Math.ceil(categories.length / nrPerPage);
  const [page, setPage] = useState(0);

  const changePage = (side: string) => {
    if (side === "left") {
      if (page === 0) setPage(pages - 1);
      else setPage(page - 1);
    } else {
      if (page === pages - 1) setPage(0);
      else setPage(page + 1);
    }
  };

  return (
    <div className="categories">
      <i className="bi bi-caret-left" onClick={() => changePage("left")}></i>
      {Array.from(Array(8).keys()).map((i) => {
        if (categories.length > i + page * nrPerPage)
          return (
            <p
              onClick={() => setCategory(categories[i + page * nrPerPage])}
              key={i}
            >
              {categories[i + page * nrPerPage]}
            </p>
          );
      })}
      <i className="bi bi-caret-right" onClick={() => changePage("right")}></i>
    </div>
  );
};
