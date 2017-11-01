;(function($) {

  "use strict";

  function initMap() {
    var map1, map2, map3, map4;
    
    var myCenter = {lat: 46.4719221, lng: 30.7179912}; 

    var options = [
    {
      zoom: 12,
      center: new google.maps.LatLng(myCenter),
      styles: [
      {
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#f5f5f5"
        }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#616161"
        }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
          "color": "#f5f5f5"
        }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#bdbdbd"
        }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#eeeeee"
        }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#757575"
        }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#e5e5e5"
        }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#9e9e9e"
        }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#ffffff"
        }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#757575"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#dadada"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#616161"
        }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#9e9e9e"
        }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#e5e5e5"
        }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#eeeeee"
        }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#c9c9c9"
        }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#9e9e9e"
        }
        ]
      }
      ]

    },
    {
      zoom: 12,
      center: new google.maps.LatLng(myCenter),
      styles: [
      {
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#ebe3cd"
        }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#523735"
        }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
          "color": "#f5f1e6"
        }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
        {
          "color": "#c9b2a6"
        }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
        {
          "color": "#dcd2be"
        }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#ae9e90"
        }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#dfd2ae"
        }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#dfd2ae"
        }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#93817c"
        }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
        {
          "color": "#a5b076"
        }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#447530"
        }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#f5f1e6"
        }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#fdfcf8"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#f8c967"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
        {
          "color": "#e9bc62"
        }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#e98d58"
        }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
        {
          "color": "#db8555"
        }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#806b63"
        }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#dfd2ae"
        }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#8f7d77"
        }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
        {
          "color": "#ebe3cd"
        }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#dfd2ae"
        }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
        {
          "color": "#b9d3c2"
        }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#92998d"
        }
        ]
      }
      ]
    },
    {
      zoom: 12,
      center: new google.maps.LatLng(myCenter),
      mapTypeId: 'satellite'
    },
    {
      zoom: 12,
      center: new google.maps.LatLng(myCenter),
      mapTypeId: 'terrain'
    }  
    ]

    var markerIcons= [

    {
      title: 'Potemkin Stairs',
      lat: 46.4884233,
      lng: 30.7410745,
      icon: 'https://icon-icons.com/icons2/710/PNG/32/placeholder-12_icon-icons.com_62036.png',
      info: '<div class="info_content">' +
      '<h3>Potemkin Stairs</h3>' +
      '<p>Formal entrance to city from sea,<br> most famous for featuring in the silent<br> film Battleship Potemkin.</p>' +        '</div>'
    },
    {
      title: 'Afina',
      lat: 46.4829318,
      lng: 30.7354254,
      icon: 'https://icon-icons.com/icons2/710/PNG/32/placeholder-20_icon-icons.com_62028.png',
      info: '<div class="info_content">' +
      '<h3>Afina</h3>' +
      '<p>Shopping Mall</p>' + '</div>'
    },
    {
      title: 'Beetroot Academy',
      lat: 46.4782851,
      lng: 30.7235399,
      icon: 'https://icon-icons.com/icons2/710/PNG/32/placeholder-8_icon-icons.com_62040.png',
      info: "<div style='float:left'><img width='80px' src='https://s.dou.ua/CACHE/images/img/events/79539DA891A229355A6C38A564616696855F19B56D7C16A33Dpimgpsh_fullsize_distr/daf11d4f7fc5b5ff389ea439fd15d589.png'></div><div style='float:right; padding: 10px;'><h3>Beetroot Academy</h3>Astahkina Street 29<br/> Odessa,Ukraine</div>"
    },
    {
      title: 'Arboretum Pobedy',
      lat: 46.4451942,
      lng: 30.7557989,
      icon: 'https://icon-icons.com/icons2/710/PNG/32/placeholder-7_icon-icons.com_62041.png',
      info: '<div class="info_content">' +
      '<h3>Arboretum Pobedy</h3>' +
      '<p>Serene arboretum with a pond & play areas,<br> popular for walks, family picnics & photography</p>' +
      '</div>'
    }
    ];

    var infoWindow = new google.maps.InfoWindow(), marker, i;

    for( var i = 0; i < options.length; i++ ) {
      var map = new google.maps.Map(document.getElementsByClassName("map")[i],
        options[i]);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(markerIcons[i].lat, markerIcons[i].lng),
        map: map,
        icon: {
          url: markerIcons[i].icon,
          scaledSize: new google.maps.Size(30, 30) 
        },
        title: markerIcons[i].title
      }); 
      google.maps.event.addListener(map, 'zoom_changed', function(){
        map.setCenter( marker.getPosition() );
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infoWindow.setContent(markerIcons[i].info);
          infoWindow.open(map, marker);
        }
      })(marker, i));
    }
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }
  return array;
}

$('#submit').on('click', function() {
  markerIcons = shuffle(markerIcons);
  console.log(markerIcons);
  var infoWindow = new google.maps.InfoWindow(), marker, i;
  for( var i = 0; i < options.length; i++ ) {
    var map = new google.maps.Map(document.getElementsByClassName("map")[i],
      options[i]);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(markerIcons[i].lat, markerIcons[i].lng),
      map: map,
      icon: {
        url: markerIcons[i].icon,
        scaledSize: new google.maps.Size(30, 30) 
      },
      title: markerIcons[i].title
    }); 
    google.maps.event.addListener(map, 'zoom_changed', function(){
      map.setCenter( marker.getPosition() );
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(markerIcons[i].info);
        infoWindow.open(map, marker);
      }
    })(marker, i));
  }
})

};


$(window).on('load', function () {
  initMap();
});


})(jQuery);








