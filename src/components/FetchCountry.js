import React,{useEffect,useState} from 'react';
import {NativeSelect, FormControl} from "@material-ui/core";
import {fetchCountries} from './Api';

function FetchCountry() {
  const [fetchedcountries, setfetchedcountries] = useState([]);
useEffect(() => {
  const fetchApi = async ()=>{
    setfetchedcountries(await fetchCountries())
  }
  fetchApi();
},[setfetchedcountries]);
return (
  <>
  <FormControl>
  <NativeSelect>
  <option value="glob">Select Country</option>
  {fetchedcountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
  </NativeSelect>
  </FormControl>
  </>
);
}
export default FetchCountry
