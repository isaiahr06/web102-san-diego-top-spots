$(document).ready(function () {
    // write your code here
$.getJSON("data.json", function(data) {
    // process the JSON data
    data.forEach(function(spot,index) {
        let mapLink =`https://www.google.com/maps?q=${spot.location[0]},${spot.location[1]}`;

        let card = `
        <div class="card">
            <img src="${spot.image}" alt="${spot.name}">
            <div class="card-context">
                <h2>#${index + 1} ${spot.name}</h2>
                <p>${spot.description}</p>
                <a href="${mapLink}" target="_blank" class="map-btn">View On Map</a>
            </div>
        </div>`

        $("#spots-container").append(card);

        let row = `<tr>
        <td>${spot.name}</td>
        <td>${spot.description}</td>
        <td><a href="${mapLink}" target="_blank">View on Map</a></td>
        </tr>`;

        $("#spots-table").append(row);

    });
  });
});