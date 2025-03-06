import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  {
    /**
    searchCache={
    iphone:["iphone11", "iphone14"]
    }
    searchQuery = iphone */
  }

  useEffect(() => {
    //make an api call after every key press
    // but if the difference between 2 Api calls is <200ms
    // decline the api call
    if (!searchQuery.trim()) {
      // Prevents API call for empty or whitespace-only input
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (!searchQuery.trim()) return;
    //console.log("API CALL: " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1]
        // iphone: [1,2,3]
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 pt-2'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-7 cursor-pointer'
          src='https://fonts.gstatic.com/s/i/youtube_fill/align_left/v6/24px.svg'
          alt='hamburger-menu'
        />
        <a href='/'>
          <img
            className='h-7 pl-10'
            src='https://www.gstatic.com/youtube/img/icons/mweb/youtube_fill/logo_with_text/v2/24px.svg'
            alt='youtube-logo'
          />
        </a>
      </div>
      <div className='col-span-10 px-60 font-semibold text-lg relative'>
        <div>
          <input
            className='w-[70%] border border-gray-400 pl-6 pt-2 pb-2 rounded-l-full'
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className='bg-gray-100 border border-gray-400 pt-2 pb-2 pl-4 pr-5 rounded-r-full'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {showSuggestions && (
          <div className='absolute bg-white py-2 px-5 w-[32%] border border-gray-100 rounded-lg'>
            <ul>
              {suggestions.map((s) => (
                <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>
                  <FontAwesomeIcon icon={faSearch} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='col-span-1 pt-2'>
        <img
          className='h-7'
          alt='user-icon'
          src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
      </div>
    </div>
  );
};

export default Header;
