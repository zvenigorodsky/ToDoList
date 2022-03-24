import ToDo from "./ToDo";

const ToDos = ({ tasks, deleteTask }) => {
  return (
    <div className="ToDos">
      {tasks.map((task, _id) => (
        <ToDo key={_id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default ToDos;
