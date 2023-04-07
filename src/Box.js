import "./Box.css"

function Box(props) {

    function onMark(e) {
        props.getClick(e.target.id);
    }

    return <div className="box">
        <button className="mark" onClick={e => onMark(e)} id={props.name} value={props.mark}>{props.mark}</button>
    </div>

}

export default Box;