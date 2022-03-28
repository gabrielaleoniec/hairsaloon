import moment from "moment";
import { SalonType, DayOfWeek } from "../../../interfaces/salon.d";
import styles from "./SalonInfo.module.scss";

type SalonInfo = {
  phone: SalonType["phone"];
  address: SalonType["address"];
  openHours: SalonType["openHours"];
  website: SalonType["website"];
  description: SalonType["description"];
  className?: string;
};

const Address = ({ address }: { address: SalonInfo["address"] }) => (
  <address className={`${styles.data} ${styles.address}`}>{address}</address>
);

const OpenHours = ({ openHours }: { openHours: SalonInfo["openHours"] }) => {
  if (!openHours) return null;
  // Today day of week like "Mon", "Tue", ... "Sun"
  const weekdayToday = moment().format("ddd");
  // Casting to type to be able to use day of week as a prop of an object
  const typedWeekdayToday = weekdayToday as keyof typeof DayOfWeek;
  const end = openHours[typedWeekdayToday]?.end;

  return (
    <div className={`${styles.data} ${styles.openHours}`}>
      {/* TODO: remove the title with explanation*/}
      <div title="I will not add the whole dropdown for simplicity of the test">
        Öppet till {end} idag
      </div>
    </div>
  );
};

const Website = ({ website }: { website: SalonInfo["website"] }) => (
  <div className={`${styles.data} ${styles.website}`}>
    <a href={website}>{website}</a>
  </div>
);

const Phone = ({ phone }: { phone: SalonInfo["phone"] }) => (
  <div className={`${styles.data} ${styles.phone}`}>{phone}</div>
);

const SalonInfo = ({
  phone,
  address,
  openHours,
  website,
  description,
  className,
}: SalonInfo) => (
  <div className={className}>
    <h2 className="srOnly">Info</h2>
    {address && <Address address={address} />}
    {openHours && <OpenHours openHours={openHours} />}
    {phone && <Phone phone={phone} />}
    {website && <Website website={website} />}
    {description && (
      <div className={styles.data} data-testid="description">
        {description}
      </div>
    )}
  </div>
);

export default SalonInfo;
