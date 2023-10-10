import { useRef, useEffect } from "react";

const KakaoMap = () => {
  // var container = document.getElementById("map"); // 리액트는 이 형식으로 사용 안됨
  const mapRef = useRef(null); // 참조하는 함수

  var options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 리액트의 경우 kakao가 정의되지 않았기 때문에 window를 붙여줘야 함
    level: 3, // 지도의 레벨(확대, 축소)
  };

  useEffect(() => {
    var map = new window.kakao.maps.Map(mapRef.current, options);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100vh" }}></div>;
  // <div id="map" style="width:500px;height:400px;"></div>;
};
export default KakaoMap;
