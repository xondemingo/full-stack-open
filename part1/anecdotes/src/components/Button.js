const Button = ({ text, handleClick }) => {
    const style = { marginRight: 3 }
    return <button onClick={handleClick} style={style}>{text}</button>
}

export default Button