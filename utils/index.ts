export async function fetchCars(){
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
  const headers = {
    'X-RapidAPI-Key': '1ffdd9f706msh743f719f139056cp15f828jsn3afcf30a9a7a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  const response = await fetch(url, {headers});
  const result = await response.json();

  return result
};

