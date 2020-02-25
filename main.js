//Cesium.Ion.defaultAccessToken = '你的token'

//自定义数据源 自定义BaseLayerPicker ProviderViewModel
var providerViewModels = [];
//影像地图
//谷歌服务地址：https://blog.csdn.net/gisuuser/article/details/83089467
//http://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}//卫星图加注记
//http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}   影像
//&gl=cn 火星偏移
//谷歌影像
var guge = new Cesium.UrlTemplateImageryProvider({
    url: 'http://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}',
    tilingScheme: new Cesium.WebMercatorTilingScheme(),
    minimumLevel: 1,
    maximumLevel: 20
});
var googleMapModel = new Cesium.ProviderViewModel({
    name: '谷歌地图',
    iconUrl: Cesium.buildModuleUrl('script/Cesium-1.66/Widgets/Images/ImageryProviders/esriWorldImagery.png'),
    tooltip: '谷歌影像服务 \nhttp://www.google.cn/maps',
    creationFunction: function () {
       return guge;
    }
});
providerViewModels.push(googleMapModel);

//国家天地图 天地图被拦截？？？
var mtdt = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://t0.tianditu.com/img_w/wmts?tk=2ce94f67e58faa24beb7cb8a09780552',
    layer: 'img',
    style: 'default',
    format: 'tiles',
    tileMatrixSetID: 'w',
    credit: new Cesium.Credit('天地图全球影像服务'),
    maximumLevel: 18
});
var tdtMapModel = new Cesium.ProviderViewModel({
    name: '天地图',
    iconUrl: Cesium.buildModuleUrl('script/Cesium-1.66/Widgets/Images/ImageryProviders/esriWorldImagery.png'),
    tooltip: '天地图影像服务 \nhttp://www.tianditu.cn',
    creationFunction: function () {
       return mtdt;
    }
});
providerViewModels.push(tdtMapModel);
//var url =  'http://{s}.tianditu.com/img_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles';
/*var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider : new Cesium.WebMapTileServiceImageryProvider({
        url :url,
        layer : 'img',
        style : 'default',
        format : 'tiles',
        tileMatrixSetID : 'w',
        credit : new Cesium.Credit('天地图全球影像服务'),
        subdomains : ['t0','t1','t2','t3','t4','t5','t6','t7'],
        maximumLevel : 18
    }),
    baseLayerPicker : false
});*/

//本地离线数据 瓦片数据
/*
var globemap = Cesium.createTileMapServiceImageryProvider({
    url: 'sampledata/imagery/ceshi/tiles'
});*/

//----------------------------------多图层控制   
/*var imageryLayers = viewer.imageryLayers;
var tdtNoteLayer = imageryLayers.addImageryProvider(tdtNoteLayerProvider);//添加注记图层
imageryLayers.raiseToTop(tdtNoteLayer);//将注记图层置顶
imageryLayers.alpha = 0.3;//改变透明度
imageryLayers.brightness = 1.5;//改变亮度*/

var esriMap = new Cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
    enablePickFeatures: false
});
var esriMapModel = new Cesium.ProviderViewModel({
    name: 'esri Maps',
    iconUrl: Cesium.buildModuleUrl('script/Cesium-1.66/Widgets/Images/ImageryProviders/esriWorldImagery.png'),
    tooltip: 'ArcGIS 地图服务 \nhttps://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
   creationFunction: function () {
       return esriMap;
    }
});
providerViewModels.push(esriMapModel);

//scene.skyAtmosphere.show false;//大气层
//viewer.scene.globe.depthTestAgainstTerrain = true;//控制视角不转到地下
var viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false,//左下角控制动画
    //baseLayerPicker: false,//右上角图层选择器 baseLayerPicker设置为true，在控件的最下方就是地形切换按钮
    imageryProviderViewModels: providerViewModels,//自定义扩展
    fullscreenButton: false,
    geocoder: false,//右上角搜索   默认bing地图 //是否显示地名查找控件
    homeButton: true,
    infoBox: false,//是否显示点击要素之后显示的信息
    scene3DOnly: false,//仅仅显示3d,可隐藏右上角2d和3d按钮  哥伦布视图（CV）
    sceneModePicker: false,//是否显示投影方式控件
    creditContaniner: "credit",//版权，数据归属
    vrButton: false,
    //skyBox:new Cesium.SkyBox(),//天空盒
    //skyBox : false,
    skyBox: new Cesium.SkyBox({
        sources: {
            positiveX: '/data/SkyBox/tycho2t3_80_px.jpg',
            negativeX: '/data/SkyBox/tycho2t3_80_mx.jpg',
            positiveY: '/data/SkyBox/tycho2t3_80_py.jpg',
            negativeY: '/data/SkyBox/tycho2t3_80_my.jpg',
            positiveZ: '/data/SkyBox/tycho2t3_80_pz.jpg',
            negativeZ: '/data/SkyBox/tycho2t3_80_mz.jpg'
        }
    }),
    contextOptions: {
        webgl: {
           alpha: true
        }
    },
    selectionoIndicatr: false,
    timeline: false,//最下面时间轴            
    navigationHelpButton: false,//右上角帮助按钮  //是否显示帮助信息控件
    navigationInstructionsInitiallyVisibl: false,
    useDefaultRenderLoop: true,
    showRenderLoopErrors: true,
    projectionPicker: false,//投影选择器
    //selectionIndicator:false,//禁止entity选中
    imageryProvider: guge //esri //
});

viewer.homeButton.viewModel.tooltip = "初始位置";
//homebutton 位置
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(112.15, 24.54, 116.25, 40.56);

//鼠标操作 中间缩放，右键旋转
viewer.scene.screenSpaceCameraController.zoomEventTypes = [Cesium.CameraEventType.WHEEL, Cesium.CameraEventType.PINCH];
viewer.scene.screenSpaceCameraController.tiltEventTypes = [Cesium.CameraEventType.PINCH, Cesium.CameraEventType.RIGHT_DRAG];

//取消双击事件
viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);


viewer.scene.fxaa = false;//关闭 快速抗锯齿
//viewer.scene.fog.enabled = false;
//viewer.scene.globe.enableLighting = true;
//viewer._cesiumWidget._creditContainer.style.display = "none";		//去掉左下角那个不可爱的图标 logo

//高动态范围 一个场景的最亮和最暗部分之间的相对比值
//viewer.scene.highDynamicRange = false;

/* ====================================================世界地形图===========*/
/*
Cesium全球地形服务 不稳定
var terrain = new Cesium.createWorldTerrain({           
    requestWaterMask:true,           
    requestVertexNormals:true    //requestVertexNormals设为true并开启全球光照。   
}); 
*/
//按照程序创建椭球的表面。缺乏地形的真实外观，但不从服务器请求数据
//var ellipsoidProvider = new Cesium.EllipsoidTerrainProvider();    
//viewer.terrainProvider = terrain;//ellipsoidProvider terrain

//Cesium动态叠加地形图 
var terrainObj = {url:"//assets.agi.com/stk-terrain/world",requestWaterMask:false,requestVertexNormals:false,proxyUrl:""}; 
//var terrainObj = {url:"http://localhost:8180/cesium/worldTerrain",requestWaterMask:false,requestVertexNormals:false,proxyUrl:""};  
//超图地形  https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path
terrainObj = {url:"//assets.agi.com/stk-terrain/world",requestWaterMask:false,requestVertexNormals:false,proxyUrl:""}; 

//arcgis : https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer
//使用  ArcGisImageServerTerrainProvider.js  
//var terrainProvider = createArcGisElevation3DTerrainProvider(Cesium);

//addTerrainLayer(terrainObj)
/** 
     * 添加地形图图层 
     * @method addTerrainLayer 
     * @param  url 地形图url proxyUrl 代理请求url 
     * @return 
     */
var addTerrainLayer = function (terrainObj) {
    if (terrainObj.url && terrainObj.url.replace(/(^s*)|(s*$)/g, "").length > 0) {
        var provider = {};
        if (terrainObj.proxyUrl && terrainObj.proxyUrl.length > 0)
            provider = {
                proxy: new Cesium.DefaultProxy(terrainObj.proxyUrl),
                url: terrainObj.url,
                requestWaterMask: terrainObj.requestWaterMask,
                requestVertexNormals: terrainObj.requestVertexNormals
            };
        else
            provider = { url: terrainObj.url, requestWaterMask: terrainObj.requestWaterMask, requestVertexNormals: terrainObj.requestVertexNormals };

        var terrainProvider = new Cesium.CesiumTerrainProvider(provider);
        this.cesiumViewer.terrainProvider = terrainProvider;
    }
};



//加载超图地形图
var ctTerrainUrl = "https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path";
var ctTerrainProvider = new Cesium.CesiumTerrainProvider({
    url: ctTerrainUrl,
    requestVertexNormals: true
});
viewer.terrainProvider = ctTerrainProvider;

