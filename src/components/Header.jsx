import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="banniere crawler">
        <Logo />
        <User />
      </div>
    </header>
  );
};

export default Header;
