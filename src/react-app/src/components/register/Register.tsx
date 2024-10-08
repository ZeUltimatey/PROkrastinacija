import { RegisterForm } from "./register-page/RegisterForm";

export const Register = () => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-lg p-6 w-full max-w-md md:max-w-xl space-y-4 mt-10 md:mt-4 lg:mt-2">
      <div className="flex">
        <a href="/">
          <i className="fa-solid fa-arrow-left text-2xl hover:cursor-pointer"></i>
        </a>
        <span className="text-2xl font-bold text-center mb-4 text-dark-brown grow">
          Izveido savu profilu!
        </span>
      </div>
      <RegisterForm />
    </div>
  );
};