/**===========================================鼠标事件====================================== */
var CesiumEventHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
//得到当前三维场景的椭球体
var ellipsoid = viewer.scene.globe.ellipsoid;
//鼠标移动显示经纬度，高程
CesiumEventHandler.setInputAction(function (movement) {
    //通过指定的椭球或者地图对应的坐标系，将鼠标的二维坐标转换为对应椭球体三维坐标
    cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
    if (cartesian) {
       //将笛卡尔坐标转换为地理坐标 
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        //将弧度转为度的十进制度表示
        var longitudeDegree = Cesium.Math.toDegrees(cartographic.longitude);
        var latitudeDegree = Cesium.Math.toDegrees(cartographic.latitude);
        //camara 相机高
        //var alti_String=(viewer.camera.positionCartographic.height/1000).toFixed(2);//高

        var carto=new Cesium.Cartographic.fromDegrees(longitudeDegree,latitudeDegree);　　//输入经纬度
        /*
        var h1 = viewer.scene.globe.getHeight(carto);
        coorStr = '经度:' + longitudeDegree.toFixed(2) + '\t' +
                     '纬度:' + latitudeDegree.toFixed(2) + '\t' +
                     '高程:' +  (h1 ? h1 : 0).toFixed(2);
        document.getElementById("logging").innerHTML = coorStr;*/

        //根据地形计算高程
        
        LonlatPointsTerrainData([{ 'lon': longitudeDegree, 'lat': latitudeDegree }],
           function (terrainData) {
               var coorStr = "";
                if (terrainData.length > 0) {
                    coorStr = '经度:' + Cesium.Math.toDegrees(terrainData[0].longitude) + '\t' +
                     '纬度:' + Cesium.Math.toDegrees(terrainData[0].latitude) + '\t' +
                     '高程:' +  (terrainData[0].height ? terrainData[0].height : 0);
                } else {
                    coorStr = '经度:' + Cesium.Math.toDegrees(terrainData[0].longitude) + '\t' +
                    '纬度:' + Cesium.Math.toDegrees(terrainData[0].latitude) + '\t' +
                    '高程:' + '未知';
                }
                document.getElementById("logging").innerHTML = coorStr;
            }
        );
    }  
 }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

 ////请求高程
LonlatPointsTerrainData = function (lonlats, callback) {
    var terrainLevel = 6;
    var pointArrInput = [];
    for (var i = 0; i < lonlats.length; i++) {
       pointArrInput.push(Cesium.Cartographic.fromDegrees(lonlats[i].lon, lonlats[i].lat));
    }
    var promise = Cesium.sampleTerrain(viewer.terrainProvider, terrainLevel, pointArrInput);//pointArrInput
    Cesium.when(promise, function (updatedPositions) {
       callback(updatedPositions);
    });
 };

/**=========================================================================================== */

viewer.scene.debugShowFramesPerSecond = true;
//点击home按钮跳转到自定义位置
/*viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(commandInfo){
    //Fly to custom position
    viewer.camera.flyToBoundingSphere(boundingSphere);
    //Tell the home button not to do anything
    commandInfo.cancel = ture;
});*/

//添加Entity box
/*var entity1 = viewer.entities.add({
    name : "我的实体1",
    position : Cesium.Cartesian3.fromDegrees(116,27,30000.0),
    box : {
        dimensions : Cesium.Cartesian3.fromDegrees(116,27,40000.0),//new Cesium.Cartesian3()
        material : Cesium.Color.RED.withAlpha(0.5),
        outline : true,
        outlineColor : Cesium.Color.BLACK
    }
});
viewer.zoomTo(viewer.entities);*/

//添加CZML实体
//var dataSourcePromise = Cesium.CzmlDataSource.load(czml);
//viewer.dadtaSources.add(dataSourcePromise);
//viewer.zoomTo(dataSourcePromise);

//添加polyline
/*var entity = viewer.entities.add({
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([111,28,113,28]),
        width : 5,
        //material : Cesium.Color.RED
        material : new Cesium.PolylineGlowMaterialProperty(
            {
                glowPower:0.2,
                color: Cesium.Color.BLUE
            }
        )
    }
});*/

//添加wall
/*
var getColorRamp = function(elevationRamp){
    var ramp = document.createElement('canvas');
    ramp.width = 1;
    ramp.height = 100;
    var ctx = ramp.getContext('2d');

    var values = elevationRamp;
    var grd = ctx.createLinearGradient(0,0,0,100);
    grd.addColorStop(values[0],'#000000');//black
    grd.addColorStop(values[1],'#2747E0');//blue
    grd.addColorStop(values[2],'#D33B7D');//pink
    grd.addColorStop(values[3],'#D33038');//red
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,1,100);
    return ramp;
};

var redwall = viewer.entities.add({
    name : "Red wall at height",
    wall : {
        positions : Cesium.Cartesian3.fromDegreesArrayHeights([
            113.44444,28.2222222,2000.0,
            113.5555,28.2222222,2000.0,
            113.66666,28.333333,2000.0,
            113.777777777,28.333333,2000.0,
        ]),
        miniumHeights : [3000,2000,2000,3000],
        material: getColorRamp([0.0,0.045,0.1,0.15],true)
    }
});*/

//贴地线
/*
var rectanglePrimitive = viewer.scene.primitives.add(
    new Cesium.GroundPrimitive({
        geometryInstances: new Cesium.GeometryInstance({
            geometry: new Cesium.CorridorGeometry({
                vertexFormat : Cesium.VertexFormat.POSITION_ONLY,
                positions:Cesium.Cartesian3.fromDegreesArray([
                    108,23,112.82742,23.0675,112.82888,23.0646,112.8307,23.0609,112.8,23.05
                ]),
                width:40
            }),
            attributes:{
                color:Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(0.0,1.0,0.0,0.5))
            }
        }),
        classificationType : Cesium.ClassificationType.TERRATIN
    })
);*/

//设置camera roll绕x轴旋转 pitch 绕y轴旋转 heading 绕z轴旋转
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(113.0, 28.2, 50000),//
    orientation: {
        heading: Cesium.Math.toRadians(20.0),//方向
        pitch: Cesium.Math.toRadians(-90.0),//倾斜角度
        roll: 0
    }
});

//viewer.zoomTo(viewer.entities);

