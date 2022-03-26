import { SalonType } from "../../../interfaces/salon.d";
import StarRating from "../../ui/StarRating/StarRating";
import GoBack from "../../ui/GoBack/GoBack";
import styles from "./SalonHeader.module.scss";
import { ReactSVG } from "react-svg";

type SalonHeader = {
  name: SalonType["name"];
  image: SalonType["image"];
};

const SalonHeader = ({ name, image }: SalonHeader) => {
  return (
    <div className={styles.header} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.veil} />
      <div className={styles.elements}>
        <GoBack />
        <div className={styles.favourite}>
          <ReactSVG src="/assets/icons/heart.svg" />
        </div>
        <div className={styles.nameRating}>
          <h1 className="h1">{name}</h1>
          <StarRating rate={5} opinionNo={32} />
        </div>
      </div>
    </div>
  );
};

export default SalonHeader;
