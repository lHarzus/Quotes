import React, { useState } from "react";

export const Categories = ({
  categories,
  nrPerPage,
}: {
  categories: any;
  nrPerPage: any;
}) => {
  const pages = Math.ceil(categories.length / nrPerPage);
  const [page, setPage] = useState(0);

  //{categories.map((category: string) => (
  //<p>{category}</p>
  //))}
  return (
    <div className="categories">
      <i class="bi bi-caret-left"></i>
      {Array.from(Array(10).keys())}
      <i class="bi bi-caret-right"></i>
    </div>
  );
};
