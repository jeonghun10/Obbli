import React, { useState } from "react";


const AdvertiseWrite: React.FC =  () => {
    

    const [userInput, setUserInput] = useState({
        content:'',
        
    })



    return(
        <div className="advertiseWrite">
            <table className="advWriteTable">
                <thead>
                    <tr>
                        <th>공연 장소</th>
                        <th>모집 악기</th>
                        <th>모집 기한</th>
                    </tr>
                </thead>
                    <tr>
                        <th><input type="text"></input></th>
                        <th>
                            <select>
                                <option value="none" selected>===선택===</option>
                                <option value="violin" >바이올린</option>
                                <option value="viola">비올라</option>
                                <option value="cello">첼로</option>
                                <option value="flute">플룻</option>
                            </select>
                        </th>
                        <th><input type="date"></input></th>
                    </tr>
            </table>
            <table className="advWriteTable">
                <thead>
                    <tr>
                        <th>상세 내용</th>
                    </tr>        
                </thead>
                    <tr>
                        <th><textarea></textarea></th>
                    </tr>
            </table>
            <div><button  className="advwritebtn" type="button" onClick={()=>{}}>작성 하기</button></div>
        
        </div>


    ) 
    
}



export default AdvertiseWrite;



