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
      backImg:'url("https://ichef.bbci.co.uk/news/640/cpsprodpb/C199/production/_101016594_9aff074f-3d3b-4652-952b-d0bea7b3949c.jpg")'
    },
    {
      name:'drizzle',
      backImg:'url("https://deepoceanfacts.com/wp-content/uploads/2019/05/279650_1433049_updates-1280x720.jpg")'
    },
    {
      name:'heavy intensity drizzle',
      backImg:'url("https://st.depositphotos.com/1077338/4738/i/600/depositphotos_47385199-stock-photo-raindrops-on-windowpane-in-summer.jpg")'
    },
    {
      name:'light intensity drizzle rain',
      backImg:'url("https://st.depositphotos.com/1077338/4738/i/600/depositphotos_47385199-stock-photo-raindrops-on-windowpane-in-summer.jpg")'
    },
    {
      name:'drizzle rain',
      backImg:'url("https://st.depositphotos.com/1077338/4738/i/600/depositphotos_47385199-stock-photo-raindrops-on-windowpane-in-summer.jpg")'
    },
    {
      name:'heavy intensity drizzle rain',
      backImg:'url("https://www.freevector.com/uploads/vector/preview/7040/FreeVector-Rain-Background.jpg")'
    },
    {
      name:'shower rain and drizzle',
      backImg:'url("https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/p1etsdotrf1lo2tvm1gt9e7mqsi4.jpg")'
    },
    {
      name:'heavy shower rain and drizzle',
      backImg:'url("https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/p1etsdotrf1lo2tvm1gt9e7mqsi4.jpg")'
    },

    {
      name:'shower drizzle',
      backImg:'url("https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/p1etsdotrf1lo2tvm1gt9e7mqsi4.jpg")'
    },
    {
      name:'light rain',
      backImg:'url("https://www.baltimoresun.com/resizer/twZ1PmKLegY5Uvz_F6dZFHIH3zw=/1200x630/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/OOR2D3AY25BZRIKVE3DTKEC5WA.jpg")'
    },
    {
      name:'moderate rain',
      backImg:'url("https://images.unsplash.com/photo-1513774775025-b2612b7ec096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdnklMjByYWlufGVufDB8fDB8fA%3D%3D&w=1000&q=80")'
    },
    {
      name:'heavy intensity rain',
      backImg:'url("https://www.sciline.org/wp-content/uploads/2021/02/cropped-Torrential-Rain-Flooding-and-Climate-Change.jpg")'
    },
    {
      name:'very heavy rain',
      backImg:'url("https://www.sciline.org/wp-content/uploads/2021/02/cropped-Torrential-Rain-Flooding-and-Climate-Change.jpg")'
    },
    {
      name:'extreme rain',
      backImg:'url("https://www.sciline.org/wp-content/uploads/2021/02/cropped-Torrential-Rain-Flooding-and-Climate-Change.jpg")'
    },
    {
      name:'freezing rain',
      backImg:'url("https://d279m997dpfwgl.cloudfront.net/wp/2022/02/0204_storm03.jpg")'
    },
    {
      name:'light intensity shower rain',
      backImg:'url("https://hackerbits.com/wp-content/uploads/2017/09/What_is_the_difference_between_rain_and_showers.jpg")'
    },
    {
      name:'shower rain',
      backImg:'url("https://i.tribune.com.pk/media/images/974193-imagex-1445028676/974193-imagex-1445028676.jpg")'
    },
    {
      name:'heavy intensity shower rain',
      backImg:'url("https://www.india.com/wp-content/uploads/2021/08/Rain-alert-in-maharashtra-Weather-forecast-in-maharashtra-Heavy-rains-in-next-2-to-4-days-in-the-state-Rainfall-is-likely-to-be-heavy-in-Marathwada-Konkan-and-Central-Maharashtra.jpg")'
    },
    {
      name:'ragged shower rain',
      backImg:'url("https://www.india.com/wp-content/uploads/2021/08/Rain-alert-in-maharashtra-Weather-forecast-in-maharashtra-Heavy-rains-in-next-2-to-4-days-in-the-state-Rainfall-is-likely-to-be-heavy-in-Marathwada-Konkan-and-Central-Maharashtra.jpg")'
    },

    {
      name:'light snow',
      backImg:'url("https://img.apmcdn.org/b5870bb4ad0a5cc9d1620cd38886193958973540/widescreen/8281e9-20210217-light-snow-cover-on-highway-55-and-peony-lane-in-plymouth-720.jpg")'
    },
    {
      name:'Heavy snow',
      backImg:'url("https://scx2.b-cdn.net/gfx/news/2017/motoristsbra.jpg")'
    },
    {
      name:'Sleet',
      backImg:'url("https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg")'
    },
    {
      name:'Light shower sleet',
      backImg:'url("https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg")'
    },
    {
      name:'Shower sleet',
      backImg:'url("https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg")'
    },
    {
      name:'Light rain and snow',
      backImg:'url("https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg")'
    },
    {
      name:'Rain and snow',
      backImg:'url("https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003843465591.jpg")'
    },
    {
      name:'Light shower snow',
      backImg:'url("https://travelingorion.files.wordpress.com/2017/02/img_6666.jpg")'
    },
    {
      name:'Shower snow',
      backImg:'url("https://travelingorion.files.wordpress.com/2017/02/img_6666.jpg")'
    },
    {
      name:'Heavy shower snow',
      backImg:'url("https://www.thecoldwire.com/wp-content/uploads/2021/09/City-Road-with-cars-in-time-of-heavy-snow-in-the-winter.jpg")'
    },
    {
      name:'Smoke',
      backImg:'url("https://i.cbc.ca/1.6108494.1628282889!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/smoke-calgary.jpg")'
    },
    {
      name:'Haze',
      backImg:'url("https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg")'
    },
    {
      name:'sand/ dust whirls',
      backImg:'url("https://pbs.twimg.com/media/EkVG5iKXYAAItJW?format=jpg&name=small")'
    },

    {
      name:'fog',
      backImg:'url("https://researchmatters.in/sites/default/files/maksim-sislo-sf_urbkoffe-unsplash_1_1.jpg")'
    },
    {
      name:'sand',
      backImg:'url("https://www.weatherwizkids.com/wp-content/uploads/2015/04/sandstorm1.jpg")'
    },
    {
      name:'dust',
      backImg:'url("https://www.rmets.org/sites/default/files/inline-images/dust2.jpg")'
    },
    {
      name:'volcanic ash',
      backImg:'url("https://s.w-x.co/manilavolcano7.HPcrop.jpg")'
    },
    {
      name:'squalls',
      backImg:'url("https://cdn.abcotvs.com/dip/images/5112848_013019-cc-accuwx-snow-squall-vid.jpg?w=1600")'
    },
    {
      name:'tornado',
      backImg:'url("https://s.w-x.co/wu/coniglio-imperial-5.27.19-835px.jpeg")'
    },
    {
      name:'few clouds: 11-25%',
      backImg:'url("https://i.pinimg.com/originals/fb/ca/f4/fbcaf4683336684d7232bc9fbdcdf49f.jpg")'
    },
    {
      name:'scattered clouds: 25-50%',
      backImg:'url("https://i.pinimg.com/originals/fb/ca/f4/fbcaf4683336684d7232bc9fbdcdf49f.jpg")'
    },
    {
      name:'broken clouds: 51-84%',
      backImg:'url("https://static.euronews.com/articles/stories/05/94/51/84/1440x810_cmsv2_ad72278e-ca36-55a7-981a-e4fc90e65902-5945184.jpg")'
    },
    {
      name:'overcast clouds: 85-100%',
      backImg:'url("https://www.openfootage.net/wp-content/uploads/2014/09/OpenfootageNET_00181_overcast_1080p.0001.jpg")'
    }

  ];

  // module.exports = {kindOfWeather};

// exporting kindOfWeather
export { kindOfWeather };