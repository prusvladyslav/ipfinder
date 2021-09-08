let mainBtn = document.querySelector('.main-btn');
let dataContainer = document.querySelector('.data-container');
let getIP = 'https://api.ipify.org/?format=json'
let getData = 'https://ipapi.co/'
mainBtn.addEventListener('click',function() {
 fetch(getIP)
.then(response => response.json())
.then(ip => {
    
    fetch(`${getData}${ip.ip}/json/`)
.then(response => response.json())
    .then(data => {
        document.querySelector('.ip-line').textContent = `Your IP: ${data.ip}`
        document.querySelector('.country-line').textContent = ` Your Country: ${data.country_name   }`
        document.querySelector('.region-line').textContent = ` Your Region: ${data.region}`
        document.querySelector('.city-line').textContent = ` Your City: ${data.city}`
        document.querySelector('.city-line').textContent = ` Your City: ${data.city}`
        document.querySelector('.timezone-line').textContent = ` Your Timezone: ${data.timezone}`
        console.log(data);
       }
   

    )
    dataContainer.style.display = 'block';
})
})  