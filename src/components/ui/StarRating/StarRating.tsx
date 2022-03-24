import { ReactSVG } from "react-svg";
import { SalonType } from "../../../interfaces/salon";
import styles from "./StarRating.module.scss";

type StarRating = {
  rate: SalonType["rate"];
  opinionsNo?: SalonType["opinionsNo"];
  starsNo?: number;
  size?: "medium" | "large";
};
const StarRating = ({
  rate,
  opinionsNo = 0,
  starsNo = 5,
  size = "medium",
}: StarRating): JSX.Element => {
  const stars = [];
  const sizePixels = size === "large" ? 12 : 11;
  for (let i = 0; i < starsNo; i++) {
    stars.push(
      <span className={styles.star}>
        <ReactSVG
          src="/assets/icons/star.svg"
          height={sizePixels}
          width={sizePixels}
          alt=""
          className={i < starsNo ? styles.empty : ""}
          key={i}
        />
      </span>
    );
  }
  return (
    <div
      title={`Rating is ${rate} out of ${starsNo}`}
      className={styles.rating}
    >
      {stars}
      <span className={styles.opinions}>({opinionsNo})</span>
    </div>
  );
};

export default StarRating;
