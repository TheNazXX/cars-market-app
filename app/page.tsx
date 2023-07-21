import { CustomFilter, Main, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const carsData = await fetchCars();
  const isDataEmpty = !Array.isArray(carsData) || carsData.length < 1 || !carsData;

  return (
    <main className="overflow-hidden flex-grow">
      <Main />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="catalog__text-container">
          <h1 className="text-4xl font-extrabold">Cars Catalog</h1>
          <p>Explore the cars you might like</p>

          <div className='catalog__filters'>
          <SearchBar />

          <div className='catalog__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="w-full">
            <div className="catalog__cars-wrapper">
              {carsData.map((item) => (
                <CarCard item={item}/>
              ))}
            </div>
          </section>
        ): (
          <div className="catalog__error-container">
            <h2 className="text-black text-xl font-bold">Oops no results</h2>
            <p>{carsData?.message}</p>
          </div>
        )}
        </div>
      </div>
    </main>
  );
};
 
