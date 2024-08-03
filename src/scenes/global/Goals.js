
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import './style.css';

const Goals = ({title,icon}) => {
    return (
        <>
            <div className='goals'>
                <div className='flexlay'>
                    <div className={title==='Goals'?'goalcircle':title==='Popular Dishes'?'dishcircle':'greencircle'}>
                        {icon}
                    </div>
                    <h2>{title}</h2>
                </div>
                <div className='arrowcircle'>
                    <ChevronRightOutlinedIcon />
                </div>

            </div>
        </>
    );
}

export default Goals;