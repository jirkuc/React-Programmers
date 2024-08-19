import "./Toggler.css";

const Toggler = ({ onChoose, active }) => {
  const handleClick = (e) => {
    onChoose(e.target.name);
  };

  return (
    <div className="page-toggler">
      <button
        className={`toggler-btn ${active === 1 ? "active" : ""}`}
        name="list-of-programmers"
        onClick={handleClick}
      >
        Seznam programátorů
      </button>
      <button
        className={`toggler-btn ${active === 2 ? "active" : ""}`}
        name="task-planner"
        onClick={handleClick}
      >
        Plánování úloh
      </button>
    </div>
  );
};

export default Toggler;
