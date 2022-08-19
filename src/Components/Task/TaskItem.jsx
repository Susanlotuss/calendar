export const TaskItem = ({task}) => {
  return (
    <>
      <p>{task}</p>
      <input placeholder="horas trabajadas"></input>
      <button>eliminar</button>
    </>
  );
};
