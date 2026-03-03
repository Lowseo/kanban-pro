// Подсказка: используй flex, justify-between, items-center
// Не копируй — попробуй собрать сам по документации Tailwind
export default function Header() {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-100 flex justify-start items-start px-36 ">
      <div className="flex justify-between w-full items-center p-2">
        <h1 className="font-bold text-2xl">Kanban Pro</h1>
        <button className="text-gray-400 border-b-gray-400 cursor-pointer p-2 rounded hover:bg-gray-100 transition duration-300">
          👤 Profile
        </button>
      </div>
    </header>
  );
}
