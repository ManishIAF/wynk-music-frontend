const MiniAbout =({image,Data}) => {
    return (
        <div style={{display:'flex',justifyContent:'space-between',borderRadius:'4px',paddingRight:'20px',marginRight:'90px',marginTop:'30px',height:'auto','--tw-border-opacity': 1,border:'1px solid rgba(55,65,81,var(--tw-border-opacity))'}}>
            <div style={{display:'flex',paddingLeft:'30px',paddingBottom:'30px',width:'86%'}}>
                {image&&<div style={{marginTop:'30px',paddingRight:'25px'}}>
                    <img src={image} alt="" style={{borderRadius:'7px',width:'100px',height:'100px'}} />
                </div>}
                <div style={{alignContent:'center'}}>
                    {Data?.map(({title,content},index)=>{
                        return <div key={index} style={{marginTop:'30px'}}>
                            <h3>{title}</h3>
                            {content?.map((contentInfo)=><p style={{marginTop:'10px',fontSize:'14px',color:'rgba(183,192,196)',lineHeight:'20px'}}>
                                {contentInfo}
                            </p>)}
                        </div>
                    })}
               
                </div>
            </div>
            <div>
                <img src="https://wynk.in/assets/images/quote.png" alt="" />
            </div>
        </div>
    );
};

export default MiniAbout;