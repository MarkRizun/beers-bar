import { FC, useState } from "react";
import beerDescriptionModalStyle from "./BeerDescriptionModal.module.scss";
import { Beer } from "shared/types/Beer";
// @ts-ignore
import MaterialIcon from "material-icons-react";

type BeerDescriptionModalProps = {
  beer: Beer;
  onClose: () => void;
};

const BeerDescriptionModal: FC<BeerDescriptionModalProps> = ({
  beer,
  onClose,
}) => {
  const [isTipsDisplayed, setIsTipsDisplayed] = useState(true);

  const toggleTips = () => {
    setIsTipsDisplayed(!isTipsDisplayed);
  };

  return (
    <div className={beerDescriptionModalStyle.mask}>
      <div className={beerDescriptionModalStyle.content}>
        <div className={beerDescriptionModalStyle.header}>
          <div className={beerDescriptionModalStyle.beerName} title={beer.name}>
            {beer.name}
          </div>
          <button
            title="Close the beer description"
            className={beerDescriptionModalStyle.button}
            onClick={onClose}
          >
            <MaterialIcon icon="close" size="medium" />
          </button>
        </div>
        <div className={beerDescriptionModalStyle.description}>
          <img
            src={beer.image_url}
            alt={`The beer ${beer.name}`}
            className={beerDescriptionModalStyle.beerImage}
          />
          <div className={beerDescriptionModalStyle.beerInfo}>
            <div className={beerDescriptionModalStyle.beerMainInfo}>
              <div className={beerDescriptionModalStyle.beerDescription}>
                {beer.description}
              </div>
              <div className={beerDescriptionModalStyle.beerTips}>
                <button
                  title={isTipsDisplayed ? "Hide the tips" : "Show the tips"}
                  className={beerDescriptionModalStyle.button}
                  onClick={toggleTips}
                >
                  <MaterialIcon icon="tips_and_updates" size="medium" />
                </button>

                <div
                  className={
                    isTipsDisplayed
                      ? beerDescriptionModalStyle.tipsDisplayed
                      : beerDescriptionModalStyle.tipsHidden
                  }
                >
                  Our tips: {beer.brewers_tips}
                </div>
              </div>
            </div>
            <div className={beerDescriptionModalStyle.beerTagline}>
              "{beer.tagline}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDescriptionModal;
