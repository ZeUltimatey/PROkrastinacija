import { useEffect, useState } from "react";
import { Constants } from "../../universal/Constants";
import { useToast } from "../../universal/Toast";
import { Spinner } from "../../universal/Spinner";

type SavedAddress = {
  id: number;
  locationName: string;
  city: string;
  street: string;
  apartment_number: number;
  zip_code: string;
};

type PaymentMethod = {
  id: number;
  expiration_date: string;
  card_name: string;
};

export const PaymentMethods = () => {
  const [methods, setMethods] = useState<PaymentMethod[]>(null);
  const [addresses, setAddresses] = useState<SavedAddress[]>(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedAdress, setSelectedAdress] = useState(null);

  const showToast = useToast();

  const fetchPaymentMethods = async () => {
    await fetch(`${Constants.API_URL}/cards`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          Constants.LOCAL_STORAGE.TOKEN
        )}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        setMethods(data);
      } else {
        showToast(false, "Kļūda iegūstot karšu informāciju.");
      }
    });
  };

  const fetchSavedAddresses = async () => {
    await fetch(`${Constants.API_URL}/locations`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          Constants.LOCAL_STORAGE.TOKEN
        )}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        setAddresses(data);
      } else {
        showToast(false, "Kļūda iegūstot adrešu informāciju.");
      }
    });
  };

  useEffect(() => {
    fetchPaymentMethods();
    fetchSavedAddresses();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">Maksājuma kartes</p>
      <div className="w-full flex flex-col gap-2">
        {methods === null && (
          <div className="mx-auto">
            <Spinner />
          </div>
        )}
        {methods &&
          methods.map((method) => (
            <div
              onClick={() => {
                setSelectedCard(method.id);
              }}
              className={`bg-light-gray border-2  rounded-md p-4 flex gap-2 ${
                selectedCard == method.id
                  ? "border-accent-brown "
                  : "border-hover-brown"
              }`}
            >
              <div
                className={` w-12 h-12  flex place-items-center justify-center rounded-md ${
                  selectedCard == method.id
                    ? "bg-accent-brown"
                    : "bg-hover-brown"
                }`}
              >
                <i
                  className={`fa-solid fa-credit-card text-xl ${
                    selectedCard == method.id
                      ? "text-hover-brown"
                      : "text-accent-brown"
                  }`}
                ></i>
              </div>
              <div>
                <p
                  className={`${
                    selectedCard == method.id ? "font-semibold" : ""
                  }`}
                >
                  {method.card_name}
                </p>
                <p className="text-sm">{method.expiration_date}</p>
              </div>
            </div>
          ))}
        <div className="w-full flex flex-col gap-2 bg-light-gray border-2 hover:bg-hover-brown transition-all rounded-md border-hover-brown place-items-center justify-center h-12">
          <i className="fa-solid fa-plus text-accent-brown text-xl"></i>
        </div>
      </div>

      <p className="font-semibold">Piegādes adreses</p>
      <div className="w-full flex flex-col gap-2 ">
        {addresses === null && (
          <div className="mx-auto">
            <Spinner />
          </div>
        )}
        {addresses &&
          addresses.map((address) => (
            <div
              onClick={() => {
                setSelectedAdress(address.id);
              }}
              className={`bg-light-gray border-2  rounded-md p-4 flex gap-2 ${
                selectedAdress == address.id
                  ? "border-accent-brown "
                  : "border-hover-brown"
              }`}
            >
              <div
                className={` w-12 h-12  flex place-items-center justify-center rounded-md ${
                  selectedAdress == address.id
                    ? "bg-accent-brown"
                    : "bg-hover-brown"
                }`}
              >
                <i
                  className={`fa-solid fa-house text-xl ${
                    selectedAdress == address.id
                      ? "text-hover-brown"
                      : "text-accent-brown"
                  }`}
                ></i>
              </div>
              <div>
                <p
                  className={`${
                    selectedAdress == address.id ? "font-semibold" : ""
                  }`}
                >
                  {address.locationName}
                </p>
                <p className="text-sm">
                  {address.city}, {address.street} {address.apartment_number},{" "}
                  {address.zip_code}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="w-full flex flex-col gap-2 bg-light-gray border-2 hover:bg-hover-brown transition-all rounded-md border-hover-brown place-items-center justify-center h-12">
        <i className="fa-solid fa-plus text-accent-brown text-xl"></i>
      </div>
    </div>
  );
};