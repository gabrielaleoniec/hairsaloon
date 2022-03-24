import { ReactSVG } from "react-svg";
import { SalonType } from "../../../interfaces/salon";
import StarRating from "../../ui/StarRating/StarRating";
import styles from "./ListItem.module.scss";

// TODO: Add dynamic price and duration
const PriceSection = ({}) => (
  <div className={styles.priceSection}>
    <div className={styles.price}>320kr</div>
    <div className={styles.duration}>30min</div>
  </div>
);

const ListItem = ({ salon }: { salon: SalonType }) => (
  <li className={styles.item}>
    <div className={styles.time}>12.00</div>
    <div className={styles.details}>
      <h2 className="h2">{salon.name}</h2>
      <StarRating rate={salon.rate} opinionNo={salon.opinionNo} size="small" />
      <div>{salon.address}</div>
    </div>
    <PriceSection />
    <div className={styles.arrowRight}>
      <ReactSVG src="/assets/icons/arrow_s_r.svg" width={8} height={11} />
    </div>
  </li>
);

export default ListItem;
