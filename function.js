const apiKey = "0e261e7aac24ebf18fb8561e78da5c9c";
//Getting Location Initilization
const GeoLocationUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
const GeoQuery = ",limit=1&appid=";

//Getting Location's Weather Initilization
const locationWeatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=";
const input = document.getElementById("infoot");

let kindOfWeather = [
  {
    name: "clear sky",
    backImg:
      "https://media.istockphoto.com/photos/blue-sky-with-cloud-picture-id1151056603?b=1&k=20&m=1151056603&s=170667a&w=0&h=gWVMsxMs2fnQHazBiqmbH-ccWKoYlTNOOg7iihVmex0=",
  },
  {
    name: "few clouds",
    backImg:
      "https://static.vecteezy.com/system/resources/previews/003/467/147/non_2x/blue-sky-and-white-clouds-clouds-against-blue-sky-background-free-photo.JPG",
  },
  {
    name: "scattered clouds",
    backImg:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Scattering_of_clouds.jpg",
  },
  {
    name: "broken clouds",
    backImg:
      "https://media.istockphoto.com/photos/sky-picture-id1028827352?b=1&k=20&m=1028827352&s=170667a&w=0&h=zH9qBcDM2kbHgR7agluOefxRtZhZNMvNcmFxJtLhmQA=",
  },
  {
    name: "shower rain",
    backImg:
      "https://img.freepik.com/free-vector/rainfall-drops-black-background_1017-33594.jpg",
  },
  {
    name: "rain",
    backImg:
      "https://c4.wallpaperflare.com/wallpaper/342/808/970/glass-drops-rain-moisture-wallpaper-preview.jpg",
  },
  {
    name: "thunderstorm",
    backImg: "https://cdn.wallpapersafari.com/97/42/g5fQyM.jpg",
  },
  {
    name: "snow",
    backImg:
      "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701312129.jpg",
  },
  {
    name: "mist",
    backImg:
      "https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?cs=srgb&dl=pexels-pixabay-416920.jpg&fm=jpg",
  },
  {
    name: "overcast clouds",
    backImg:
      "https://amazing-wings.com/wp-content/uploads/2017/12/Sky-Clouds.jpg",
  },
  {
    name: "heavy intensity rain",
    backImg:
      "https://www.freevector.com/uploads/vector/preview/7040/FreeVector-Rain-Background.jpg",
  },
  {
    name: "thunderstorm with light rain",
    backImg:
      "https://i.pinimg.com/originals/09/88/fe/0988fe845da2f4eafea44e83f215cb67.jpg",
  },
  {
    name: "thunderstorm with rain",
    backImg:
      "https://i.pinimg.com/originals/09/88/fe/0988fe845da2f4eafea44e83f215cb67.jpg",
  },
  {
    name: "thunderstorm with heavy rain",
    backImg:
      "https://sambadenglish.com/wp-content/uploads/2019/06/157ZIapRuOaO4HVf916cHjRZq_4Ope2Z2.jpg",
  },
  {
    name: "light thunderstorm",
    backImg:
      "https://media.wired.com/photos/5ade783ff34de631fa11fd59/master/w_1999,h_1333,c_limit/8_JasonWeingart.jpg",
  },
  {
    name: "thunderstorm",
    backImg:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    name: "heavy thunderstorm",
    backImg:
      "https://sambadenglish.com/wp-content/uploads/2019/06/157ZIapRuOaO4HVf916cHjRZq_4Ope2Z2.jpg",
  },
  {
    name: "ragged thunderstorm",
    backImg:
      "https://i.pinimg.com/originals/09/88/fe/0988fe845da2f4eafea44e83f215cb67.jpg",
  },
  {
    name: "thunderstorm with light drizzle",
    backImg:
      "https://media.wired.com/photos/5ade783ff34de631fa11fd59/master/w_1999,h_1333,c_limit/8_JasonWeingart.jpg",
  },
  {
    name: "thunderstorm with drizzle",
    backImg:
      "https://i.pinimg.com/originals/09/88/fe/0988fe845da2f4eafea44e83f215cb67.jpg",
  },
  {
    name: "thunderstorm with heavy drizzle",
    backImg:
      "https://i.pinimg.com/736x/a9/87/8c/a9878c8813dc9befc968af830dc97713.jpg",
  },
  {
    name: "light intensity drizzle",
    backImg:
      "http://ichef.bbci.co.uk/news/640/cpsprodpb/C199/production/_101016594_9aff074f-3d3b-4652-952b-d0bea7b3949c.jpg",
  },
  {
    name: "drizzle",
    backImg:
      'https://deepoceanfacts.com/wp-content/uploads/2019/05/279650_1433049_updates-1280x720.jpg")',
  },
  {
    name: "heavy intensity drizzle",
    backImg:
      'https://st.depositphotos.com/1077338/4738/i/600/depositphotos_47385199-stock-photo-raindrops-on-windowpane-in-summer.jpg")',
  },
  {
    name: "light intensity drizzle rain",
    backImg:
      'https://st.depositphotos.com/1077338/4738/i/600/depositphotos_47385199-stock-photo-raindrops-on-windowpane-in-summer.jpg")',
  },
  {
    name: "drizzle rain",
    backImg:
      "https://st.depositphotos.com/1077338/4738/i/600/depositphotos_47385199-stock-photo-raindrops-on-windowpane-in-summer.jpg",
  },
  {
    name: "heavy intensity drizzle rain",
    backImg:
      "https://www.freevector.com/uploads/vector/preview/7040/FreeVector-Rain-Background.jpg",
  },
  {
    name: "shower rain and drizzle",
    backImg:
      "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/p1etsdotrf1lo2tvm1gt9e7mqsi4.jpg",
  },
  {
    name: "heavy shower rain and drizzle",
    backImg:
      "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/p1etsdotrf1lo2tvm1gt9e7mqsi4.jpg",
  },

  {
    name: "shower drizzle",
    backImg:
      "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/p1etsdotrf1lo2tvm1gt9e7mqsi4.jpg",
  },
  {
    name: "light rain",
    backImg:
      "https://www.baltimoresun.com/resizer/twZ1PmKLegY5Uvz_F6dZFHIH3zw=/1200x630/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/OOR2D3AY25BZRIKVE3DTKEC5WA.jpg",
  },
  {
    name: "moderate rain",
    backImg:
      "https://images.unsplash.com/photo-1513774775025-b2612b7ec096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdnklMjByYWlufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "heavy intensity rain",
    backImg:
      "https://www.sciline.org/wp-content/uploads/2021/02/cropped-Torrential-Rain-Flooding-and-Climate-Change.jpg",
  },
  {
    name: "very heavy rain",
    backImg:
      "https://www.sciline.org/wp-content/uploads/2021/02/cropped-Torrential-Rain-Flooding-and-Climate-Change.jpg",
  },
  {
    name: "extreme rain",
    backImg:
      "https://www.sciline.org/wp-content/uploads/2021/02/cropped-Torrential-Rain-Flooding-and-Climate-Change.jpg",
  },
  {
    name: "freezing rain",
    backImg:
      "https://d279m997dpfwgl.cloudfront.net/wp/2022/02/0204_storm03.jpg",
  },
  {
    name: "light intensity shower rain",
    backImg:
      "https://hackerbits.com/wp-content/uploads/2017/09/What_is_the_difference_between_rain_and_showers.jpg",
  },
  {
    name: "shower rain",
    backImg:
      "https://i.tribune.com.pk/media/images/974193-imagex-1445028676/974193-imagex-1445028676.jpg",
  },
  {
    name: "heavy intensity shower rain",
    backImg:
      "https://www.india.com/wp-content/uploads/2021/08/Rain-alert-in-maharashtra-Weather-forecast-in-maharashtra-Heavy-rains-in-next-2-to-4-days-in-the-state-Rainfall-is-likely-to-be-heavy-in-Marathwada-Konkan-and-Central-Maharashtra.jpg",
  },
  {
    name: "ragged shower rain",
    backImg:
      "https://www.india.com/wp-content/uploads/2021/08/Rain-alert-in-maharashtra-Weather-forecast-in-maharashtra-Heavy-rains-in-next-2-to-4-days-in-the-state-Rainfall-is-likely-to-be-heavy-in-Marathwada-Konkan-and-Central-Maharashtra.jpg",
  },

  {
    name: "light snow",
    backImg:
      "https://img.apmcdn.org/b5870bb4ad0a5cc9d1620cd38886193958973540/widescreen/8281e9-20210217-light-snow-cover-on-highway-55-and-peony-lane-in-plymouth-720.jpg",
  },
  {
    name: "Heavy snow",
    backImg: "https://scx2.b-cdn.net/gfx/news/2017/motoristsbra.jpg",
  },
  {
    name: "Sleet",
    backImg:
      "https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg",
  },
  {
    name: "Light shower sleet",
    backImg:
      "https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg",
  },
  {
    name: "Shower sleet",
    backImg:
      "https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg",
  },
  {
    name: "Light rain and snow",
    backImg:
      "https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg",
  },
  {
    name: "Rain and snow",
    backImg:
      "https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg",
  },
  {
    name: "Light shower snow",
    backImg: "https://travelingorion.files.wordpress.com/2017/02/img_6666.jpg",
  },
  {
    name: "Shower snow",
    backImg: "https://travelingorion.files.wordpress.com/2017/02/img_6666.jpg",
  },
  {
    name: "Heavy shower snow",
    backImg:
      "https://www.thecoldwire.com/wp-content/uploads/2021/09/City-Road-with-cars-in-time-of-heavy-snow-in-the-winter.jpg",
  },
  {
    name: "Smoke",
    backImg:
      "https://i.cbc.ca/1.6108494.1628282889!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/smoke-calgary.jpg",
  },
  {
    name: "Haze",
    backImg:
      "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg",
  },
  {
    name: "sand/ dust whirls",
    backImg:
      "https://pbs.twimg.com/media/EkVG5iKXYAAItJW?format=jpg&name=small",
  },

  {
    name: "fog",
    backImg:
      "https://researchmatters.in/sites/default/files/maksim-sislo-sf_urbkoffe-unsplash_1_1.jpg",
  },
  {
    name: "sand",
    backImg:
      "http://www.weatherwizkids.com/wp-content/uploads/2015/04/sandstorm1.jpg",
  },
  {
    name: "dust",
    backImg:
      "https://www.rmets.org/sites/default/files/inline-images/dust2.jpg",
  },
  {
    name: "volcanic ash",
    backImg: "https://s.w-x.co/manilavolcano7.HPcrop.jpg",
  },
  {
    name: "squalls",
    backImg:
      "https://cdn.abcotvs.com/dip/images/5112848_013019-cc-accuwx-snow-squall-vid.jpg?w=1600",
  },
  {
    name: "tornado",
    backImg: "https://s.w-x.co/wu/coniglio-imperial-5.27.19-835px.jpeg",
  },
  {
    name: "few clouds: 11-25%",
    backImg:
      "https://i.pinimg.com/originals/fb/ca/f4/fbcaf4683336684d7232bc9fbdcdf49f.jpg",
  },
  {
    name: "scattered clouds: 25-50%",
    backImg:
      "https://i.pinimg.com/originals/fb/ca/f4/fbcaf4683336684d7232bc9fbdcdf49f.jpg",
  },
  {
    name: "broken clouds: 51-84%",
    backImg:
      "https://static.euronews.com/articles/stories/05/94/51/84/1440x810_cmsv2_ad72278e-ca36-55a7-981a-e4fc90e65902-5945184.jpg",
  },
  {
    name: "overcast clouds: 85-100%",
    backImg:
      "https://www.openfootage.net/wp-content/uploads/2014/09/OpenfootageNET_00181_overcast_1080p.0001.jpg",
  },
];

