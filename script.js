document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    let city = document.getElementById('city').value;
    let resultElement = document.getElementById('result');

    // Replace 'your_username' with your Geonames API username
    let apiUrl = `http://api.geonames.org/searchJSON?q=${encodeURIComponent(city)}&maxRows=1&username=lakhwera_001`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.geonames.length > 0) {
                let country = data.geonames[0].countryName;
                resultElement.textContent = `The city of ${city} is in ${country}.`;
            } else {
                resultElement.textContent =` No country found for the city: ${city}.`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultElement.textContent = 'An error occurred while fetching the data.';
        });
});