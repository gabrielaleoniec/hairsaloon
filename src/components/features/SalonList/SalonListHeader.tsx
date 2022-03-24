import { Dispatch, SetStateAction } from "react";
import { ReactSVG } from "react-svg";
import GoBack from "../../ui/GoBack/GoBack";
import styles from "./SalonListHeader.module.scss";

type SalonListHeader = {
  isFilter: boolean;
  setIsFilter: Dispatch<SetStateAction<boolean>>;
};

const SalonListHeader = ({ isFilter, setIsFilter }: SalonListHeader) => (
  <div className={styles.header}>
    <GoBack variant="orange" />
    <h1 className={`h1 ${styles.name}`}>Hår</h1>
    <ReactSVG
      src="/assets/icons/filter.svg"
      alt=""
      width={34}
      height={30}
      onClick={() => {
        setIsFilter(!isFilter);
      }}
      className={styles.filter}
    />
  </div>
);

export default SalonListHeader;
