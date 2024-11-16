import { useState } from "react";
import { FormInput } from "../../universal/FormInput";
import { Constants } from "../../universal/Constants";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../universal/Toast";
import { Spinner } from "../../universal/Spinner";

export const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const navigate = useNavigate();

  const showToast = useToast();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(formData.email)) {
      showToast(false, "Lūdzu, ievadiet pareizu e-pastu!");
      setIsLoading(false);
      return;
    }
    if (!formData.password) {
      showToast(false, "Lūdzu, ievadiet paroli!");
      setIsLoading(false);
      return;
    }
    await fetch(`${Constants.API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem(Constants.LOCAL_STORAGE.TOKEN, data.token);
          showToast(true, "Autentifikācija veiksmīga!");
          setTimeout(() => navigate("/"), 1000);
        } else {
          const data = await response.json();
          switch (data.error) {
            case "Invalid credentials":
              showToast(false, "Nepareizs e-pasts vai parole.");
              break;
            default:
              showToast(false, "Kļūda autentifikācijā.");
              break;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  };

  return (
    <div className="absolute flex flex-col bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <div className="flex">
        <p onClick={() => navigate("/auth/login")}>
          <i className="fa-solid fa-arrow-left text-2xl hover:cursor-pointer"></i>
        </p>
        <span className="text-2xl font-bold text-center mb-4 text-dark-brown grow">
          Aizmirsi paroli?
        </span>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 font-poppins">
        {!isEmailSent && (
          <div>
            <label htmlFor="email" className="text-dark-brown">
              E-pasts
            </label>
            <FormInput
              id="email"
              placeholder="Ievadi savu e-pastu!"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        )}

        <input
          disabled={isLoading}
          type="submit"
          value="Tālāk"
          className="w-full bg-light-brown text-white font-semibold py-2 px-4 rounded-md hover:bg-medium-brown transition-all"
        ></input>
        {isLoading && (
          <div className="mx-auto w-full">
            <Spinner />
          </div>
        )}
      </form>
    </div>
  );
};