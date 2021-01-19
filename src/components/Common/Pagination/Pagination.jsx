import React, { useState } from "react";
import styles from "./Pagination.module.css";

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
  const leftButtonDisabled = numberPortion > 1;
  const rightButtonDisabled = numberPortion < countPortion;
  return (
    <div>
      <button
        disabled={!leftButtonDisabled}
        className={styles.forwardBackButton}
        onClick={() => {
          setNumberPortion(numberPortion - 1);
        }}
      >
        <span>{"<-"}</span>
      </button>
      {arrPageNumber
        .filter((p) => {
          if (p >= leftPortionNumber && p < rightPortionNumber + 1) {
            return true;
          } else {
            return false;
          }
        })
        .map((p) => (
          <div
            key={p}
            className={styles.numberPageBlock}
            onClick={() => {
              getNextUsers(p);
            }}
          >
            <span className={p === pageNumber ? styles.selectedPage : ""}>
              {" " + p + " "}
            </span>
          </div>
        ))}
      <button
        disabled={!rightButtonDisabled}
        className={styles.forwardBackButton}
        onClick={() => {
          setNumberPortion(numberPortion + 1);
        }}
      >
        <span>{"->"}</span>
      </button>
    </div>
  );
};

export default Pagination;
