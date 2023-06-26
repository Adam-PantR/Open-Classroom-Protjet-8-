import '../Styles/App.css'
import BannerJPG from '../Images/banner.jpg'

function Banner() {
    return (
        <div className='divGlobaleBanner'>
            <div className='divBanner'>
                <img src={BannerJPG} className="banner" alt="banner" />
                <span className='spanBanner'>Chez vous, partout et ailleurs</span>
            </div>
            
        </div>
    )
}

export default Banner