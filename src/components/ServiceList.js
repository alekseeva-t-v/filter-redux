import { useSelector } from 'react-redux';

import ServiceListItem from './ServiceListItem';

const ServiceList = () => {
  const services = useSelector((state) => state.services);

  const elements = services.map((item) => {
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
      {!services.length && <p className='info'>Список услуг пуст</p>}
      {elements}
    </ul>
  );
};

export default ServiceList;
