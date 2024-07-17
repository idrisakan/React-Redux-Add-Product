import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc} from '../redux/modalSlice'

const Modal = ({ title, content, btnText, btnFunc }) => {
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-full flex justify-center items-center ">
      <div className="w-1/3 bg-white rounded-md p-4 shadow-lg">
        <div className="flex justify-between items-center border-b py-3 ">
          <div className="text-2xl">{title}</div>
          <MdClose onClick={() => dispatch(modalFunc())} size={24} />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
