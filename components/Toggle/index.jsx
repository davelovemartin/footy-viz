const Toggle = (props) => {
  const { label, isToggleOn, onClick } = props

  return (
    <li>
      <span id={`toggle--${label}`}>{label}</span>
      <button
        aria-labelledby={`toggle--${label}`}
        aria-pressed={isToggleOn}
        onClick={onClick}
        type="button"
      >
        {isToggleOn ? 'on' : 'off'}
      </button>
    </li>
  )
}

export default Toggle
