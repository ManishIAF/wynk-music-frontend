import React from 'react'



function TableAdditionalHeader({TableAdditionalHeaderData}) {
  

  
    return (
        <thead>
            <tr>
                {TableAdditionalHeaderData?.map((header, index) => {
                    return <th key={index}>{header}</th>
                })}
            </tr>
        </thead>
    )
}

export default TableAdditionalHeader