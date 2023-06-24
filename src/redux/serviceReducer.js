import shortid from 'shortid';
import {
  SET_SERVICE_VALUE,
  ADD_SERVICE,
  DEL_SERVICE,
  REPLACEMENT_SERVICE,
  EXCHANGE_SERVICE,
  SET_SEARCH_VALUE,
} from './actions';

const initialState = {
  service: { name: '', price: '', replacement: false },
  services: [],
  replacementId: '',
  searchQuery: '',
  filteredServices: [],
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
      searchQuery: state.searchQuery,
      filteredServices: state.filteredServices,
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
      searchQuery: state.searchQuery,
      filteredServices: state.filteredServices,
    };
  }

  if (action.type === DEL_SERVICE) {
    return {
      service: { name: '', price: '', replacement: state.service.replacement },
      services: state.services.filter((item) => item.id !== action.id),
      replacementId: state.replacementId,
      searchQuery: state.searchQuery,
      filteredServices: state.filteredServices,
    };
  }

  if (action.type === REPLACEMENT_SERVICE) {
    return {
      service: { name: action.name, price: action.price, replacement: true },
      services: [...state.services],
      replacementId: action.id,
      searchQuery: state.searchQuery,
      filteredServices: state.filteredServices,
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
      replacementId: state.replacementId,
      searchQuery: state.searchQuery,
      filteredServices: state.filteredServices,
    };
  }

  if (action.type === SET_SEARCH_VALUE) {
    return {
      service: {
        name: state.service.name,
        price: state.service.price,
        replacement: state.service.replacement,
      },
      services: [...state.services],
      replacementId: state.replacementId,
      searchQuery: action.searchQuery,
      filteredServices: state.services.filter(
        (item) => item.name.indexOf(action.searchQuery) > -1
      ),
    };
  }

  return state;
};

export default serviceReducer;
