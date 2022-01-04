import React from "react";

type ItemProps = {
    uuid:string,
    title:string,
    created_at:string
}

const AdvListItem: React.FC<ItemProps> =  ({uuid, title, created_at}) => {
    return(
        <tr >
            <th>{uuid}</th>
            <th>{title}</th>
            <th>{created_at}</th>
        </tr>


    ) 
    
}



export default AdvListItem;



