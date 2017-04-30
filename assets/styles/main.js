
smoothScroll.init();
$(document).ready(function () {

    $("#tabs li").click(function () {
        $("#tabs li").removeClass("All").filter(this).addClass("All");
        let filter_id = $(this).data("filter");
        $("#items").isotope({
            filter: filter_id,
            animationOption : {
                duration: 1000
            }
        });
    });
});

//document.addEventListener('DOMContentLoaded', () => {
function initMap() {
    let coordinates = {lat: 48.7345164, lng: 37.579577};
    let infoWindowText = document.querySelector('.ba-infoText').innerHTML;
    let mapContainer = document.querySelector('#map');
    let map = new google.maps.Map(mapContainer, {
        center: coordinates,
        zoom: 15,
        disableDefaultUI: true
    });

    let infowindow = new google.maps.InfoWindow({
        content: infoWindowText,
        maxWidth: 500,

    });

    let marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'Free UA',
        //icon: "img/free_ua.jpg"
    });

    //infowindow.open(map, marker);

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, "resize", function () {
        let center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map .setCenter(center);
    })
}
//})