weatherDataOrigDisplayStyle();

// get current Geo Location on page refresh
function getLocationConstant() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  } else {
    alert("Your browser or device doesn`t support Geolocation");
  }
}

// If we have a successful location update
function onGeoSuccess(event) {
  let geoloc = [
    {
      lat: event.coords.latitude,
      lon: event.coords.longitude,
    },
  ];
  getWeatherOfThisLocation(geoloc);
}

// If something has gone wrong with the geolocation request
function onGeoError(event) {
  alert("Error code " + event.code + ". " + event.message);
}

// getting the input value then passing it to a function(getCityLocationUsingGeoAPI)
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getCityLocationUsingGeoAPI(e);
  }
});

//e is the inputted text, to  be use for query in searching it's Geo Location using Geo Location API, triggered by 'Enter'
async function getCityLocationUsingGeoAPI(e) {
  let city = e.target.value;
  let GeoAPILink = GeoLocationUrl + city + GeoQuery + apiKey;

  const response = await fetch(GeoAPILink);
  let data = await response.json();
  getWeatherOfThisLocation(data);
}

// This Function is triggered by pressing the search Button
// Getting the Geo Location - latitude/longitude then passing to getWeatherOfThisLocation()
async function getCityLocationUsingGeoAPIOnPressSearchButton() {
  let city = document.getElementById("infoot").value;
  let GeoAPILink = GeoLocationUrl + city + GeoQuery + apiKey;
  const response = await fetch(GeoAPILink);
  let data = await response.json();
  getWeatherOfThisLocation(data);
}

