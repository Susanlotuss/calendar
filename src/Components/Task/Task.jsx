import { AddTask } from "./AddTask";
import { NoTask } from "./NoTask";
import { TaskList } from "./TaskList";

export const Task = () => {
  const todayTasks = false;
  return (
    <>
      <AddTask />
      <br />
      {todayTasks ? <TaskList /> : <NoTask />}
    </>
  );
};
