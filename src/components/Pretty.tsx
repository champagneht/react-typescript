import React, { useState, useMemo } from "react";
import styles from "../css/pretty.module.less";
type RowNumberLiProps = {
  num: Number;
};

const RowNumberLi: React.FC<RowNumberLiProps> = (props) => {
  return <li>{props.num}</li>;
};

type RowNumberUlProps = {
  rowNumber: Array<number>;
};

const RowNumberUl: React.FC<RowNumberUlProps> = ({ rowNumber, children }) => {
  return (
    <ul>
      {rowNumber.map((item) => (
        <RowNumberLi key={item} num={item}></RowNumberLi>
      ))}
    </ul>
  );
};

type IProps = {
  data: any;
};

const Pretty: React.FC<IProps> = ({ data, children }) => {
  const rowNumber: Array<number> = useMemo(() => {
    var row = [];
    for (var i = 1; i <= data.length; i++) {
      row.push(i);
    }
    return row;
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <RowNumberUl rowNumber={rowNumber}></RowNumberUl>
      </div>

      <div className={styles.right}>
        {data.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Pretty;
