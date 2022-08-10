import "./styles/card.css";
// import json data here
import data from './data.json'
import Card from './components/card/card.jsx'
import Title from "./components/Title/Title";
function App() {
  return (
    <div>
      {/* <h1>Props and Maps</h1> */}

      {/* add title component here */}
      <Title/>
      {/* map json data for each item and return card component here */}
      <Card items = {data}/> 
    </div>
  );
}

export default App;