/*==========================================================================*/
function loadGeoJSON() {
    //alert("OK");
    var promise = Cesium.GeoJsonDataSource.load('/data/430000.geoJson');  //显示数据  直接加载json数据 比把json转化成czml在加载 快很多
    promise.then(function (dataSource) {
        viewer.dataSources.add(dataSource);
        var entities = dataSource.entities.values;
        var colorHash = {};

        for (var o = 0; o < entities.length; o++) {
            var r = entities[o];
            r.nameID = o;   //给每个添加一个编号，方便之后修改样式
            //r.polyline.width = 10;  //添加默认样式
            r.polygon.extrudedHeight = 5000.0;
            /*(r.polyline.material = new Cesium.PolylineGlowMaterialProperty({
                glowPower: .1, //一个数字属性，指定发光强度，占总线宽的百分比。
                color: Cesium.Color.ORANGERED.withAlpha(.9)
            }), 10)*/

        }
        var temp = new Array();
        window.Hightlightline = function (nameid) {
            var exists = temp.indexOf(nameid);
            if (exists <= -1) {
                Highlight(nameid, 50, 50);
                temp.push(nameid);  // 添加线nameID到数组，
            }
            else  //已经是高亮状态了 再次点击修改为原始状态
            {
                Highlight(nameid, 10, 10);
                temp.splice(exists, 1);  //删除对应的nameID
            }
        }
        window.Highlight = function (nameid, width1, width2) {
            for (var o = 0; o < entities.length; o++) {
                var m = entities[o];
                if (nameid == o) {
                    m.polyline.width = width1;
                    (m.polyline.material = new Cesium.PolylineGlowMaterialProperty({
                        glowPower: .1, //一个数字属性，指定发光强度，占总线宽的百分比。
                        color: Cesium.Color.ORANGERED.withAlpha(.9)
                    }), width2)
                }
            }
        }
    });
    viewer.flyTo(promise);
    viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
        var pickedFeature = viewer.scene.pick(movement.position);
        if (typeof (pickedFeature) != "undefined")   //鼠标是否点到线上
        {
            var name_id = pickedFeature.id.nameID;  //获取每条线的nameID
            Hightlightline(name_id);
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}

function loadTopoJson() {
    var promise = Cesium.GeoJsonDataSource.load('/data/1.topojson');
    promise.then(function (dataSource) {
        viewer.dataSources.add(dataSource);
        var entities = dataSource.entities.values;

        var colorHash = {};
        for (var i = 0; i < entities.length; i++) {
            //For each entity, create a random color based on the state name.
            //Some states have multiple entities, so we store the color in a
            //hash so that we use the same color for the entire state.
            var entity = entities[i];
            var name = entity.name;
            var color = colorHash[name];
            if (!color) {
                color = Cesium.Color.fromRandom({
                    alpha: 1.0
                });
                colorHash[name] = color;
            }

            //Set the polygon material to our random color.
            entity.polygon.material = color;
            //Remove the outlines.
            entity.polygon.outline = false;

            //Extrude the polygon based on the state's population.  Each entity
            //stores the properties for the GeoJSON feature it was created from
            //Since the population is a huge number, we divide by 50.
            entity.polygon.extrudedHeight = entity.properties.Population / 50.0;
        }
    });
    viewer.flyTo(promise);
}

var modelCzml = [{
    "id": "document",
    "name": "CZML Model",
    "version": "1.0"
}, {
    "id": "aircraft model",
    "name": "Cesium Air",
    "position": {
        "cartographicDegrees": [112, 28, 300]
    },
    "model": {
        "gltf": "/data/CesiumMilkTruck.glb"
    }
}];

//加载模型
function loadModel(){
    var height = 285;var pitch = 0;var roll = 0;
    var lon = 113.0744619; var lat = 28.2503706;
    //由地形获取高程
    LonlatPointsTerrainData([{ 'lon': lon, 'lat': lat }],
        function (terrainData) {
            var position = Cesium.Cartesian3.fromDegrees(lon, lat, 290);//terrainData[0].height
            var heading = Cesium.Math.toRadians(135);
            var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
            var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
            var url = '/data/model/barrel.gltf';

            var entity = viewer.entities.add({
                name: "模型1",
                position: position,
                orientation: orientation,
                model: {
                    uri: url,
                    minimumPixelSize: 128,
                    maximumScale: 20000,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND // 让模型在地形上紧贴  几何图形 "clampToGround": true,
                }
            });
            viewer.trackedEntity = entity;

            viewer.flyTo(viewer.entities);//zoomTo
        }
    );
}

function loadGlb() {
    filenameToSave = 'Model.kmz';
    dataSourcePromise = Cesium.CzmlDataSource.load(modelCzml);
    viewer.dataSources.add(dataSourcePromise)
        .then(function (dataSource) {
            viewer.trackedEntity = dataSource.entities.getById('aircraft model');
        });
}

function loadCZML() {
    filenameToSave = 'Satellites.kmz';
    dataSourcePromise = Cesium.CzmlDataSource.load('/data/simple.czml');
    viewer.dataSources.add(dataSourcePromise);

    viewer.camera.flyHome(0);
}


var moveActive = false;

//卷帘
function loadSplit() {

    document.getElementById("slider").style.display = "block";
    var layers = viewer.imageryLayers;
    var earthAtNight = layers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
        url: 'http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}&gl=cn',
        tilingScheme: new Cesium.WebMercatorTilingScheme(),
        minimumLevel: 1,
        maximumLevel: 20
    }));
    earthAtNight.splitDirection = Cesium.ImagerySplitDirection.RIGHT; // Only show to the right of the slider.

    var slider = document.getElementById('slider');
    viewer.scene.imagerySplitPosition = (slider.offsetLeft) / slider.parentElement.offsetWidth;

    var handler = new Cesium.ScreenSpaceEventHandler(slider);





    handler.setInputAction(function () {
        moveActive = true;
    }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
    handler.setInputAction(function () {
        moveActive = true;
    }, Cesium.ScreenSpaceEventType.PINCH_START);

    handler.setInputAction(move, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    handler.setInputAction(move, Cesium.ScreenSpaceEventType.PINCH_MOVE);

    handler.setInputAction(function () {
        moveActive = false;
    }, Cesium.ScreenSpaceEventType.LEFT_UP);
    handler.setInputAction(function () {
        moveActive = false;
    }, Cesium.ScreenSpaceEventType.PINCH_END);
}

//测量
function measurement() {
    var arr = [];
    var isrigtclick = false;
    var isleftclick = false;
    var scene = viewer.scene;
    scene.skyBox.show = false;
    scene.skyAtmosphere.show = false;
    scene.globe.depthTestAgainstTerrain = false;
    var handler;
    var cartesian, longitudeString, latitudeString;
    var ellipsoid = scene.globe.ellipsoid;
    var entities;
    viewer.scene.globe.depthTestAgainstTerrain = true;
    var entity = viewer.entities.add({ label: { show: false } });
    var pickedEntities = new Cesium.EntityCollection();
    handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function (movement) {
        entities = viewer.entities;
        entities.remove(entities.getById(5));
        cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
        if (movement.endPosition && cartesian) {
            var cartographic = ellipsoid.cartesianToCartographic(cartesian);
            longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
            latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
            if (isleftclick) {
                entity.position = cartesian;
                entity.label.show = true;
                entity.label.font = '20px sans-serif';
                entity.label.fillColor = Cesium.Color.YELLOW;
                entity.label.horizontalOrigin = Cesium.HorizontalOrigin.CENTER;
                entity.label.pixelOffset = new Cesium.Cartesian2(0.0, -10.0);
                entity.label.pixelOffsetScaleByDistance = new Cesium.NearFarScalar(1.5e2, 3.0, 1.5e7, 0.5);
                entity.label.text = ""
            }
            try {
                if (arr.length >= 2) {
                    entities.add({
                        id: 5,
                        name: 'pl',
                        polyline: {
                            positions: new Cesium.Cartesian3.fromDegreesArray([arr[arr.length - 2], arr[arr.length - 1], longitudeString, latitudeString]),
                            width: 3.0
                        }
                    })
                }
            } catch (e) { }
            handler.setInputAction(function (rigtclick) {
                console.log("RIGHT_CLICK");
                var n = arr.length;
                arr[n] = longitudeString;
                arr[n + 1] = latitudeString;
                if (!isrigtclick) { moveToLine(arr) }
                arr = [];
                isleftclick = false;
                isrigtclick = true;
                entity.label.show = false;
                handler = handler && handler.destroy()
            }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
            handler.setInputAction(function (leftclick) {
                console.log("RIGHT_CLICK");
                isrigtclick = false;
                isleftclick = true;
                var n = arr.length;
                arr[n] = longitudeString;
                arr[n + 1] = latitudeString;
                moveToLine(arr)
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
}

function showLblBox(str) {
    var infobox = document.getElementById('logging');
    //infobox.style.left = getMouseXY().X + 10 + "px";
    //infobox.style.top = getMouseXY().Y + 20 + "px";
    infobox.textContent = "长度为：" + str;
    //infobox.style.display = "block"
}

function hideLblBox() {
    var infobox = document.getElementById('logging');
    //infobox.style.display = "none"
}

function moveToLine(arr) {
    var scene = viewer.scene;
    scene.skyBox.show = false;
    scene.skyAtmosphere.show = false;
    scene.globe.depthTestAgainstTerrain = false;
    var handler;
    var cartesian;
    var ellipsoid = scene.globe.ellipsoid;
    var WebMercatorProjection = new Cesium.WebMercatorProjection();
    var entity = viewer.entities.add({ label: { show: false } });
    var entities = viewer.entities;
    var pickedEntities = new Cesium.EntityCollection();
    var pickColor = Cesium.Color.YELLOW.withAlpha(0.5);

    function makeProperty(entity, color) {
        var colorProperty = new Cesium.CallbackProperty(function (time, result) {
            if (pickedEntities.contains(entity)) { return pickColor.clone(result) }
            return color.clone(result)
        }, false);
        try {
            entity.polyline.material = new Cesium.ColorMaterialProperty(colorProperty)
        } catch (e) { }
    }
    if (arr.length >= 4) {
        for (i = 0; i < arr.length - 3; i += 2) {
            try {
                var line = entities.add({ name: 'pl', polyline: { positions: new Cesium.Cartesian3.fromDegreesArray([arr[i], arr[i + 1], arr[i + 2], arr[i + 3]]), width: 3.0 } });
                makeProperty(line, Cesium.Color.WHITE.withAlpha(0.5))
            } catch (e) { }
        }
    }
    var Len = 0;
    var cg, cs, x1, y1, x2, y2;
    for (i = 0; i < arr.length - 1; i += 2) {
        if (i > 1) {
            cg = ellipsoid.cartesianToCartographic(Cesium.Cartesian3.fromDegrees(arr[i - 2], arr[i - 1]));
            cs = WebMercatorProjection.project(cg);
            x1 = cs.x;
            y1 = cs.y;
            cg = ellipsoid.cartesianToCartographic(Cesium.Cartesian3.fromDegrees(arr[i], arr[i + 1]));
            cs = WebMercatorProjection.project(cg);
            x2 = cs.x;
            y2 = cs.y;
            Len = Len + Math.round(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)), 0)
        }
        entities.add({ position: Cesium.Cartesian3.fromDegrees(arr[i], arr[i + 1]), point: { show: true, color: Cesium.Color.SKYBLUE, pixelSize: 5, outlineColor: Cesium.Color.RED, outlineWidth: 3 }, label: { text: Len.toString() + " 米", font: '20px sans-serif', fillColor: Cesium.Color.WHITE, horizontalOrigin: Cesium.HorizontalOrigin.LEFT, pixelOffset: new Cesium.Cartesian2(0.0, -10.0), pixelOffsetScaleByDistance: new Cesium.NearFarScalar(1.5e2, 3.0, 1.5e7, 0.5) } })
    }
    handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function (movement) {
        var pickedObjects = scene.drillPick(movement.endPosition);
        if (Cesium.defined(pickedObjects)) {
            pickedEntities.removeAll();
            hideLblBox();
            for (var i = 0; i < pickedObjects.length; ++i) {
                var entity = pickedObjects[i].id;
                try {
                    pickedEntities.add(entity);
                    if (entity.name == "pl") {
                        cg = ellipsoid.cartesianToCartographic(entity.polyline.positions.getValue()[0]);
                        cs = WebMercatorProjection.project(cg);
                        x1 = cs.x;
                        y1 = cs.y;
                        cg = ellipsoid.cartesianToCartographic(entity.polyline.positions.getValue()[1]);
                        cs = WebMercatorProjection.project(cg);
                        x2 = cs.x;
                        y2 = cs.y;
                        var Len1 = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
                        Len1 = Math.round(Len1, 0);
                        showLblBox(Len1 + " 米")
                    }
                } catch (e) { hideLblBox() }
            }
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
}

/* ========================================================= */

function move(movement) {
    if (!moveActive) {
        return;
    }

    var relativeOffset = movement.endPosition.x;
    var splitPosition = (slider.offsetLeft + relativeOffset) / slider.parentElement.offsetWidth;
    slider.style.left = 100.0 * splitPosition + '%';
    viewer.scene.imagerySplitPosition = splitPosition;
}

function addEntity(){
    //entity: box circle ellipse corridor
    //box
    viewer.entities.add({
        name: 'Blue box',
        position: Cesium.Cartesian3.fromDegrees(111.0, 40.0, 0),
        box: {
        dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
            material: Cesium.Color.BLUE
        }
    });
    //Circle
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(111.0, 40.0, 150000.0),
        name: 'Green circle at height',
        ellipse: {
            semiMinorAxis: 300000.0,
            semiMajorAxis: 300000.0,
            height: 200000.0,
            material: Cesium.Color.GREEN
        }
    });
    //Ellipse
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(103.0, 40.0),
        name: 'Red ellipse on surface with outline',
        ellipse: {
        semiMinorAxis: 250000.0,
        semiMajorAxis: 400000.0,
            material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
        outlineColor: Cesium.Color.RED
        }
    });
    //Corridor
    viewer.entities.add({
        name: 'Red corridor on surface with rounded corners and outline',
        corridor: {
            positions: Cesium.Cartesian3.fromDegreesArray([
            100.0, 40.0,
            105.0, 40.0,
            105.0, 35.0
            ]),
            width: 200000.0,
            material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.RED
        }
    });
    //Cylinder
    viewer.entities.add({
        name: 'Green cylinder with black outline',
        position: Cesium.Cartesian3.fromDegrees(100.0, 40.0, 200000.0),
        cylinder: {
            length: 400000.0,
            topRadius: 200000.0,
        bottomRadius: 200000.0,
            material: Cesium.Color.GREEN.withAlpha(0.5),
            outline: true,
        outlineColor: Cesium.Color.DARK_GREEN
        }
    });
    //Cone
    viewer.entities.add({
        name: 'Red cone',
        position: Cesium.Cartesian3.fromDegrees(105.0, 40.0, 200000.0),
        cylinder: {
            length: 400000.0,
            topRadius: 0.0,
        bottomRadius: 200000.0,
            material: Cesium.Color.RED
        }
    });
    //Polygon 
    viewer.entities.add({
        name: 'Red polygon on surface',
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray([115.0, 37.0,
            115.0, 32.0,
            107.0, 33.0,
            102.0, 31.0,
            102.0, 35.0]),
            material: Cesium.Color.RED
        }
    });
    //polyline
    viewer.entities.add({
        name: 'Red line on the surface',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray([75, 35,
            125, 35]),
            width: 5,
            material: Cesium.Color.RED
        }
    });
    //polylineVolume
    function computeCircle(radius) {
        var positions = [];
        for (var i = 0; i < 360; i++) {
            var radians = Cesium.Math.toRadians(i);
        positions.push(new Cesium.Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians)));
        }
        return positions;
    }
    viewer.entities.add({
        name: 'Red tube with rounded corners',
        polylineVolume: {
            positions: Cesium.Cartesian3.fromDegreesArray([85.0, 32.0,
            85.0, 36.0,
            89.0, 36.0]),
            shape: computeCircle(60000.0),
            material: Cesium.Color.RED
        }
    });
        //rectangle
    viewer.entities.add({
        name: 'Red translucent rectangle with outline',
        rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(80.0, 20.0, 110.0, 25.0),
            material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
        outlineColor: Cesium.Color.RED
        }
    });
        //Sphere
    viewer.entities.add({
        name: 'Red sphere with black outline',
        position: Cesium.Cartesian3.fromDegrees(107.0, 40.0, 300000.0),
        ellipsoid: {
            radii: new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
            material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
        outlineColor: Cesium.Color.BLACK
        }
    });
        //ellipsoid
    viewer.entities.add({
        name: 'Blue ellipsoid',
        position: Cesium.Cartesian3.fromDegrees(114.0, 40.0, 300000.0),
        ellipsoid: {
            radii: new Cesium.Cartesian3(200000.0, 200000.0, 300000.0),
            material: Cesium.Color.BLUE
        }
    });
        //wall
    viewer.entities.add({
        name: 'Green wall from surface with outline',
        wall: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([107.0, 43.0, 100000.0,
            97.0, 43.0, 100000.0,
            97.0, 40.0, 100000.0,
            107.0, 40.0, 100000.0,
            107.0, 43.0, 100000.0]),
            material: Cesium.Color.GREEN
        }
    });
    
    viewer.zoomTo(viewer.entities);
}

