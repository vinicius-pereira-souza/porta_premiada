import styles from "../styles/Cartao.module.css";
import React from "react";

type Props = {
  bgColor?: string;
  children?: React.ReactElement;
};

const Cartao = (props: Props) => {
  return (
    <div
      className={styles.cartao}
      style={{ backgroundColor: props.bgColor ?? "#fff" }}
    >
      {props.children}
    </div>
  );
};

export default Cartao;
