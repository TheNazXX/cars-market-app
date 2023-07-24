'use client';

import { useState, useEffect } from 'react';
import { CustomFilter, Main, SearchBar, CarCard, ShowMore, Loader } from '@/components';
import { fuels, yearsOfProduction } from '@/constants/customFilters';
import { fetchCars } from '@/utils';
import Image from 'next/image';
import { CarProps } from '@/types/common';

export default function Home({ searchParams }: any) {
  const [carsData, setCarsData] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const [year, setYear] = useState('2022');
  const [fuel, setFuel] = useState('');

  const [limit, setLimit] = useState(8);

  useEffect(() => {
    setLimit(8);
  }, []);

  useEffect(() => {
    onRequest();
  }, [fuel, year, limit, model, manufacturer]);

  const onRequest = () => {
    setLoading(true);
    fetchCars({
      manufacturer,
      year,
      fuel,
      limit,
      model,
    }).then(onLoaded).catch(err => {
      setLoading(false);
      alert('Oops something went wrong');
    });
  };

  const onLoaded = (data: CarProps[]) => {
    setLoading(false);
    setCarsData(data);
  };

  const LoaderComponent = loading ? <Loader /> : null;
  const View = !loading || carsData.length > 1 ? (
    <section className="w-full">
      <div className="catalog__cars-wrapper">
        {carsData.map((item, idx) => (
          <CarCard key={`${item.class}${idx}${item.model}`} item={item} />
        ))}
      </div>
      <ShowMore pageNumber={limit / 8} isNext={limit > carsData.length} setLimit={setLimit}/>
    </section>
  ) : null
  const noResults = !loading && carsData.length < 1 ? <div className="my-20 mx-auto font-extrabold">Oops no results...</div> : null;

  return (
    <main className="overflow-hidden flex-grow">
      <Main />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="catalog__text-container">
          <h1 className="text-4xl font-extrabold">Cars Catalog</h1>
          <p>Explore the cars you might like</p>

          <div className="catalog__filters">
            <SearchBar setManufacturer={setManufacturer} setModel={setModel} manufacturer={manufacturer} model={model}/>

            <div className="catalog__filter-container">
              <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
              <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
            </div>
          </div>

          {noResults}
          {View}
          {LoaderComponent}

        </div>
      </div>
    </main>
  );
}
