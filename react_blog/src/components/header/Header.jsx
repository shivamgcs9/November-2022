import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Web & Mobile Developement</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?cs=srgb&dl=pexels-thisisengineering-3861972.jpg&fm=jpg&_gl=1*xi5157*_ga*NDcyNDg1NTgwLjE2NjczNjUzMzE.*_ga_8JE65Q40S6*MTY2NzQ1OTEyMy4zLjEuMTY2NzQ2MDIzNy4wLjAuMA.."
        alt=""
        className="headerImg"
      />
    </div>
  );
};

export default Header;
