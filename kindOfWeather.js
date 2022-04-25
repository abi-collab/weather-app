let kindOfWeather = [ // declare kinds of weather
    {
      name:'clear sky',
      backImg:'url("https://media.istockphoto.com/photos/blue-sky-with-cloud-picture-id1151056603?b=1&k=20&m=1151056603&s=170667a&w=0&h=gWVMsxMs2fnQHazBiqmbH-ccWKoYlTNOOg7iihVmex0=")'
    },
    {
      name:'few clouds',
      backImg:'url("https://static.vecteezy.com/system/resources/previews/003/467/147/non_2x/blue-sky-and-white-clouds-clouds-against-blue-sky-background-free-photo.JPG")'
    },
    {
      name:'scattered clouds',
      backImg:'url("https://www.freevector.com/uploads/vector/preview/7040/FreeVector-Rain-Background.jpg")'
    },
    {
      name:'broken clouds',
      backImg:'url("https://static3.bigstockphoto.com/1/3/3/large1500/331037425.jpg")'
    },
    {
      name:'shower rain',
      backImg:'url("https://img.freepik.com/free-vector/rainfall-drops-black-background_1017-33594.jpg")'
    },
    {
      name:'rain',
      backImg:'url("https://c4.wallpaperflare.com/wallpaper/342/808/970/glass-drops-rain-moisture-wallpaper-preview.jpg")'
    },
    {
      name:'thunderstorm',
      backImg:'url("https://cdn.wallpapersafari.com/97/42/g5fQyM.jpg")'
    },
    {
      name:'snow',
      backImg:'url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701312129.jpg")'
    },
    {
      name:'mist',
      backImg:'url("https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?cs=srgb&dl=pexels-pixabay-416920.jpg&fm=jpg")'
    },
    {
      name:'overcast clouds',
      backImg:'url("https://amazing-wings.com/wp-content/uploads/2017/12/Sky-Clouds.jpg")'
    },
    {
      name:'heavy intensity rain',
      backImg:'url("https://www.freevector.com/uploads/vector/preview/7040/FreeVector-Rain-Background.jpg")'
    },
    {
      name:'thunderstorm with light rain',
      backImg:'url("https://i.pinimg.com/originals/09/88/fe/0988fe845da2f4eafea44e83f215cb67.jpg")'
    },
    {
      name:'thunderstorm with rain',
      backImg:'url("https://i.pinimg.com/originals/09/88/fe/0988fe845da2f4eafea44e83f215cb67.jpg")'
    },
    {
      name:'thunderstorm with heavy rain',
      backImg:'url("https://sambadenglish.com/wp-content/uploads/2019/06/157ZIapRuOaO4HVf916cHjRZq_4Ope2Z2.jpg")'
    },
    {
      name:'light thunderstorm',
      backImg:'url("https://media.wired.com/photos/5ade783ff34de631fa11fd59/master/w_1999,h_1333,c_limit/8_JasonWeingart.jpg")'
    },
    {
      name:'thunderstorm',
      backImg:'url("https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")'
    },
    {
      name:'heavy thunderstorm',
      backImg:'url("https://sambadenglish.com/wp-content/uploads/2019/06/157ZIapRuOaO4HVf916cHjRZq_4Ope2Z2.jpg")'
    },
    {
      name:'ragged thunderstorm',
      backImg:'url("https://i.pinimg.com/originals/09/88/fe/0988fe845da2f4eafea44e83f215cb67.jpg")'
    },
    {
      name:'thunderstorm with light drizzle',
      backImg:'url("https://media.wired.com/photos/5ade783ff34de631fa11fd59/master/w_1999,h_1333,c_limit/8_JasonWeingart.jpg")'
    },
    {
      name:'thunderstorm with drizzle',
      backImg:'url("https://i.pinimg.com/originals/09/88/fe/0988fe845da2f4eafea44e83f215cb67.jpg")'
    },
    {
      name:'thunderstorm with heavy drizzle',
      backImg:'url("https://i.pinimg.com/736x/a9/87/8c/a9878c8813dc9befc968af830dc97713.jpg")'
    },
    {
      name:'light intensity drizzle',
      backImg:'url("")'
    },
    {
      name:'drizzle',
      backImg:'url("")'
    },
    {
      name:'heavy intensity drizzle',
      backImg:'url("")'
    },
    {
      name:'light intensity drizzle rain',
      backImg:'url("")'
    },
    {
      name:'drizzle rain',
      backImg:'url("")'
    },
    {
      name:'heavy intensity drizzle rain',
      backImg:'url("")'
    },
    {
      name:'shower rain and drizzle',
      backImg:'url("")'
    },
    {
      name:'heavy shower rain and drizzle',
      backImg:'url("")'
    },

    {
      name:'shower drizzle',
      backImg:'url("")'
    },
    {
      name:'light rain',
      backImg:'url("")'
    },
    {
      name:'moderate rain',
      backImg:'url("")'
    },
    {
      name:'heavy intensity rain',
      backImg:'url("")'
    },
    {
      name:'very heavy rain',
      backImg:'url("")'
    },
    {
      name:'extreme rain',
      backImg:'url("")'
    },
    {
      name:'freezing rain',
      backImg:'url("")'
    },
    {
      name:'light intensity shower rain',
      backImg:'url("")'
    },
    {
      name:'shower rain',
      backImg:'url("")'
    },
    {
      name:'heavy intensity shower rain',
      backImg:'url("")'
    },
    {
      name:'ragged shower rain',
      backImg:'url("")'
    },

    {
      name:'light snow',
      backImg:'url("")'
    },
    {
      name:'Heavy snow',
      backImg:'url("")'
    },
    {
      name:'Sleet',
      backImg:'url("")'
    },
    {
      name:'Light shower sleet',
      backImg:'url("")'
    },
    {
      name:'Shower sleet',
      backImg:'url("")'
    },
    {
      name:'Light rain and snow',
      backImg:'url("")'
    },
    {
      name:'Rain and snow',
      backImg:'url("")'
    },
    {
      name:'Light shower snow',
      backImg:'url("")'
    },
    {
      name:'Shower snow',
      backImg:'url("")'
    },
    {
      name:'Heavy shower snow',
      backImg:'url("")'
    },
    {
      name:'Smoke',
      backImg:'url("")'
    },
    {
      name:'	Haze',
      backImg:'url("")'
    },
    {
      name:'sand/ dust whirls',
      backImg:'url("")'
    },

    {
      name:'fog',
      backImg:'url("")'
    },
    {
      name:'sand',
      backImg:'url("")'
    },
    {
      name:'dust',
      backImg:'url("")'
    },
    {
      name:'volcanic ash',
      backImg:'url("")'
    },
    {
      name:'squalls',
      backImg:'url("")'
    },
    {
      name:'tornado',
      backImg:'url("")'
    },
    {
      name:'few clouds: 11-25%',
      backImg:'url("")'
    },
    {
      name:'scattered clouds: 25-50%',
      backImg:'url("")'
    },
    {
      name:'broken clouds: 51-84%',
      backImg:'url("")'
    },
    {
      name:'overcast clouds: 85-100%',
      backImg:'url("")'
    }

  ];