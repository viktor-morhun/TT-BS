import Logo from "../../assets/icons/LogoRed.svg";
import androidAppIcon from "../../assets/icons/googlePlay.svg";
import iosAppIcon from "../../assets/icons/appStore.svg";
import linkedInIcon from "../../assets/icons/linkedin.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import pinterestIcon from "../../assets/icons/pinterest.svg";
import visaIcon from "../../assets/icons/visa.svg";
import mastercardIcon from "../../assets/icons/mastercard.svg";
import klarnaIcon from "../../assets/icons/klarna.svg";
import payPalIcon from "../../assets/icons/PayPal.svg";
import floaIcon from "../../assets/icons/floa.svg";
import americanExpressIcon from "../../assets/icons/americanExpress.svg";
///NEXT
import profileBlackIcon from "../../assets/icons/next/profileBlack.svg";
import facebookNextIcon from "../../assets/icons/next/facebook.svg";
import xTwitterIcon from "../../assets/icons/next/xTwitter.svg";
import tiktokIcon from "../../assets/icons/next/tiktok.svg";
import instagramNextIcon from "../../assets/icons/next/instagram.svg";
import pinterestNextIcon from "../../assets/icons/next/pinterest.svg";
import youtubeNextIcon from "../../assets/icons/next/youtube.svg";
import chevronNextIcon from "../../assets/icons/next/chevron.svg";

