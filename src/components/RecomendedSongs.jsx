const RecommendedSongs = () => {
    return (
        <div>
            <h2>Recommended Songs</h2>
            <div style={{display:'flex',justifyContent:'center',height:'500px',alignItems:'center',borderRadius:'4px',paddingRight:'20px',marginRight:'90px',marginTop:'20px',height:'200px','--tw-border-opacity': 1,border:'1px solid rgba(55,65,81,var(--tw-border-opacity))'}}>
                <div style={{alignItems:'center',textAlign:'center','--tw-border-opacity': 1,color:'rgba(129,140,148)'}}>
                    <img src="https://wynk.in/_next/static/media/dt-no-rpl-empty-state.631239b4.svg" alt="" style={{width:'100px',height:'100px'}} /><br />
                    <div style={{lineHeight:'20px'}}>
                        <p style={{fontSize:'13px'}}>Our machines are learning!</p>
                        <p style={{fontSize:'12px'}}>Keep playing songs and come back later to view our AI-driven recommendations. Keep Wynk-ing!</p>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendedSongs;