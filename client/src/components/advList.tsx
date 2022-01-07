import React from "react";
import AdvListItem from "./AdvListItem";

type ItemProps = {
    dummy:{
        uuid:string,
        content:{
            title:string,
            created_at:string
        },
    }[]
}
const AdvList: React.FC<ItemProps> =  (props:ItemProps) => {
    return(
        
        <div className="advList">
            {console.log(props.dummy)}
            <h2>Adv</h2>
            <table className="advListTable">
                <thead>
                    <tr>
                        <th className="">글 번호</th>
                        <th>글 제목</th>
                        <th>모집 기한</th>
                        <th>비고</th>
                    </tr>
                </thead>
                {props.dummy.map((el)=>{
                    return <AdvListItem uuid={el.uuid} title={el.content.title} created_at={el.content.created_at}></AdvListItem>
                           
                })}
            </table>
           
            
            
        
        </div>


    ) 
    
}



export default AdvList;