function addPolygon() {

    var redPolygon = viewer.entities.add({
        name: 'Red polygon on surface',
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray([-115.0, 37.0,
            -115.0, 32.0,
            -107.0, 33.0,
            -102.0, 31.0,
            -102.0, 35.0]),
            material: Cesium.Color.RED
        }
    });

    var greenPolygon = viewer.entities.add({
        name: 'Green extruded polygon',
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray([-108.0, 42.0,
            -100.0, 42.0,
            -104.0, 40.0]),
            extrudedHeight: 500000.0,
            material: Cesium.Color.GREEN,
            closeTop: false,
            closeBottom: false
        }
    });

    var orangePolygon = viewer.entities.add({
        name: 'Orange polygon with per-position heights and outline',
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([-108.0, 25.0, 100000,
            -100.0, 25.0, 100000,
            -100.0, 30.0, 100000,
            -108.0, 30.0, 300000]),
            extrudedHeight: 0,
            perPositionHeight: true,
            material: Cesium.Color.ORANGE.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    });

    var bluePolygon = viewer.entities.add({
        name: 'Blue polygon with holes',
        polygon: {
            hierarchy: {
                positions: Cesium.Cartesian3.fromDegreesArray([-99.0, 30.0,
                -85.0, 30.0,
                -85.0, 40.0,
                -99.0, 40.0]),
                holes: [{
                    positions: Cesium.Cartesian3.fromDegreesArray([
                        -97.0, 31.0,
                        -97.0, 39.0,
                        -87.0, 39.0,
                        -87.0, 31.0
                    ]),
                    holes: [{
                        positions: Cesium.Cartesian3.fromDegreesArray([
                            -95.0, 33.0,
                            -89.0, 33.0,
                            -89.0, 37.0,
                            -95.0, 37.0
                        ]),
                        holes: [{
                            positions: Cesium.Cartesian3.fromDegreesArray([
                                -93.0, 34.0,
                                -91.0, 34.0,
                                -91.0, 36.0,
                                -93.0, 36.0
                            ])
                        }]
                    }]
                }]
            },
            material: Cesium.Color.BLUE.withAlpha(0.5),
            height: 0,
            outline: true // height is required for outline to display
        }
    });

    var cyanPolygon = viewer.entities.add({
        name: 'Cyan vertical polygon with per-position heights and outline',
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([
                -90.0, 41.0, 0.0,
                -85.0, 41.0, 500000.0,
                -80.0, 41.0, 0.0
            ]),
            perPositionHeight: true,
            material: Cesium.Color.CYAN.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    });

    var purplePolygonUsingRhumbLines = viewer.entities.add({
        name: 'Purple polygon using rhumb lines with outline',
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray([-120.0, 45.0,
            -80.0, 45.0,
            -80.0, 55.0,
            -120.0, 55.0]),
            extrudedHeight: 50000,
            material: Cesium.Color.PURPLE,
            outline: true,
            outlineColor: Cesium.Color.MAGENTA,
            arcType: Cesium.ArcType.RHUMB
        }
    });

    viewer.zoomTo(viewer.entities);
}

function computeCircle(radius) {
    var positions = [];
    for (var i = 0; i < 360; i++) {
        var radians = Cesium.Math.toRadians(i);
        positions.push(new Cesium.Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians)));
    }
    return positions;
}

function computeStar(arms, rOuter, rInner) {
    var angle = Math.PI / arms;
    var length = 2 * arms;
    var positions = new Array(length);
    for (var i = 0; i < length; i++) {
        var r = (i % 2) === 0 ? rOuter : rInner;
        positions[i] = new Cesium.Cartesian2(Math.cos(i * angle) * r, Math.sin(i * angle) * r);
    }
    return positions;
}

//添加多段线
function addPolyline() {

    //红色虚线
    var redLine = viewer.entities.add({
        name: 'Red dashed line',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([112, 28, 250000, 118, 28, 250000]),
            width: 5,
            material: new Cesium.PolylineDashMaterialProperty({//虚线
                color: Cesium.Color.RED
            })
        }
    });
    //蓝色，间隔黄色
    var blueLine = viewer.entities.add({
        name: 'Wide blue dashed line with a gap color',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([112, 27, 250000, 118, 27, 250000]),
            width: 5,
            material: new Cesium.PolylineDashMaterialProperty({
                color: Cesium.Color.BLUE,
                gapColor: Cesium.Color.YELLOW
            })
        }
    });

    //指定虚线长度
    var orangeLine = viewer.entities.add({
        name: 'Orange dashed line with a short dash length',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([112, 26, 250000, 118, 26, 250000]),
            width: 5,
            material: new Cesium.PolylineDashMaterialProperty({
                color: Cesium.Color.ORANGE,
                dashLength: 8.0
            })
        }
    });

    var cyanLine = viewer.entities.add({
        name: 'Cyan dashed line with a dash pattern.',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([112, 25, 250000, 118, 25, 250000]),
            width: 10,
            material: new Cesium.PolylineDashMaterialProperty({
                color: Cesium.Color.CYAN,
                dashPattern: parseInt('110000001111', 2)
            })
        }
    });

    var yellowLine = viewer.entities.add({
        name: 'Yellow dashed line with a dash pattern.',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([112, 24.5, 250000, 118, 24.5, 250000]),
            width: 10,
            material: new Cesium.PolylineDashMaterialProperty({
                color: Cesium.Color.YELLOW,
                dashPattern: parseInt('1010101010101010', 2)
            })
        }
    });

    /***==========================================*/
    var redLine = viewer.entities.add({
        name: 'Red line on terrain',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray([112, 24, 118, 24]),
            width: 5,
            material: Cesium.Color.RED,
            clampToGround: true//贴地
            //classificationType，则用来描述是否只贴地形（ClassificationType.TERRAIN），或者只贴3dtiles数据（ClassificationType.CESIUM_3D_TILE），或者二者都贴（ClassificationType.BOTH）。默认情况下是二者都贴
        }
    });

    var greenRhumbLine = viewer.entities.add({
        name: 'Green rhumb line',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray([-75, 35,
            -125, 35]),
            width: 5,
            //恒向线 任意位置的延伸方向都是恒定的
            arcType: Cesium.ArcType.RHUMB,//1.54版本
            material: Cesium.Color.GREEN
        }
    });

    var glowingLine = viewer.entities.add({
        name: 'Glowing blue line on the surface',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray([-75, 37,
            -125, 37]),
            width: 10,
            material: new Cesium.PolylineGlowMaterialProperty({
                glowPower: 0.2,
                taperPower: 0.5,
                color: Cesium.Color.CORNFLOWERBLUE
            })
        }
    });

    var orangeOutlined = viewer.entities.add({
        name: 'Orange line with black outline at height and following the surface',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([-75, 39, 250000,
            -125, 39, 250000]),
            width: 5,
            material: new Cesium.PolylineOutlineMaterialProperty({
                color: Cesium.Color.ORANGE,
                outlineWidth: 2,
                outlineColor: Cesium.Color.BLACK
            })
        }
    });
    //箭头
    var purpleArrow = viewer.entities.add({
        name: 'Purple straight arrow at height',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([-75, 43, 500000,
            -125, 43, 500000]),
            width: 10,
            //arcType : Cesium.ArcType.NONE,
            material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
        }
    });

    var dashedLine = viewer.entities.add({
        name: 'Blue dashed line',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([-75, 45, 500000,
            -125, 45, 500000]),
            width: 4,
            material: new Cesium.PolylineDashMaterialProperty({
                color: Cesium.Color.CYAN
            })
        }
    });

    var redTube = viewer.entities.add({
        name: 'Red tube with rounded corners',
        polylineVolume: {
            positions: Cesium.Cartesian3.fromDegreesArray([-85.0, 32.0,
            -85.0, 36.0,
            -89.0, 36.0]),
            shape: computeCircle(60000.0),
            material: Cesium.Color.RED
        }
    });

    var greenBox = viewer.entities.add({
        name: 'Green box with beveled corners and outline',
        polylineVolume: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([-90.0, 32.0, 0.0,
            -90.0, 36.0, 100000.0,
            -94.0, 36.0, 0.0]),
            shape: [new Cesium.Cartesian2(-50000, -50000),
            new Cesium.Cartesian2(50000, -50000),
            new Cesium.Cartesian2(50000, 50000),
            new Cesium.Cartesian2(-50000, 50000)],
            cornerType: Cesium.CornerType.BEVELED,
            material: Cesium.Color.GREEN.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    });

    var blueStar = viewer.entities.add({
        name: 'Blue star with mitered corners and outline',
        polylineVolume: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([-95.0, 32.0, 0.0,
            -95.0, 36.0, 100000.0,
            -99.0, 36.0, 200000.0]),
            shape: computeStar(7, 70000, 50000),
            cornerType: Cesium.CornerType.MITERED,
            material: Cesium.Color.BLUE
        }
    });

    viewer.zoomTo(viewer.entities);
}

