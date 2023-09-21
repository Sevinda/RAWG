import "./App.css";
import { GameGrid, GenreList, Navbar } from "./components";

function App() {
  return (
    <div className="dark:text-gray-100 dark:bg-[#151515] duration-500 px-10">
      <header>
        <Navbar />
      </header>

      <div className="flex">
        <aside className="w-[260px] max-lg:hidden">
          <GenreList />
        </aside>

        <main className="flex-1">
          <GameGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
