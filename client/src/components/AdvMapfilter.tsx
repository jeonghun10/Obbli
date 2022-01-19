import axios from "axios";
import { resolve } from "node:path/win32";
import React, {useEffect, useState} from "react";
import AdvMapFilterView from "./AdvMapFilterView";
const  kakao  = (window as any).kakao;





const AdvMapFilter =  ({ adverts, setAdverts }: { adverts: any ; setAdverts:any }) => {
    
    const [result, setResult] = useState([] as any)
    const [userInfo, setUserInfo] = useState([] as any)
    useEffect(() => {
        mapScript();
        
    }, [adverts]);

   
    
    const mapScript = () => {
        const container = document.querySelector('.location');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
		};
        const map = new kakao.maps.Map(container, options);
        var clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
            minLevel: 5 // 클러스터 할 최소 지도 레벨 
        });
        var bounds = new kakao.maps.LatLngBounds();
        
        //axios call을 통해 주소지 목록화 
        const location = adverts.map((el: { location: any; uuid:any; org_name:any; title:any})=>{
            return [el.location, el.uuid, el.org_name, el.title ]
        })
        
        var geocoder = new kakao.maps.services.Geocoder();
        const addressSearch = async (address: any) => {
                return new Promise((resolve, reject) => {
                    geocoder.addressSearch(address, function(result: { x: any; y:any, address_name:any  }[], status: any) {
                        
                        if (status === kakao.maps.services.Status.OK) {
                            resolve({"lat": result[0].y, "lng": result[0].x, "address_name":result[0].address_name}, );
                        } else {
                            reject(status);
                        }
                    });
                });
        };


        const markers: any[] = []
        location.map(async (el:any)=>{
            const result = await addressSearch(el[0])
            const position: any[] = []
            position.push(result)
            const marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(position[0].lat, position[0].lng),
                    title:el[1],
                    

            });
            markers.push(marker)
            bounds.extend(new kakao.maps.LatLng(position[0].lat, position[0].lng),);
            map.setBounds(bounds);
            await clusterer.addMarkers(markers)    
        })
        
        var inBounds: any[] ;
        
        
        kakao.maps.event.addListener(map, 'dragend', function()  {
            var userView: { uuid: any; }[] = []

            var bounds = map.getBounds();
            inBounds = markers.filter(function(overlay: { getPosition: () => any; getTitle: ()=> any }, el) {
                    if(bounds.contain(overlay.getPosition())===true){
                        return overlay.getPosition()
                    };
            })
            console.log(inBounds)
            inBounds.forEach((data)=>{
                adverts.forEach((data2: { uuid: any; })=>{
                    if(data.Gb === data2.uuid){
                        userView.push(data2)
                    }
                })
            })
            setUserInfo(userView)
            
        })
        
    }
        


    return(
        <div className="advMapFilter">
            <div  className="advMapFilter location"></div>
            {userInfo.length===0 ? <AdvMapFilterView userInfo={adverts}/>:<AdvMapFilterView userInfo={userInfo}/>}
       </div>
       
        
        

    ) 
    
}



export default AdvMapFilter;



