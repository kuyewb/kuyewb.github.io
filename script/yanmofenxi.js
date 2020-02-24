//https://blog.csdn.net/weixin_40184249/article/details/92427287

//淹没分析


var entityPolygon = null;
        var points = null;
        //取消左键双击事件
        var drawingMode = 'polygon';
        var activeShapePoints = [];
        var activeShape;
        var floatingPoint;
        
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
            else if (drawingMode === 'point') {
                shape= viewer.entities.add({
                    position: worldPosition,
                    point: {
                        pixelSize: 10,
                        color: Cesium.Color.YELLOW,
                        //disableDepthTestDistance: Number.POSITIVE_INFINITY,
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND//是否贴地
                    },
                });
            }
            return shape;
        }

function yanmofenxiInit(viewer){
        var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
        handler.setInputAction(function (event) {
            /*if (!Cesium.Entity.supportsPolylinesOnTerrain(viewer.scene)) {
                console.log('This browser does not support polylines on terrain.');
                return;
            }*/
            // 使用viewer.scene.pickPosition` 来代替`viewer.camera.pickEllipsoid` 这样当鼠标掠过terrain能得到正确的坐标
            var earthPosition = viewer.scene.pickPosition(event.position);
            if (Cesium.defined(earthPosition)) {
                if (activeShapePoints.length === 0) {
                    floatingPoint = createPoint(earthPosition);
                    activeShapePoints.push(earthPosition);
                    var dynamicPositions = new Cesium.CallbackProperty(function () {
                        return activeShapePoints;
                    }, false);
                    activeShape = drawShape(dynamicPositions);
                }
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
        // Redraw the shape so it's not dynamic and remove the dynamic shape.
        function terminateShape() {
            activeShapePoints.pop();
             entityPolygon = drawShape(activeShapePoints);
            if (entityPolygon.polygon!=null) {

                thisWidget.drawOk(entityPolygon);
            }            
            viewer.entities.remove(floatingPoint);
            viewer.entities.remove(activeShape); 
            entityPolygon = null;
            floatingPoint = undefined;
            activeShape = undefined;
            activeShapePoints = [];
        }
        handler.setInputAction(function (event) {
            terminateShape();
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

        //$("#drawplygon").click(function () {
        document.getElementById("floodFx-draw").onclick = function(){
            //thisWidget.clear();
            viewer.entities.remove(thisWidget.entity);
            entityPolygon = null; 
            viewer.entities.remove(points);
            //terminateShape();
            drawingMode = 'polygon';
            entityPolygon = null; 
        };
        //$("#floodanalyis").click(function () {
        document.getElementById("floodFx-analyis").onclick = function(){
            console.log(viewer.entities.values.length);
            int = self.setInterval(flood, 100);
        };

        //为了防止第一次分析闪屏
        var greenCylinder = viewer.entities.add({
            name: 'Green cylinder with black outline',
            position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 200000.0),
            cylinder: {
                length: 400000.0,
                topRadius: 200000.0,
                bottomRadius: 200000.0,
                material: Cesium.Color.GREEN.withAlpha(0.5),
                outline: true,
                outlineColor: Cesium.Color.DARK_GREEN
            },
            show:false
        });
}

//淹没分析核心代码
var thisWidget = {
    entity: null,
    drawOk: function (e) {
        this.entity = e;
        var t = this.computePolygonHeightRange(e.polygon.hierarchy.getValue());
        currentHeight = t.minHeight, maxValue = t.maxHeight;
    },
    computePolygonHeightRange: function (e) {
        var t = []
        for (var i = 0; i < e.length; i++) t.push(e[i].clone());
        var a, n, r, o, s, u, l, h = 0,
            g = 9999,
            c = Math.PI / Math.pow(2, 11) / 64,
            m = new Cesium.PolygonGeometry.fromPositions({
                positions: t,
                vertexFormat: Cesium.PerInstanceColorAppearance.FLAT_VERTEX_FORMAT,
                granularity: c
            }),
            
            d = new Cesium.PolygonGeometry.createGeometry(m);
        for (i = 0; i < d.indices.length; i += 3) a = d.indices[i],
            n = d.indices[i + 1],
            r = d.indices[i + 2],
            l = new Cesium.Cartesian3(d.attributes.position.values[3 * a], d.attributes.position.values[3 * a + 1], d.attributes.position.values[3 * a + 2]),
            (o = viewer.scene.globe.getHeight(Cesium.Cartographic.fromCartesian(l))) < g && (g = o),
            h < o && (h = o),
            l = new Cesium.Cartesian3(d.attributes.position.values[3 * n], d.attributes.position.values[3 * n + 1], d.attributes.position.values[3 * n + 2]),
            (s = viewer.scene.globe.getHeight(Cesium.Cartographic.fromCartesian(l))) < g && (g = s),
            h < s && (h = s),
            l = new Cesium.Cartesian3(d.attributes.position.values[3 * r], d.attributes.position.values[3 * r + 1], d.attributes.position.values[3 * r + 2]),
            (u = viewer.scene.globe.getHeight(Cesium.Cartographic.fromCartesian(l))) < g && (g = u),
            h < u && (h = u);
        return {
            maxHeight: h,
            minHeight: g
        }
    },
    //开始分析
    startFx: function (e) {
        viewer.scene.globe.depthTestAgainstTerrain = !0;
        var t = this;
        this.extrudedHeight = e,
            this.entity.polygon.extrudedHeight = new Cesium.CallbackProperty(function (e) {
                return t.extrudedHeight
            }, false);

        for (var i = this.entity.polygon.hierarchy.getValue(), a = [], n = 0; n < i.length; n++) {
            var r = Cesium.Ellipsoid.WGS84.cartesianToCartographic(i[n]),
                o = {
                    lon: Cesium.Math.toDegrees(r.longitude),
                    lat: Cesium.Math.toDegrees(r.latitude),
                    hgt: e
                },
                s = [o.lon, o.lat, o.hgt];
            a = a.concat(s)
        }
        return i = Cesium.Cartesian3.fromDegreesArrayHeights(a),
            this.entity.polygon.hierarchy = new Cesium.CallbackProperty(function (e) {
                return i;
            },false),
            !0
    },
    clear: function () {
        viewer.scene.globe.depthTestAgainstTerrain = !1,
            this.entity = null
    },
    updateHeight: function (e) {
        this.entity.polygon.extrudedHeight = e
    }
}
function stopFX() {
    self.clearInterval(int);
}


function loggingMessage(message) {
    var logging = document.getElementById('logging');
    logging.innerHTML = message;
}

window.flood = function () {
    currentHeight > maxValue ? stopFX() : (thisWidget.updateHeight(currentHeight), currentHeight += 1);
};



