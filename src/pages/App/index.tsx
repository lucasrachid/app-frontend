import logo from './../../assets/img/logo.svg';
import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  function SearchForData(){
    useEffect(() => {
      axios("https://digimon-api.vercel.app/api/digimon")
        .then((response) => {
          setData(response.data);
          setError(null);
          console.log(response.data);
        })
        .catch(setError);
    }, []);

    if (error) return error;
  }

  return (
    // <div>
    //   {data.map(item => (
    //     <div key={item}>
    //       {/* <h2>{item.title}</h2>
    //       <p>{item.description}</p> */}
    //       <p>{item.name}</p>
    //     </div>
    //   ))}
    // </div>
    <div>
      <button onClick={SearchForData()}>Buscar Dados</button>
    </div>
  );
}

export default App;