import { SalonType } from "../../../interfaces/salon";
import ListItem from "./ListItem";
import SalonListHeader from "./SalonListHeader";
import style from "./SalonList.module.scss";
import { useState } from "react";

const createList = (list: SalonType[]) => (
  <ul className={style.list}>
    {list.map((salon) => (
      <ListItem key={salon.id} salon={salon} />
    ))}
  </ul>
);

const SalonList = ({ list }: { list: SalonType[] }) => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <>
      <SalonListHeader isFilter={isFilter} setIsFilter={setIsFilter} />
      {isFilter && <>filter</>}
      {createList(list)}
    </>
  );
};

export default SalonList;