/* =================================================================== */

//漫游飞行
function fly() {
    fly_loadData();
}

function fly_InitEvent() {

}

function fly_loadData() {
    //请求三维漫游轨迹
    $.ajax({
        url: "/information/fly/queryAll",
        type: 'post',
        async: true,//异步
        dataType: 'json',
        success: function (data) {
            var html = ''
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var flydata = data[i];
                    html += '<tr>' +
                        // '<td><input type="checkbox" name="FLYNAME" id="'+flydata.id+'" style="cursor: pointer;" onchange=""></td>'+
                        '<td><a style="color:#fff;text-decoration:none;font-size:12px;">' + flydata.name + '</a></td>' +
                        '<td><button class="btn btn-default btn-xs" style="color:#fff;">飞行</button></td>' +
                        '<td><button class="btn btn-default btn-xs" style="color:#fff;">修改</button></td>' +
                        '<td><button class="btn btn-default btn-xs" style="color:#fff;">删除</button></td>' +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + flydata.id + "</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + flydata.geojson + "</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + flydata.position + "</a></td>" +
                        "<td><a style='color:black;text-decoration:none;font-size:13px;'>" + flydata.orientation + "</a></td>" +
                        '</tr>';
                }
                $("#overFly_table tbody").html(html);
                $('#overFly_table').find('td:eq(4)').hide();//隐藏id字段列
                $('#overFly_table').find('td:eq(5)').hide();//隐藏geojson字段列
                $('#overFly_table').find('td:eq(6)').hide();//隐藏position字段列
                $('#overFly_table').find('td:eq(7)').hide();//隐藏orientation字段列
                //表格---行点击事件
                bxmap.FlyCesium.flyTableOnclick();
            }
            else {
            }
        }
    });
}

/**
* 飞行漫游路径
 * @method showFly3DPaths
* @param  pathsData 飞行路径信息,格式如下:{"orientation":{"heading":2.411783930363565,"pitch":-0.21097267398444197,"roll":0.0015622392231300353},"position": {"x":-2206260.239730831,"y":5510911.392077349,"z":2331987.10863007}, "geometry":{"type": "LineString", "coordinates": [[101.80089882736969, 26.60700234866561], [101.80082205161088, 26.607156056057718]]} }
* @param  position 飞行路径跳转位置
* @return
*/
function computeCirclularFlight() {
    var property = new Cesium.SampledPositionProperty();
    for (var i = 0; i < position.length; i++) {
        if (i == 0) {
            var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
            //var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, 1170);
            var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, 0);
            property.addSample(time, _position);
        }
        if (i < 10000 && i > 0) {
            var position_a = new Cesium.Cartesian3(property._property._values[i * 3 - 3], property._property._values[i * 3 - 2], property._property._values[i * 3 - 1]);
            if (i < 976) {
                //var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, 1170);
                var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, 0);
            }
            else if (i > 975 && i < 986) {
                //var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, 1170 + 20 * (i - 980));
                var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, 0);
            }
            else if (i > 985) {
                //var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, 1170 + 200);
                var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, 0);
            }

            var positions = [Cesium.Ellipsoid.WGS84.cartesianToCartographic(position_a), Cesium.Ellipsoid.WGS84.cartesianToCartographic(_position)];
            var a = new Cesium.EllipsoidGeodesic(positions[0], positions[1]);
            var long = a.surfaceDistance;
            var _time = long/50;
            var time = Cesium.JulianDate.addSeconds(property._property._times[i - 1], _time, new Cesium.JulianDate());
            property.addSample(time, _position);
        }
    }
    return property;
}

/**===================================================================== */
//定位
//飞行到某个点
function dingwei(lon,lat,height){
    viewer.camera.flyTo({
        destination :  Cesium.Cartesian3.fromDegrees(lon,lat,height), // 设置位置
        orientation: {
            heading : Cesium.Math.toRadians(20.0), // 方向
            pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
            roll : 0
        },
        duration:5, // 设置飞行持续时间，默认会根据距离来计算
        complete: function () {
            // 到达位置后执行的回调函数
            console.log('到达目的地');
        },
        cancle: function () {
            // 如果取消飞行则会调用此函数
            console.log('飞行取消')
        },
        pitchAdjustHeight: -90, // 如果摄像机飞越高于该值，则调整俯仰俯仰的俯仰角度，并将地球保持在视口中。
        maximumHeight:500, // 相机最大飞行高度
        flyOverLongitude: 100, // 如果到达目的地有2种方式，设置具体值后会强制选择方向飞过这个经度
    });

}

/* =================================================================== */

//拖拽实体
function moveEntity() {
    var blueBox = viewer.entities.add({
        name: 'Blue box',
        position: Cesium.Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),
        box: {
            dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
            material: Cesium.Color.BLUE
        }
    });
    var redBox = viewer.entities.add({
        name: 'Red box with black outline',
        position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
        box: {
            dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
            material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    });
    var outlineOnly = viewer.entities.add({
        name: 'Yellow box outline',
        position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 300000.0),
        box: {
            dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
            fill: false,
            outline: true,
            outlineColor: Cesium.Color.YELLOW
        }
    });
    viewer.zoomTo(viewer.entities);
    var moveTool = MoveEntity({ 'viewer': viewer });
}
/**  ================================================================================================ */
//绘制等高线
function huizhidenggaoxian(){

    function getElevationContourMaterial() {
        // Creates a composite material with both elevation shading and contour lines
        return new Cesium.Material({
            fabric: {
                type: 'ElevationColorContour',
                materials: {
                    contourMaterial: {
                        type: 'ElevationContour'
                    },
                    elevationRampMaterial: {
                        type: 'ElevationRamp'
                    }
                },
                components: {
                    diffuse: 'contourMaterial.alpha == 0.0 ? elevationRampMaterial.diffuse : contourMaterial.diffuse',
                    alpha: 'max(contourMaterial.alpha, elevationRampMaterial.alpha)'
                }
            },
            translucent: false
        });
    }
    function getSlopeContourMaterial() {
        // Creates a composite material with both slope shading and contour lines
        return new Cesium.Material({
            fabric: {
                type: 'SlopeColorContour',
                materials: {
                    contourMaterial: {
                        type: 'ElevationContour'
                    },
                    slopeRampMaterial: {
                        type: 'SlopeRamp'
                    }
                },
                components: {
                    diffuse: 'contourMaterial.alpha == 0.0 ? slopeRampMaterial.diffuse : contourMaterial.diffuse',
                    alpha: 'max(contourMaterial.alpha, slopeRampMaterial.alpha)'
                }
            },
            translucent: false
        });
    }

    var elevationRamp = [0.0, 0.045, 0.1, 0.15, 0.37, 0.54, 1.0];
    var slopeRamp = [0.0, 0.29, 0.5, Math.sqrt(2) / 2, 0.87, 0.91, 1.0];
    function getColorRamp(selectedShading) {
        var ramp = document.createElement('canvas');
        ramp.width = 100;
        ramp.height = 1;
        var ctx = ramp.getContext('2d');

        var values = selectedShading === 'elevation' ? elevationRamp : slopeRamp;

        var grd = ctx.createLinearGradient(0, 0, 100, 0);
        grd.addColorStop(values[0], '#00000000'); //black
        grd.addColorStop(values[1], '#2747E0C8'); //blue
        grd.addColorStop(values[2], '#D33B7DC8'); //pink
        grd.addColorStop(values[3], '#D33038C8'); //red
        grd.addColorStop(values[4], '#FF9742C8'); //orange
        grd.addColorStop(values[5], '#ffd700C8'); //yellow
        grd.addColorStop(values[6], '#ffffffC8'); //white

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 100, 1);

        return ramp;
    }

    var minHeight = -414.0; // approximate dead sea elevation
    var maxHeight = 8777.0; // approximate everest elevation
    var contourColor = Cesium.Color.RED.withAlpha(0.6).clone(); //alpha???
    var contourUniforms = {};
    var shadingUniforms = {};

    var hasContour = true;//是否绘制等高线
    var selectedShading = 'elevation'; //'elevation'高程 'slope'坡度  
    function updateMaterial() {
        var globe = viewer.scene.globe;
        var material;
        if (hasContour) {
            if (selectedShading === 'elevation') {
                material = getElevationContourMaterial();
                shadingUniforms = material.materials.elevationRampMaterial.uniforms;
                shadingUniforms.minHeight = minHeight;
                shadingUniforms.maxHeight = maxHeight;
                contourUniforms = material.materials.contourMaterial.uniforms;
            } else if (selectedShading === 'slope') {
                material = getSlopeContourMaterial();
                shadingUniforms = material.materials.slopeRampMaterial.uniforms;
                contourUniforms = material.materials.contourMaterial.uniforms;
            } else {
                material = Cesium.Material.fromType('ElevationContour');
                contourUniforms = material.uniforms;
            }
            contourUniforms.width = 2;//线宽
            contourUniforms.spacing = 50;//等高距
            contourUniforms.color = contourColor;
        } else if (selectedShading === 'elevation') {
            material = Cesium.Material.fromType('ElevationRamp');
            shadingUniforms = material.uniforms;
            shadingUniforms.minHeight = minHeight;
            shadingUniforms.maxHeight = maxHeight;
        } else if (selectedShading === 'slope') {
            material = Cesium.Material.fromType('SlopeRamp');
            shadingUniforms = material.uniforms;
        }
        if (selectedShading !== 'none') {
            shadingUniforms.image = getColorRamp(selectedShading);
        }

        globe.material = material;
    }

    updateMaterial();
}

