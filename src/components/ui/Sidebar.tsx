export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-900 text-white hidden md:block p-3">
      <nav>
        <ul>
          <li className="bg-gray-800 text-white hover:bg-gray-700 transition-colors  active:text-blue-400 p-3 cursor-pointer">
            📋 Boards
          </li>
          <li className="hover:bg-gray-800 transition-colors p-3 text-gray-200 cursor-pointer">
            📊 Stats
          </li>
          <li className="hover:bg-gray-800 transition-colors p-3 text-gray-200 cursor-pointer">
            ⚙️ Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}
