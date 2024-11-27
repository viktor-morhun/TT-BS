import { useState } from "react";
import SearchIcon from "../../../assets/icons/search.svg";

const Searchbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex h-[36px] sm:h-[44px] rounded-l mr-[18px] w-full ml-[6px] sm:ml-0"
    >
      <input
        type="text"
        placeholder="Rechercher"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-[18px] pr-1 rounded-l outline-none h-[34px] sm:h-[44px] flex-grow  border border-r-0 border-[#d1d1d1] min-w-20"
      />
      <button
        type="submit"
        className="bg-[#333333] flex justify-center items-center rounded-r transition duration-300 h-[34px] sm:h-[44px] sm:w-[46px] w-[35px] border border-l-0 border-[#d1d1d1]"
      >
        <img src={SearchIcon} className="h-[15px] sm:h-[18px] " />
      </button>
    </form>
  );
};

export default Searchbar;
