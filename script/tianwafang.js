//填挖方
//https://www.cnblogs.com/giserhome/p/11374089.html
// 定义填挖方的基准面高度
var excavateHeight = 2300; // 开挖高度
var buryHeight = 6000; // 填埋高度
 
// 定义施工区域
var scope = [
Cesium.Cartesian3.fromDegrees(99, 29),
Cesium.Cartesian3.fromDegrees(100, 29),
Cesium.Cartesian3.fromDegrees(100, 30),
Cesium.Cartesian3.fromDegrees(99, 30)
];

//核心思想：计算 开挖/填埋 的 开挖量/填方量 的 核心思想就是 剖分 微积分
// 设置剖分最小单元 0.01°
var subdivisionCell = 0.01; // 剖分精度自定义
// 存储所有的剖分矩形
var subRectangles = [];
for (var i = 99; i <= 100; i = i + subdivisionCell) {
for (var j = 29; j <= 30; j = j + subdivisionCell) {
var subRectangle = new Cesium.Rectangle(
Cesium.Math.toRadians(i),
Cesium.Math.toRadians(j),
Cesium.Math.toRadians(i + subdivisionCell),
Cesium.Math.toRadians(j + subdivisionCell)
);
subRectangles.push(subRectangle);
}
}

// 计算每个矩形的中心点作为这个矩形的代表
var subRectanglesCenterPoints = [];
subRectangles.forEach(subRectangle => {
var centerPoint = Cesium.Cartographic.fromRadians((subRectangle.west + subRectangle.east) / 2, (subRectangle
.north +
subRectangle.south) / 2);
subRectanglesCenterPoints.push(centerPoint);
});
// 采样每个中心点到达地表的高度
var promise = Cesium.sampleTerrainMostDetailed(terrainProvider, subRectanglesCenterPoints);
Cesium.when(promise, function (updatedPositions) {
// 所有高度
var heights = [];
updatedPositions.forEach(point => {
heights.push(point.height);
});
});