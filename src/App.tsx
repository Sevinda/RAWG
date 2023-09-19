import "./App.css";
import { GameGrid, Navbar } from "./components";

function App() {
  return (
    <div className="dark:text-gray-100 dark:bg-[#151515] duration-500 px-10">
      <header>
        <Navbar />
      </header>

      <div className="flex">
        <aside className="w-[260px] max-lg:hidden">Aside</aside>

        <main className="flex-1">
          <GameGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
