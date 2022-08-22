<script setup>
import * as THREE from 'three';
import createAxesHelper from "../unit/createAxesHelper.js";
// import createControls from "../unit/createControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {onMounted, ref} from "vue";
import  { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'

//
const size = 10 // 单边棋格数
const singleLen = 10 // 单个棋格边长, 那么棋盘仅是10的倍数
const planeWidth = singleLen * size + 2 * singleLen  // 平面边长
const count = ref(0)
let taskLen = ref(0)

let camera, scene, renderer, controls;

const objects = [];

let raycaster;

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const vertex = new THREE.Vector3();
const color = new THREE.Color();


onMounted(() => {
  init();
  animate();
})

function init() {
  // 创建场景
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
  restartCamera()
  camera.lookAt(0,0,0)
  renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});// antialias：场景抗锯齿
  renderer.shadowMap.enabled = true // 开启阴影配置
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  controls = new PointerLockControls( camera, document.body );

  const blocker = document.getElementById( 'blocker' );
  const firstPerson = document.getElementById( 'firstPerson' );
  const thirdPerson = document.getElementById( 'thirdPerson' );
  console.log(firstPerson, 'firstPerson');
  firstPerson.addEventListener( 'click', function () {
    controls.lock();

  } );

  controls.addEventListener( 'lock', function () {

    firstPerson.style.display = 'none';
    blocker.style.display = 'none';

  } );

  controls.addEventListener( 'unlock', function () {

    blocker.style.display = 'block';
    firstPerson.style.display = '';

  } );

  scene.add( controls.getObject() );

  const onKeyDown = function ( event ) {

    switch ( event.code ) {

      case 'ArrowUp':
      case 'KeyW':
        moveForward = true;
        break;

      case 'ArrowLeft':
      case 'KeyA':
        moveLeft = true;
        break;

      case 'ArrowDown':
      case 'KeyS':
        moveBackward = true;
        break;

      case 'ArrowRight':
      case 'KeyD':
        moveRight = true;
        break;

      case 'Space':
        if ( canJump === true ) velocity.y += 350;
        canJump = false;
        break;

    }

  };

  const onKeyUp = function ( event ) {

    switch ( event.code ) {

      case 'ArrowUp':
      case 'KeyW':
        moveForward = false;
        break;

      case 'ArrowLeft':
      case 'KeyA':
        moveLeft = false;
        break;

      case 'ArrowDown':
      case 'KeyS':
        moveBackward = false;
        break;

      case 'ArrowRight':
      case 'KeyD':
        moveRight = false;
        break;

    }

  };

  document.addEventListener( 'keydown', onKeyDown );
  document.addEventListener( 'keyup', onKeyUp );

  raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );

  // 创建棋盘动箱子
  let moveBoxGroup =  new THREE.Group()
  function createMoveBox() {
    const moveBox = new THREE.Mesh(new THREE.BoxGeometry(singleLen, singleLen, singleLen),
        new THREE.MeshBasicMaterial({color: 0xfb7922}))
    const boxEdges = new THREE.EdgesGeometry( new THREE.BoxGeometry(singleLen, singleLen, singleLen) );
    const boxLine = new THREE.LineSegments( boxEdges, new THREE.LineBasicMaterial( { color: 0xfdd894 } ) );

// moveBoxGroup.add(boxHelp)
//     moveBoxGroup.add(moveBox)
    moveBoxGroup.add(boxLine)
    createAxesHelper(moveBoxGroup,20)
    createAxesHelper(scene,1000)
    moveBoxGroup.position.x = -(size * singleLen) * 0.5 + singleLen * 0.5
    moveBoxGroup.position.z = -(size * singleLen) * 0.5 + singleLen * 0.5
    moveBoxGroup.position.y = singleLen * 0.5
    scene.add(moveBoxGroup)
    // camera.position =
  }
  createMoveBox()
  function restartMoveBox() {
    moveBoxGroup.position.x = -(size * singleLen) * 0.5 + singleLen * 0.5
    moveBoxGroup.position.z = -(size * singleLen) * 0.5 + singleLen * 0.5
  }
  // 创建棋盘

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(planeWidth, planeWidth),
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide
      }))
  const edges = new THREE.EdgesGeometry( new THREE.PlaneGeometry(planeWidth,planeWidth) );
  const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x17b1e7 } ) );
  plane.rotation.x = Math.PI * -0.5
  line.rotation.x = Math.PI * -0.5
  scene.add(plane)
  scene.add(line)
  // 创建棋格
  let grid
  let gridGroup
  let curIndex = 0

  function createGrid() {
    console.log('刷新棋盘啦');
    grid = Array.from({length: Math.pow(size, 2)}, () => {
      return  Number(Math.random() < 0.4)
    })
    grid[0]  = 0
    grid[grid.length - 1] = 2
    scene.remove(gridGroup)
    gridGroup = new THREE.Group()
    grid.forEach((item, index) => {
      const x = (index % size) * singleLen + singleLen * 0.5
      const z = (Math.trunc(index / size)  * singleLen) + singleLen * 0.5
      if (item === 1) {
        const box = new THREE.Mesh(new THREE.BoxGeometry(singleLen, singleLen, singleLen),
            new THREE.MeshBasicMaterial({color: 0x152534}))
        box.position.x = x
        box.position.z = z
        box.position.y = singleLen * 0.5
        const boxHelp = new THREE.BoxHelper( box, 0x17b1e7);
        gridGroup.add(boxHelp)
        gridGroup.add(box)
      }
      if (item === 0) {
        const edges = new THREE.EdgesGeometry( new THREE.PlaneGeometry(singleLen,singleLen) );
        const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x17b1e7 } ) );
        line.position.x = x
        line.rotation.x = Math.PI * -0.5
        line.position.z = z
        gridGroup.add(line)
      }
      if (item === 2) {
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(singleLen,singleLen),
            new THREE.MeshBasicMaterial({color:0xfb7922,side: THREE.DoubleSide}))
        plane.position.x = x
        plane.rotation.x = Math.PI * -0.5
        plane.position.z = z
        gridGroup.add(plane)
      }
    })
    gridGroup.position.x = -(size * singleLen) * 0.5
    gridGroup.position.z = -(size * singleLen) * 0.5
    createPath()
    scene.add(gridGroup)
  }

  createGrid()
  // 寻找棋格最短路径
  function createPath() {
    console.log('创建棋盘路径啦');
    let startIndex = 0
    const stack = [0]
    let lastEvent = []
    let exitEvent = []
    let isBottomExit = false
    let isExit = false
    function findPath() {
      const isRightPass = (grid[startIndex + 1] !== 1 && ((startIndex) % size) !== size - 1)
      const isBottomPass = (grid[startIndex + size] !== 1 && Math.trunc(startIndex / size) !== size - 1)
      // const isRightExit = isExit && exitEvent[exitEvent.length - 1] === 'right'
      console.log(startIndex, 'one');
      console.log(stack,'two' );
      console.log(isBottomExit, 'three');
      if (!isExit && isRightPass  ) {
        stack.push(startIndex + 1)
        startIndex = startIndex + 1
        lastEvent.push('right')
        isExit = false
        findPath()
      } else if (!isBottomExit && isBottomPass  ) {
        stack.push(startIndex + size)
        startIndex = startIndex + size
        lastEvent.push('bottom')
        isExit = false
        findPath()
      } else {
        if (startIndex !== size * size - 1 && startIndex !== 0) {
          stack.pop()
          isBottomExit = startIndex - stack[stack.length - 1] === size
          startIndex = stack[stack.length - 1]
          isExit = true
          findPath()
        }else {
          if (startIndex === size * size - 1) {
            console.log('有路径啦')
            taskLen.value = stack.length - 1
          }else {
            console.log('请刷新棋盘')
            curIndex = 0
            createGrid()
          }
        }
      }
    }
    // const taskCount = findPath()
    // if (taskCount[taskCount.length - 1] !== 99){
    //   createGrid()
    // }else {
    //   return taskCount.length - 1
    // }
    findPath()
  }


