import { CgCloseR } from "react-icons/cg";
import { MdEdit } from "react-icons/md";
import {Link} from "react-router-dom";
const ToDo = ({ task, deleteTask }) => {
  return (
    <div className="ToDo">
      <h3>"{task.title}"</h3>
      <h4>- {task.time}</h4>
      <p>{task.description}</p>

      {/* Delete icon */}
    
      <Link to={`/${task._id}`} key={task._id}>
      <MdEdit
        style={{
          color:"grey",
          cursor:"pointer",
          margin: "75px 0px 0px 125px",
          fontSize:'1.5em',
          
        }}/>
      </Link>
          <CgCloseR
        style={{
          color: "red",
          cursor: "pointer",
          margin:"0px 0px 0px 10px",
          fontSize:'1.5em',
        }}
        onClick={() => deleteTask(task._id)}
      />
    </div>
  );
};

export default ToDo;
