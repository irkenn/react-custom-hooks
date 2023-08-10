import React, {useState} from "react";
import axios from "axios";
import uuid from "uuid";

//Hooks cannot use the async keyword, it should be in the callback format 
const useAxios = (urlBaseAdress ) => {
    const [state, setState] = useState([]);
    //The code should be modified in fetch data
    const fetchData = async (name) => {
        //This is made to work with pokedex API that changes API routes
        //everytime a different pokemon is being selected
        if(typeof name === "string" ){
            urlBaseAdress = `${urlBaseAdress}${name}/`
        }
        const response = await axios.get(urlBaseAdress);
        // add each request to the array
        setState(state => [...state, { ...response.data, id:uuid() }]);
    };
    return [state, fetchData];
}

export default useAxios;