// 监听键盘事件
  let angle
  let vector = new THREE.Vector3(50,0,50)
  let direction
  // const direction = ['up', 'down', 'left', 'right']
  window.addEventListener('keydown', e => {
    console.log('按下去啦');
    camera.getWorldDirection( vector );
    angle = THREE.MathUtils.radToDeg( Math.atan2(vector.x,vector.z) );
    if (angle > 45 && angle <= 135 ) {
      direction = 'right'
    } else if (angle > 135 ) {
      direction = 'up';
    } else if (angle < -135 ) {
      direction = 'up';
    } else if (angle >= -135 && angle < -45) {
      direction = 'left'
    } else {
      direction = 'down'
    }
    console.log(angle);
    console.log(direction);
    if (e.key === 's' && direction === 'up') {
      direction = 'down'
    }
    if (e.key === 's' && direction === 'down') {
      direction = 'up'
    }
    if (e.key === 's' && direction === 'left') {
      direction = 'right'
    }
    if (e.key === 's' && direction === 'right') {
      direction = 'left'
    }
    if (direction === 'up') {
    // if (e.key === 'w') {
      if (Math.trunc(curIndex / size) !== 0 && grid[curIndex - size] !== 1) {
        // const quaternion = new THREE.Quaternion();
        // quaternion.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI * -0.5 );
        // moveBoxGroup.applyQuaternion( quaternion );
        moveBoxGroup.position.z = moveBoxGroup.position.z - singleLen
        camera.position.z = camera.position.z - singleLen
        console.log(moveBoxGroup.position, 'moveBoxGroup.position');
        console.log(camera.position, 'camera.position');
        curIndex -= size
        count.value += 1
      }
    }
    if (direction === 'down'){
      if (Math.trunc(curIndex / size) !== size - 1 && grid[curIndex + size] !== 1){
        // moveBoxGroup.rotation.x = Math.PI * -0.5
        // // moveBoxGroup.position.z += 10
        // const quaternion = new THREE.Quaternion();
        // quaternion.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), Math.PI * 0.5 );
        // moveBoxGroup.applyQuaternion( quaternion );
        moveBoxGroup.position.z = moveBoxGroup.position.z + singleLen
        camera.position.z = camera.position.z + singleLen
        curIndex += size
        count.value += 1
      }
    }
    if (direction === 'left') {
      const isSide = ((curIndex) % size) === 0
      if (!isSide && grid[curIndex - 1] !== 1) {
        // const quaternion = new THREE.Quaternion();
        // quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI * 0.5 );
        // moveBoxGroup.applyQuaternion( quaternion );
        moveBoxGroup.position.x = moveBoxGroup.position.x - singleLen
        camera.position.x = camera.position.x - singleLen
        curIndex -= 1
        count.value += 1
      }
    }
    if (direction === 'right') {
      const isSide = ((curIndex) % size) === size - 1
      if (!isSide && grid[curIndex + 1] !== 1 ) {
        console.log('dd');
        // const quaternion = new THREE.Quaternion();
        // quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI * -0.5 );
        // moveBoxGroup.applyQuaternion( quaternion );
        // moveBoxGroup.rotateOnAxis(new THREE.Vector3( 0, 0, 1 ), Math.PI * -0.5 )
        moveBoxGroup.position.x += singleLen
        camera.position.x = camera.position.x + singleLen
        curIndex += 1
        count.value += 1
      }
    }
    if ((curIndex === size * size - 1)) {
      if (taskLen.value === count.value ) {
        alert('恭喜你通关, 我们将开启下一关')
        curIndex = 0
        count.value = 0
        createGrid()
        restartMoveBox()
        restartCamera()
      }else {
        alert('恭喜你没通关, 请重新开始')
        curIndex = 0
        count.value = 0
        restartMoveBox()
        restartCamera()
      }
    }
    renderer.render( scene, camera );
  })
  function restartCamera() {
    console.log('重新更改相机位置');
    camera.position.x = -(size * singleLen) * 0.5 + singleLen * 0.5
    camera.position.z = -(size * singleLen) * 0.5 + singleLen * 0.5
    camera.position.y = singleLen * 0.5
  }
}




