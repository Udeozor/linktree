import profilePicture from "../assets/profile__img.png";
import share from "../assets/_Avatar share button.png";
import option from "../assets/mobile_Avatar share button.png";
import hover from "../assets/hover.png";

const Header = () => {
  const twitter = "https://twitter.com/_Udeozor";

  return (
    <header>
      <div className="profile">
        <img src={profilePicture} alt="profile" id="profile_img" />
        <img src={hover} alt="profile" id="profile_img" className="hover" />
        <a href={twitter} id="twitter">
          Peter Udeozor
        </a>
        <h1 className="hidden" id="slack">
          Peter Udeozor
        </h1>
      </div>
      <div className="share">
        <img src={share} alt="share" className="share_icon" />
        <img src={option} alt="option" className="option_icon" />
      </div>
    </header>
  );
};

export default Header;
