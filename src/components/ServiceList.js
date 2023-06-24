import { useSelector } from 'react-redux';

import ServiceListItem from './ServiceListItem';

const ServiceList = () => {
  const services = useSelector((state) => state.services);
  const filteredServices = useSelector((state) => state.filteredServices);
  const searchQuery = useSelector((state) => state.searchQuery);

  const elementsArr = searchQuery.length ? filteredServices : services;
  const isServiceNotFound = (!filteredServices.length && searchQuery.length && services.length) ? true : false;

  const elements = elementsArr.map((item) => {
    return (
      <ServiceListItem
        key={item.id}
        name={item.name}
        price={item.price}
        id={item.id}
        replacement={item.replacement}
      />
    );
  });

  return (
    <ul className="list list-group">
      {!services.length && <p className="info">Список услуг пуст</p>}
      {isServiceNotFound === true && <p className="info">Услуга не найдена</p>}
      {elements}
    </ul>
  );
};

export default ServiceList;
