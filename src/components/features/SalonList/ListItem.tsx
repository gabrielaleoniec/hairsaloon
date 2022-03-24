import { SalonType } from "../../../interfaces/salon";
import StarRating from "../../ui/StarRating/StarRating";
import GoToPage from "./GoToPage";
import styles from "./ListItem.module.scss";

// TODO: Add dynamic price and duration
const PriceSection = ({}) => (
  <div className={styles.priceSection}>
    <div className={styles.price}>320kr</div>
    <div className={styles.duration}>30min</div>
  </div>
);

const ListItem = ({ salon }: { salon: SalonType }) => {
  const { name, rate, opinionNo, address, slug } = salon;
  return (
    <li className={styles.item}>
      <div className={styles.time}>12.00</div>
      <div className={styles.details}>
        <h2 className="h2">{name}</h2>
        <StarRating rate={rate} opinionNo={opinionNo} size="small" />
        <div>{address}</div>
      </div>
      <PriceSection />
      <GoToPage slug={slug} />
    </li>
  );
};

export default ListItem;
