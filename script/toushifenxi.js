//https://blog.csdn.net/cr196/article/details/77072814?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

//透视分析
//资料：https://blog.csdn.net/weixin_40902527/article/details/102682888?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

var rad1 = Cesium.Cartographic.fromCartesian(p[0]);
var rad2 = Cesium.Cartographic.fromCartesian(p[1]);
var degree1 = {longitude:rad1.longitude / Math.PI * 180,latitude:rad1.latitude / Math.PI * 180,height:rad1.height};
var degree2 = {longitude:rad2.longitude / Math.PI * 180,latitude:rad2.latitude / Math.PI * 180,height:rad2.height};
for(var i=0;i<num;i++)
{
Cesium.Cartesian3(pl_x[i],pl_y[i],pl_height[i]);
//插值经纬度数组 和 插值高程数组、切片实际高程数组
lon[i]=Cesium.Math.lerp(degree1.longitude,degree2.longitude,0.01*(i+1));
lat[i]=Cesium.Math.lerp(degree1.latitude,degree2.latitude,0.01*(i+1));
height_lerp[i]=degree1.height-(degree1.height-degree2.height)*0.01*(i+1);   
}

if(isSeen==false){
    if(i>0){
        var bhl =height_lerp[i-1];
        var bht = height_tile[i-1];
        var ht =height_tile[i];
        var hl = height_lerp[i];
        if((bhl-bht)>=0){
            if((hl-ht)<0){
                //先找到 先真后假 为入点 
                var obj ={'points':[pArray[i-1],pArray[i]],'index':i,type:'in'}
                objArray.push(obj);

            };
        }
        else {
            //先假后真 为出点
            if((hl-ht)>=0){
                var obj ={'points':[pArray[i-1],pArray[i]],'index':i,type:'out'}
                objArray.push(obj);
            }
        };


    }
}

//在第二点处放置一个label说明一些信息
var entity = viewer.entities.add({
    label : {
        name: 'tongshifenxi',
        show : false,
        showBackground : true,
        font : '14px monospace',
        horizontalOrigin : Cesium.HorizontalOrigin.LEFT,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
        pixelOffset : new Cesium.Cartesian2(15, -10)
    }
});
entity.position = p[1];
entity.label.show = true;
var length_ping = Math.sqrt(Math.pow(p[0].x-p[1].x,2)+Math.pow(p[0].y-p[1].y,2)+Math.pow(p[0].z-p[1].z,2));
var length_h = Math.abs(degree2.height-degree1.height);
var length = Math.sqrt(Math.pow(length_ping,2)+Math.pow(length_h,2));
console.log(degree1);
var text =
    '起点坐标: ' + ('   (' + degree1.longitude)+ '\u00B0' +',' +(degree1.latitude)+ '\u00B0'+',' +degree1.height+')' +
    '\n终点坐标: ' + ('   (' + degree2.longitude)+ '\u00B0' +',' +(degree2.latitude)+ '\u00B0'+',' +degree2.height+')' +
    '\n垂直距离: ' + '   ' + length_h +
    '\n水平距离: ' + '   ' + length_ping +
    '\n空间距离: ' + '   ' + length +
    '\n是否可视: ' + '   ' + '否';
entity.label.text =text;


if(!start){
    //从头开始

    var index =temp.index;
    var model = viewer.entities.add({
        name: 'polyline',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([                     
                pArray[0][0],pArray[0][1],pArray[0][2],
                pArray[index][0],pArray[index][1],pArray[index][2]
            ]),     
            width: 5,
            material: Cesium.Color.RED
            }
        });
    start = index;

}
//起点为start 暂时不会用到如果只是显示可视线段和不可视线段的话
if(start){
    console.log(pArray[start][0],pArray[start][1],pArray[start][2],
                pArray[num][0],pArray[num][1],pArray[num][2]);
    var model = viewer.entities.add({
        name: 'polyline',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([                     
                pArray[start][0],pArray[start][1],pArray[start][2],
                pArray[num][0],pArray[num][1],pArray[num][2]
            ]),     
            width: 5,
            material: Cesium.Color.BLUE
            }
        });
    break;
}
