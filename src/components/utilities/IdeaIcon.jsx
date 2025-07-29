import { MdLightbulbOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../Redux/PopupSlice/PopupSlice';


function IdeaIcon() {
    let dispatch = useDispatch();
  return (
    <div className="p-2 w-[37px] cursor-pointer hover:scale-125 hover:bg-[#e3edf5d1] bg-[#e3edf5d1] rounded-full shadow-s" onClick={() => dispatch(togglePopup())}>
    <MdLightbulbOutline className="w-5 h-5 text-gray-800" />
  </div>
  )
}

export default IdeaIcon
