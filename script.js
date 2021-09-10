let mainBtn = document.querySelector('.main-btn');
let dataContainer = document.querySelector('.data-container');
let getIP = 'https://api.ipify.org/?format=json'
let getData = 'http://ip-api.com/json/'
class Card {
    constructor(query,country,region,city,timezone,mobile) {
        this.country = country
        this.region = region
        this.query = query
        this.city = city
        this.timezone = timezone
        this.mobile = mobile
    }
render() {
let mobileLine = document.createElement('h3');
   if (this.mobile){
    mobileLine.innerHTML = `<h3>You are using phone</h3>`
   }
   else {
      mobileLine.innerHTML = `<h3>You are using PC</h3>`
   }
   const dataContainer = document.createElement('div');
   dataContainer.classList.add('data-container') 
   dataContainer.insertAdjacentHTML('afterbegin',
   `<h3 class="ip-line">
   Your IP: ${this.query}
   </h3>
   <h3 class="country-line">
   Your Country: ${this.country}
   </h3>
   <h3 class="region-line">
   Your Region: ${this.region}
   </h3>
   <h3 class="city-line">
   Your City: ${this.city}
   </h3>
   <h3 class="timezone-line">
   Your Timezone: ${this.timezone}
   </h3>
   ${mobileLine.innerHTML}
   <h3 class="answer-line">
   Обычный скрипт в JS срабатывает строчка за строчкой, когда мы начинаем работать с асинхронностью то эта концепция меняеться и формируется определленая "очередь" задач
   </h3>`)
document.body.append(dataContainer);
mainBtn.remove()
}
}
mainBtn.addEventListener('click', async function() {
let response = await fetch(getIP)
let ip = await response.json()
let dataObj = await fetch(`${getData}${ip.ip}?fields=country,regionName,city,timezone,mobile,query`)
let data = await dataObj.json()
 data = new Card(data.query,data.country,data.regionName,data.city,data.timezone,data.mobile)
 data.render()
})

  