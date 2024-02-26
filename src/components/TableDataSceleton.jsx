import { Skeleton } from "@mui/material";

const TableDataSceleton = () => {
    return (
        <tr>
            <td>
               <div style={{display:'flex',gap:'10px'}}>
                    <Skeleton varient='rounded' width={100} height={100} animation="wave" />
                    <Skeleton varient='rounded' width="100%" height={100} animation="wave" />
                </div>
            </td>
            <td>
                <Skeleton varient='rounded' width="100%" height={100} animation="wave" />
            </td>
            <td>
                <Skeleton varient='rounded' width="100%" height={100} animation="wave" />
            </td>
            <td>
                <Skeleton varient='rounded' width="100%" height={100} animation="wave" />
            </td>
            <td>
                <Skeleton varient='rounded' width="100%" height={100} animation="wave" />
            </td>
            <td>
                <Skeleton varient='rounded' width="100%" height={100} animation="wave" />
            </td>
        </tr>
    )
}

export default TableDataSceleton;