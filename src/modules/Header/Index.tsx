import Logo from "../../assets/icons/LogoRed.svg";
import eventBanner from "../../assets/icons/blackWeek.svg";
import heartIcon from "../../assets/icons/heart.svg";
import euroIcon from "../../assets/icons/euro.svg";
import profileIcon from "../../assets/icons/profile.svg";
import cartIcon from "../../assets/icons/cart.svg";
import questionIcon from "../../assets/icons/QuestionChat.svg";
import clubIcon from "../../assets/icons/clubRRed.svg";
import chevronIcon from "../../assets/icons/chevron.svg";
import Searchbar from "./components/Searchbar";
// TODO: add breakpoint header-1 at 1200px
import NextSearchbar from "./components/NextSearchbar";

import logoNext from "../../assets/icons/next/logo.svg";
import profileWhiteIcon from "../../assets/icons/next/profileWhite.svg";
import productCartIcon from "../../assets/icons/next/cart.svg";
import irelandIcon from "../../assets/icons/next/ireland.png";
import searchWhiteIcon from "../../assets/icons/next/searchMobile.svg";

const Header: React.FC<{ timePassed: boolean }> = ({ timePassed }) => {
  return (
    <header className="mb-40">
      <div
        className={`rakutenHeader border-b pb-2 ${
          timePassed ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
        } transition-all duration-500 ease-in-out fixed top-0 left-0 w-full bg-white text-[#333]`}
      >
        <div className="flex items-center">
          <img
            src={Logo}
            alt="logo"
            className="w-[104px] h-[31px] mr-[6px] ml-2 -mt-0.5 sm:mr-4 sm:ml-[14px] sm:w-[162px] sm:h-[48.19px] lg:w-[204px] lg:h-[60.69px]"
          />
          <div className="w-[70px] hidden  h-[50px] md:flex justify-center items-center cursor-pointer">
            <img
              src={chevronIcon}
              alt="logo"
              className="w-[12.1px] h-[7.5px]"
            />
          </div>
          <Searchbar />
          <a
            href="#event"
            className="hidden lg:flex w-[350px] justify-end items-center ml-3"
          >
            <img
              src={eventBanner}
              alt="black Week Promo"
              className="w-[190px]"
            />
          </a>
        </div>
        <div className="flex pt-1.5 md:text-[15px] md:mt-[5px] mt-1 pb-2.5 text-[13px] leading-[1.214]">
          <div className="cursor-pointer flex-grow flex justify-between flex-col items-center md:flex-row md:justify-center">
            <div className="w-[23px] h-[20px] mt-0.5 flex-col flex gap-1.5 md:mr-2.5">
              <span className="block w-[23px] h-0.5 rounded bg-[#777]"></span>
              <span className="block w-[23px] h-0.5 rounded bg-[#777]"></span>
              <span className="block w-[23px] h-0.5 rounded bg-[#777]"></span>
            </div>
            <span className="mt-[3px] md:mt-0">Menu</span>
          </div>
          <div className="flex-grow flex flex-col justify-center items-center">
            <div className="flex flex-col items-center cursor-pointer md:flex-row">
              <img src={euroIcon} alt="Vendre" className="w-6 md:mr-1.5" />
              <span className="mt-0.5 md:mt-0 md:mb-0.5">Vendre</span>
            </div>
          </div>
          <div className="flex-grow flex-col justify-center items-center hidden sm:flex">
            <div className="flex flex-col items-center cursor-pointer md:flex-row">
              <img src={questionIcon} alt="Vendre" className="w-6 md:mr-1.5" />
              <span className="mt-0.5 md:mt-0 md:mb-0.5">Aide</span>
            </div>
          </div>
          <div className="hidden md:flex flex-grow justify-center items-center cursor-pointer">
            <img src={clubIcon} alt="ClubR" className="w-12 h-5" />
          </div>
          <div className="flex-grow flex-col flex justify-center items-center ">
            <div className="flex flex-col items-center cursor-pointer md:flex-row">
              <img
                src={heartIcon}
                alt="Favoris"
                className="h-6 w-6 md:mr-1.5"
              />
              <span className="mt-0.5 md:mt-0 md:mb-0.5">Favoris</span>
            </div>
          </div>
          <div className="flex-grow flex-col flex justify-center items-center">
            <div className="flex flex-col items-center cursor-pointer md:flex-row">
              <img src={profileIcon} alt="Compte" className="w-6 md:mr-1.5" />
              <span className="mt-0.5 md:mt-0 md:mb-0.5">Compte</span>
            </div>
          </div>
          <div className="flex-grow flex-col flex justify-center items-center">
            <div className="flex flex-col items-center cursor-pointer md:flex-row">
              <img src={cartIcon} alt="Panier" className="w-6 md:mr-1.5" />
              <span className="mt-0.5 md:mt-0 md:mb-0.5">Panier</span>
            </div>
          </div>
        </div>
      </div>

      {/*SECOND HEADER*/}
      <div
        className={`nextHeader bg-black w-full flex justify-center ${
          timePassed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } transition-all duration-500 ease-in-out fixed top-0 left-0`}
      >
        <div className="mx-auto w-full max-w-[1280px]">
          <nav className="h-[44px] md:h-[60px] md:pr-[25px] pl-4 md:pl-8 xl:pl-[41px] flex justify-between">
            <div className="flex items-center">
              <img src={logoNext} alt="logo" className="w-[85px]" />
              <NextSearchbar />
            </div>
            <div className="flex items-center mx-1 md:mr-2 justify-end">
              <div className="cursor-pointer w-[44px] h-[44px] md:hidden flex justify-center items-center">
                <img src={searchWhiteIcon} alt="cart" />
              </div>
              <div className="cursor-pointer w-[44px] lm:w-[100px] h-[44px] flex justify-center items-center">
                <span className="lm:hover:underline hidden lm:block text-white text-[12px] w-[80px] my-[4.8px]">
                  My Account
                </span>
                <img src={profileWhiteIcon} alt="profile" />
              </div>
              <div className="cursor-pointer w-[44px] h-[44px] flex justify-center items-center">
                <img src={productCartIcon} alt="cart" />
                <span className="absolute text-white text-[12px] font-semibold">
                  0
                </span>
              </div>
              <button className="hidden md:block bg-[#185426] rounded-md text-[#808080] text-[14px] w-[120px] h-[36px] font-bold">
                CHECKOUT
              </button>
              <div className="cursor-pointer w-[44px] h-[44px] flex justify-center items-center ml-0.5">
                <div className="rounded-full border-2 h-6 w-6">
                  <img src={irelandIcon} alt="english" />
                </div>
              </div>
            </div>
          </nav>
          <div className="bg-[#1E1E1E] lm:bg-[#000]">
            <div className="overflow-x-auto scroll-smooth no-scrollbar">
              <ul className="h-[44px] md:h-[37px] w-full max-w-[1280px] md:px-[29px] flex justify-between text-[14px] text-white font-semibold items-center whitespace-nowrap">
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full content-center px-[11.6px] text-[#B78B1F]">
                  CHRISTMAS
                </li>
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full transition-colors content-center px-[11.6px]">
                  WOMEN
                </li>
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full transition-colors content-center px-[11.6px]">
                  MEN`S
                </li>
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full transition-colors content-center px-[11.6px]">
                  GIRLS
                </li>
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full transition-colors content-center px-[11.6px]">
                  BOYS
                </li>
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full transition-colors content-center px-[11.6px]">
                  BABY
                </li>
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full transition-colors content-center px-[11.6px]">
                  SHOES
                </li>
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full transition-colors content-center px-[11.6px]">
                  HOME
                </li>
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full transition-colors content-center px-[11.6px]">
                  BRANDS
                </li>
                <li className="cursor-pointer md:hover:bg-white md:hover:text-black h-full transition-colors content-center px-[11.6px] text-[#FF0000]">
                  CLEARANCE
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