/**====================================================================================== */
//雷达扫描
function radarScan(){
    function AddRadarScanPostStage(viewer, cartographicCenter, radius, scanColor, duration) {

        var ScanSegmentShader =

            "uniform sampler2D colorTexture;\n" +

            "uniform sampler2D depthTexture;\n" +

            "varying vec2 v_textureCoordinates;\n" +

            "uniform vec4 u_scanCenterEC;\n" +

            "uniform vec3 u_scanPlaneNormalEC;\n" +

            "uniform vec3 u_scanLineNormalEC;\n" +

            "uniform float u_radius;\n" +

            "uniform vec4 u_scanColor;\n" + 

            "vec4 toEye(in vec2 uv, in float depth)\n" +

            " {\n" +

              " vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n" +

              " vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);\n" +

              " posInCamera =posInCamera / posInCamera.w;\n" +

              " return posInCamera;\n" +

            " }\n" + 

            "bool isPointOnLineRight(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt)\n" +

            "{\n" +

                "vec3 v01 = testPt - ptOnLine;\n" +

                "normalize(v01);\n" +

                "vec3 temp = cross(v01, lineNormal);\n" +

                "float d = dot(temp, u_scanPlaneNormalEC);\n" +

                "return d > 0.5;\n" +

            "}\n" +

            "vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)\n" +

            "{\n" +

                "vec3 v01 = point -planeOrigin;\n" +

                "float d = dot(planeNormal, v01) ;\n" +

                "return (point - planeNormal * d);\n" +

             "}\n" +

             "float distancePointToLine(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt)\n" +

             "{\n" +

                "vec3 tempPt = pointProjectOnPlane(lineNormal, ptOnLine, testPt);\n" +

                "return length(tempPt - ptOnLine);\n" +

              "}\n" +

             "float getDepth(in vec4 depth)\n" +

             "{\n" +

                "float z_window = czm_unpackDepth(depth);\n" +

                "z_window = czm_reverseLogDepth(z_window);\n" +

                "float n_range = czm_depthRange.near;\n" +

                "float f_range = czm_depthRange.far;\n" +

                "return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n" +

             "}\n" +

             "void main()\n" +

             "{\n" +

                "gl_FragColor = texture2D(colorTexture, v_textureCoordinates);\n" +

                "float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));\n" +

                "vec4 viewPos = toEye(v_textureCoordinates, depth);\n" +

                "vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n" +

                "float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n" +

                "float twou_radius = u_radius * 2.0;\n" +

                "if(dis < u_radius)\n" +

                 "{\n" +

                    "float f0 = 1.0 -abs(u_radius - dis) / u_radius;\n" +

                    "f0 = pow(f0, 64.0);\n" +

                    "vec3 lineEndPt = vec3(u_scanCenterEC.xyz) + u_scanLineNormalEC * u_radius;\n" +

                    "float f = 0.0;\n" +

                    "if(isPointOnLineRight(u_scanCenterEC.xyz, u_scanLineNormalEC.xyz, prjOnPlane.xyz))\n" +

                    "{\n" +

                        "float dis1= length(prjOnPlane.xyz - lineEndPt);\n" +

                        "f = abs(twou_radius -dis1) / twou_radius;\n" +

                        "f = pow(f, 3.0);\n" +

                    "}\n" +

                    "gl_FragColor = mix(gl_FragColor, u_scanColor, f + f0);\n" +

                 "}\n" +

              "}\n";

        var _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter);

        var _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1);

        var _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500);

        var _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1);

        var _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1);

        var _CartographicCenter2 = new Cesium.Cartographic(cartographicCenter.longitude + Cesium.Math.toRadians(0.001), cartographicCenter.latitude, cartographicCenter.height);

        var _Cartesian3Center2 = Cesium.Cartographic.toCartesian(_CartographicCenter2);

        var _Cartesian4Center2 = new Cesium.Cartesian4(_Cartesian3Center2.x, _Cartesian3Center2.y, _Cartesian3Center2.z, 1);

        var _RotateQ = new Cesium.Quaternion();

        var _RotateM = new Cesium.Matrix3();

        var _time = (new Date()).getTime();

        var _scratchCartesian4Center = new Cesium.Cartesian4();

        var _scratchCartesian4Center1 = new Cesium.Cartesian4();

        var _scratchCartesian4Center2 = new Cesium.Cartesian4();

        var _scratchCartesian3Normal = new Cesium.Cartesian3();

        var _scratchCartesian3Normal1 = new Cesium.Cartesian3();

        var ScanPostStage = new Cesium.PostProcessStage({

            fragmentShader: ScanSegmentShader,

            uniforms: {

                u_scanCenterEC: function () {

                    return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);

                },

                u_scanPlaneNormalEC: function () {

                    var temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);

                    var temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1);

                    _scratchCartesian3Normal.x = temp1.x - temp.x;

                    _scratchCartesian3Normal.y = temp1.y - temp.y;

                    _scratchCartesian3Normal.z = temp1.z - temp.z;

                    Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal);

                    return _scratchCartesian3Normal;

                },

                u_radius: radius,

                u_scanLineNormalEC: function () {

                    var temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);

                    var temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1);

                    var temp2 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center2, _scratchCartesian4Center2);

                    _scratchCartesian3Normal.x = temp1.x - temp.x;

                    _scratchCartesian3Normal.y = temp1.y - temp.y;

                    _scratchCartesian3Normal.z = temp1.z - temp.z;

                    Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal);

                    _scratchCartesian3Normal1.x = temp2.x - temp.x;

                    _scratchCartesian3Normal1.y = temp2.y - temp.y;

                    _scratchCartesian3Normal1.z = temp2.z - temp.z;

                    var tempTime = (((new Date()).getTime() - _time) % duration) / duration;

                    Cesium.Quaternion.fromAxisAngle(_scratchCartesian3Normal, tempTime * Cesium.Math.PI * 2, _RotateQ);

                    Cesium.Matrix3.fromQuaternion(_RotateQ, _RotateM);

                    Cesium.Matrix3.multiplyByVector(_RotateM, _scratchCartesian3Normal1, _scratchCartesian3Normal1);

                    Cesium.Cartesian3.normalize(_scratchCartesian3Normal1, _scratchCartesian3Normal1);

                    return _scratchCartesian3Normal1;

                },

                u_scanColor: scanColor
            }

        }); 

        viewer.scene.postProcessStages.add(ScanPostStage);

    }
    var CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(115), Cesium.Math.toRadians(27), 0);

    var scanColor = new Cesium.Color(1.0, 0.0, 0.0, 1);

    AddRadarScanPostStage(viewer, CartographicCenter, 1500, scanColor, 4000);
}


