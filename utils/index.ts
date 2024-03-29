import { CarProps, FilterProps } from "./../types/common";

export async function fetchCars(filters: FilterProps){

  const {manufacturer, year, model, limit, fuel} = filters;

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel}`;

  const headers = {
    "X-RapidAPI-Key": "1ffdd9f706msh743f719f139056cp15f828jsn3afcf30a9a7a",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
  };

  const response = await fetch(url, {headers});
  const result = await response.json();

  return result
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  angle && url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;


  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;


  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  return `${window.location.pathname}?${searchParams.toString()}`;
};
