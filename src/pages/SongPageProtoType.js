import { SongDataContext } from "../DataContext/SongDataContext"
import TableBody from "../components/TableBody"
import TableAdditionalHeader from "../components/TableAdditionalHeader"
import TableMainHeader from "../components/TableMainHeader"

function SongPageProtoType({CatagoryImage,songBy,SongCatagory,PoweredBy,SongInfo,TableMainHeaderData,TableAdditionalHeaderData,TableRowData}) {

  const {setSong}=SongDataContext()
  
  return (
    <div style={{display:'flex',justifyContent:'center',width:'100%',gap:'60px',paddingLeft:'95px',paddingTop:'10px'}}>
        <div>
          <div>
            <p style={{fontSize:'10px'}}>Home . Playlists . Fresh Arrivals- Hindi</p>
          </div>
          <div style={{paddingTop:'30px'}}>
            {CatagoryImage}
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',paddingTop:'40px',width:'100%'}}>
          <div>
            <div>
              <h1>{SongCatagory}</h1>
              {PoweredBy&&<p style={{fontSize:'12px',color:'gray',paddingTop:'15px'}}><strong>By Wynk Music</strong></p>}
              {SongInfo}
            </div>
            <div style={{paddingTop:'15px'}}>
              <table style={{borderCollapse:'collapse'}}>
                <TableAdditionalHeader TableAdditionalHeaderData={TableAdditionalHeaderData} />
                {songBy&&<h4 style={{paddingTop:'40px',paddingBottom:'10px',fontSize:'20px'}}>
                  {songBy}
                </h4>}
                <TableMainHeader TableMainHeaderData={TableMainHeaderData} />
                <TableBody style={{paddingTop:'20px'}} Data={TableRowData} setSong={setSong} />
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SongPageProtoType