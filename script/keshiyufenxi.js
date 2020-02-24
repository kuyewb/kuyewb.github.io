//https://blog.csdn.net/caozl1132/article/details/99729506
//可视域分析
//创建一个点光源
this._shadowMap = new Cesium.ShadowMap({
    context: this._scene.context,
    lightCamera: this._lightCamera,
    enabled: this._enabled,
    isPointLight: false,
    pointLightRadius: 100.0,
    cascadesEnabled: false,
    size: this._size,
    softShadows: this._softShadows,
    normalOffset: false,
    fromLightSource: false
});
ViewShed.prototype._updateCamera = function () {
//视锥体近平面
this._lightCamera.frustum.near = .001 * this._bugDistance;
//视锥体远平面
this._lightCamera.frustum.far = this._bugDistance;
//定义视锥体的视场角度为垂直方向角度
this._lightCamera.frustum.fov = Cesium.Math.toRadians(this._verticalFov);

var horizontalFovRadians = Cesium.Math.toRadians(this._horizontalFov);
var verticalFovRadians = Cesium.Math.toRadians(this._verticalFov);
//视锥体宽高比
this._lightCamera.frustum.aspectRatio = (this._bugDistance * Math.tan(horizontalFovRadians * 0.5) * 2.0) / (this._bugDistance * Math.tan(verticalFovRadians * 0.5) * 2.0);

//定义视锥体的视场角度为水平方向角度
if(this._horizontalFov > this._verticalFov) {
    this._lightCamera.frustum.fov = Cesium.Math.toRadians(this._horizontalFov);
}

//透视投影矩阵 切换到相机的二维平面上
var projectionMatrix = this._lightCamera.frustum.projectionMatrix;
this._lightCamera.setView({
    destination: this._viewerPosition,
    orientation: {
        heading: Cesium.Math.toRadians(this._direction),
        pitch: Cesium.Math.toRadians(this._pitch)
    }
});

if (this._lightCameraPrimitive) {
    this._lightCameraPrimitive.destroy();
    this._lightCameraPrimitive = undefined;
}
}