const Footer: React.FC<{ timePassed: boolean }> = ({ timePassed }) => {
  return (
    <footer className={`text-black`}>
      {/*FIRST FOOTER*/}
      <div
        className={`rakutenFooter transition-all duration-500 ease-in-out ${
          timePassed
            ? "opacity-0 translate-y-full pointer-events-none max-h-0 overflow-hidden"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex flex-col md:flex-row py-2.5">
          <div className="flex justify-around py-2.5 px-5 flex-grow md:basis-[60%] border-r-2 border-[#9c9c9c]">
            <img
              className="w-[34px] h-[34px]"
              src={linkedInIcon}
              alt="linkedin"
            />
            <img
              className="w-[34px] h-[34px]"
              src={facebookIcon}
              alt="facebook"
            />
            <img
              className="w-[34px] h-[34px]"
              src={twitterIcon}
              alt="twitter"
            />
            <img
              className="w-[34px] h-[34px]"
              src={instagramIcon}
              alt="instagram"
            />
            <img
              className="w-[34px] h-[34px]"
              src={youtubeIcon}
              alt="youtube"
            />
            <img
              className="w-[34px] h-[34px]"
              src={pinterestIcon}
              alt="pinterest"
            />
          </div>
          <div className="flex justify-around py-2.5 px-5 mx-[43px] md:mx-0 items-center flex-grow md:basis-[40%]">
            <img className="w-[45px] mx-0.5" src={visaIcon} alt="visa" />
            <img
              className="h-[34px] mx-0.5"
              src={mastercardIcon}
              alt="mastercard"
            />
            <img className="h-[30px] mx-0.5" src={klarnaIcon} alt="klarna" />
            <img className="w-[60px] mx-0.5" src={payPalIcon} alt="paypal" />
            <img className="h-[25px] mx-0.5" src={floaIcon} alt="floa" />
            <img
              className="h-[34px] mx-0.5"
              src={americanExpressIcon}
              alt="americanExpress"
            />
          </div>
        </div>

        <div className="w-full bg-[#f7f7f7]">
          <div className="flex flex-col max-w-[760px] mx-auto sm:flex-row pt-[15px] pb-5 px-2.5 justify-center items-center">
            <a
              href="#"
              className="sm:max-w-[386px] text-[12px] sm:text-[14px] text-[#333] sm:mb-0 mb-[17px]"
            >
              Avec l'appli Rakuten, bénéficiez de 5% remboursés en Rakuten
              Points sur tous vos achats !
            </a>
            <div className="flex flex-grow justify-center md:justify-around">
              <a href="#">
                <img
                  className="w-[135px] h-10"
                  src={iosAppIcon}
                  alt="ios app"
                />
              </a>
              <a href="#" className="hidden md:block">
                <img
                  className="w-[135px] h-10"
                  src={androidAppIcon}
                  alt="android app"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="px-5 flex flex-col sm:flex-row justify-center items-center w-full">
          <img
            src={Logo}
            alt="logo"
            className="w-[124px] py-1 h-[61px] lg:w-[204px] lg:h-[60.69px]"
          />
          <ul className="flex flex-grow justify-around p-2 text-[12px] text-[#777]  md:px-5">
            <li className="min-w-[48.5px] flex-grow flex justify-center">
              <a href="#">Rakuten TV</a>
            </li>
            <li className="min-w-[48.5px] flex-grow flex justify-center">
              <a href="#">Rakuten Kobo</a>
            </li>
            <li className="min-w-[48.5px] flex-grow flex justify-center">
              <a href="#">Rakuten Viber</a>
            </li>
            <li className="min-w-[48.5px] flex-grow flex justify-center">
              <a href="#">Rakuten Viki</a>
            </li>
            <li className="min-w-[48.5px] flex-grow flex justify-center">
              <a href="#">Plus de services</a>
            </li>
            <li className="min-w-[48.5px] flex-grow flex justify-center">
              <a href="#">À propos de Rakuten</a>
            </li>
          </ul>
          <select
            name="country"
            className="hidden md:block w-[150px] h-[38px] pl-2.5 text-[#333] outline-none border border-[#d1d1d1] rounded"
            id="country-select"
          >
            <option value="Fraternite">France</option>
            <option value="Pizza">Italy</option>
            <option value="McDonalds">USA</option>
          </select>
        </div>
        <div className="text-center">
          <a href="#" className="p-2 block text-[8px] text-[#333] sm:hidden">
            Rakuten.com
          </a>
        </div>
        <div>
          <p className="text-[#333] text-[12px] text-center px-2 pt-2 pb-2.5">
            © Rakuten France 2000 - 2024
          </p>
        </div>
        <ul className="flex flex-wrap justify-center py-5 px-2.5 text-[12px] underline">
          <li className="min-w-[104px] mx-6 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Makita Black Friday
            </a>
          </li>
          <li className="min-w-[104px] mx-6 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Black Friday Camaieu
            </a>
          </li>
          <li className="min-w-[104px] mx-6 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Black Friday Chaussea
            </a>
          </li>
          <li className="min-w-[104px] mx-6 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Black Friday Informatique
            </a>
          </li>
          <li className="min-w-[104px] mx-6 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Black Friday Jeux Video
            </a>
          </li>
          <li className="min-w-[104px] mx-6 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Black Friday Lingerie
            </a>
          </li>
          <li className="min-w-[104px] mx-6 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Chaise Black Friday
            </a>
          </li>
          <li className="min-w-[104px] mx-6 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Emma Matelas Black Friday
            </a>
          </li>
          <li className="min-w-[104px] mx-3 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Manette PS4 Black Friday
            </a>
          </li>
          <li className="min-w-[104px] mx-3 flex-grow flex justify-center">
            <a href="#" className="block m-3">
              Black Friday Cyber Monday
            </a>
          </li>
        </ul>
      </div>

      {/*SECOND FOOTER*/}

      <div
        className={`nextFooter transition-all duration-500 ease-in-out ${
          !timePassed
            ? "opacity-0 translate-y-full pointer-events-none max-h-0 overflow-hidden"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="border-t h-[65px]">
          <h3 className="text-[14px] text-[#000] mt-1 text-center">
            Our Social Networks
          </h3>
          <ul className="flex items-center justify-center h-10">
            <li>
              <img className="m-2" src={facebookNextIcon} alt="facebook" />
            </li>
            <li>
              <img className="m-2" src={xTwitterIcon} alt="xtwitter" />
            </li>
            <li>
              <img className="m-2" src={tiktokIcon} alt="tiktok" />
            </li>
            <li>
              <img className="m-2" src={instagramNextIcon} alt="instagram" />
            </li>
            <li>
              <img className="m-2" src={pinterestNextIcon} alt="pinterest" />
            </li>
            <li>
              <img className="m-2" src={youtubeNextIcon} alt="youtube" />
            </li>
          </ul>
        </div>
        <div className="bg-[#F7F7F7]">
          <div className="md:border-y">
            <div className="h-[63px] flex items-center md:px-8  px-4 py-3 border-t md:border-0 md:max-w-[1280px] md:mx-auto hover:underline cursor-pointer">
              <img src={profileBlackIcon} alt="profile" />
              <div className="flex flex-col ml-4">
                <span className="text-[14px] text-[#000] font-semibold">
                  My Account
                </span>{" "}
                <a className="text-[12px] text-[#515151]">
                  Sign-in to your account
                </a>
              </div>
            </div>
          </div>

          <ul className="block md:hidden">
            <li className="flex justify-between border-y px-4 h-[44px] items-center">
              <span className="text-[14px] font-bold text-[#000]">Help</span>{" "}
              <img src={chevronNextIcon} className="w-3" alt="open" />
            </li>
            <li className="flex justify-between border-b px-4 h-[44px] items-center">
              <span className="text-[14px] font-bold text-[#000]">
                Privacy & Legal
              </span>{" "}
              <img src={chevronNextIcon} className="w-3" alt="open" />
            </li>
            <li className="flex justify-between border-b px-4 h-[44px] items-center">
              <span className="text-[14px] font-bold text-[#000]">
                Departments
              </span>{" "}
              <img src={chevronNextIcon} className="w-3" alt="open" />
            </li>
            <li className="flex justify-between border-b px-4 h-[44px] items-center">
              <span className="text-[14px] font-bold text-[#000]">
                Other Services
              </span>{" "}
              <img src={chevronNextIcon} className="w-3" alt="open" />
            </li>
          </ul>
        </div>

        <div className="bg-[#F7F7F7] ">
          <div className="mx-auto hidden md:flex max-w-[1280px] w-full">
            <div className="flex-grow py-4 pl-8 pr-[18px]">
              <h3 className="text-[14px] text-[#000] font-bold">Help</h3>
              <ul className="flex flex-col pt-4 gap-[9px]">
                <li className="cursor-pointer hover:underline">
                  Returns Information
                </li>
                <li className="cursor-pointer hover:underline">
                  Shipping Information
                </li>
                <li className="cursor-pointer hover:underline">Contact Us</li>
                <li className="cursor-pointer hover:underline">
                  Product Recall
                </li>
                <li className="cursor-pointer hover:underline">Find a Store</li>
              </ul>
            </div>
            <div className="flex-grow py-4 px-[18px]">
              <h3 className="text-[14px] text-[#000] font-bold">
                Privacy & Legal
              </h3>
              <ul className="flex flex-col pt-4 gap-[9px]">
                <li className="cursor-pointer hover:underline">
                  Privacy & Cookie Policy
                </li>
                <li className="cursor-pointer hover:underline">
                  Gender Pay Gap Report
                </li>
                <li className="cursor-pointer hover:underline">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:underline">
                  Manually Manage Cookies
                </li>
              </ul>
            </div>
            <div className="flex-grow py-4 px-[18px]">
              <h3 className="text-[14px] text-[#000] font-bold">Departments</h3>
              <ul className="flex flex-col pt-4 gap-[9px]">
                <li className="cursor-pointer hover:underline">Womens</li>
                <li className="cursor-pointer hover:underline">Mens</li>
                <li className="cursor-pointer hover:underline">Boys</li>
                <li className="cursor-pointer hover:underline">Girls</li>
                <li className="cursor-pointer hover:underline">Home</li>
                <li className="cursor-pointer hover:underline">Baby</li>
                <li className="cursor-pointer hover:underline">Brands</li>
              </ul>
            </div>
            <div className="flex-grow py-4 px-[18px]">
              <h3 className="text-[14px] text-[#000] font-bold">
                Other Services
              </h3>
              <ul className="flex flex-col pt-4 gap-[9px]">
                <li className="cursor-pointer hover:underline">
                  Media & Press
                </li>
                <li className="cursor-pointer hover:underline">The Company</li>
                <li className="cursor-pointer hover:underline">Careers@next</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 pb-3 flex flex-col items-center border-t bg-[#F7F7F7]">
            <a
              href="#"
              className="text-[14px] text-[#257F39] underline font-semibold mb-3 px-3"
            >
              View desktop site
            </a>
            <p className="text-[12px] text-[#515151] px-3">
              © 2024 Next Retail Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
