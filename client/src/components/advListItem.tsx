import React from "react";
import {Link} from "react-router-dom"

type ItemProps = {
    uuid:string,
    title:string,
    created_at:string
}

const AdvListItem: React.FC<ItemProps> =  ({uuid, title, created_at}) => {
    return(
        <tr >
            <th>{uuid}</th>
            <Link to={`/advert/${uuid}`} title={title}><th>{title}</th></Link>
            <th>{created_at}</th>
        </tr>


    ) 
    
}



export default AdvListItem;



