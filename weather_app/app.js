// get all the elements in js file

let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");


// to stop browser refresh
searchButton.addEventListener('click', (e)=>
{
e.preventDefault();
getWeather(searchInput.value); //when someone clicks on search button this fn is called
searchInput.value='';

});

const getWeather=async (city)=>  //async means fn run simultaneously
{
    try{  //if someone enter wrong location

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=213615516b72b6b7067a08e30ea687fd`,
   // reponse is in string 
            // {mode: 'cors'}
        );

        const weatherData= await response.json(); //to convert response in dictionary
        console.log(weatherData);
        const {name}=weatherData;        //const name=weatherData.name; 
        const{feels_like}=weatherData.main;  // from main(nested) dictionary getting feels_like
        const{id,main}=weatherData.weather[0];   //weather is a list inside dictionary 
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        
        if(id<300 && id>200)
        {
            tempicon.src="./drizzle.png"
        }
       else  if(id<400 && id>300)
        {
            tempicon.src="./wind.png"
        }
       else if(id<600&& id>500)
        {
            tempicon.src="./rain.png"
        }
       else  if(id<700 && id>600)
        {
            tempicon.src="./mist.png"
        }
       else  if(id<800 && id>700)
        {
            tempicon.src="./clouds.png"
        }
         else if(id==800)
        {
            tempicon.src="./snow.png"
        }
    }
catch(error)
{
    alert('city not found');
}

};


/*
Note: https://api.openweathermap.org/data/2.5/weather?q=pune&appid=213615516b72b6b7067a08e30ea687fd
enter any city instead of pune
*/





// window.addEventListener("load" ,()=>{

// let long;
// let lat;

// if(navigator.geolocation)
// {

//     navigator.geolocation.getCurrentPosition((position)=>
//     {

   
    
//     long=position.coords.longitude;
//     lat=position.coords.latitude;
//     const proxy="https://cors-anywhere.herokuapp.com/";

//         const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=213615516b72b6b7067a08e30ea687fd `

//         fetch(api).then((response)=>{

//             return response.json();


//         })

//         .then (data =>
//             {

//                     const{name}=data;
//                     const{feels_like}=data.main;
//                     const{id,main}=data.weather[0];


//                     loc.textContent=name;
//                     climate.textContent=main;
//                     tempvalue.textContent=Math.round(feels_like-273);
//                     if(id<300 && id>200)
//                     {
//                         tempicon.src="./drizzle.png"
//                     }
//                    else  if(id<400 && id>300)
//                     {
//                         tempicon.src="./wind.png"
//                     }
//                    else if(id<600&& id>500)
//                     {
//                         tempicon.src="./rain.png"
//                     }
//                    else  if(id<700 && id>600)
//                     {
//                         tempicon.src="./snow.png"
//                     }
//                    else  if(id<800 && id>700)
//                     {
//                         tempicon.src="./clouds.png"
//                     }
//                      else if(id==800)
//                     {
//                         tempicon.src="./mist.png"
//                     }





//                     console.log(data);


//             })



// }
    
    
    
//     )}


// })