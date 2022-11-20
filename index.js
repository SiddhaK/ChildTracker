const getlocation = () =>{
    // Get location from the user
    if(navigator.geolocation(){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
//             document.getElementById('loc').innerHTML = "Latitude : " + position.coords.latitude + " | Longitude : "+position.coords.longitude;
        });
    }
}
