import Button from "./Button";

const Account = ({ name, balance, operations, color }) => {
  return (
    <section className="crawler">
      <div className="section-ban crawler">
        <span>{name}</span>
        <span>{balance} €</span>
      </div>
      <div className="operations">
        {operations.map((elt, index) => {
          return (
            <div key={index} className="operation">
              <div>{elt.date}</div>
              <div className="description">{elt.description}</div>
              <div>{elt.amount} €</div>
            </div>
          );
        })}
        <Button />
      </div>
    </section>
  );
};

export default Account;
