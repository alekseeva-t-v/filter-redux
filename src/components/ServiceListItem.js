import { useDispatch } from 'react-redux';

const ServiceListItem = (props) => {
  const dispatchFunction = useDispatch();

  const deleteItemHandler = () => {
    dispatchFunction({
      type: 'DEL_SERVICE',
      id: props.id,
    });
  };

  const replacementItemHandler = () => {
    dispatchFunction({
      type: 'REPLACEMENT_SERVICE',
      name: props.name,
      price: props.price,
      id: props.id,
    });
  }

  return (
    <li className="list-group-item">
      <span className="list-group-item-label">{props.name}</span>
      <span className="list-group-item-input">{props.price}</span>
      <div className="btn-group">
        <button
          type="button"
          className="btn-sm"
          onClick={replacementItemHandler}
          //disabled={replacement}
        >
          <span className="btn__img-change">✎</span>
        </button>

        <button type="button" className="btn-sm" onClick={deleteItemHandler}>
          <span className="btn__img-del">⮿</span>
        </button>
      </div>
    </li>
  );
};

export default ServiceListItem;
