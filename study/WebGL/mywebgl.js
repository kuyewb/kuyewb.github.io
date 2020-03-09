var container = "webgl";

//声明初始化着色器函数
function initShader(gl,vertexShaderSource,fragmentShaderSource){
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vertexShader,vertexShaderSource);
    gl.shaderSource(fragmentShader,fragmentShaderSource);
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    var program = gl.createProgram();// 程序对象的生成  
    // 向程序对象里分配着色器  
    gl.attachShader(program,vertexShader);
    gl.attachShader(program,fragmentShader);
    // 将着色器连接 
    gl.linkProgram(program);
    //// 判断着色器的连接是否成功  
    if(gl.getProgramParameter(program, gl.LINK_STATUS)){
        //将程序对象设置为有效
        gl.useProgram(program);
    }else{
        //alert(gl.getShaderInfoLog(vertexShader) + gl.getShaderInfoLog(fragmentShader));
        alert(gl.getProgramInfoLog(program));
    }
    return program;
}

//正方体
function drawBox(){
    var canvasElement = document.getElementById(container);
    //webgl渲染上下文
    // 兼容处理
    var gl = canvasElement.getContext('webgl') || c.getContext('experimental-webgl'); 
    
    gl.clearColor(0.0, 0.0, 0.0, 1.0);// 使用颜色值（RGBA）来清空画面
    gl.clear(gl.COLOR_BUFFER_BIT);// 使用指定常量颜色来清空画面

    //顶点着色器源码
    var vertexShaderSource = '' +
        //attribute声明vec4类型变量apos
        'attribute vec4 apos;'+
        'void main(){' +
        //设置几何体轴旋转角度为30度，并把角度值转化为浮点值
        'float radian = radians(30.0);'+
        //求解旋转角度余弦值
        'float cos = cos(radian);'+
        //求解旋转角度正弦值
        'float sin = sin(radian);'+
        //引用上面的计算数据，创建绕x轴旋转矩阵
        // 1      0       0    0
        // 0   cosα   sinα   0
        // 0  -sinα   cosα   0
        // 0      0        0   1
        'mat4 mx = mat4(1,0,0,0,  0,cos,-sin,0,  0,sin,cos,0,  0,0,0,1);'+
        //引用上面的计算数据，创建绕y轴旋转矩阵
        // cosβ   0   sinβ    0
        //     0   1   0        0
        //-sinβ   0   cosβ    0
        //     0   0   0        1
        'mat4 my = mat4(cos,0,-sin,0,  0,1,0,0,  sin,0,cos,0,  0,0,0,1);'+
        //两个旋转矩阵、顶点齐次坐标连乘
        '   gl_Position = mx * my * apos;' +
        '}';
    //片元着色器源码
    var fragShaderSource = '' +
        'void main(){' +
        '   gl_FragColor = vec4(1.0,0.0,0.0,1.0);' +
        '}';
    //初始化着色器
    var program = initShader(gl,vertexShaderSource,fragShaderSource);
    //获取顶点着色器的位置变量apos
    var aposLocation = gl.getAttribLocation(program,'apos');

    //9个元素构建三个顶点的xyz坐标值
    var data=new Float32Array([
        //z为0.5时，xOy平面上的四个点坐标
         0.5,  0.5,  0.5,
        -0.5,  0.5,  0.5,
        -0.5, -0.5,  0.5,
         0.5, -0.5,  0.5,
        //z为-0.5时，xOy平面上的四个点坐标
         0.5,  0.5, -0.5,
        -0.5,  0.5, -0.5,
        -0.5, -0.5, -0.5,
         0.5, -0.5, -0.5,
        //上面两组坐标分别对应起来组成一一对
        0.5,  0.5,  0.5,
        0.5,  0.5,  -0.5,

        -0.5,  0.5,  0.5,
        -0.5,  0.5,  -0.5,

        -0.5, -0.5,  0.5,
        -0.5, -0.5,  -0.5,

        0.5, -0.5,  0.5,
        0.5, -0.5,  -0.5,
    ]);

    //创建缓冲区对象
    var buffer=gl.createBuffer();
    //绑定缓冲区对象
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
    //顶点数组data数据传入缓冲区
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    //缓冲区中的数据按照一定的规律传递给位置变量apos
    gl.vertexAttribPointer(aposLocation, 3, gl.FLOAT,false,0,0);
    //允许数据传递
    gl.enableVertexAttribArray(aposLocation);

    //LINE_LOOP模式绘制前四个点
    gl.drawArrays(gl.LINE_LOOP,0,4);
    //LINE_LOOP模式从第五个点开始绘制四个点
    gl.drawArrays(gl.LINE_LOOP,4,4);
    //LINES模式绘制后8个点
    gl.drawArrays(gl.LINES,8,8);

}

