import shortid from 'shortid';
import {
  SET_SERVICE_VALUE,
  ADD_SERVICE,
  DEL_SERVICE,
  REPLACEMENT_SERVICE,
  EXCHANGE_SERVICE,
} from './actions';

const initialState = {
  service: { name: '', price: '', replacement: false },
  services: [],
  replacementId: '',
};

const serviceReducer = (state = initialState, action) => {
  if (action.type === SET_SERVICE_VALUE) {
    return {
      service: {
        name: action.name,
        price: action.price,
        replacement: action.replacement,
      },
      services: [...state.services],
      replacementId: state.replacementId,
    };
  }

  if (action.type === ADD_SERVICE) {
    return {
      service: {
        name: state.service.name,
        price: state.service.price,
        replacement: false,
      },
      services: [
        ...state.services,
        {
          name: state.service.name,
          price: state.service.price,
          id: shortid.generate(),
          replacement: false,
        },
      ],
      replacementId: '',
    };
  }

  if (action.type === DEL_SERVICE) {
    return {
      service: { name: '', price: '', replacement: state.service.replacement },
      services: state.services.filter((item) => item.id !== action.id),
      replacementId: state.replacementId,
    };
  }

  if (action.type === REPLACEMENT_SERVICE) {
    return {
      service: { name: action.name, price: action.price, replacement: true },
      services: [...state.services],
      replacementId: action.id,
    };
  }

  if (action.type === EXCHANGE_SERVICE) {
    return {
      service: {
        name: state.service.name,
        price: state.service.price,
        replacement: state.service.replacement,
      },
      services: state.services.filter(
        (item) => item.id !== state.replacementId
      ),
    };
  }

  return state;
};

export default serviceReducer;
