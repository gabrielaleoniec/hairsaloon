import { SalonType, ServiceType } from "../../../interfaces/salon";
import SalonListHeader from "./SalonListHeader";
import style from "./SalonList.module.scss";
import { useState } from "react";
import Filter, { FilterType } from "./Filter";
import ListItem from "./ListItem";

const selectedServices = (services: ServiceType[], filter: FilterType) => {
  const start: ServiceType[] = [];
  return services?.reduce((previous, current) => {
    const isBelowMin = filter.min ? current.price > filter.min : true;
    const isBelowMax = filter.max ? current.price <= filter.max : true;
    const within = isBelowMin && isBelowMax ? [...previous, current] : previous;
    return within;
  }, start);
};

const filteredSalons = (list: SalonType[], filter: FilterType) => {
  const start: SalonType[] = [];
  return list?.reduce((previous, current) => {
    if (!current.services) {
      return previous;
    }
    const services = selectedServices(current.services, filter);
    const result = [...previous, { ...current, services }];
    return result;
  }, start);
};

const createList = (list: SalonType[], filter: FilterType) => {
  if (!filter) return null;
  const filSalons = filteredSalons(list, filter);

  return (
    <ul className={style.list}>
      {filSalons.map((salon) =>
        salon.services?.map((service) => (
          <ListItem
            key={salon.id + service.id}
            salon={salon}
            service={service}
          />
        ))
      )}
    </ul>
  );
};

const SalonList = ({ list }: { list: SalonType[] }) => {
  const [isFilter, setIsFilter] = useState(false);
  const [filter, setFilter] = useState<FilterType>({ min: 0, max: null });
  return (
    <>
      <SalonListHeader isFilter={isFilter} setIsFilter={setIsFilter} />
      {isFilter && <Filter filter={filter} setFilter={setFilter} />}
      {createList(list, filter)}
    </>
  );
};

export default SalonList;
