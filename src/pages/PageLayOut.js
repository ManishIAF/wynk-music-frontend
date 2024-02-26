import {useRef} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SongPanal from '../components/SongPanal';
import NavBar from '../components/NavBar';

import { SongDataContext } from '../DataContext/SongDataContext';
import DownloadWynk from './DownloadWynk';
import { IndicatorData } from '../DataContext/IndicatorContext';
import LoginWynk from './Login';
import Queue from './Queue';
import Share from '../components/Share';

import Footer from '../components/Footer';

import {useLocation} from "react-router-dom";
import MiniAbout from '../components/MiniAbout';
import WynkIntroData from '../fakeData/WynkIntroData';
import LanguageSelection from '../components/LanguageSelection';
import SoundQualityDialog from '../components/SoundQualityDialog';
import AddToPlaylist from './AddToPlaylist';

function PageLayOut() {

  const {pathname} = useLocation();
  const {Song}=SongDataContext();
  const {indicator} = IndicatorData();
  const scrollRef = useRef();

  let lastScrollTop = 0;

  const handleScroll = () => {

    const st = window.scrollY || window.pageYOffset;
    const direction = st > lastScrollTop ? 'down' : 'up';

    if (direction === 'down' && st > 250) {
      scrollRef.current.style.top = '-150px';
    } else {
      scrollRef.current.style.top = '0';
    }
    lastScrollTop = st;
  };


  return (
    <div onWheel={handleScroll}>
      <div style={{position: 'relative', height:'100%',marginBottom:Song?.id?'115px':'20px'}}>
        
        <div ref={scrollRef} style={{position: 'fixed',top:'0', width: '100%', zIndex: 800,transition:'0.6s'}}>
          <Header />
          <NavBar />
        </div>
        <div style={{marginTop:'147px'}}>
          <Outlet />
          {indicator?.linkIndicator&&<DownloadWynk isVisible={indicator?.linkIndicator}/>}
          {indicator?.loginIndicator&&<LoginWynk isVisible={indicator?.loginIndicator}/>}
          {indicator?.QueueIndicator&&<Queue isVisible={indicator?.QueueIndicator}/>}
          {indicator?.shareIndicator&&<Share isVisible={indicator?.shareIndicator}/>}
          {indicator?.languageSelection&&<LanguageSelection isVisible={indicator?.languageSelection} />}
          {indicator?.SoundQualityOpen&&<SoundQualityDialog isVisible={indicator?.SoundQualityOpen} />}
          {indicator?.playlistIndicator&&<AddToPlaylist isVisible={indicator?.playlistIndicator} />}
        </div>
        {pathname === '/'&&<div style={{marginLeft:'90px'}}><MiniAbout Data={WynkIntroData} /></div>}
        <div>
          <Footer/>
        </div>
      </div>
        <div>
          {Song?.id&&<SongPanal/>}
        </div>
    </div>
  );
}

export default PageLayOut;
