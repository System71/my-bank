import data from "../assets/data";
import Account from "../components/Account";

const Accounts = () => {
  return (
    <>
      {data.map((elt, index) => {
        return (
          <div className="account" key={index}>
            <Account
              name={elt.name}
              balance={elt.balance}
              operations={elt.operations}
              color={elt.color}
            />
          </div>
        );
      })}
    </>
  );
};

export default Accounts;
