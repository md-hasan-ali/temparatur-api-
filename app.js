document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=47ff8691b7c9123f0b9c83bf0c8b78b7`;
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data))
})

const showData = data => {
    console.log(data)
    const containerId = document.getElementById('container-id');
    containerId.innerHTML = "";
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h1>${data.name}</h1>
        <h3><span>${data.main.temp}</span>&deg;C</h3>
        <h1 class="lead">Clouds</h1>   
    `;
    containerId.appendChild(div);
}