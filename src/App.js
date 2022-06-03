import "./App.css";
import CountryCard from "./components/CountryCard";

const App = () => {
  /*    // for dynamic data
const [ourcountry, setOurcountry] = useState([]);

const getCountry = async () => {
  const responce = await fetch("https://restcountries.com/v3.1/all");
  setOurcountry(await responce.json());
  // const data = await responce.json();
  // console.log(data);
};

useEffect(() => {
  getCountry();
}, []);

ourcountry.map((element) => {
  console.log(element); 
  });   */

  return (
    <div className="App">
      <h1 className="header">Countries</h1>
      <div className="Cards">
        <CountryCard />
      </div>
    </div>
  );
};

export default App;