async function getWeatherOfThisLocation(latLon) {
  let latitude = latLon[0].lat;
  let longitude = latLon[0].lon;
  let getLocationWeatherData =
    locationWeatherUrl + latitude + "&lon=" + longitude + "&appid=" + apiKey;
  const response = await fetch(getLocationWeatherData);
  let data = await response.json();

  renderToDisplay(data);
}

function renderToDisplay(data) {
  document.getElementById("placetext").innerHTML =
    data.name + ", " + data.sys.country;
  document.getElementById("weather").innerHTML = data.weather[0].description;
  ////////// for Blocks
  document.getElementById("speed").innerHTML =
    "<h3>" + data.wind.speed + "</h3>";
  document.getElementById("deg").innerHTML = "<h3>" + data.wind.deg + "</h3>";
  document.getElementById("gust").innerHTML = "<h3>" + data.wind.gust + "</h3>";
  document.getElementById("fLike").innerHTML =
    "<h3>" + data.main.feels_like + "</h3>";
  document.getElementById("gLevel").innerHTML =
    "<h3>" + data.main.grnd_level + "</h3>";
  document.getElementById("humidity").innerHTML =
    "<h3>" + data.main.humidity + "</h3>";
  document.getElementById("pressure").innerHTML =
    "<h3>" + data.main.pressure + "</h3>";
  document.getElementById("seaLevel").innerHTML =
    "<h3>" + data.main.sea_level + "</h3>";
  document.getElementById("temperature").innerHTML =
    "<h3>" + data.main.temp + "</h3>";
  document.getElementById("temp_min").innerHTML =
    "<h3>" + data.main.temp_min + "</h3>";
  document.getElementById("temp_max").innerHTML =
    "<h3>" + data.main.temp_max + "</h3>";
  document.getElementById("lati").innerHTML = "<h3>" + data.coord.lat + "</h3>";
  document.getElementById("long").innerHTML = "<h3>" + data.coord.lon + "</h3>";
  ///// Table
  document.getElementById("speed2").innerHTML = data.wind.speed;
  document.getElementById("deg2").innerHTML = data.wind.deg;
  document.getElementById("gust2").innerHTML = data.wind.gust;
  document.getElementById("fLike2").innerHTML = data.main.feels_like;
  document.getElementById("gLevel2").innerHTML = data.main.grnd_level;
  document.getElementById("humidity2").innerHTML = data.main.humidity;
  document.getElementById("pressure2").innerHTML = data.main.pressure;
  document.getElementById("seaLevel2").innerHTML = data.main.sea_level;
  document.getElementById("temperature2").innerHTML = data.main.temp;
  document.getElementById("temp_min2").innerHTML = data.main.temp_min;
  document.getElementById("temp_max2").innerHTML = data.main.temp_max;
  document.getElementById("lati2").innerHTML = data.coord.lat;
  document.getElementById("long2").innerHTML = data.coord.lon;
  document.getElementById("frame").src =
    "https://www.google.com/maps/embed/v1/search?key=AIzaSyCOXvUvlo-ITJfpH7Xvjs_KAAE5u-ax3Xc&q=" +
    data.name +
    "&zoom=15";
  let a = document.getElementById("favicon");
  a.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

  changeWeatherTheme(data);
  document.getElementById("infoot").value = "";
}

function changeWeatherTheme(data) {
  let weatherDescription = data.weather[0].description;
  let tema = kindOfWeather.find((theme) => theme.name === weatherDescription);
  document.body.style.backgroundImage = 'url("' + tema.backImg + '")';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = "100%";
}

function weatherDataOrigDisplayStyle() {
  document.getElementById("dataTableContainer").style.display = "none";
  document.getElementById("list").style.display = "inline-flex";
}

function Buttontoggle() {
  let t = document.getElementById("btnVal");
  let table = document.getElementById("dataTableContainer");
  let list = document.getElementById("list");

  if (t.innerHTML == "Switch to Table") {
    t.innerHTML = "Switch to Grid";
    list.style.display = "none";
    table.style.display = "block";
  } else if (t.innerHTML == "Switch to Grid") {
    t.innerHTML = "Switch to Table";
    table.style.display = "none";
    list.style.display = "flex";
  }
}
