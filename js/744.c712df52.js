"use strict";(self["webpackChunkvuetools"]=self["webpackChunkvuetools"]||[]).push([[744],{88744:function(t,e,a){a.r(e),a.d(e,{default:function(){return L}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"centerMap",staticStyle:{width:"100%",height:"100%"},attrs:{id:"centerMap"}})},o=[];let i;var T=window.T,c={name:"centerMap",components:{},data(){return{}},watch:{},methods:{showMap1(){const t="http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4c3a4b8cec3d4af47a12cdd192ce35cb",e=new T.TileLayer(t,{minZoom:0,maxZoom:18});i=new T.Map("centerMap",{layers:[e]}),i.centerAndZoom(new T.LngLat(109.79145541962566,32.970373734783635),5),i.setMinZoom(4),i.setMaxZoom(18),i.setMaxBounds(new T.LngLatBounds(new T.LngLat(106.141401,33.441127),new T.LngLat(107.203184,27.675892)))},showMap2(){this.zoom=4;var t,e,a,n="http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4c3a4b8cec3d4af47a12cdd192ce35cb",o="http://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4c3a4b8cec3d4af47a12cdd192ce35cb",c="http://t0.tianditu.gov.cn/ibo_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ibo&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4c3a4b8cec3d4af47a12cdd192ce35cb";t=new T.TileLayer(n,{minZoom:1,maxZoom:18}),e=new T.TileLayer(o,{minZoom:1,maxZoom:18}),a=new T.TileLayer(c,{minZoom:1,maxZoom:18});var E={layers:[t,e,a]};i=new T.Map("centerMap",E),i.centerAndZoom(new T.LngLat(109.67291896206848,32.855915983379035),5),i.enableScrollWheelZoom();var l=new T.Control.Zoom;i.addControl(l),i.enableInertia(),i.enableDoubleClickZoom();var m=new T.Control.Scale;i.addControl(m)},showMap3(){const t="http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4c3a4b8cec3d4af47a12cdd192ce35cb",e=new T.TileLayer(t,{minZoom:0,maxZoom:18});i=new T.Map("centerMap",{layers:[e]}),i.centerAndZoom(new T.LngLat(109.79145541962566,32.970373734783635),5),i.setMinZoom(1),i.setMaxZoom(18);const a=[{title:"卫星",icon:" http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellite.png",layer:TMAP_SATELLITE_MAP},{title:"地图",icon:"http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png",layer:TMAP_NORMAL_MAP},{title:"卫星混合",icon:"http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png",layer:TMAP_HYBRID_MAP}],n=new T.Control.MapType(a);i.addControl(n)}},mounted(){this.showMap3()},created(){}},E=c,l=a(1001),m=(0,l.Z)(E,n,o,!1,null,"492e9856",null),L=m.exports}}]);
//# sourceMappingURL=744.c712df52.js.map