$(document).ready(function () {
    // write your code here
$.getJSON("data.json", function(data) {
    // process the JSON data
    data.forEach(function(spot) {
        let mapLink = `https://www.google.com/maps?q=${spot.location[0]},${spot.location[1]}`;

        let row = `<tr>
        <td>${spot.name}</td>
        <td>${spot.description}</td>
        <td><a href="${mapLink}" target="_blank">View on Map</a></td>
        </tr>`;

        $("#spots-table").append(row);

    });
  });
});