import React, { useState } from "react";
import AdvList from "../components/advList";
import Filter from "../components/filter";


const Advertise: React.FC =  () => {
    const dummy = [
        {
            uuid : "1fa85f64-5717-4562-b3fc-2c963f66afa6",
            content : {title:'title_test', created_at:'2022-01-03'}
            
        },
        {
            uuid : "2fa85f64-1234-1111-b3fc-2c963f66afa6",
            content : {title:'title_test2', created_at:'2022-01-04'}
        },
        {
            uuid : "3fa85f64-3123-2222-b3fc-2c963f66afa6",
            content : {title:'title_test3', created_at:'2022-01-05'}
        },
        {
            uuid : "4fa85f64-1234-3333-b3fc-2c963f66afa6",
            content : {title:'title_test4', created_at:'2022-01-05'}
        },
        {
            uuid : "5fa85f64-3333-4444-b3fc-2c963f66afa6",
            content : {title:'title_test5', created_at:'2022-01-05'}
        },
        {
            uuid : "6aa85f64-4444-5555-b3fc-2c963f66afa6",
            content : {title:'title_test5', created_at:'2022-01-05'}
        },
        {
            uuid : "5fa85f64-5555-6666-b3fc-2c963f66afa6",
            content : {title:'title_test5', created_at:'2022-01-05'}
        },
    ]

    const [isAdmin, setIsAdmin] = useState(false);

    return(
        <div>
            <Filter/>
            {
                dummy.length===0 ? <div>아직 작성된 글이 없습니다.</div> : <AdvList dummy = {dummy}/>
            }
            
            {
                isAdmin ? <button type="button">작성하기</button> : null
            }
            
        </div>


    ) 
    
}



export default Advertise;