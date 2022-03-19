import { FC, useState, useEffect } from "react";
import beerBarStyle from "./BeerBar.module.scss";
import BeerInfoCard from "BeerInfoCard";
import { Beer } from "shared/types/Beer";
import BeerDescriptionModal from "BeerDescriptionModal";

const BeerBar: FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [beerToInspect, setBeerToInspect] = useState<Beer>();

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=60")
      .then((response) => response.json())
      .then((json) => setBeers(json));
  }, []);

  const openBeerDescription = (beer: Beer) => {
    setBeerToInspect(beer);
  };

  const closeBeerDescription = () => {
    setBeerToInspect(undefined);
  };

  return (
    <>
      <div className={beerBarStyle.content}>
        <div className={beerBarStyle.header}>
          Welcome to the PUNK beers bar !
        </div>
        <div className={beerBarStyle.beers}>
          {beers.map((beer) => (
            <BeerInfoCard
              key={beer.id}
              beer={beer}
              openBeerDescription={() => openBeerDescription(beer)}
            />
          ))}
        </div>
      </div>
      {beerToInspect && (
        <BeerDescriptionModal
          beer={beerToInspect}
          onClose={closeBeerDescription}
        />
      )}
    </>
  );
};

export default BeerBar;
