import { Dispatch, SetStateAction } from "react";
import { FilterType } from "./Filter";
import style from "./FilterItem.module.scss";

type FilterItem = {
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>;
};

export const FilterItem = ({ filter, setFilter }: FilterItem) => {
  if (filter.min === 0 && filter.max === null) {
    return (
      <li className={style.item} onClick={() => setFilter(filter)} tabIndex={0}>
        Show all
      </li>
    );
  }
  return (
    <li
      className={style.item}
      onClick={() => setFilter(filter)}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          setFilter(filter);
        }
      }}
      tabIndex={0}
      role="listitem"
    >
      Pris {filter.min} - {filter.max} kr
    </li>
  );
};

export default FilterItem;
