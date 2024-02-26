import Slider from '../components/Slider';
import RecentlyPlayed from '../Category/RecentlyPlayed';
import NewReleases from '../Category/NewReleases';
// import WorkoutMix from '../Category/WorkoutMix';
import TopCharts from '../Category/TopCharts';
// import RecommendedPlaylists from '../Category/RecommendedPlaylists';
// import IndieMusic from '../Category/IndieMusic';
import TopIndieArtists from '../Category/TopIndieArtists';
// import TopPodcastsonWynk from '../Category/TopPodcastsOnWynk';
// import BasedOnRecentActivity from '../Category/RecentActivityBased';
import Top50Regional from '../Category/Packages/Top50Regional';
import InternationalTopHits from '../Category/Packages/InternationalTopHits';
import HindiTop50 from '../Category/Packages/HindiTop50';
import LatestRegional from '../Category/Packages/LatestRegional';
import TrendingEnglish from '../Category/Packages/TrendingEnglish';
// import TopRegionalPlaylists from '../Category/TopRegionalPlaylists';
// import RetroHits from '../Category/RetroHits';
import LatestHindi from '../Category/Packages/LatestHindi';
import LatestEnglish from '../Category/Packages/LatestEnglish';
import TrendingHindi from '../Category/Packages/TrendingHindi';
// import ExploreElectronicMusic from '../Category/ExploreElectronicMusic';
import UrbanPunjabiTadka from '../Category/Packages/UrbanPunjabiTadka';
import AllTimeFavourites from '../Category/Packages/AllTimeFavourites';
// import K_PopEssentials from '../Category/K_PopEssentials';
import LatinTopHits from '../Category/Packages/LatinTopHits';
// import EvolutionOfMusic from '../Category/EvolutionOfMusic';
// import Moods from '../Category/Moods';
// import RegionalTop20 from '../Category/RegionalTop20';
// import WorkoutEnglishMix from '../Category/WorkoutEnglishMix';
// import WorkoutHindiMix from '../Category/WorkoutHindiMix';
import YourLibrary from '../Category/YourLibrary';

const Home =()=> {

    return (
        <div>
            <main>
                <div>
                    <Slider/>
                </div>
                <div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <RecentlyPlayed/>
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <NewReleases />
                    </div>
                    {/*<div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <WorkoutMix />
                    </div>*/}
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <TopCharts />
                    </div>
                    {/*<div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <RecommendedPlaylists />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <BasedOnRecentActivity />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <IndieMusic />
                    </div> */}
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <TopIndieArtists />
                    </div>
                    {/* <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <TopPodcastsonWynk />
                    </div>*/}
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <Top50Regional />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <InternationalTopHits />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <HindiTop50 />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <LatestRegional />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <TrendingEnglish />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <LatestHindi />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <LatestEnglish />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <TrendingHindi />
                    </div>
                    {/*<div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <TopRegionalPlaylists />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <RetroHits />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <ExploreElectronicMusic />
                    </div>*/}
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <UrbanPunjabiTadka />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <AllTimeFavourites />
                    </div>
                    {/*<div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <K_PopEssentials />
                    </div>*/}
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <LatinTopHits />
                    </div>
                    {/*<div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <EvolutionOfMusic />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <Moods />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <RegionalTop20 />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <WorkoutEnglishMix />
                    </div>
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <WorkoutHindiMix />
                    </div>*/}
                    <div style={{display:'flex',gap:'20px',justifyContent:'center',paddingTop:'60px'}}>
                        <YourLibrary />
                    </div> 
                </div>
                
            </main>
        </div>
    )
}

export default Home