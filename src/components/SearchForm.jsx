
import { useState } from "react";
import { doIt } from "../hooks/getWeather";
import { useForm } from "../hooks/useForm";
import { ResultCurrent } from "./ResultCurrent";



export const SearchForm = () => {
    const [results, setResults] = useState([])
  const { searchText, onInputChange, onResetForm} = useForm({ searchText: ''});

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    // console.log(searchText)
    // const currentSearch = await doIt(searchText)
    const currentSearch = {'hour':2,'days':2}
    onResetForm()
    let realtResult= currentSearch
    setResults([realtResult, ...results])
};


  return (
    <>
    <div >
  
        <div >
      
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="seach a hero"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button>Search</button>

          </form>
          </div>

        {results.map((result)=>{

            <ResultCurrent key={'d'} result={result}/>
         
        })
        }

    </div>




    </>
  );
};
