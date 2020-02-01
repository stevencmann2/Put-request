///// JQUERY TO DISPLAY THE TRIPS TO THE USER

$(document).ready(function () {
  
  let timeNow = moment().format("YYYY-MM-DD");
  notrips = $(".notrips")
  tripsContainer = $(".mytrips-container");
  tableBody = $("#tablebody")

  function getTrips() {

    $.get("/api/trips", function (data) {
      const trips = data
      if (!trips || !trips.length) {
        displayNoTrips();
      } else {
        addTableRows(trips);
      }

    })
  }

  function displayNoTrips() {
    const H2 = $("<h2>");
    H2.css({
      "text-align": "center",
      "margin-top": "50px"
    });
    H2.html("You dont appear to have any trips, click <a href='/user'>here</a> in order to create a new trip.");
    notrips.append(H2);
  }

  function addTableRows(trips) {

    for (let i = 0; i < trips.length; i++) {
      let now = moment();
      let tripDate = moment(trips[i].departing)
      tableBody.append(`
     <tr>
      <td><a href='/tripDash/${trips[i].id}'>${trips[i].tripname}</a></td>
      <td>${trips[i].destination}</td>
      <td>${tripDate.diff(now, 'days')}</td>
    </tr>
     `)
    }
  }

  getTrips();

});