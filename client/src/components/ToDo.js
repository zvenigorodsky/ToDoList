import { CgCloseR } from "react-icons/cg";

const ToDo = ({ task, deleteTask }) => {
  return (
    <div className="ToDo">
      <h3>"{task.title}"</h3>
      <h4>- {task.time}</h4>
      <p>{task.description}</p>

      {/* Delete icon */}
      <CgCloseR
        style={{
          color: "red",
          cursor: "pointer",
          margin: "75px 0px 10px 175px",
        }}
        onClick={() => deleteTask(task._id)}
      />
    </div>
  );
};

export default ToDo;
