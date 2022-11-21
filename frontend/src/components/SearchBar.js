import { useState } from 'react';
import { searchTitle } from '../API/CourseAPI';

function Search(){

    const [results,setResults] = useState([]);
    const getResults = async () =>{
    setResults ((await (searchTitle())));
}


}

export default Search