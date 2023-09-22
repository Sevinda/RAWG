import { useState } from "react";
import { GameGrid, GenreList, Navbar } from "./components";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSeletectedGenre] = useState<Genre | null>(null);

  return (
    <div className="dark:text-gray-100 dark:bg-[#151515] duration-500 px-5">
      <header>
        <Navbar />
      </header>

      <div className="flex">
        <aside className="w-[260px] max-lg:hidden">
          <GenreList
            onSelectGenre={(genre) => setSeletectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </aside>

        <main className="flex-1">
          <GameGrid selectedGenre={selectedGenre} />
        </main>
      </div>
    </div>
  );
}

export default App;
