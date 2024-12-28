import { useEffect } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";

export default function MapContainer() {
	let map = null;
	
	useEffect(() => {
		window._AMapSecurityConfig = {
			securityJsCode: "b022112eec32f459bd3a1a36044398d2",
		};
		AMapLoader.load({
				key: "b9636ec94b92a59fed5b7903c346d814", // 申请好的Web端开发者Key，首次调用 load 时必填
				version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
				plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
			})
			.then((AMap) => {
				map = new AMap.Map("container", {
					// 设置地图容器id
					viewMode: "3D", // 是否为3D地图模式
					zoom: 11, // 初始化地图级别
					center: [117.30301, 31.829231], // 初始化地图中心点位置
				});
			})
			.catch((e) => {
				console.log(e);
			});
		
		return () => {
			map?.destroy();
		};
	}, []);
	
	return (
		<div
			id="container"
			style={{
				height: '400px',
				width: '100%',
			}}
			className="w-full h-[400px] rounded-lg shadow-lg animate-fade-in mt-8"
		></div>
	);
}
