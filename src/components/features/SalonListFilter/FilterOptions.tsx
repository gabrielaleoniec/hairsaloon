import { Dispatch, SetStateAction } from "react";
import { FilterType } from "./Filter";
import FilterItem from "./FilterItem";
import style from "./FilterOptions.module.scss";

type FilterOptions = {
  filterHidden: boolean;
  setFilter: Dispatch<SetStateAction<FilterType>>;
};
const FilterOptions = ({ filterHidden, setFilter }: FilterOptions) => (
  <ul className={`${filterHidden ? "hidden" : ""} ${style.options}`}>
    <FilterItem filter={{ min: 0, max: null }} setFilter={setFilter} />
    <FilterItem filter={{ min: 0, max: 249 }} setFilter={setFilter} />
    <FilterItem filter={{ min: 250, max: 499 }} setFilter={setFilter} />
    <FilterItem filter={{ min: 500, max: 750 }} setFilter={setFilter} />
  </ul>
);

export default FilterOptions;
