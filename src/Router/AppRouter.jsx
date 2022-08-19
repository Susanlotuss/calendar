import { Calendar } from "../Components/Calendar/Calendar";
import { Header } from "../Components/Header/Header";
import { NavBar } from "../Components/NavBar/NavBar";
import { Task } from "../Components/Task/Task";

export default function AppRouter() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Calendar />
      <Task />
    </div>
  );
}