//画点
function drawPoint(){
    //通过getElementById()方法获取canvas画布
    var canvas = document.getElementById(container);
    //通过方法getContext()获取WebGL上下文
    // 兼容处理
    var gl = canvas.getContext('webgl') || c.getContext('experimental-webgl');  
    gl.clearColor(0.0, 0.0, 0.0, 1.0);// 使用颜色值（RGBA）来清空画面
   gl.clear(gl.COLOR_BUFFER_BIT);// 使用指定常量颜色来清空画面
    //顶点着色器源码
    var vertexShaderSource = '' +
        'void main(){' +
        //给内置变量gl_PointSize赋值像素大小
        '   gl_PointSize=20.0;' +
        //顶点位置，位于坐标原点
        '   gl_Position =vec4(0.0,0.0,0.0,1.0);' +
        '}';

    //片元着色器源码
    var fragShaderSource = '' +
        'void main(){' +
        //定义片元颜色
        '   gl_FragColor = vec4(1.0,0.0,0.0,1.0);' +
        '}';

    //初始化着色器
    var program = initShader(gl,vertexShaderSource,fragShaderSource);

    //开始绘制，显示器显示结果
    gl.drawArrays(gl.POINTS,0,1);
}

function drawRectangle(){
    // Get A WebGL context
    var canvas = document.getElementById(container);
    // 兼容处理
    var gl = canvas.getContext('webgl') || c.getContext('experimental-webgl');  
    /*
    // setup a GLSL program
    var program = createProgramFromScripts(gl, ["2d-vertex-shader", "2d-fragment-shader"]);
    */
   gl.clearColor(0.0, 0.0, 0.0, 1.0);// 使用颜色值（RGBA）来清空画面
   gl.clear(gl.COLOR_BUFFER_BIT);// 使用指定常量颜色来清空画面

   /*
    //顶点着色器源码
    var vertexShaderSource = '' +
        'attribute vec2 a_position;' + 
        'void main(){' +
    
        //'   gl_PointSize=20.0;' +
        
        //'   gl_Position =vec4(0.0, 0.0, 0.0, 1.0);' +
        ' gl_Position = vec4(a_position, 0.0, 1.0);'
        '}';

    //片元着色器源码
    var fragShaderSource = '' +
        'void main(){' +
        //定义片元颜色
        //'   gl_FragColor = vec4(1.0,0.0,0.0,1.0);' +
        '   gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);' +  // green
        '}';*/
    //获取顶点和片段着色器文本
    let vertexShaderSource = document.getElementById('2d-vertex-shader').text;
    let fragShaderSource = document.getElementById('2d-fragment-shader').text;

    //初始化着色器
    var program = initShader(gl,vertexShaderSource,fragShaderSource);

    //gl.useProgram(program);
    
    // look up where the vertex data needs to go.
    var positionLocation = gl.getAttribLocation(program, "a_position");
    
    // Create a buffer and put a single clipspace rectangle in
    // it (2 triangles)
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
    -0.5, -0.5,
    0.5, -0.5,
    -0.5,  0.5,
    -0.5,  0.5,
    0.5, -0.5,
    0.5,  0.5]),
    gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    
    // draw
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function drawLine(container){

}