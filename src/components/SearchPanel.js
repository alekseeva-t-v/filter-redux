import { useSelector, useDispatch } from 'react-redux';

const SearchPannel = () => {
  const searchValue = useSelector((state) => state.searchQuery);
  const dispatchFunction = useDispatch();

  const updateSearchHandler = (event) => {
    dispatchFunction({ type: 'SET_SEARCH_VALUE', searchQuery: event.target.value });
  };
  return (
    <div className="search-panel">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти услугу"
        value={searchValue}
        onChange={updateSearchHandler}
      />
    </div>
  );
};

export default SearchPannel;
