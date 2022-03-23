import { SalonType } from "../../../interfaces/salon.d";
import styles from "./SalonInfo.module.scss";

type SalonInfo = {
  isVisible: boolean;
  phone: SalonType["phone"];
  address: SalonType["address"];
  openHours: SalonType["openHours"];
  website: SalonType["website"];
  description: SalonType["description"];
  className?: string;
};

const Address = ({ address }: { address: SalonInfo["address"] }) => {
  if (!address) return null;
  return (
    <address className={`${styles.data} ${styles.address}`}>{address}</address>
  );
};

const OpenHours = ({ openHours }: { openHours: SalonInfo["openHours"] }) => {
  if (!openHours) return null;
  return (
    <div className={`${styles.data} ${styles.openHours}`}>{openHours}</div>
  );
};

const Website = ({ website }: { website: SalonInfo["website"] }) => {
  if (!website) return null;
  return (
    <div className={`${styles.data} ${styles.website}`}>
      <a href={website}>{website}</a>
    </div>
  );
};

const Phone = ({ phone }: { phone: SalonInfo["phone"] }) => {
  if (!phone) return null;
  return <div className={`${styles.data} ${styles.phone}`}>{phone}</div>;
};

const SalonInfo = ({
  isVisible,
  phone,
  address,
  openHours,
  website,
  description,
  className,
}: SalonInfo) => (
  <div className={`${isVisible ? "" : "hidden"} ${className}`}>
    <h2 className="srOnly">Info</h2>
    <Address address={address} />
    <OpenHours openHours={openHours} />
    <Phone phone={phone} />
    <Website website={website} />
    {description && <div className={styles.data}>{description}</div>}
  </div>
);

export default SalonInfo;
