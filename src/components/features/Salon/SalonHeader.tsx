import Image from "next/image";
import StarRating from "../../ui/StarRating/StarRating";
import styles from "./SalonHeader.module.scss";
import { SalonType } from "../../../interfaces/salon.d";

type SalonHeader = {
  name: SalonType["name"];
  image: SalonType["image"];
};
const SalonHeader = ({ name, image }: SalonHeader) => (
  <div className={styles.header} style={{ backgroundImage: `url(${image})` }}>
    <div className={styles.veil} />
    <div className={styles.elements}>
      <div className={styles.favourite}>
        <Image src="/assets/icons/heart.svg" alt="" width={34} height={30} />
      </div>
      <div className={styles.nameRating}>
        <h1>{name}</h1>
        <StarRating rate={5} opinionsNo={32} />
      </div>
    </div>
  </div>
);

export default SalonHeader;
