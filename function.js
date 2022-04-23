let lat;
		let long;
		getLocationConstant();

		 function getLocationConstant() {
				    if(navigator.geolocation)
				    {
				        navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);  
				    } else {
				        alert("Your browser or device doesn't support Geolocation");
				    }
				}

				// If we have a successful location update
				function onGeoSuccess(event)
				{
				    // console.log(event.coords.latitude);
				    // console.log(event.coords.longitude);
				    let geoloc = [{
				    	lat: event.coords.latitude,
				    	lon: event.coords.longitude
				    }];

				    weather(geoloc);

				    lat = event.coords.latitude;
				    long = event.coords.longitude;

				    // console.log(event.coords);

				}

				// If something has gone wrong with the geolocation request
				function onGeoError(event)
				{
				    alert("Error code " + event.code + ". " + event.message);
				}

				/////////////////////////////////////////////////////////////////////////////

			var input = document.getElementById("infoot");

			   input.addEventListener("keydown", function (e) {
			    if (e.key === "Enter") {  
			      look(e);
			    }
			  });
			async function z() {
				let apiKey = '0e261e7aac24ebf18fb8561e78da5c9c';
				let city = document.getElementById('infoot').value;
				let url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + ',limit=1&appid=' + apiKey;
			    const response = await fetch(url);
			    var data = await response.json();
			    console.log(city);
			    console.log(data);
			    // console.log(data[0].lat);
			    // console.log(data[0].lon);
			    weather(data);
			}
			
			async function look(e) {
				let apiKey = '0e261e7aac24ebf18fb8561e78da5c9c';
				let city = e.target.value;
				let url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + ',limit=1&appid=' + apiKey;

			    const response = await fetch(url);
			    var data = await response.json();
			    weather(data, city);
			    }

			function generateRandomColor(){
			    var letters = 'BCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * letters.length)];
                }
                return color;
			}
			console.log(generateRandomColor()); 
			async function weather(data, city) {
				let latitude = data[0].lat;
				let longitude = data[0].lon;
				let apiKey = '0e261e7aac24ebf18fb8561e78da5c9c';
				let url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ latitude + '&lon='+ longitude + '&appid=' + apiKey;
				const response = await fetch(url);
			    var data = await response.json();
			    document.getElementById('placetext').innerHTML = data.name + ', ' + data.sys.country;
			    document.getElementById('weather').innerHTML = data.weather[0].description;
                ////////// for Blocks
				//wind
				document.getElementById('speed').innerHTML = '<h2>' + data.wind.speed + '</h2>';
			    document.getElementById('deg').innerHTML = '<h2>' + data.wind.deg + '</h2>';
				document.getElementById('gust').innerHTML = '<h2>' + data.wind.gust + '</h2>';
				///main
			    document.getElementById('fLike').innerHTML = '<h2>' + data.main.feels_like + '</h2>';
				document.getElementById('gLevel').innerHTML = '<h2>' + data.main.grnd_level + '</h2>';
				document.getElementById('humidity').innerHTML = '<h2>' + data.main.humidity + '</h2>';
				document.getElementById('pressure').innerHTML = '<h2>' + data.main.pressure + '</h2>';
				document.getElementById('seaLevel').innerHTML = '<h2>' + data.main.sea_level + '</h2>';
				document.getElementById('temperature').innerHTML = '<h2>' + data.main.temp + '</h2>';
				document.getElementById('temp_min').innerHTML = '<h2>' + data.main.temp_min + '</h2>';
				document.getElementById('temp_max').innerHTML = '<h2>' + data.main.temp_max + '</h2>';
				document.getElementById('lati').innerHTML = '<h2>' + data.coord.lat + '</h2>';
				document.getElementById('long').innerHTML = '<h2>' + data.coord.lon + '</h2>';

                ///// Table
                document.getElementById('speed2').innerHTML =  data.wind.speed;
			    document.getElementById('deg2').innerHTML =  data.wind.deg;
				document.getElementById('gust2').innerHTML =  data.wind.gust;

			    document.getElementById('fLike2').innerHTML =  data.main.feels_like;
				document.getElementById('gLevel2').innerHTML =  data.main.grnd_level;
				document.getElementById('humidity2').innerHTML =  data.main.humidity;
				document.getElementById('pressure2').innerHTML =  data.main.pressure;
				document.getElementById('seaLevel2').innerHTML =  data.main.sea_level;
				document.getElementById('temperature2').innerHTML =  data.main.temp;
				document.getElementById('temp_min2').innerHTML =  data.main.temp_min;
				document.getElementById('temp_max2').innerHTML =  data.main.temp_max;
				document.getElementById('lati2').innerHTML =  data.coord.lat;
				document.getElementById('long2').innerHTML =  data.coord.lon;

				document.getElementById('frame').src = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyCOXvUvlo-ITJfpH7Xvjs_KAAE5u-ax3Xc&q=' +  data.name + '&zoom=15';

			    let a = document.getElementById('favicon');
			    a.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';

			    document.body.style.background = generateRandomColor();
                document.getElementById('infoot').value = '';


			}


            function defaults(){
                document.getElementById("table").style.display = 'none';
                document.getElementById("blocks").style.display = 'block'
            }

            defaults();


            function Buttontoggle(){
            let t = document.getElementById("btnVal");
            let table = document.getElementById("table");
            let grid = document.getElementById("blocks");

            // var x = document.getElementById("myDIV");
            // if (x.style.display === "none") {
            //     x.style.display = "block";
            // } else {
            //     x.style.display = "none";
            // }

            if(t.innerHTML=="Switch to Table"){
                t.innerHTML="Switch to Grid";
                // t.style.backgroundColor = 'grey';
                grid.style.display = 'none';
                table.style.display = 'block';
            }
            else if(t.innerHTML=="Switch to Grid"){
                t.innerHTML="Switch to Table";
                // t.style.backgroundColor = 'grey';
                table.style.display = 'none'
                grid.style.display = 'block';
            }
                
            }

            