var map;
var markers = [];

	function myMap() {
    var mapProp= {
  	    center:new google.maps.LatLng(49.8834677,-119.4519138),
  	    zoom:13,
        styles : [
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#d78686"
      },
      {
        "lightness": 50
      }
    ]
  }
]
  	};
  	 map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

     var BeverlyMarker = new google.maps.Marker({
       map: map,
       position: new google.maps.LatLng(49.8834677,-119.4519138),
       icon: 'img/mapdots/logo.png'
     });
   }
$('.accordion-toggle').click(function(){
    clearMarkers()
    map.setCenter(new google.maps.LatLng(49.8834677,-119.4519138))
    map.setZoom(13);
    $(this).next().children().each(function(){
          var name = $(this).text()
					var numb = name.split(".")[0]
          name = name.substring(2,name.length)
          addMarker({
                      coords : {lat:Number($(this).attr('lat')),lng:Number($(this).attr('lng'))},
                      iconImage:'img/mapdots/mapdot'+ numb + '.png',
                      content: name
                    })
  })
})
// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
function clearMarkers() {
  setMapOnAll(null);
}

   // Add Marker Function
     function addMarker(props){
       var marker = new google.maps.Marker({
         position:props.coords,
         map:map,
         //icon:props.iconImage
       });

       // Check for customicon
       if(props.iconImage){
         // Set icon image
         marker.setIcon(props.iconImage);
       }

       // Check content
       if(props.content){
         var infoWindow = new google.maps.InfoWindow({
           content:props.content
         });

         marker.addListener('click', function(){
           infoWindow.open(map, marker);
         });
       }
       markers.push(marker);
     }

     $('.location').click(function() {
       map.setCenter(new google.maps.LatLng($(this).attr('lat'), $(this).attr('lng')))
       map.setZoom(15);
     });

     $(document).ready(function(){
       $('.accordion-toggle').first().click()
       $('.accordion-toggle').first().click()
     })
