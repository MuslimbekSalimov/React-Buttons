import "./Button.scss"
import logo from "../Button/image.svg"
// import propTypes from "prop-types"

function Button ({
    nomi = "button",
    task = "qizil",
    hasIcon = true }) {
        
        return (
            <button className={`button ${task}`}>
                {nomi}
                {hasIcon === true ? (
                    <img src={logo} alt="logo" width={28} height={12}/>
                ) : null}
            </button>
        )
    }

export default Button;


