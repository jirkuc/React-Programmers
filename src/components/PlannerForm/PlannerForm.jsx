import { useState, useEffect } from "react";
import "./PlannerForm.css";

const PlannerForm = ({ data }) => {
  const [tempTask, setTempTask] = useState({
    linesOfCode: "",
    duration: "",
  });
  const [disableBtn, setDisableBtn] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value > 0 || value === "") {
      setTempTask({ ...tempTask, [name]: value });
    }
  };

  useEffect(() => {
    const { linesOfCode, duration } = tempTask;
    const tempTaskValidation =
      linesOfCode > 0 &&
      duration > 0 &&
      data >= Math.ceil(parseInt(linesOfCode) / parseInt(duration));
    setDisableBtn(!tempTaskValidation);
  }, [tempTask, data]);

  return (
    <div className="planner-form">
      <input
        type="number"
        name="linesOfCode"
        id="linesOfCode"
        min="1"
        placeholder="Počet řádků kódu"
        value={tempTask.linesOfCode}
        onChange={handleChange}
      />
      <input
        type="number"
        name="duration"
        id="duration"
        min="0"
        placeholder="Časový limit (dny)"
        value={tempTask.duration}
        onChange={handleChange}
      />
      <button
        disabled={disableBtn}
        className={`planner-form-button-${disableBtn ? "red" : "green"}`}
      >
        Zadat úlohu
      </button>
    </div>
  );
};

export default PlannerForm;
