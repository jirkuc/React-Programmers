import "./ItemForm.css";

const ItemForm = ({ data, valid, onChange, onAdd }) => {
  return (
    <div className="item-form">
      <input
        type="text"
        placeholder="Jméno programátora"
        name="name"
        onChange={onChange}
        value={data.name}
      />
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
      <button disabled={!valid} onClick={onAdd}>
        Přidat
      </button>
    </div>
  );
};

export default ItemForm;
