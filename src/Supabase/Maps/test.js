import axios from "axios"


export const testRoute = async () => {
    const result = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.489880,-69.868644&radius=50000&type=bus_station&key=AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4")
    console.log(result.data.results)
}

const apiKey = "TAIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4";
const startingPoint = "Estación de autobuses Santo Domingo";
const endPoint = "Plaza de la Cultura, Santo Domingo";

const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startingPoint}&destination=${endPoint}&key=${apiKey}`;

export const testRoutes2 = async () => {
    fetch(url)
  .then(response => response.json())
  .then(data => {
    const startingLocation = data.routes;
    const endLocation = data.routes;

    console.log("Coordenadas del punto de inicio:", startingLocation);
    console.log("Coordenadas del punto final:", endLocation);
  })
  .catch(error => console.log(error));
    // const result = await axios.get("https://maps.googleapis.com/maps/api/directions/json?origin=18.4790,-69.8908&destination=EndPoint&mode=transit&key=AIzaSyC-T865UIZxMwsH_dySj6QQ4uXB2q4zSB4")
    // console.log(result)
}