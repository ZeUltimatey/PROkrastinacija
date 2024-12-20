import { useNavigate } from "react-router-dom";
import { Constants } from "../../universal/Constants";
import { IQuery } from "../../universal/IQuery";

export const Category = ({
  name,
  link,
  idx,
  image,
}: {
  name: string;
  link: string;
  idx: number;
  image: string;
}) => {
  const navigate = useNavigate();

  const goToFilteredProducts = () => {
    const newQuery: IQuery = {
      keyword: "",
      product_type: name,
      min_price: 0,
      max_price: 9999999,
    };
    localStorage.setItem(
      Constants.LOCAL_STORAGE.QUERY_CATALOG,
      JSON.stringify(newQuery)
    );
    navigate("/products");
  };

  return (
    <div
      onClick={goToFilteredProducts}
      className="group lg:w-80 lg:h-80 w-60 h-60 hover:cursor-pointer"
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="absolute z-0 shadow-md rounded-md group-hover:brightness-95 group-hover:blur-sm transition-all lg:w-80 lg:h-80 w-60 h-60 bg-center bg-cover"
      ></div>
      <span className="z-10 absolute lg:w-80 lg:h-80 h-60 w-60 text-center text-4xl font-bold select-none py-36 transition-all opacity-0 group-hover:opacity-100">
        <p className="text-content-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {name}
        </p>
      </span>
    </div>
  );
};
