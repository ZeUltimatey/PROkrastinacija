import { Categories } from "./categories/Categories";
import { MainCard } from "./main-card/MainCard";
import { SpecialOffers } from "./special-offers/SpecialOffers";

export const Homepage = () => {
  return (
    <>
      <MainCard />
      <SpecialOffers />
      <Categories />
    </>
  );
};
