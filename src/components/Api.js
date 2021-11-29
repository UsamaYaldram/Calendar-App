const url = "https://calendarific.com/api/v2/countries?api_key=0075ab8a16edfbd061923134cb6d46a37fa6449e";

export const fetchCountries = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    // console.log(json.response.countries);
    const country = json.response.countries;
    const singleCountry = country.map((name)=>{ return name.country_name});
    // console.log(singleCountry);
    return singleCountry;
  } catch (error) {
    console.log("error", error);
  }
};