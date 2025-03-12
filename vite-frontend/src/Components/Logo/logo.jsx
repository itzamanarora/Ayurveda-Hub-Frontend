import './logo.css'
import Tooltip from "@mui/material/Tooltip";

function logo() {
  return (
    <Tooltip title={'Ayurveda Hub'} placement='right'>
        <div className='logo'>AYURVEDA HUB</div>
    </Tooltip>
  )
}

export default logo