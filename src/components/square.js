import "./square.css";

export default function Square({value, handleClick, ind}){
    
    return(
        <>
        <button className="square" onClick={handleClick}>{value}</button>
        </>
    )
}