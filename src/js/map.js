export const initMap = (option) => {
	if (document.getElementById('map')) {
		const location = {
			lat: 10.800151,
			lng: 106.698085
		};
		const map = new google.maps.Map(document.getElementById('map'), {
			center: location,
			zoom: 12,
			styles: [{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#444444"
					}]
				},
				{
					"featureType": "administrative.country",
					"elementType": "geometry.stroke",
					"stylers": [{
						"saturation": "-37"
					}]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [{
						"color": "#f2f2f2"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [{
						"visibility": "simplified"
					}]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [{
							"color": "#e6d3d9"
						},
						{
							"visibility": "on"
						}
					]
				}
			]
		});
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: './assets/marker.svg'
		});
	}
}