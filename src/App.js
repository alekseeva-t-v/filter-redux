import ServiceAddForm from "./components/ServiceAddForm";
import ServiceList from "./components/ServiceList";
import SearchPannel from "./components/SearchPanel";

function App() {
  return (
    <div className="App">
      <ServiceAddForm />
      <SearchPannel />
      <ServiceList />
    </div>
  );
}

export default App;
