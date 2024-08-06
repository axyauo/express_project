const submitBtn = document.getElementById("submitBtn");
const cityName= document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText= "Enter City Name Before Search"
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ce5cf512202eebfac7842a6ee2f06250`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText= `${arrData[0].name} ${arrData[0].sys.country}`
            temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood === "Clear") {
                temp_status.innerHTML = "<i class='bi bi-sun' style='color: #eccc68;'></i>";
              } else if (tempMood === "Clouds") {
                temp_status.innerHTML = "<i class='bi bi-cloud' style='color: #f1f2f6;'></i>";
              } else if (tempMood === "Rain") {
                temp_status.innerHTML = "<i class='bi bi-cloud-drizzle' style='color: #a4b0be;'></i>";
              } else {
                temp_status.innerHTML = "<i class='bi bi-sun' style='color: #eccc68;'></i>";
              }
              

        }catch{
            city_name.innerText= "Enter City Name Properly"
        }
    }
}
submitBtn.addEventListener('click', getInfo);


// Function to get the current day and date
function updateDateAndDay() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });
    const year = now.getFullYear();
    
    // Update the day and date in the DOM
    document.getElementById('day').textContent = day;
    document.getElementById('today_date').textContent = `${date} ${month}`;
  }
  
  // Call the function to set the date and day on page load
  updateDateAndDay();
  