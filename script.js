const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";

// --> USANDO ==> async, try, await, catch

async function listaImagenes() {
  try {
    let fetchImagenes = await fetch(url);
    let datosImagenes = await fetchImagenes.json();

    datosImagenes.forEach((element) => {
      const card = document.querySelector("[data-ul]");

      const contenido = ` <li class="card">
        <img class="card__image" src="${element.url}" alt="imagen" />
        <h3 class="card__title">${element.title}</h3>
      </li>
      `;

      card.innerHTML = card.innerHTML + contenido;
    });
  } catch (error) {
    console.log(error);
  }
}

// --> USANDO ==> then y catch

/* function listaImagenes() {
  fetch(url)
    .then((response) => response.json())
    .then((datosImagenes) => {
      console.log(datosImagenes);

      datosImagenes.forEach((element) => {
        const card = document.querySelector("[data-ul]");

        const contenido = ` <li class="card">
          <img class="card__image" src="${element.url}" alt="imagen" />
          <h3 class="card__title">${element.title}</h3>
        </li>
        `;

        card.innerHTML = card.innerHTML + contenido;
      });
    })

    .catch((error) => console.log(error));
} */

listaImagenes();
