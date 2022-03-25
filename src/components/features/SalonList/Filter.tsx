import { useState } from "react";
import { ReactSVG } from "react-svg";
import style from "./Filter.module.scss";
import FilterItem from "./FilterItem";
import FilterOptions from "./FilterOptions";

export type FilterType = {
  min: number;
  max: number | null;
};

const Filter = ({ filter, setFilter }: FilterItem) => {
  const [filterHidden, setFilterHidden] = useState(true);

  return (
    <div className={style.filter}>
      <div onClick={() => setFilterHidden(!filterHidden)}>
        <div className={style.choice}>
          {typeof filter.min == "number" && filter.max
            ? `Pris ${filter.min} - ${filter.max} kr`
            : "Select price range"}

          <div
            className={`${!filterHidden ? style.arrowDown : ""} ${style.arrow}`}
          >
            <ReactSVG src="/assets/icons/arrow_s_r.svg" width={8} height={11} />
          </div>
        </div>
        <FilterOptions filterHidden={filterHidden} setFilter={setFilter} />
      </div>
    </div>
  );
};

export default Filter;
