"use strict";(self["webpackChunkvuetools"]=self["webpackChunkvuetools"]||[]).push([[699],{3699:function(e,i,t){t.r(i),t.d(i,{default:function(){return r}});var n=function(){var e=this,i=e._self._c;return i("div",{attrs:{id:"cesiumComp"}})},o=[],s={name:"cesiumComp",components:{},props:{},data(){return{viewer:null,Cesium:null}},methods:{initNewModel(){const e=window.Cesium;this.Cesium=e,e.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NzgzOTIzYi0xZGM2LTQ0YjAtOTQ5OC1iMzgwMzE0NDU1NjEiLCJpZCI6NjQxNjEsImlhdCI6MTYzMTkyOTQxN30.ujwg4v68wp_-h9k1NNpAc4UMK9uWQPd0iKQ39m-5kKA";var i=new e.Viewer("cesiumComp",{infoBox:!1,selectionIndicator:!1,shadows:!0,shouldAnimate:!0});this.viewer=i,i.entities.removeAll();var t=e.Cartesian3.fromDegrees(116.350294,28.417213,0),n=e.Math.toRadians(90),o=0,s=0,a=new e.HeadingPitchRoll(n,o,s),d=e.Transforms.headingPitchRollQuaternion(t,a);this.addModel(i,{id:1,name:"model3d/Cesium_Air.glb",position:t,orientation:d,model:{uri:"models/bridge.glb",minimumPixelSize:50,maximumScale:2e3}});var l=e.Cartesian3.fromDegrees(121.528981,25.021947,0),r=e.Math.toRadians(135),m=0,c=0,h=new e.HeadingPitchRoll(r,m,c),u=e.Transforms.headingPitchRollQuaternion(l,h);this.addModel(i,{id:2,name:"model3d/Wood_Tower.glb",position:l,orientation:u,model:{uri:"models/beauty.glb",minimumPixelSize:500,maximumScale:2e4}});const g=new e.ScreenSpaceEventHandler(i.scene.canvas);g.setInputAction((t=>{const n=i.scene.pick(t.position);if(e.defined(n))if(1===n.id.id){let t=i.entities.getById(n.id.id),o=i.entities._lastHighlighted;void 0!==o&&o!==t&&(o.model.color=e.Color.WHITE),t.model.silhouetteColor=new e.Color(.5,.9,1,1),t.model.silhouetteSize=2,i.entities._lastHighlighted=t,i.camera.flyTo({destination:e.Cartesian3.fromDegrees(116.352859,28.400755,1500),duration:3,orientation:{heading:e.Math.toRadians(357.7),pitch:e.Math.toRadians(-44.32),roll:e.Math.toRadians(0)}})}else 2===n.id.id&&this.$message.success("点击了模型2");else{let e=i.entities._lastHighlighted;void 0!==e&&(e.model.silhouetteSize=0),i.entities._lastHighlighted=void 0}this.getClickPosition(i,t,e)}),e.ScreenSpaceEventType.LEFT_CLICK),i.cesiumWidget.creditContainer.style.display="none",i.animation.container.style.display="none",i.timeline.container.style.display="none",i.baseLayerPicker.container.style.display="none",window.cMap=i},addModel(e,i){e.entities.add(i)},initFlyTo(){const e=this.Cesium.Cartesian3.fromDegrees(116.345859,28.408755,1e3);this.viewer.camera.flyTo({destination:e,duration:5,easingFunction:this.Cesium.EasingFunction.LINEAR_NONE,orientation:{heading:this.Cesium.Math.toRadians(57.7),pitch:this.Cesium.Math.toRadians(-44.32),roll:this.Cesium.Math.toRadians(10)}})},demoAddMarker(){var e=window.Cesium.Cartesian3.fromDegrees(116.3521143506911,28.41512780799344,20),i=new window.Cesium.Entity({position:e,billboard:{image:t(7902),scale:.5,width:56,height:175}});this.viewer.entities.add(i)},demoAddMarkerMany(){var e=[window.Cesium.Cartesian3.fromDegrees(116.3521143506911,28.41512780799344,20),window.Cesium.Cartesian3.fromDegrees(116.30209757163713,28.411944298207903,20),window.Cesium.Cartesian3.fromDegrees(116.38209757163713,28.411944298207903,20)],i=e.map((e=>new window.Cesium.Entity({position:e,billboard:{image:t(7902),scale:.5,width:56,height:175}})));i.forEach((e=>{this.viewer.entities.add(e)}))},getClickPosition(e,i,t){var n=e.camera.pickEllipsoid(i.position,e.scene.globe.ellipsoid);if(console.log(n,"cartesian"),n){var o=t.Cartographic.fromCartesian(n),s=t.Math.toDegrees(o.longitude),a=t.Math.toDegrees(o.latitude),d=e.scene.globe.getHeight(o);console.log("经度: "+s+"，纬度: "+a+"，高度: "+d)}}},created(){},mounted(){this.initNewModel(),this.demoAddMarkerMany(),this.initFlyTo()}},a=s,d=t(3736),l=(0,d.Z)(a,n,o,!1,null,"4434b21c",null),r=l.exports},7902:function(e,i,t){e.exports=t.p+"img/ewwyBlue.9fec2bcb.png"}}]);
//# sourceMappingURL=699.2edb1c85.js.map