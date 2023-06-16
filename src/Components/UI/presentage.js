import React, {useState,useEffect} from 'react';
import './presentage.css';


const Presentage = (props) => {
    // 判斷是否符合條件
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDistance, setScrollDistance] = useState(0);
    // window.scrollY 是整個頁面移動的距離
    
    const handleScroll = (event) => {
        const scrolledDistance = window.scrollY;

        if (scrolledDistance >= 500) {
        setIsScrolled(true);
        } else {
        setIsScrolled(false);
        }

        setScrollDistance(scrolledDistance);
    };
    //  整個頁面監聽滾輪事件需要以下方式呈現
        useEffect(() => {
            window.addEventListener('wheel', handleScroll);
        
            return () => {
            window.removeEventListener('wheel', handleScroll);
            };
        }, []);
    // 為了讓animation能夠順利加入class 分別寫入不同百分比的class名稱
    // 因為無法透過props來讀取寬度故用此法
    const animation = `animation-${props.animate}`
    console.log(scrollDistance);
    console.log(isScrolled);
    return (
        <div className='presentage-box'>
            <div 
            className={`present ${!isScrolled || animation}`} style={{width:props.present, backgroundColor:props.color}}>
            </div>
        </div>
    );  
};
export default Presentage;