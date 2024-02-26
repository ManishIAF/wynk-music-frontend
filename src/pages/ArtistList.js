import Card from '../components/Card';
import {useNavigate,useParams} from 'react-router-dom';

import convertString from '../helper/convertString';
import useFetch from '../customComponent/fetch';

const ArtistList = () => {
    const navigate = useNavigate()

    const {id} = useParams()

    const [{apiData:Data}] = useFetch(`artists/Id/${id}`)

    const cardsPerRow = 6;
    const rows = Math.ceil(Data?.Data?.length / cardsPerRow);

    const rowsArr = Array.from({ length: rows }, (_, i) => i);

    return (
        <div style={{paddingLeft:'95px',paddingTop:'10px'}}>
            <h1 style={{fontSize:'37px'}}>{Data?.Title}</h1>
            {rowsArr.map((row) => (
                <div key={row} style={{ display: 'flex',gap:'25px',paddingTop:'20px'}}>
                    {Data?.Data?.slice(row * cardsPerRow, (row + 1) * cardsPerRow).map((data) => (
                        <div onClick={()=>{
                            navigate(`/${data?.type}/${convertString(data?.Name)}`)
                        }}>
                            <Card 
                                play={true}
                                key={data?._id} 
                                img={data?.img}
                                imageWidth="172px"
                                imageHeight="172px"
                                imageBorderRadius={Data?.title==="Top Indie Artist"?"50%":"10px"}
                                infoOne={data?.title}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ArtistList;