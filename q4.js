async function getTotalPopulation() {
    try {
        // Fetch data from the API
        let response = await fetch('https://restcountries.com/v3.1/all');
        let countries = await response.json();
        let totalPopulation = countries.reduce((sum, country) => {
            return sum + country.population;
        }, 0);
        console.log(`Total Population: ${totalPopulation}`);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getTotalPopulation();