// 创建相机轨迹

// function createControls() {
  // const controls = new OrbitControls( camera, renderer.domElement );
  // camera.position.set( -(size * singleLen) * 0.5 , 10, -(size * singleLen) * 0.5);
  // // controls.minDistance = 20.0;
  // // controls.maxDistance = 50.0;
  // controls.maxPolarAngle = Math.PI * 1.5;
  // controls.minPolarAngle = 0;
  // controls.update();
//   const controls = new PointerLockControls( camera, document.body );
//
// // add event listener to show/hide a UI (e.g. the game's menu)
//
//   controls.addEventListener( 'lock', function () {
//
//     menu.style.display = 'none';
//
//   } );
//
//   controls.addEventListener( 'unlock', function () {
//
//     menu.style.display = 'block';
//
//   } );
// }





// 渲染场景：才能展示出来 棋盘

function animate() {

  requestAnimationFrame( animate );
  renderer.render( scene, camera );

}
</script>
<template>
  <div class="container"></div>
  <div class="step-num" style="top: 100px">{{count}} <span class="step-num-unit">步</span></div>
  <div class="step-num">请在<span class="step-num-unit">{{taskLen}}</span>步内完成</div>
  <div id="blocker">
    <div id="instructions">
<!--      <button style="font-size:36px" id="thirdPerson">-->
<!--        第三人称视角开始-->
<!--      </button>-->
      <button style="font-size:36px" id="firstPerson">
        开始
      </button>
      <p>
        前进：W<br>
        后端：S <br>
      </p>
    </div>
  </div>

</template>
<style scoped>
.container{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/maze/bg.jpeg");
  background-size: contain;
  z-index: -10;
}
.step-num{
  position: absolute;
  right: 20%;
  top: 40px;
  color:#fb7922;
  font-weight: bold;
  font-size: 28px;
}
.step-num-unit{
  color: #17b1e7;
}
button{
  margin-bottom: 20px;
  border-radius: 10px;
}
#blocker {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  color: white;
}

#instructions {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
</style>
