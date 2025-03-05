import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

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
      <div className='col-span-10 px-60 font-semibold text-lg'>
        <input
          className='w-[70%] border border-gray-400 pl-6 pt-2 pb-2 rounded-l-full'
          type='text'
          placeholder='Search'
        />
        <button className='bg-gray-100 border border-gray-400 pt-2 pb-2 pl-4 pr-5 rounded-r-full'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
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
