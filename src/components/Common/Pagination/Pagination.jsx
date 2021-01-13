import React, { useState } from "react";
import styles from "../../Find/Find.module.css";

let Pagination = ({
  totalCount,
  pageSize,
  pageNumber,
  getNextUsers,
  portionSize,
}) => {
  let arrPageNumber = [];
  const countPage = Math.ceil(totalCount / pageSize);
  for (let i = 1; i <= countPage; i++) {
    arrPageNumber.push(i);
  }
  const countPortion = Math.ceil(countPage / portionSize);
  const [numberPortion, setNumberPortion] = useState(1);
  let leftPortionNumber = numberPortion * portionSize - portionSize + 1;
  let rightPortionNumber = 0;
  if (numberPortion === countPortion) {
    rightPortionNumber = countPage;
  } else {
    rightPortionNumber = leftPortionNumber + portionSize - 1;
  }

  return (
    <div>
      {numberPortion > 1 && <button onClick={() => {setNumberPortion(numberPortion - 1)}}>{"<-"}</button>}
      {arrPageNumber
        .filter((p) => {
          if (p >= leftPortionNumber && p < rightPortionNumber + 1) {
            return true;
          } else {
            return false;
          }
        })
        .map((p) => (
          <span
            key={p}
            onClick={() => {
              getNextUsers(p);
            }}
            className={p === pageNumber ? styles.selectedPage : ""}
          >
            {" " + p + " "}
          </span>
        ))}
        {numberPortion < countPortion && <button onClick={() => {setNumberPortion(numberPortion + 1)}}>{"->"}</button>}
    </div>
  );
};

export default Pagination;
