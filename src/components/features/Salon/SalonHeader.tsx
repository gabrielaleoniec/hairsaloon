import Image from "next/image";
import StarRating from "../../ui/StarRating/StarRating";
import styles from "./SalonHeader.module.scss";
import { SalonType } from "../../../interfaces/salon.d";
import { useRouter } from "next/router";

type SalonHeader = {
  name: SalonType["name"];
  image: SalonType["image"];
};

const GoBack = () => {
  const router = useRouter();
  const href = "/";
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
      className={styles.goBack}
    >
      <Image src="/assets/icons/arrow.svg" alt="" width={34} height={30} />
    </div>
  );
};

const SalonHeader = ({ name, image }: SalonHeader) => {
  return (
    <div className={styles.header} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.veil} />
      <div className={styles.elements}>
        <GoBack />
        <div className={styles.favourite}>
          <Image src="/assets/icons/heart.svg" alt="" width={34} height={30} />
        </div>
        <div className={styles.nameRating}>
          <h1 className={styles.name}>{name}</h1>
          <StarRating rate={5} opinionsNo={32} />
        </div>
      </div>
    </div>
  );
};

export default SalonHeader;
