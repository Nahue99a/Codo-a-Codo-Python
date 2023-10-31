// GATOS
const apiUrl = 'https://api.thecatapi.com/v1/images/search';

// Boton
const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-containerAPI');

btnCat.addEventListener('click', () => {
  // fetch para realizar una solicitud GET a la URL de la API.
    fetch(apiUrl)
      //  se encarga de manejar la respuesta de la solicitud.
        .then(response => response.json())
        .then(data => {
            // Obtener la url de la imagen del gato
            const catImgUrl = data[0].url;

            // agregar la imagen como background al container
            catImgContainer.style.backgroundImage = `url('${catImgUrl}')`;
            
        })
        .catch(error => console.log(error));
})






// pERROS
const apiUrl2 = 'https://api.thedogapi.com/v1/images/search';

// Boton
const btndog = document.querySelector('#btn-dog');
const dogImgContainer = document.querySelector('#dog-img-containerAPI');

btndog.addEventListener('click', () => {
  // fetch para realizar una solicitud GET a la URL de la API.
    fetch(apiUrl2)
      //  se encarga de manejar la respuesta de la solicitud.
        .then(response => response.json())
        .then(data => {
            // Obtener la url de la imagen del gato
            const dogImgUrl = data[0].url;

            //imagen como background al container
            dogImgContainer.style.backgroundImage = `url('${dogImgUrl}')`;
            
        })
        .catch(error => console.log(error));
})