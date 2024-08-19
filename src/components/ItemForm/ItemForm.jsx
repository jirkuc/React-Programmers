import "./ItemForm.css";

const ItemForm = ({ data, valid, onChange, onAdd }) => {
  return (
    <div className="item-form">
      <div className="item-form-item">
        <label for="name">Jméno programátora:</label>
        <input type="text" name="name" onChange={onChange} value={data.name} />
        <select
          type="text"
          placeholder="Úroveň"
          name="level"
          onChange={onChange}
          value={data.level}
        >
          <option value="" disabled hidden>
            Úroveň
          </option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
      <button disabled={!valid} onClick={onAdd}>
        Přidat programátora
      </button>
    </div>
  );
};

export default ItemForm;
