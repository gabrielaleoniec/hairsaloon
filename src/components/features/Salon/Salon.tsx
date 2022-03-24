import { Dispatch, SetStateAction, useState } from "react";
import SalonHeader from "./SalonHeader";
import Schema from "./Schema";
import SalonInfo from "./SalonInfo";
import { SalonType } from "../../../interfaces/salon.d";
import styles from "./Salon.module.scss";

type Button = {
  setActiveTab: Dispatch<SetStateAction<string>>;
  isActive: boolean;
  tabName: string;
};

const Button = ({ setActiveTab, isActive, tabName }: Button) => (
  <div
    onClick={() => {
      setActiveTab(tabName);
    }}
    className={`${styles.tab}  ${isActive ? styles.active : ""}`}
  >
    {tabName}
  </div>
);

const Salon = ({ salon }: { salon: SalonType }) => {
  const [activeTab, setActiveTab] = useState("Info");
  if (!salon) return null;
  const { image, name, address, openHours, phone, website, description } =
    salon;
  return (
    <article className={styles.article}>
      <SalonHeader image={image} name={name} />
      <div className={styles.tabContainer}>
        <Button
          setActiveTab={setActiveTab}
          tabName="Info"
          isActive={activeTab === "Info"}
        />
        <Button
          setActiveTab={setActiveTab}
          tabName="Schema"
          isActive={activeTab === "Schema"}
        />
      </div>
      <div className={styles.separator}></div>
      <SalonInfo
        isVisible={activeTab === "Info"}
        address={address}
        phone={phone}
        website={website}
        description={description}
        openHours={openHours}
        className={styles.tabContent}
      />
      <Schema
        isVisible={activeTab === "Schema"}
        className={styles.tabContent}
      />
    </article>
  );
};

export default Salon;
