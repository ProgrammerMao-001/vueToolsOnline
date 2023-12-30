(self["webpackChunkvuetools"]=self["webpackChunkvuetools"]||[]).push([[884],{4884:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return c}});var n=function(){var e=this,i=e._self._c;return i("div",{attrs:{id:"cesiumComp"}})},s=[],o={name:"cesiumComp",components:{},props:{},computed:{},watch:{},data(){return{watchBridgeCode:null,viewer:null,Cesium:null,szlfyArr:[],wsdyArr:[],szcdArr:[{surveyType:"szcd",latitude:"28.416212337871073",longitude:"116.35211058849842",deviceCode:"10000",deviceName:"Rambutan pi",deviceState:0,elevation:30,alertNum:0},{surveyType:"szcd",latitude:"28.41512780799344",longitude:"116.3521143506911",deviceCode:"8705",deviceName:"矿场挖掘机",deviceState:0,elevation:20,alertNum:0},{surveyType:"szcd",latitude:"28.41512780799344",longitude:"116.3521143506911",deviceCode:"9000",deviceName:"iRaspberry",deviceState:0,elevation:20,alertNum:0}],ewwyArr:[],szczyArr:[],monitorArr:[]}},methods:{initNewModel(){const e=window.Cesium;this.Cesium=e,e.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NzgzOTIzYi0xZGM2LTQ0YjAtOTQ5OC1iMzgwMzE0NDU1NjEiLCJpZCI6NjQxNjEsImlhdCI6MTYzMTkyOTQxN30.ujwg4v68wp_-h9k1NNpAc4UMK9uWQPd0iKQ39m-5kKA";var i=new e.Viewer("cesiumComp",{infoBox:!1,selectionIndicator:!1,shadows:!0,shouldAnimate:!0});this.viewer=i,i.entities.removeAll();var t=e.Cartesian3.fromDegrees(116.350294,28.417213,0),n=e.Math.toRadians(90),s=0,o=0,r=new e.HeadingPitchRoll(n,s,o),a=e.Transforms.headingPitchRollQuaternion(t,r);this.addModel(i,{id:1,name:"model3d/Cesium_Air.glb",position:t,orientation:a,model:{uri:"models/bridge.glb",minimumPixelSize:50,maximumScale:2e3}});const d=new e.ScreenSpaceEventHandler(i.scene.canvas);d.setInputAction((t=>{const n=i.scene.pick(t.position);if(e.defined(n)){if(1===n.id.id){let t=i.entities.getById(n.id.id),s=i.entities._lastHighlighted;void 0!==s&&s!==t&&(s.model.color=e.Color.WHITE),t.model.silhouetteColor=new e.Color(.5,.9,1,1),t.model.silhouetteSize=2,i.entities._lastHighlighted=t,i.camera.flyTo({destination:e.Cartesian3.fromDegrees(116.352859,28.400755,1500),duration:3,orientation:{heading:e.Math.toRadians(357.7),pitch:e.Math.toRadians(-44.32),roll:e.Math.toRadians(0)}})}}else{let e=i.entities._lastHighlighted;void 0!==e&&(e.model.silhouetteSize=0),i.entities._lastHighlighted=void 0}this.getClickPosition(i,t,e)}),e.ScreenSpaceEventType.LEFT_CLICK),i.cesiumWidget.creditContainer.style.display="none",i.animation.container.style.display="none",i.timeline.container.style.display="none",i.baseLayerPicker.container.style.display="none",window.cMap=i},getClickPosition(e,i,t){var n=e.camera.pickEllipsoid(i.position,e.scene.globe.ellipsoid);if(n){var s=t.Cartographic.fromCartesian(n),o=t.Math.toDegrees(s.longitude),r=t.Math.toDegrees(s.latitude),a=e.scene.globe.getHeight(s);console.log("经度: "+o+"，纬度: "+r+"，高度: "+a)}},addModel(e,i){e.entities.add(i)},initFlyTo(){const e=this.Cesium.Cartesian3.fromDegrees(116.345859,28.408755,1e3);this.viewer.camera.flyTo({destination:e,duration:5,easingFunction:this.Cesium.EasingFunction.LINEAR_NONE,orientation:{heading:this.Cesium.Math.toRadians(57.7),pitch:this.Cesium.Math.toRadians(-44.32),roll:this.Cesium.Math.toRadians(10)}})},addMarkerBySurveyType(e,i,n){console.log(e,i,n);const s=window.Cesium.Cartesian3.fromDegrees(i.longitude,i.latitude,i.elevation),o=new window.Cesium.BillboardGraphics({image:t(4833)(`./${n}Green.png`),scale:.5,width:56,height:175}),r=new window.Cesium.Entity({position:s,billboard:o,item:i,deviceCode:i.deviceCode});this.viewer.entities.add(r),e.push(r)},bindMarkerClickEvent(e){this.viewer.screenSpaceEventHandler.setInputAction((i=>{const t=this.viewer.scene.pick(i.position);if(window.Cesium.defined(t)&&t.id){const i=t.id._deviceCode,n=e.find((e=>e._deviceCode===i));n&&(console.log("点击了点位：",n),this.$message.success("点击了点位"+JSON.stringify(n._item)))}}),window.Cesium.ScreenSpaceEventType.LEFT_CLICK)},removeEntities(e){e&&e.length>0&&(e.forEach((e=>{this.viewer.entities.remove(e)})),e=[])},getBottomItemData(e){if(e.dictValue!==e.imgUrl)switch(e.dictValue){case"szlfy":this.removeEntities(this.szlfyArr);break;case"wsdy":this.removeEntities(this.wsdyArr);break;case"szcd":this.removeEntities(this.szcdArr);break;case"ewwy":this.removeEntities(this.ewwyArr);break;case"szczy":this.removeEntities(this.szczyArr);break;case"monitor":this.removeEntities(this.monitorArr);break}else this.szcdArr.forEach((e=>{this.addMarkerBySurveyType(this.szcdArr,e,"szcd"),this.bindMarkerClickEvent(this.szcdArr)}))}},created(){},mounted(){this.initNewModel(),this.getBottomItemData({dictValue:"szcd",imgUrl:"szcd"}),this.initFlyTo()}},r=o,a=t(3736),d=(0,a.Z)(r,n,s,!1,null,"ff6811f0",null),c=d.exports},4833:function(e,i,t){var n={"./ewwyGreen.png":1387,"./monitorGreen.png":793,"./szcdGreen.png":8292,"./szczyGreen.png":6423,"./szifyGreen.png":8276,"./wsdyGreen.png":352};function s(e){var i=o(e);return t(i)}function o(e){if(!t.o(n,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=4833},1387:function(e,i,t){"use strict";e.exports=t.p+"img/ewwyGreen.25b73e8c.png"},793:function(e,i,t){"use strict";e.exports=t.p+"img/monitorGreen.6abec2e8.png"},8292:function(e,i,t){"use strict";e.exports=t.p+"img/szcdGreen.2a2aaa59.png"},6423:function(e,i,t){"use strict";e.exports=t.p+"img/szczyGreen.20fb74f7.png"},8276:function(e,i,t){"use strict";e.exports=t.p+"img/szifyGreen.de4ecef1.png"},352:function(e,i,t){"use strict";e.exports=t.p+"img/wsdyGreen.f473dd4f.png"}}]);
//# sourceMappingURL=884.af41d671.js.map