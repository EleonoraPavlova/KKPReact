import React from "react";
import styles from "./style.module.css"


export type ClockCircleProps = {
  hour: number;
  minute: number;
  second: number;
}

export const ClockCircle: React.FC<ClockCircleProps> = ({ hour, minute, second }) => {
  return (
    <div className={styles.clock}>
      <div className={`${styles.hand} ${styles.hour}`} style={{ transform: `translate(-50%) rotate(${hour * 360}deg)` }}></div>
      <div className={`${styles.hand} ${styles.minute}`} style={{ transform: `translate(-50%) rotate(${minute * 360}deg)` }}  ></div>
      <div className={`${styles.hand}  ${styles.second}`} style={{ transform: `translate(-50%) rotate(${second * 360}deg)` }}  ></div>

      <div className={`${styles.number} ${styles.number1}`}><div>1</div></div>
      <div className={`${styles.number} ${styles.number2}`}><div>2</div></div>
      <div className={`${styles.number} ${styles.number3}`}><div>3</div></div>
      <div className={`${styles.number} ${styles.number4}`}><div>4</div></div>
      <div className={`${styles.number} ${styles.number5}`}><div>5</div></div>
      <div className={`${styles.number} ${styles.number6}`}><div>6</div></div>
      <div className={`${styles.number} ${styles.number7}`}><div>7</div></div>
      <div className={`${styles.number} ${styles.number8}`}><div>8</div></div>
      <div className={`${styles.number} ${styles.number9}`}><div>9</div></div>
      <div className={`${styles.number} ${styles.number10}`}><div>10</div></div>
      <div className={`${styles.number} ${styles.number11}`}><div>11</div></div>
      <div className={`${styles.number} ${styles.number12}`}><div>12</div></div>
    </div >
  );
}
