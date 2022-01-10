import React, { useState } from "react";
import AdvList from "../components/AdvList";
import Filter from "../components/Filter";
import {Link} from "react-router-dom"

const Advertise: React.FC =  () => {
    const dummy = [
        {
            uuid : "1fa85f64-5717-4562-b3fc-2c963f66afa6",
            content : {location:'서울시 마포구', org_name:'앙상블', title:'title_test1', active_until:'2022-01-03'}
            
        },
        {
            uuid : "2fa85f64-5717-4562-b3fc-2c963f66afa6",
            content : {location:'서울시 종로구', org_name:'요게', title:'title_test2', active_until:'2022-01-04'}
            
        },
        {
            uuid : "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            content : {location:'서울시 관악구', org_name:'모자르트', title:'title_test3', active_until:'2022-01-05'}
            
        },
        {
            uuid : "4fa85f64-5717-4562-b3fc-2c963f66afa6",
            content : {location:'서울시 서대문구', org_name:'베토벤', title:'title_test4', active_until:'2022-01-06'}
            
        },
        {
            uuid : "5fa85f64-5717-4562-b3fc-2c963f66afa6",
            content : {location:'서울시 영등포구', org_name:'차이코프스키', title:'title_test5', active_until:'2022-01-07'}
            
        },
        {
            uuid : "6fa85f64-5717-4562-b3fc-2c963f66afa6",
            content : {location:'서울시 마포구', org_name:'하모니', title:'title_test6', active_until:'2022-01-03'}
            
        },
    ]

    const [isAdmin, setIsAdmin] = useState(true);

    return(
        <div className="advertise">
            <Filter/>
            {
                dummy.length===0 ? <div>아직 작성된 글이 없습니다.</div> : <AdvList dummy = {dummy}/>
            }
            
            {
                isAdmin ? <Link to={`/advert/write`}><button className="advwritebtn" type="button">작성하기</button></Link> : null
            }
            
        </div>


    ) 
    
}



export default Advertise;