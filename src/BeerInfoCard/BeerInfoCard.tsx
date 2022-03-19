import { FC } from "react";
import beerInfoCardStyle from "./BeerInfoCard.module.scss";
import { Beer } from "shared/types/Beer";

type BeerInfoCardProps = {
  beer: Beer;
  openBeerDescription: () => void;
};

const BeerInfoCard: FC<BeerInfoCardProps> = ({ beer, openBeerDescription }) => {
  return (
    <div className={beerInfoCardStyle.content} onClick={openBeerDescription}>
      <img
        src={beer.image_url}
        alt={`La bière ${beer.name}`}
        className={beerInfoCardStyle.beerImage}
      />
      <div className={beerInfoCardStyle.beerName} title={beer.name}>
        {beer.name}
      </div>
    </div>
  );
};

export default BeerInfoCard;
