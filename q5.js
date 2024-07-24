async function getCountriesUsingUSD() {
    try {

        let response = await fetch('https://restcountries.com/v3.1/all');
        let countries = await response.json();
        let countriesUsingUSD = countries.filter(country => {
            return country.currencies && Object.values(country.currencies).some(currency => currency.name === 'United States dollar');
        });

        countriesUsingUSD.forEach(country => {
            console.log(`Country: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'No capital'}, Flag: ${country.flags.png}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getCountriesUsingUSD();