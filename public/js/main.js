const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector('.middle_layer');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`Please write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8d14db3aaa21f03e86096b381e971d5b`;
            const response=await fetch(url);
            const data=await response.json(); 
            const arrData=[data];
            const country=arrData[0].sys.country;
            city_name.innerText=`${cityVal}, ${country}`;
            temp_real_val.innerText=arrData[0].main.temp;
            //temp_status.innerText=arrData[0].weather[0].main;
            const tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fa fa-sun' style='color: #eccc68;' aria-hidden='true'>";
            }else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fa fa-cloud' style='color: #f1f2f6;' aria-hidden='true'>";
            }else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fa fa-cloud-rain' style='color: #a4b0be;' aria-hidden='true'>";
            }else{
                temp_status.innerHTML="<i class='fa fa-cloud' style='color: #f1f2f6;' aria-hidden='true'>";
            }
            datahide.classList.remove('data_hide');
            
            console.log(arrData[0].main.temp);
            console.log(temp_status);
        }catch{
            city_name.innerText=`Please enter the city name properly`;
            datahide.classList.add('data_hide');
        }
        
    }
}


submitBtn.addEventListener("click",getInfo);