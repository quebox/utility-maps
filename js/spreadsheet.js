fetch(
  `https://script.google.com/macros/s/AKfycbwP0axuD8Ctlu_NnUx-etrtBnFDdvvdAROcwxWTmVVeigK6tFeMsAh7apgeSF31QrSUUg/exec`,
  {
    method: "GET"
  }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    const spreadsheet = document.querySelector("#spreadsheet");

    let table = `
                  <table class='table table-bordered'>
                    <tr>
                      <th>pref_id</th>
                      <th>city_id</th>
                      <th>town_id</th>
                      <th>area</th>
                      <th>population</th>
                      <th>households</th>
                      <th>description</th>
                    </tr>
                `;
    for (let i = 0; i < data.length; i++) {
      table += `
                  <tr>
                    <td>${data[i].pref_id}</td>
                    <td>${data[i].city_id}</td>
                    <td>${data[i].town_id}</td>
                    <td>${data[i].area}</td>
                    <td>${data[i].population}</td>
                    <td>${data[i].households}</td>
                    <td>${data[i].description}</td>
                  </tr>
               `;
    }
    table += "</table>";

    spreadsheet.innerHTML = table;
  })
  .catch(function(error) {
    console.log(error);
  });
