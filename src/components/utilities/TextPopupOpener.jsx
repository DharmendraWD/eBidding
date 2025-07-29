import { MdLightbulbOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../Redux/PopupSlice/PopupSlice';


function TextPopupOpener({text}) {
    let dispatch = useDispatch();
  return (
    <div className="w-full cursor-pointer" onClick={() => dispatch(togglePopup())}>
  <p style={{margin: '0px'}}>{text}</p>
  </div>
  )
}

export default TextPopupOpener