/**  ================================================================================================ */
//剖面分析按钮
function poumianfenxi() {
    viewer.scene.globe.depthTestAgainstTerrain = true;
    //取消左键双击事件
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    //具体事件的实现
    var ellipsoid = viewer.scene.globe.ellipsoid;
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
    var start, end;
    var profile = {
        arrHB: [],
        arrPoint: [],
        arrLX: [],
        ponits: [],
        distance: 0
    };
    var myChart;
    var draw = function (drawingMode) {
        var entityPolygon = null;
        var points = null;
        //取消左键双击事件
        viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
        //淹没分析entity
        function createPoint(worldPosition) {
            var point = viewer.entities.add({
                position: worldPosition,
                point: {
                    pixelSize: 10,
                    color: Cesium.Color.YELLOW,
                    //disableDepthTestDistance: Number.POSITIVE_INFINITY,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                },
            });
            points = point;
            return point;
        }
        var drawingMode = drawingMode;
        function drawShape(positionData) {
            var shape;
            if (drawingMode === 'line') {
                shape = viewer.entities.add({

                    polyline: {
                        positions: positionData,
                        clampToGround: true,
                        arcType: Cesium.ArcType.RHUMB,
                        material: Cesium.Color.GREEN,
                        width: 5,

                        //zIndex:1
                    }
                    //,show:false
                });
            }
            else if (drawingMode === 'polygon') {
                shape = viewer.entities.add({
                    polygon: {
                        hierarchy: positionData,
                        material: new Cesium.ColorMaterialProperty(Cesium.Color.LIGHTSKYBLUE.withAlpha(0.7))
                    }
                });
            }
            return shape;
        }
        var activeShapePoints = [];
        var activeShape;
        var floatingPoint;
        handler.setInputAction(function (event) {
            if (!Cesium.Entity.supportsPolylinesOnTerrain(viewer.scene)) {
                console.log('This browser does not support polylines on terrain.');
                return;
            }
            // 使用viewer.scene.pickPosition` 来代替`viewer.camera.pickEllipsoid` 这样当鼠标掠过terrain能得到正确的坐标
            var earthPosition = viewer.scene.pickPosition(event.position);
            if (Cesium.defined(earthPosition)) {
                if (activeShapePoints.length === 0) {
                    start = earthPosition;
                    floatingPoint = createPoint(earthPosition);
                    activeShapePoints.push(earthPosition);
                    var dynamicPositions = new Cesium.CallbackProperty(function () {
                        return activeShapePoints;
                    }, false);
                    activeShape = drawShape(dynamicPositions);
                }
                //计算距离并且进行叠加
                profile.distance = profile.distance + distance(activeShapePoints[activeShapePoints.length - 1], earthPosition);
                activeShapePoints.push(earthPosition);
                createPoint(earthPosition);
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        handler.setInputAction(function (event) {
            if (Cesium.defined(floatingPoint)) {
                var newPosition = viewer.scene.pickPosition(event.endPosition);
                if (Cesium.defined(newPosition)) {
                    floatingPoint.position.setValue(newPosition);
                    activeShapePoints.pop();
                    activeShapePoints.push(newPosition);
                }
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        function terminateShape() {
            activeShapePoints.pop();
            entityPolygon = drawShape(activeShapePoints);
            viewer.entities.remove(floatingPoint);
            viewer.entities.remove(activeShape);
            entityPolygon = null;
            floatingPoint = undefined;
            activeShape = undefined;
            activeShapePoints = [];
        }
        handler.setInputAction(function (event) {
            var length = activeShapePoints.length - 1;
            end = activeShapePoints[length];
            var data = profileAnalyse(start, end);
            console.log(data);
            setEchartsData(data);
            terminateShape();
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

    }
    draw('line');
}

//剖面分析
function profileAnalyse(start, end) {
    var startPoint = Cesium.Cartographic.fromCartesian(start);
    var endPoint = Cesium.Cartographic.fromCartesian(end);
    profile.arrLX.push(0);
    profile.ponits.push(startPoint);
    profile.arrPoint.push(getDegrees(startPoint));
    profile.arrHB.push(startPoint.height);
    // 插值100个点，点越多模拟越精确，但是效率会低
    var count = 100;
    for (var i = 1; i < count; i++) {
        var cart = Cesium.Cartesian3.lerp(start, end, i / count, new Cesium.Cartesian3());
        var cartographicCart = Cesium.Cartographic.fromCartesian(cart);
        var disc = distance(profile.ponits[i - 1], cartographicCart);
        profile.distance = profile.distance + disc;
        profile.ponits.push(cartographicCart);
        profile.arrLX.push(profile.arrLX[i - 1] + disc);

        profile.arrPoint.push(getDegrees(cart));
        profile.arrHB.push(cartographicCart.height);
    }
    profile.ponits.push(endPoint);
    profile.arrLX.push(profile.arrLX[profile.arrLX.length - 1] + distance(profile.ponits[profile.ponits.length - 1], endPoint));
    profile.arrPoint.push(getDegrees(endPoint));
    profile.arrHB.push(endPoint.height);
    return profile;
}

//计算两点间的距离
function distance(point1, point2) {
    //var point1cartographic = Cesium.Cartographic.fromCartesian(point1);
    //var point2cartographic = Cesium.Cartographic.fromCartesian(point2);
    /**根据经纬度计算出距离**/
    var geodesic = new Cesium.EllipsoidGeodesic();
    geodesic.setEndPoints(point1, point2);
    var s = geodesic.surfaceDistance;
    //返回两点之间的距离
    s = Math.sqrt(Math.pow(s, 2) + Math.pow(point2.height - point1.height, 2));
    return s;

}
//世界坐标转换为经纬度
function getDegrees(cart) {
    var cartographic = ellipsoid.cartesianToCartographic(cart);
    var lat = Cesium.Math.toDegrees(cartographic.latitude);
    var lng = Cesium.Math.toDegrees(cartographic.longitude);
    var alt = cartographic.height;
    return { x: lng, y: lat, z: alt };
}
//经纬度保留两位小数
function strFormat(str) {
    var strString = str.toString();
    var strs = strString.slice(0, strString.indexOf(".") + 3);
    return strs;
}
//设置Echart数据
function setEchartsData(e) {
    if (null != e && null != e.arrPoint) {
        $("#sectionChars").show(),
            null == myChart && (myChart = echarts.init(document.getElementById("echartsView1"), "dark"));
        console.log(e.arrHB.value);
        var t = e.arrPoint,
            chartData = {
                grid: {
                    left: 10,
                    right: 10,
                    bottom: 10,
                    containLabel: !0
                },
                dataZoom: [{
                    type: "inside",
                    throttle: 50
                }],
                tooltip: {
                    trigger: "axis",
                    formatter: function (e) {
                        var a = "";
                        if (0 == e.length) return a;
                        e[0].value;
                        console.log(e);
                        var r = t[e[0].dataIndex];
                        console.log(r);
                        return a += "所在位置&nbsp;" + strFormat(r.x) + "," + strFormat(r.y) + "<br />距起点&nbsp;<label>" + haoutil.str.formatLength(e[0].axisValue) + "</label><br />" + e[0].seriesName + "&nbsp;<label style='color:" + e[0].color + ";'>" + haoutil.str.formatLength(e[0].value) + "</label><br />"
                    }
                },
                xAxis: [{
                    name: "行程",
                    type: "category",
                    boundaryGap: !1,
                    axisLine: {
                        show: !1
                    },
                    axisLabel: {
                        show: !1
                    },
                    data: e.arrLX
                }],
                yAxis: [{
                    type: "value",
                    axisLabel: {
                        rotate: 60,
                        formatter: "{value} 米"
                    }
                }],
                series: [{
                    name: "高程值",
                    type: "line",
                    smooth: !0,
                    symbol: "none",
                    sampling: "average",
                    itemStyle: {
                        normal: {
                            color: "rgb(255, 70, 131)"
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgb(255, 158, 68)"
                            },
                            {
                                offset: 1,
                                color: "rgb(255, 70, 131)"
                            }])
                        }
                    },
                    data: e.arrHB
                }]
            };
        myChart.setOption(chartData)
    }
}

/*==========================淹没分析======================================*/
function yanmofenxi() {

    /*document.getElementById("floodFx-draw").onclick = function(){

    }
    document.getElementById("floodFx-analyis").onclick = function(){
        
    }*/
    //viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    //yanmofenxiInit(viewer);
    //document.getElementById("floodanalyisComp").style.display = "block";

    var drawHelper = new DrawHelper(viewer.cesiumWidget);
    var toolbar = drawHelper.addToolbar(document.getElementById("ymfx-toolbar"), {
        buttons: ['marker', 'polyline', 'polygon', 'circle', 'extent']
    });
    toolbar.addListener('markerCreated', function (event) {
        loggingMessage('Marker created at ' + event.position.toString());
        // create one common billboard collection for all billboards
        var b = new Cesium.BillboardCollection();
        viewer.scene.primitives.add(b);
        var billboard = b.add({
            show: true,
            position: event.position,
            pixelOffset: new Cesium.Cartesian2(0, 0),
            eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0),
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.CENTER,
            scale: 1.0,
            image: '/drawhelper/img/glyphicons_242_google_maps.png',
            color: new Cesium.Color(1.0, 1.0, 1.0, 1.0)
        });
        billboard.setEditable();
    });
    toolbar.addListener('polylineCreated', function (event) {
        loggingMessage('Polyline created with ' + event.positions.length + ' points');
        var polyline = new DrawHelper.PolylinePrimitive({
            positions: event.positions,
            width: 5,
            geodesic: true
        });
        viewer.scene.primitives.add(polyline);
        polyline.setEditable();
        polyline.addListener('onEdited', function (event) {
            loggingMessage('Polyline edited, ' + event.positions.length + ' points');
        });

    });
    toolbar.addListener('polygonCreated', function (event) {
        loggingMessage('Polygon created with ' + event.positions.length + ' points。 + "开始淹没分析，请稍候..."');
        var polygon = new DrawHelper.PolygonPrimitive({
            positions: event.positions,
            material: Cesium.Material.fromType('Checkerboard')
        });
        var entity = viewer.scene.primitives.add(polygon);
        polygon.setEditable();
        polygon.addListener('onEdited', function (event) {
            loggingMessage('Polygon edited, ' + event.positions.length + ' points');
        });
        //yanmofenxiInit(viewer);
        entity.hierarchy = new Cesium.CallbackProperty(function () {
            return polygon.positions;
        }, false);
        thisWidget.drawOk({ 'polygon': entity });
        var fff = thisWidget.startFx(5000);
        viewer.entities.add(entity.hierarchy.getValue());
    });
    toolbar.addListener('circleCreated', function (event) {
        loggingMessage('Circle created: center is ' + event.center.toString() + ' and radius is ' + event.radius.toFixed(1) + ' meters');
        var circle = new DrawHelper.CirclePrimitive({
            center: event.center,
            radius: event.radius,
            material: Cesium.Material.fromType(Cesium.Material.RimLightingType)
        });
        viewer.scene.primitives.add(circle);
        circle.setEditable();
        circle.addListener('onEdited', function (event) {
            loggingMessage('Circle edited: radius is ' + event.radius.toFixed(1) + ' meters');
        });
    });
    toolbar.addListener('extentCreated', function (event) {
        var extent = event.extent;
        loggingMessage('Extent created (N: ' + extent.north.toFixed(3) + ', E: ' + extent.east.toFixed(3) + ', S: ' + extent.south.toFixed(3) + ', W: ' + extent.west.toFixed(3) + ')');
        var extentPrimitive = new DrawHelper.ExtentPrimitive({
            extent: extent,
            material: Cesium.Material.fromType(Cesium.Material.StripeType)
        });
        viewer.scene.primitives.add(extentPrimitive);
        extentPrimitive.setEditable();
        extentPrimitive.addListener('onEdited', function (event) {
            loggingMessage('Extent edited: extent is (N: ' + event.extent.north.toFixed(3) + ', E: ' + event.extent.east.toFixed(3) + ', S: ' + event.extent.south.toFixed(3) + ', W: ' + event.extent.west.toFixed(3) + ')');
        });
    });
}

/** ================================================================================================== */
//填挖方分析
function tianwafangfenxi() {
    //设置homebutton的位置
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE =
        Cesium.Rectangle.fromDegrees(116.15, 40.54, 116.25, 40.56);//Rectangle(west, south, east, north)
    //设置初始位置
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(117.220108, 31.834937, 3000)
    });

    //开启深度检测
    viewer.scene.globe.depthTestAgainstTerrain = true;

    let terrainClipPlan = new Cesium.TerrainClipPlan(viewer, {
        height: 30,
        splitNum: 50,
        wallImg: "/data/images/excavate_side_min.jpg",
        bottomImg: "/data/images/excavate_bottom_min.jpg"
    })

    terrainClipPlan.updateData([{ x: -2480825.779644006, y: 4823039.348573122, z: 3344998.9734951435 },
    { x: -2481057.6623671586, y: 4822939.719360245, z: 3344970.8291531955 },
    { x: -2481026.5803391673, y: 4823096.907581604, z: 3344768.5949868727 },
    { x: -2480854.0689538443, y: 4823168.905374106, z: 3344792.5711652176 }]);

    /*let terrain = new Cesium.CesiumTerrainProvider({
        url: "/data/Terrain/beijing/"
    });*/
    //取消双击事件
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    //设置homebutton的位置
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE =
        Cesium.Rectangle.fromDegrees(116.15, 40.54, 116.25, 40.56);//Rectangle(west, south, east, north)
    //设置初始位置
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(115.970076, 39.910064, 10000)
    });
    let coordinates = [[[115.94282, 39.918712], [115.970076, 39.910064], [115.954399, 39.882855], [115.905748, 39.886989], [115.913215, 39.916541], [115.913217, 39.916543], [115.913225, 39.916551], [115.94282, 39.918712]]];

    // let tdpolygon = new Cesium.PolygonGeometry({
    //     vertexFormat: Cesium.PolylineColorAppearance.VERTEX_FORMAT,
    //     polygonHierarchy: new Cesium.PolygonHierarchy(
    //         Cesium.Cartesian3.fromDegreesArray([
    //             115.94282, 39.918712,
    //             115.970076, 39.910064,
    //             115.954399, 39.882855,
    //             115.905748, 39.886989,
    //             115.913215, 39.916541,
    //             115.913217, 39.916543,
    //             115.913225, 39.916551
    //         ])
    //     ),
    //     extrudedHeight: 0
    // });
    // let polygoninstance = new Cesium.GeometryInstance({
    //     geometry: tdpolygon,
    //     attributes: {
    //         color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromRandom({ alpha: 1 }))
    //     }
    // });
    // viewer.scene.primitives.add(new Cesium.Primitive({
    //     geometryInstances: [polygoninstance],
    //     appearance: new Cesium.PolylineColorAppearance({
    //         translucent: false
    //     })
    // }));


    let polygon = turf.polygon(coordinates);

    let area = turf.area(polygon);
    //？？？
    let cellsize = Math.sqrt(turf.area(polygon) / 10000);

    let enveloped = turf.envelope(polygon);

    let centroid = turf.centroid(polygon);

    let bbox = turf.bbox(enveloped);

    let grid = turf.pointGrid(bbox, cellsize, { units: 'meters' });

    let ptsWithin = turf.pointsWithinPolygon(grid, polygon);

    let lonlats = [];

    let features = ptsWithin.features;
    for (let i = 0; i < features.length; i++) {
        lonlats.push({
            lon: features[i].geometry.coordinates[0],
            lat: features[i].geometry.coordinates[1]
        })
    }
    setTimeout(() => {
        TerrainToolCopy.LonlatPointsTerrainData(viewer.terrainProvider, lonlats, (positions) => {
            getVolumn(positions);
        })

    }, 5000);
    function getVolumn(data) {
        let minHeight = findMinHeight(data);
        let maxHeight = findMaxHeight(data);

        let volumn = 0;
        let points = [];
        let colors = [];

        for (let i = 0; i < data.length; i++) {
            //高-最低
            volumn += (data[i]['height'] - minHeight) * cellsize * cellsize;
            let point = Cesium.Cartesian3.fromRadians(data[i].longitude, data[i].latitude, data[i].height);
            points.push(point);
            //颜色
            colors.push(1);
            colors.push(0);
            colors.push(0);
            colors.push(1);
        }
        new PrimitivePoints({ 'viewer': viewer, 'Cartesians': points, 'Colors': colors });

        viewer.entities.add({
            name: "飞机",
            position: Cesium.Cartesian3.fromDegrees(centroid.geometry.coordinates[0], centroid.geometry.coordinates[1], maxHeight),
            label: {
                text: volumn + '立方米',
                font: '24px sans-serif',
                fillColor: Cesium.Color.WHITE,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                pixelOffset: new Cesium.Cartesian2(0.0, -70)
            }
        });
    }

    function findMinHeight(e) {
        let minHeight = 5000000;
        let minPoint = null;
        for (let i = 0; i < e.length; i++) {
            let height = e[i]['height'];
            if (height < minHeight) {
                minHeight = height;
            }
        }
        return minHeight;
    }
    function findMaxHeight(e) {
        let maxHeight = 0;
        let minPoint = null;
        for (let i = 0; i < e.length; i++) {
            let height = e[i]['height'];
            if (height > maxHeight) {
                maxHeight = height;
            }
        }
        return maxHeight;
    }
}

/** ================================================================================================== */
//可视域分析
function keshiyufenxi() {


    Cesium.Camera.DEFAULT_VIEW_RECTANGLE =
        Cesium.Rectangle.fromDegrees(116.15, 40.54, 116.25, 40.56);//Rectangle(west, south, east, north)
    //设置初始位置
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(116.20, 40.55, 8000000)
    });

    let terrain = new Cesium.CesiumTerrainProvider({
        url: "/data/Terrain/beijing/"
    });
    viewer.terrainProvider = terrain;

    //开启深度检测
    //viewer.scene.globe.depthTestAgainstTerrain = true;

    viewer.scene.fxaa = false;//关闭 快速抗锯齿
    viewer.scene.fog.enabled = false;
    viewer.scene.globe.depthTestAgainstTerrain = true;

    //可视域
    var primitiveKSY = [];
    function DrawLineKSY() {
        if (primitiveKSY.length > 0) { return; }
        var viewHeight = 1.5;
        var cartographicCenter = Cesium.Cartographic.fromDegrees(116.18, 40.61);
        var cartesianCenterH0 = Cesium.Cartesian3.fromRadians(cartographicCenter.longitude, cartographicCenter.latitude);
        var cartesianPointH0 = Cesium.Cartesian3.fromDegrees(116.20, 40.62);
        var ab = Cesium.Cartesian3.distance(cartesianCenterH0, cartesianPointH0);
        var eopt = {};
        eopt.semiMinorAxis = ab;
        eopt.semiMajorAxis = ab;
        eopt.rotation = 0;
        eopt.center = cartesianCenterH0;
        eopt.granularity = Math.PI / 45.0;//间隔
        var ellipse = EllipseGeometryLibraryEx.computeEllipseEdgePositions(eopt);
        for (var i = 0; i < ellipse.outerPositions.length; i += 3) {
            //逐条计算可视域
            var cartesian = new Cesium.Cartesian3(ellipse.outerPositions[i], ellipse.outerPositions[i + 1], ellipse.outerPositions[i + 2]);
            var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            var deltaRadian = 0.00005 * Math.PI / 180.0; //Cesium.Math.RADIANS_PER_DEGREE
            var cartographicArr = SysMathTool.InterpolateLineCartographic(cartographicCenter, cartographic, deltaRadian);
            TerrainToolCopy.CartographicPointsTerrainData(terrain, cartographicArr,
                function (terrainData) {
                    if (terrainData.length > 0) {
                        var preVisible = true;
                        var cartesiansLine = [];
                        var colors = [];
                        for (var j = 1; j < terrainData.length; j++) {
                            //逐点计算可见性
                            var visible = true;//该点可见性
                            if (j > 1) {
                                var cartographicCenterHV = new Cesium.Cartographic(terrainData[0].longitude, terrainData[0].latitude, terrainData[0].height + viewHeight);
                                //
                                if (preVisible) {
                                    //     
                                    var curPoint = SysMathTool.InterpolateIndexLineHeightCartographic(cartographicCenterHV, terrainData[j], j, j - 1);
                                    if (curPoint.height >= terrainData[j - 1].height) {
                                        preVisible = true;
                                        visible = true;
                                    } else {
                                        preVisible = false;
                                        visible = false;
                                    }
                                } else {
                                    //插值到当前
                                    var curPointArr = SysMathTool.Interpolate2IndexLineHeightCartographic(cartographicCenterHV, terrainData[j], j, j - 1);
                                    for (var k = 0; k < curPointArr.length; k++) {
                                        if (curPointArr[k].height >= terrainData[k].height) {
                                            preVisible = true;
                                            visible = true;
                                        } else {
                                            preVisible = false;
                                            visible = false;
                                            break;
                                        }
                                    }
                                }
                            }
                            var cartesianTemp = Cesium.Cartesian3.fromRadians(terrainData[j].longitude, terrainData[j].latitude, terrainData[j].height + 0.10);
                            cartesiansLine.push(cartesianTemp);
                            //绘制点
                            if (visible) {
                                colors.push(0);
                                colors.push(0);
                                colors.push(1);
                                colors.push(1);
                            } else {
                                colors.push(1);
                                colors.push(0);
                                colors.push(0);
                                colors.push(1);
                            }
                        }

                        //绘制结果
                        var pointsKSY = new PrimitivePoints({ 'viewer': viewer, 'Cartesians': cartesiansLine, 'Colors': colors });
                        primitiveKSY.push(pointsKSY);
                    } else {
                        alert("高程异常！");
                    }
                });
        }

    }

    setTimeout(function () {
        DrawLineKSY()
    }, 5000)
}