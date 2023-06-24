import { useSelector, useDispatch } from 'react-redux';

const ServiceAddForm = () => {
  const service = useSelector((state) => state.service);
  const isReplacement = useSelector((state) => state.service.replacement);

  const dispatchFunction = useDispatch();

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (isReplacement) {
      dispatchFunction({
        type: 'EXCHANGE_SERVICE',
      });
    }
    if (service.name.trim().length < 5 || !service.price) return;
    dispatchFunction({ type: 'ADD_SERVICE' });
    dispatchFunction({
      type: 'SET_SERVICE_VALUE',
      name: '',
      price: '',
      replacement: false,
    });
  };

  const ValueChangeName = (event) => {
    dispatchFunction({
      type: 'SET_SERVICE_VALUE',
      name: event.target.value,
      price: service.price,
      replacement: service.replacement,
    });
  };

  const ValueChangePrice = (event) => {
    dispatchFunction({
      type: 'SET_SERVICE_VALUE',
      name: service.name,
      price: event.target.value,
      replacement: service.replacement,
    });
  };

  const cancellationHandler = () => {
    dispatchFunction({
      type: 'SET_SERVICE_VALUE',
      name: '',
      price: '',
      replacement: false,
    });
  };

  return (
    <div className="app-add-form">
      <form className="add-form" onSubmit={SubmitHandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Название услуги"
          name="name"
          value={service.name}
          onChange={ValueChangeName}
        />

        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Стоимость услуги"
          name="price"
          value={service.price}
          onChange={ValueChangePrice}
        />

        <button type="submit" className="btn">
          Save
        </button>
        {isReplacement && (
          <button className="btn" onClick={cancellationHandler}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default ServiceAddForm;
