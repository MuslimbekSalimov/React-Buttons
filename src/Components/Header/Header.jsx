import "./Header.scss";
import Button from "../Button/Button"

function Header() {
    return(
        <>

        <Button nomi="Salom" task="qizil" hasIcon="false"/>
        <Button nomi="Hello" task="green"/>
        <Button nomi="Hello" task="blue"/>
        <Button nomi="Hello" task="punk" hasIcon="false"/>


        </>
    )
}

export default Header;