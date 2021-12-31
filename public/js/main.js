const submit = document.getElementById('submit');
const name = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const data_hide = document.querySelector('.middle_layer');

submit.addEventListener('click', async (e) => {
    e.preventDefault();

    let cityval = name.value;
    if (cityval === '') {
        city_name.innerText = `Please enter to search city`;
        data_hide.classList.add('data_hide');

    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=0fb25f1fff9ef80c33fba93995ac3e8e`;
            const response = await fetch(url);
            const data = await response.json();
            const arr = [data];
            temp.innerText = arr[0].main.temp;
            const weather = temp_status.innerText = arr[0].weather[0].main;
            if (weather == 'Clouds') {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #eccc68'></i>";
            }
            if (weather == 'Clear') {
                temp_status.innerHTML = "<i class='fas fa-cloud-sun'  style='color: #eccc68'></i>";
            }
            if (weather == 'Rain') {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain'  style='color: #eccc68'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun'  style='color: #eccc68'></i>";
            }
            data_hide.classList.remove('data_hide');

            city_name.innerText = `${arr[0].name},${arr[0].sys.country}`;
        } catch {
            city_name.innerText = `Please enter to search city`;
            data_hide.classList.add('data_hide');
        }

    }



});

// api.openweathermap.org/data/2.5/weather?q=bangalore&appid=0fb25f1fff9ef80c33fba93995ac3e8e