var MoveEntity = (
    function () {
        var leftDownFlag = false;
        var pointDraged = null;
        var viewer;
        var handler;
        function ConstructMoveEntity(options) {
            viewer = options.viewer;
            handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
            Init();
        }
        function Init() {
            // Select plane when mouse down
            handler.setInputAction(function (movement) {
                pointDraged = viewer.scene.pick(movement.position);//选取当前的entity 
                leftDownFlag = true;
                if (pointDraged) {
                    viewer.scene.screenSpaceCameraController.enableRotate = false;//锁定相机
                }
            }, Cesium.ScreenSpaceEventType.LEFT_DOWN);

            // Release plane on mouse up
            handler.setInputAction(function () {
                leftDownFlag = false;
                pointDraged = null;
                viewer.scene.screenSpaceCameraController.enableInputs = true;
            }, Cesium.ScreenSpaceEventType.LEFT_UP);
            // Update plane on mouse move
            handler.setInputAction(function (movement) {
                if (leftDownFlag === true && pointDraged != null) {
                    let ray = viewer.camera.getPickRay(movement.endPosition);
                    let cartesian = viewer.scene.globe.pick(ray, viewer.scene);
                    console.log(cartesian);
                    pointDraged.id.position = new Cesium.CallbackProperty(function () {
                        return cartesian;
                    }, false);//防止闪烁，在移动的过程
                }
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        }
        return ConstructMoveEntity;
    })();