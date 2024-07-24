async function printCountryDetails() {
    try {
        // Fetch data from the API
        let response = await fetch('https://restcountries.com/v3.1/all');
        let countries = await response.json();

        countries.forEach(country => {
            let name = country.name.common;
            let capital = country.capital ? country.capital[0] : 'No capital';
            let flag = country.flags.png;
            console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

printCountryDetails();