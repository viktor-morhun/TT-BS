import { useState } from "react";
import searchBlackIcon from "../../../assets/icons/next/searchDesktop.svg";

const NextSearchbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="hidden md:flex h-[36px] xl:w-[524px] w-[318px] md:justify-end sm:ml-0"
    >
      <input
        type="text"
        placeholder="Search product or brand"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pr-12 pl-3 rounded-l outline-none h-[36px] xl:w-[464px] w-[264px]"
      />
      <button
        type="submit"
        className="bg-white flex justify-center items-center rounded-r h-[36px] w-[36px]"
      >
        <img src={searchBlackIcon} className="h-5" />
      </button>
    </form>
  );
};

export default NextSearchbar;
