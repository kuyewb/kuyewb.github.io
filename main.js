//Cesium.Ion.defaultAccessToken = '你的token'

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

//国家天地图
var mtdt = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://t0.tianditu.com/img_w/wmts?',
    layer: 'img',
    style: 'default',
    format: 'tiles',
    tileMatrixSetID: 'w',
    credit: new Cesium.Credit('天地图全球影像服务'),
    maximumLevel: 18
});
//scene.skyAtmosphere.show false;//大气层
//viewer.scene.globe.depthTestAgainstTerrain = true;//控制视角不转到地下
var viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false,//左下角控制动画
    baseLayerPicker: false,//右上角图层选择器
    fullscreenButton: false,
    geocoder: false,//右上角搜索   默认bing地图
    homeButton: true,
    infoBox: false,
    scene3DOnly: false,//仅仅显示3d,可隐藏右上角2d和3d按钮  哥伦布视图（CV）
    sceneModePicker: false,
    creditContaniner: "credit",//版权，数据归属
    vrButton: false,
    //skyBox:new Cesium.SkyBox(),
    selectionoIndicatr: false,
    timeline: false,//最下面时间轴            
    navigationHelpButton: false,//右上角帮助按钮 
    navigationInstructionsInitiallyVisibl: false,
    useDefaultRenderLoop: true,
    showRenderLoopErrors: true,
    projectionPicker: false,//投影选择器
    //selectionIndicator:false,//禁止entity选中
    imageryProvider: guge
});
viewer.scene.globe.enableLighting = true;

//世界地形图
/*
var terrain = new Cesium.createWorldTerrain({           
    requestWaterMask:true,           
    requestVertexNormals:true    //requestVertexNormals设为true并开启全球光照。   
}); 
*/
//按照程序创建椭球的表面。缺乏地形的真实外观，但不从服务器请求数据
//var ellipsoidProvider = new Cesium.EllipsoidTerrainProvider();    
//viewer.terrainProvider = terrain;//ellipsoidProvider terrain

//Cesium动态叠加地形图 
//MapConfig.terrainObj = {url:"//assets.agi.com/stk-terrain/world",requestWaterMask:false,requestVertexNormals:false,proxyUrl:""}; 
//MapConfig.terrainObj = {url:"http://localhost:8180/cesium/worldTerrain",requestWaterMask:false,requestVertexNormals:false,proxyUrl:""};  

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

function move(movement) {
    if (!moveActive) {
        return;
    }

    var relativeOffset = movement.endPosition.x;
    var splitPosition = (slider.offsetLeft + relativeOffset) / slider.parentElement.offsetWidth;
    slider.style.left = 100.0 * splitPosition + '%';
    viewer.scene.imagerySplitPosition = splitPosition;
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
            arcType : Cesium.ArcType.RHUMB
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
            arcType : Cesium.ArcType.RHUMB,//1.54版本
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
        thisWidget.drawOk({'polygon': entity});
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

