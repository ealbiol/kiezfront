
// Inicializando la const token

const BASE_URL = "http://localhost:3000"

export function getNeigbourhoodsFromApi(setLoggedUser) {




    const token = localStorage.getItem("ACCESS_TOKEN")
    if (token) setLoggedUser(true);
    const API_NEIGHBORHOODS = `${BASE_URL}/neighborhoods/`
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token                          //Autorización con token para el acceso a la API 'coatsofarmsimages'
        },
    };
    return fetch(API_NEIGHBORHOODS, params)
        .then(response => response.json())
        .then(data => { return data.neighborhoods });
}