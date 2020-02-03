const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const data = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(resp => data.push(...resp));

function findMatches(query, data) {
  return data.filter(city => {
    const regex = new RegExp(query, "gi");
      return city.city.match(regex) || city.state.match(regex);
  });
};



function numberWithComas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
    const foundArray = findMatches(this.value, data);
    const html = foundArray.map(item => {
        const regex = new RegExp(this.value, "gi");
        const cityName = item.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = item.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `<li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithComas(item.population)}
                        <span class="area"></span>
                    </span>
                    <a class="distance" onclick='distance(${item.latitude}, ${item.longitude}, ${24.9013564}, ${67.1071363})'>Get distance
                    </a>
                </li>`; 
    }).join("");
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const distanceBtn = document.querySelector(".distance");


searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);


let distance = function (lat1, lon1, lat2, lon2, unit = "K") {
    let areaItems = [...document.querySelectorAll(".area")];
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
      areaItems.map((city) => {
          city.innerHTML = `${Math.round(dist)}KM`;
      })
      
    //   for (let i = 0; i < areaItems.length; i++) {
    //       const city = areaItems[i];
    //       city.innerHTML = `${Math.round(dist)}KM`;
    //   }
      
    return dist;
  }
}
// distanceBtn.addEventListener("click", distance)

// for (let i = 0; i < areaItems.length; i++) {
//   const city = areaItems[i];
//   console.log(city);
// }