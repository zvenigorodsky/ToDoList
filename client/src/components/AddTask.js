import { useState } from "react";

const AddTask = ({ createTask }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("You didn't enter any task name");
      return;
    }
    if (!time) {
      alert("You didn't enter any Date or Task Time");
      return;
    }
    if (!description) {
      alert("You didn't enter any description");
      return;
    }
    createTask({ text, description, time });

    //Clean palate for new tasks
    setText("");
    setTime("");
    setDescription("");
  };
  return (
    <>
      <form className="AddTask" onSubmit={onSubmit}>
        <div className="NewTask">
          <input
            type="text"
            placeholder="New Task"
            id="NewTask"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="NewTask">
          <input
            type="text"
            placeholder="Date & Time"
            id="TaskTime"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="NewTask">
          <input
            type="text"
            placeholder="Description"
            id="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input className="submitButton" type="submit" value="save" />
      </form>
    </>
  );
};

export default AddTask;
