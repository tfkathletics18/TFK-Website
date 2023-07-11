import "./Button.scss"

function Button({label, onClickFunction}) {
  return (
    <button className="main-button button-animation" onClick={onClickFunction}>{label}</button>
  )
}

export default Button