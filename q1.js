async function getAsianCountries() {
    try {
        let response = await fetch('https://restcountries.com/v3.1/all');
        let countries = await response.json();
        let asianCountries = countries.filter(country => country.region === 'Asia');
        console.log(asianCountries.map(country => country.name.common));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getAsianCountries();
