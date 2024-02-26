import '../index.css'

const SongMoreOPtionMenu = ({fun,Data,queueData,MarginRight,MarginBottom,MarginTop,Width,Height,ZIndex}) =>{

    return(
        <div
            style={{lineHeight:'20px',position:'absolute',fontSize:'13px',inset:'0px 0px auto auto',transform:'translate(-25px,4px)' ,width:Width,height:Height,borderRadius:'10px',marginBottom:MarginBottom,marginRight:MarginRight,marginTop:MarginTop,top: '20px',right:'0',backgroundColor: 'rgba(33,37,45)', zIndex: ZIndex?ZIndex:21}}
        >
            {Data&&Data?.map(({id,name,Icon,operation})=>(
                <div key={id} onClick={(e)=>{e.stopPropagation();fun(null);operation&&operation(queueData)}} className="menuItem" style={{display:'flex',color:'white',alignItems:'center',marginTop:id===1?'15px':'0px'}}>
                    <div style={{marginLeft:'10px',marginTop:'10px'}}>
                        {Icon}
                    </div>
                    <div style={{marginLeft:'12px',marginTop:'2px'}}>
                        <p>
                            {name}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SongMoreOPtionMenu;