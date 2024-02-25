import './style.css'
import { Button, Img } from "components";
import { useNavigate } from 'react-router-dom';

const NavBar = ({
  handleOnClick,
  NavList
}) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white-A700 w-screen mx-auto">
      <header className="flex items-center justify-between w-[90%] max-w-[1440px] mx-auto sm:my-[1rem]">
        <Img
          className="sm:w-[25%] w-[10%]"
          src="images/img_image2.png"
          alt="imageTwo"
          onClick={()=>navigate('/')}
        />
        <Img
          className="hidden sm:block w-[10%] aspect-square"
          src="images/img_hamburger_button.png"
          alt="imageTwo"
          onClick={handleOnClick}
        />
        <ul className="flex md:flex-1 md:flex-col flex-row gap-6 md:hidden items-center justify-center mb-9 md:mt-0 mt-[39px] w-auto md:w-full common-row-list">
          {<NavList />}
        </ul>
        <Button
          className="cursor-pointer font-semibold leading-[normal] min-w-[170px] text-base text-center sm:hidden block"
          shape="round"
          color="red_500"
          size="sm"
          variant="fill"
        >
          Free Consultation
        </Button>
      </header>
    </nav>
  );
};

export { NavBar };
