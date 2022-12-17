const soleado = '<i class="fa-solid fa-sun"></i>'
const nublado = '<i class="fa-solid fa-cloud"></i>'
const lluvia = '<i class="fa-solid fa-cloud-rain"></i>'
const moon = '<i class="fa-solid fa-moon"></i>'

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a728c70acmsh13b5d3b50d9af2dp1c73cbjsn498e328370be",
    "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
  },
};


export const doIt = async (ciudad) => {
  const response = await fetch(
    `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${ciudad}&contentType=json&unitGroup=us&shortColumnNames=0`,
    options
	);
	const datos = await response.json();
  const farenheit = datos.locations[ciudad].currentConditions.temp;
  const celcius = ((farenheit - 32) * 5) / 9;
  
  const sunSet = datos.locations[ciudad].currentConditions.sunset
  .split("T")[1]
  .split("-")[0];
  const futurepronostic = datos.locations[ciudad].values;
  console.log(datos.locations[ciudad].address.toLocaleUpperCase());
  console.log("Temperatura: " + celcius.toFixed(1));
  console.log("Puesta de Sol: " + sunSet);
  const currentDatos = datos.locations[ciudad]
  
  return {futurepronostic, currentDatos}
};











// root.innerHTML = `<h4>${datos.locations[
//     ciudad
//   ].address.toLocaleUpperCase()}</h4>
//   `;

// 	if(i<6){

// 		const celciusMx = ((days.maxt - 32) * 5) / 9;
// 		const celciusMn = ((days.mint - 32) * 5) / 9;
// 		console.log([celcius.toFixed(1), days.conditions, days.solarradiation]);
// 		let condicion = ''

// 		if(days.conditions.includes('Clear')){
// 			 condicion = soleado
// 			 console.log('soleado')
// 		}else if(days.conditions.includes('cloudy')||days.conditions.includes('Cloudy')||days.conditions.includes('Overcast')){
// 			 console.log('nubes')
// 			 condicion = nublado
// 		}else if(days.conditions.includes('Rain')){
// 			 console.log('lluvia')
// 			 condicion = lluvia
// 		}

// 		root.innerHTML += `
// 		<p>  ${celciusMx.toFixed(1)} Max	</p>
// 		<p>  ${celciusMn.toFixed(1)} Mín	</p>
// 		<p>	 ${condicion}</p>
// 		<p>  ${days.humidity}% Humedad </p>
// 		<br>
// 		`;
// }