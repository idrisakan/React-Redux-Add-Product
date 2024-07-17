import { MdAddChart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
    const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center px-7 p-4 text-white bg-[#7731d8]">
      <div className="text-3xl">REACT UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select onChange={(e) => dispatch(sortingDataFunc(e.target.value))}  className="h-10 rounded-lg" name="" id="">
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>

        <input onChange={(e) => dispatch(searchDataFunc(e.target.value))} type="text" placeholder="Arama Yapınız" className="h-10 rounded-lg text-black px-4"  />

        <div onClick={() => dispatch(modalFunc())} className=" bg-[#41187a] rounded-full w-10 h-10 flex items-center justify-center">
          <MdAddChart size={24}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
