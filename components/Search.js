import { AiFillCaretDown } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
export default function Search() {
  return (
    <div className="border  rounded-xl h-[65px] w-[835px] max-w-[835px] flex overflow-hidden justify-center items-center px-[6px]">
      <button className="bg-[#B5B8B9] text-white font-bold  w-[108px] h-[52px] flex items-center justify-center gap-6 rounded-tl-[10px] rounded-bl-[10px]">
        <span>All</span>
        <AiFillCaretDown className="text-xs" />
      </button>
      <input type="text" className="h-full w-full outline-none px-2" />
      <button className="bg-[#8085E9] text-white rounded-[10px] min-h-[51px] min-w-[51px] flex items-center justify-center text-lg ">
        <FiSearch />
      </button>
    </div>
  )
}
