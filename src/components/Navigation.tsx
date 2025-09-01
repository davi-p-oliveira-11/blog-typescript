import { FaSearch } from "react-icons/fa"

const Navigation = () => {
  return (
    <nav className="border-2 text-black border-gray-200 p-4 flex justify-between">
      <div className="flex items-center border-2 rounded-full px-4 py-2 max-w-md ml-[5rem]">
        <FaSearch />
      </div>
    </nav>
  )
}

export default Navigation