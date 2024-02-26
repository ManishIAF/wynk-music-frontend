import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import PageLayOut from "./pages/PageLayOut"
import Home from "./pages/Home"
import PlayListPage from './pages/PlayListPage'
import AlbumPage from './pages/AlbumPage'
import ArtistPage from "./pages/ArtistPage"
import List from "./pages/List"
import MyMusic from "./pages/My_Music"
import MyLibrery from "./pages/MyLibrery"
import Package from "./pages/Package"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import TermsOfUsePage from "./pages/TermsOfUsePage"

import ProtectetComponent from "./HOC/ProtectedRoute"
import ArtistList from "./pages/ArtistList"
import MyPlaylists from "./pages/My_Playlist"

const App = ()=>{
    return(

        <Router>
            <Routes>
                <Route path="/" element={<PageLayOut/>}>
                    <Route index="/" element={<Home/>}/>
                    <Route path="playlist">
                        <Route path=":title/:id" element={<PlayListPage/>}/>
                    </Route>
                    <Route path="albums/:name" >
                        <Route path=":id" element={<List/>}/>
                    </Route>
                    <Route path="album/:name">
                        <Route path=":id" element={<AlbumPage/>}/>
                    </Route>
                    <Route path="artist">
                        <Route path=":name" element={<ArtistPage/>}/>
                    </Route>
                    <Route path="artists/:name">
                        <Route path=":id" element={<ArtistList/>}/>
                    </Route>
                    <Route path="list/:name">
                        <Route path=":id" element={<List/>}/>
                    </Route>
                    <Route path="my-music">
                        <Route path="my-playlists" element={<ProtectetComponent><MyLibrery/></ProtectetComponent>}/>
                        <Route path="my-playlists/:name/:id" element={<ProtectetComponent><MyPlaylists/></ProtectetComponent>}/>
                        <Route path=":name" element={<MyMusic/>}/>
                    </Route>
                    <Route path="podcasts">
                        <Route path=":podcasts" element={<List/>}/>
                    </Route>
                    <Route path="package/:name">
                        <Route path=":Id" element={<Package/>}/>
                    </Route>
                    <Route path="privacy_policy" element={<PrivacyPolicyPage/>} />
                    <Route path="tnc" element={<TermsOfUsePage/>} />
                </Route>
            </Routes>
        </Router>

    )
}

export default App;