import react, {useState} from 'react';

const Task = (props) => {

    const [status, setStatus] = useState(false);

    return(
        <div className="task">
            <input type="checkbox" onChange={(e) => {
                setStatus(e.target.checked);
            }} />
            <span className={status ? 'done' : ''}>{props.taskName}</span>
        </div>
    )
}

export default Task;