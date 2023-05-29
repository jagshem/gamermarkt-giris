import {
  FaLifeRing,
  FaGlobe,
  FaEdit,
  FaSearch,
  FaUser,
  FaGamepad,
  FaFire,
  FaSteam,
  FaEllipsisH,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-white">
        <div className="hidden lg:flex justify-center py-2 mt-2 ml-[80px]">
          {/* Müşteri Yorumları */}
          <div className="mx-2 text-center">
            <a
              className="flex items-center text-sm font-[600] text-gray-700 mt-1"
              href="https://www.gamermarkt.com/musteri-yorumlari"
            >
              <FaEdit className="mr-1 text-gray-600" />
              Müşteri Yorumları
            </a>
          </div>
          {/* SSS / Yardım */}
          <div className="mx-2 text-center">
            <a
              className="flex items-center text-sm font-[600] text-gray-700 mt-1"
              href="https://www.gamermarkt.com/yardim"
            >
              <FaLifeRing className="mr-1 text-gray-600" />
              SSS / Yardım
            </a>
          </div>
          {/* Language TR */}
          <div className="mx-2 text-center">
            <a
              className="flex items-center text-sm font-[600] text-gray-700 mt-1"
              href="https://www.gamermarkt.com/musteri-yorumlari"
            >
              <FaGlobe className="mr-1 text-gray-600" />
              Language TR
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center flex-col items-center py-4 px-6 container text-center sm:flex-row">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <a href="https://www.gamermarkt.com/tr">
                <img
                  src="https://cdns.gamermarkt.com/files/images/logo.png"
                  width="200"
                  height="42"
                  alt="GamerMarkt"
                />
              </a>
            </div>
            {/* Arama Kısmı */}
            <div className="flex items-center flex-grow justify-center">
              <div className="relative">
                <input
                  type="search"
                  className="block w-full sm:w-[550px] h-[39px] p-[1rem] pl-[3rem] text-base font-light text-[#495057] bg-white border border-solid border-black  focus:border-blue-500 focus:border-solid"
                  placeholder="Aramak için birşeyler yazın."
                  size="65"
                  id="searchBar"
                  autoComplete="off"
                />
                <FaSearch className="absolute top-[45%] right-5 transform -translate-y-1/2 text-black" />
              </div>
            </div>
            <div className="flex items-center ml-auto">
              <button className="hidden lg:flex bg-gray-200 rounded-lg py-2.5 px-6 items-center text-sm font-[600] text-gray-700">
                <FaUser className="mr-1" />
                Hesabım
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center py-3 mt-3 bg-gradient-to-r from-stone-900 to-stone-800 p-5">
        <div className="ml-[80px] flex justify-center">
          <div className="mx-2 text-center">
            <a
              className="flex items-center text-base font-semibold text-white mt-1 px-4"
              href="https://www.gamermarkt.com/lol-hesap-satis"
            >
              Riot Games
            </a>
          </div>
          <div className="mx-2 text-center border-l border-r border-white ">
            <a
              className="flex items-center text-base font-semibold text-white mt-1 px-4"
              href="https://www.gamermarkt.com/coc-hesap-satis"
            >
              Supercell
            </a>
          </div>
          <div className="mx-2 text-center">
            <a
              className="flex items-center text-base font-semibold text-white mt-1 px-4"
              href="https://www.gamermarkt.com/steam-hesap-satis"
            >
              Steam
            </a>
          </div>
          <div className="mx-2 text-center border-l border-r border-white">
            <a
              className="flex items-center text-base font-semibold text-white mt-1 px-4"
              href="https://www.gamermarkt.com/steam-hesap-satis"
            >
              Diğer
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
