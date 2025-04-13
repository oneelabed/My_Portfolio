import "./Toggle.css"

export const Toggle = ({handleChange, isChecked}) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
      />
      <label htmlFor="check"/>
    </div>
  )
}

export default Toggle