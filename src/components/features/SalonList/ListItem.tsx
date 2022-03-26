import moment from "moment";
import { SalonType, ServiceType } from "../../../interfaces/salon";
import StarRating from "../../ui/StarRating/StarRating";
import GoToPage from "./GoToPage";
import styles from "./ListItem.module.scss";

type PriceSection = {
  price: ServiceType["price"];
  durationInMinutes: ServiceType["durationInMinutes"];
};

// TODO: Add dynamic price and duration
const PriceSection = ({ price, durationInMinutes }: PriceSection) => (
  <div className={styles.priceSection}>
    <div className={styles.price}>{price}kr</div>
    <div className={styles.duration}>{durationInMinutes}min</div>
  </div>
);

const ListItem = ({
  salon,
  service,
}: {
  salon: SalonType;
  service: ServiceType;
}) => {
  const { name, rate, opinionNo, address, slug } = salon;
  const { closestAvailability, price, durationInMinutes } = service;
  const date = moment(closestAvailability).format("DD.MM.YY, HH:mm");

  return (
    <li className={styles.item}>
      <div className={styles.time}>{date}</div>
      <div className={styles.details}>
        <h2 className="h2">{name}</h2>
        <StarRating rate={rate} opinionNo={opinionNo} size="small" />
        <div>{address}</div>
      </div>
      <PriceSection price={price} durationInMinutes={durationInMinutes} />
      <GoToPage slug={slug} />
    </li>
  );
};

export default ListItem;
