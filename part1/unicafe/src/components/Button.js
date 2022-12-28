const Button = ({ text, handleClick }) => {
    const style = { marginRight: 2 }
    return <button onClick={handleClick} style={style}>{text}</button>
}

export default Button