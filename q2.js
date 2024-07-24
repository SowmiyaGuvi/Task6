async function getSmallPopulationCountries() {
    try {
        // Fetch data from the API
        let response = await fetch('https://restcountries.com/v3.1/all');
        let countries = await response.json();
        let smallPopulationCountries = countries.filter(country => country.population < 200000);
        console.log(smallPopulationCountries.map(country => country.name.common));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getSmallPopulationCountries();