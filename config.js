const topBarCenterText = `AA4TE - EM94qh`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/AA4TE", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/weeklycont.php",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  ["2196F3", "CoCoRaHS", "https://maps.cocorahs.org/", "1.2"],
  [
    "2196F3",
    "HOURLY FORECAST",
    "https://forecast.weather.gov/MapClick.php?lat=34.259&lon=-80.5882&unit=0&lg=english&FcstType=graphical",
    
    
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=34.0201&lon=-80.8594&zoom=4",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/grid=on/orthographic=-81.67,33.43,1055/loc=-80.591,34.509",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
    ],

    [
    "SATELLITE SE + CONUS",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/se/GEOCOLOR/GOES16-SE-GEOCOLOR-600x600.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/GOES16-CONUS-GEOCOLOR-625x375.gif",
  ],
   [
    "LOCAL RADAR+",
    "https://radar.weather.gov/ridge/standard/KCAE_loop.gif",
    "https://radar.weather.gov/ridge/standard/KMKX_loop.gif",
    "https://radar.weather.gov/ridge/standard/PACNORTHWEST_loop.gif",
  ],
    [
    "+",
    "http://localhost:8080/get_capture.bmp",
  ],
  [
    " NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
     
  ],

  [
    "+PIVOTAL FORECAST MAPS+",
    
    "https://x-hv1.pivotalweather.com/maps/mrms/latest/mrms_qpe_024h_p.conus.png",
    "https://x-hv1.pivotalweather.com/maps/wpc/latest/wpc_excessive_rainfall_day1.conus.png",
    "https://x-hv1.pivotalweather.com/maps/wpc/latest/wpc_excessive_rainfall_day2.conus.png",
    "https://x-hv1.pivotalweather.com/maps/wpc/latest/wpc_excessive_rainfall_day3.conus.png",
    
  ],
  [
    "LIGHTNING+   HAZARDS-US",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
    "https://x-hv1.pivotalweather.com/maps/warnings/nwshaz.conus.png",
  ],

  
  ["HF PROPAGATION+",
  "https://www.hamqsl.com/solar101vhf.php",
  "https://www.hamqsl.com/solar100sc.php",
  "https://www.hamqsl.com/solarpich.php"
],
  
  [ 
    "Hurricane Lane +", 
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/GEOCOLOR/GOES16-TAW-GEOCOLOR-900x540.gif",
  ],
 [
    "LIGHTNING LOCAL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/se/EXTENT3/GOES16-SE-EXTENT3-600x600.gif",
      ],  

    
  [
     "10M PROPAGATION", "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG",
     
    
  ],

  [
    "Aurora Forecast+ lasco-c2 & RS-44 ",
     "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg",
    "https://services.swpc.noaa.gov/images/animations/lasco-c2/latest.jpg",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
    
  ],

];
