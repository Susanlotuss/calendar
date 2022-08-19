import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const tasks = ["tarea 1", "tarea 2"];
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={`${task}`} task={task} />
      ))}
      <br />
      <button>Complete later</button>
      <button>Submit</button>
    </>
  );
};
