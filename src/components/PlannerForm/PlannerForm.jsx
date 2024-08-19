import { useState, useEffect } from "react";
import "./PlannerForm.css";

const PlannerForm = ({ data }) => {
  const [tempTask, setTempTask] = useState({
    linesOfCode: "",
    duration: "",
  });
  const [disableBtn, setDisableBtn] = useState(true);
  const [desiredCapacity, setDesiredCapacity] = useState(NaN);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value > 0 || value === "") {
      setTempTask({ ...tempTask, [name]: value });
    }
  };

  useEffect(() => {
    const { linesOfCode, duration } = tempTask;
    let tempDesiredCapacity;
    if (parseInt(duration) > 0 && parseInt(linesOfCode) > 0) {
      tempDesiredCapacity = Math.ceil(
        parseInt(linesOfCode) / parseInt(duration)
      );
    } else {
      tempDesiredCapacity = NaN;
    }
    setDesiredCapacity(tempDesiredCapacity);

    const tempTaskValidation =
      linesOfCode > 0 && duration > 0 && data >= tempDesiredCapacity;

    setDisableBtn(!tempTaskValidation);
  }, [tempTask, data]);

  return (
    <div className="planner-form">
      <div className="planner-form-item">
        <label for="linesOfCode">Počet řádků kódu:</label>
        <input
          type="number"
          name="linesOfCode"
          id="linesOfCode"
          min="1"
          value={tempTask.linesOfCode}
          onChange={handleChange}
        />
        <label for="linesOfCode">Časový limit (dny):</label>
        <input
          type="number"
          name="duration"
          id="duration"
          min="0"
          value={tempTask.duration}
          onChange={handleChange}
        />
      </div>
      <div className="planner-form-item">
        <span>Aktuální kapacita: {data}</span>
        <span>
          {desiredCapacity > 0 && `Požadovaná kapacita: ${desiredCapacity}`}
        </span>
      </div>
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
