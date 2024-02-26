import React from 'react'


function TableHeader({TableMainHeaderData}) {
  

  return (
    <thead>
      <tr style={{paddingTop:'20px'}}>
        {TableMainHeaderData?.map((header, index) => {
          return (
            <th key={index}>
              {typeof header === 'object' ? (
                <div style={{display:'flex'}}>
                  <p>{header?.symbol}</p>
                  <p style={{ paddingLeft:'10px' }}>
                    {header?.Text}
                  </p>
                </div>
              ) : (
                <p >{header}</p>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  )
}

export default TableHeader