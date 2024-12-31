import { useState } from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import upArrow from "../assets/upArrow.svg";
import Login from "./Login";
import AddProductModal from "./AddProductModal"; // Import Add Product Modal

type NavbarProps = {
  setSearch: (value: string) => void;
  setShowAddProduct: (show: boolean) => void;
};

const Navbar = ({ setSearch, setShowAddProduct }: NavbarProps) => {
  const [loginPop, setLoginPop] = useState(false);

  return (
    <>
      <div className="flex p-4 bg-slate-100 shadow-md items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-11 h-9" />

        {/* Location Search */}
        <div className="flex border-2 w-64 p-2 ml-4 border-black bg-white">
          <img src={search} alt="Search Icon" className="w-6 h-5 mt-1" />
          <input
            type="text"
            placeholder="Location"
            className="ml-3 outline-none w-full"
          />
          <img src={upArrow} alt="Arrow Icon" className="w-8 h-7" />
        </div>

        {/* Main Search */}
        <div className="flex border-2 border-black h-12 ml-4 bg-white w-full max-w-md">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find Cars, Mobile phones and more"
            className="ml-3 w-full outline-none"
          />
          <img src={search} alt="Search Icon" className="w-6 h-5 mt-3 mr-2" />
        </div>

        {/* Language Selector */}
        <div className="flex h-12 p-3 ml-6 cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <img src={upArrow} alt="Arrow Icon" className="w-8 h-7 ml-1" />
        </div>

        {/* Login Button */}
        <div
          onClick={() => setLoginPop(!loginPop)}
          className="flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline"
        >
          <h1 className="font-bold text-lg">Login</h1>
        </div>

        {/* Sell Button */}
        <div
          onClick={() => setShowAddProduct(true)} // Open Add Product Modal
          className="w-28 flex h-12 p-2 ml-10 cursor-pointer rounded-full border border-yellow-500 bg-yellow-100 hover:bg-yellow-200"
        >
          <h1 className="font-bold text-lg ml-3">+ SELL</h1>
        </div>
      </div>

      {/* Login Modal */}
      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  );
};

export default Navbar;
