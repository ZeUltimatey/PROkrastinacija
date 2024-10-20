import { useState } from "react";
import { NavbarCart } from "./NavbarCart";
import { CategoryList } from "../homepage/categories/CategoryList";
import { Constants } from "./Constants";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  const Category = ({
    name,
    link,
    idx,
  }: {
    name: string;
    link: string;
    idx: number;
  }) => {
    return (
      <li
        onClick={() => navigate(link)}
        className={`${idx + 1 === CategoryList.length ? "rounded-br-md" : ""} ${
          idx === CategoryList.length - 3 ? "rounded-bl-md" : ""
        } bg-[#EDEAE1] border-[#d8d6ce] brightness-95 hover:brightness-90 px-4 min-w-24 text-center py-2 h-full`}
      >
        {name}
      </li>
    );
  };

  const handleUserClick = async () => {
    await fetch(`${Constants.API_URL}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(
          Constants.SESSION_STORAGE.TOKEN
        )}`,
      },
    }).then((response) => {
      if (response.ok) {
        navigate("/profile");
      } else {
        navigate("/auth/login");
      }
    });
  };

  return (
    <nav className="bg-content-white rounded-t-md">
      <div className="h-20 flex items-center px-6 gap-2 justify-between">
        <div className="w-52 p-4">
          <a href="/">
            <img src={"../cat_logo.png"} alt="Murrātava" />
          </a>
        </div>
        <div className="hidden md:flex text-lg lg:text-xl font-semibold place-items-center grow border-[1.5px] rounded-full border-gray-300 has-[:focus]:border-gray-600">
          <div className="flex grow">
            <input
              placeholder="Meklēt visā Murrātavā..."
              type="text"
              className="text-xl h-12 px-6 w-[600px] font-semibold grow bg-[#f4f1e9] rounded-s-full focus:outline-none font-poppins"
            />
            <button className="bg-[#f4f1e9] text-2xl px-10 rounded-e-full h-12 flex place-items-center hover:bg-opacity-60">
              <i className="fa-solid fa-magnifying-glass "></i>
            </button>
          </div>
        </div>

        <div
          onPointerEnter={() => setShowCategories(true)}
          onPointerLeave={() => setShowCategories(false)}
          className="group hover:cursor-pointer font-semibold text-xl justify-center flex place-items-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("categories")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex place-items-center gap-2 h-20 px-4 group-hover:border-b-4 border-[#A67144] transition-all"
          >
            <i className="fa-solid fa-layer-group text-2xl"></i>
            <span className="font-bold font-poppins">Kategorijas</span>
          </button>
          {showCategories && (
            <div className="h-12 absolute top-[104px] border-t-4 border-[#A67144] shadow-sm">
              <ul className="text-base h-full grid grid-cols-3">
                {CategoryList.map((category, idx) => (
                  <Category
                    name={category.name}
                    link={category.link}
                    idx={idx}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
        {showCart && <NavbarCart />}

        <div className="flex h-full ">
          <button
            onClick={() => {
              setShowCart(!showCart);
            }}
            className={`h-full px-6 hover:border-b-4 border-accent-brown ${
              showCart ? "border-b-4" : "border-b-0"
            } transition-all`}
          >
            <i className="fa-solid fa-basket-shopping text-xl lg:text-2xl"></i>
          </button>
          <button
            onClick={() => handleUserClick()}
            className=" h-full px-6 hover:border-b-4 border-accent-brown transition-all"
          >
            <i className="fa-solid fa-user text-xl lg:text-2xl"></i>
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <i
            className="fa-solid fa-bars text-2xl"
            onClick={() => setNavbarToggle(!navbarToggle)}
          ></i>
        </div>
      </div>

      {navbarToggle && (
        <ul className="md:hidden bg-content-white font-poppins text-lg font-semibold p-4">
          <li className="py-2 hover:cursor-pointer">Kaķi</li>
          <li className="py-2 hover:cursor-pointer">Barība</li>
          <li className="py-2 hover:cursor-pointer">Rotaļlietas</li>
          <li className="py-2 hover:cursor-pointer">Aksesuāri</li>
        </ul>
      )}
    </nav>
  );
};
