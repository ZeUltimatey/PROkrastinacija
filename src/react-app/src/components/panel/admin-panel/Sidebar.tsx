import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const selectedTab = window.location.pathname.split("/")[2];

  return (
    <div className="min-h-screen flex rounded-md ">
      <aside className="w-64 bg-light-gray text-white">
        <div className="text-2xl font-bold mb-8 font-poppins m-8 text-dark-brown text-center">
          Administratora panelis
        </div>
        <nav>
          <ul className="space-y-4 text-dark-brown font-poppins font-semibold">
            <li
              onClick={() => navigate("/panel/statistics")}
              className={`${
                selectedTab === "statistics"
                  ? " bg-medium-brown bg-opacity-90 "
                  : ""
              }hover:bg-medium-brown hover:text-white p-3 text-center cursor-pointer`}
            >
              Statistika
            </li>
            <li
              onClick={() => navigate("/panel/products")}
              className={`${
                selectedTab === "products"
                  ? " bg-medium-brown bg-opacity-90 "
                  : ""
              }hover:bg-medium-brown hover:text-white p-3 text-center cursor-pointer`}
            >
              Produkti
            </li>
            <li
              onClick={() => navigate("/panel/orders")}
              className={`${
                selectedTab === "orders"
                  ? " bg-medium-brown bg-opacity-90 "
                  : ""
              }hover:bg-medium-brown hover:text-white p-3 text-center cursor-pointer`}
            >
              Pasūtijumi
            </li>
            <li
              onClick={() => navigate("/panel/users")}
              className={`${
                selectedTab === "users" ? " bg-medium-brown bg-opacity-90 " : ""
              }hover:bg-medium-brown hover:text-white p-3 text-center cursor-pointer`}
            >
              Lietotāji
            </li>

            <li
              onClick={() => navigate("/panel/encyclopedia")}
              className={`${
                selectedTab === "encyclopedia"
                  ? " bg-medium-brown bg-opacity-90 "
                  : ""
              }hover:bg-medium-brown hover:text-white p-3 text-center cursor-pointer`}
            >
              Enciklopēdija
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};
