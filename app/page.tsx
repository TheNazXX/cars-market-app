import { CustomFilter, Main, SearchBar, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants/customFilters";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({searchParams}: any) {
  
  const carsData = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 8,
    model: searchParams.model || ''
  });

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
            <CustomFilter title='fuel' options={fuels}/>
            <CustomFilter title='year' options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="w-full">
            <div className="catalog__cars-wrapper">
              {carsData.map((item) => (
                <CarCard item={item}/>
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 8) / 8}
              isNext={(searchParams.limit || 8) > carsData.length}
            />
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
 
