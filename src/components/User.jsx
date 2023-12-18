import user from "../assets/img/user.png";

const User = () => {
  return (
    <div className="user">
      <span>Pierre</span>
      <img className="user-icon" src={user} alt="user" />
    </div>
  );
};

export default User;
