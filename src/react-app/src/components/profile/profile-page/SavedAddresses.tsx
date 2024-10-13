import { useState } from "react";

export const SavedAddresses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([
    { label: "Pirmā adrese", address: "Čaka iela 69, Rīga" },
    { label: "Otrā adrese", address: "Lienes iela 69, Rīga" },
  ]);
  const [newAddress, setNewAddress] = useState({ label: "", address: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddNewAddress = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setNewAddress({ label: "", address: "" });
  };

  const handleEditAddress = (index: number) => {
    setEditIndex(index);
    setNewAddress(addresses[index]);
    setIsModalOpen(true);
    setIsEditing(true);
  };

  const handleSaveAddress = () => {
    if (newAddress.label && newAddress.address) {
      if (isEditing && editIndex !== null) {
        const updatedAddresses = [...addresses];
        updatedAddresses[editIndex] = newAddress;
        setAddresses(updatedAddresses);
      } else {
        setAddresses([...addresses, newAddress]);
      }
      setNewAddress({ label: "", address: "" });
      setIsModalOpen(false);
    }
  };

  const handleDeleteAddress = (index: number) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-light-gray shadow-md rounded-md p-8 border-2 border-medium-brown">
      <h3 className="text-2xl font-bold text-dark-brown font-poppins mb-4">
        Saglabātās adreses
      </h3>
      <ul className="space-y-4">
        {addresses.map((address, index) => (
          <li
            key={index}
            className="border-b border-dark-brown pb-4 flex justify-between items-center"
          >
            <div>
              <p className="text-dark-brown font-poppins">{address.label}</p>
              <p className="text-sm text-dark-brown font-poppins">
                {address.address}
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleEditAddress(index)}
                className="flex items-center justify-center text-dark-brown hover:text-medium-brown h-8 w-8"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => handleDeleteAddress(index)}
                className="flex items-center justify-center text-red-600 hover:underline text-sm font-poppins h-8 w-8"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={handleAddNewAddress}
        className="bg-light-brown text-white px-6 py-2.5 text-lg rounded-md shadow hover:bg-medium-brown transition-all font-poppins mt-4"
      >
        <i className="fa-solid fa-plus mr-2"></i> Pievienot jaunu
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-dark-brown font-poppins">
                {isEditing ? "Rediģēt adresi" : "Pievienot jaunu adresi"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-dark-brown rounded-full w-7 h-7 flex items-center justify-center"
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-dark-brown font-poppins block mb-1">
                  Adreses Nosaukums
                </label>
                <input
                  type="text"
                  value={newAddress.label}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, label: e.target.value })
                  }
                  className="w-full border border-medium-brown rounded-md p-2"
                  placeholder="Piem., Mājas adrese"
                />
              </div>
              <div>
                <label className="text-sm text-dark-brown font-poppins block mb-1">
                  Adrese
                </label>
                <input
                  type="text"
                  value={newAddress.address}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, address: e.target.value })
                  }
                  className="w-full border border-medium-brown rounded-md p-2"
                  placeholder="Piem., Čaka iela 69, Rīga"
                />
              </div>
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-light-gray text-dark-brown px-4 py-1.5 rounded-md shadow font-poppins"
                >
                  Atcelt
                </button>
                <button
                  type="button"
                  onClick={handleSaveAddress}
                  className="bg-medium-brown text-white px-5 py-1.5 rounded-md shadow font-poppins"
                >
                  {isEditing ? "Saglabāt izmaiņas" : "Pievienot"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
