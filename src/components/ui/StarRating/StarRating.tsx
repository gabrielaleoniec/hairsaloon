import { ReactSVG } from "react-svg";
import { SalonType } from "../../../interfaces/salon";
import styles from "./StarRating.module.scss";

type StarRating = {
  rate: SalonType["rate"];
  opinionNo?: SalonType["opinionNo"];
  starsNo?: number;
  size?: "medium" | "small";
};

const star = (
  i: number,
  size: string,
  rate: SalonType["rate"]
): JSX.Element => {
  return (
    <span className={styles.star} key={i}>
      <ReactSVG
        src="/assets/icons/star.svg"
        alt=""
        className={`${size === "small" ? styles.small : ""} ${
          i >= Number(rate) ? styles.empty : ""
        }`}
      />
    </span>
  );
};

const StarRating = ({
  rate = 0,
  opinionNo = 0,
  starsNo = 5,
  size = "medium",
}: StarRating): JSX.Element => {
  if (!opinionNo) {
    return <></>;
  }
  const stars = [];
  for (let i = 0; i < starsNo; i++) {
    stars.push(star(i, size, rate));
  }
  return (
    <div
      title={`Rating is ${rate} out of ${starsNo}`}
      className={styles.rating}
    >
      {stars}
      <span className={styles.opinions}>({opinionNo})</span>
    </div>
  );
};

export default StarRating;
