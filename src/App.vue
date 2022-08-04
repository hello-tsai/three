<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,0,0);
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer({antialias: true}); //antialias抗锯齿
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// // 平面网格
const size = 50;
const divisions = 10;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

const  createWallX = () => {
  const wallGeometry = new THREE.BoxGeometry(50, 2 , 1)
  const wallMaterial = new THREE.MeshBasicMaterial({
    color: 0x999999,
  })
  const wall = new THREE.Mesh(wallGeometry, wallMaterial)
  wall.position.z = -25
  wall.position.y = 1
  scene.add(wall)
}
createWallX()

const  createWallZ = () => {
  const wallGeometry = new THREE.BoxGeometry(2, 2 , 50)
  const wallMaterial = new THREE.MeshBasicMaterial({
    color: 0x999999,
  })
  const wall1 = new THREE.Mesh(wallGeometry, wallMaterial)
  wall1.position.x = -25
  wall1.position.y = 1
  const wall2 = new THREE.Mesh(wallGeometry, wallMaterial)
  wall2.position.x = 25
  wall2.position.y = 1
  scene.add(wall1)
  scene.add(wall2)
}
createWallZ()
// 添加精灵
let manager = new THREE.LoadingManager();
let particleGroup
let particleAttributes
function glowingParticles() {
  var particleTextureLoader = new THREE.TextureLoader(manager);
  var particleTexture = particleTextureLoader.load('images/spark.png');

  particleGroup = new THREE.Object3D();
  particleGroup.position.x = 0;
  particleGroup.position.y = 0;
  particleGroup.position.z = 25;
  particleAttributes = { startSize: [], startPosition: [], randomness: [] };

  var totalParticles = 5000;
  var radiusRange = 50;
  for (var i = 0; i < totalParticles; i++) {
    var spriteMaterial = new THREE.SpriteMaterial({
      map: particleTexture,
      color: 0xffffff,
    });

    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.5, 0.5, 1.0); // imageWidth, imageHeight
    sprite.position.set(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
    );

    sprite.position.setLength(radiusRange * (Math.random() * 0.1 + 0.9));

    sprite.material.color.setHSL(Math.random(), 0.9, 0.7);

    sprite.material.blending = THREE.AdditiveBlending; // "glowing" particles
    sprite.renderOrder = 1;
    particleGroup.add(sprite);
    // add variable qualities to arrays, if they need to be accessed later
    particleAttributes.startPosition.push(sprite.position.clone());
    particleAttributes.randomness.push(Math.random());
  }
  scene.add(particleGroup);
}
glowingParticles()
// 添加立方体
const loader = new THREE.CubeTextureLoader();
loader.setPath( 'images/' );
const textureCube = loader.load( [
  'Dice-Blue-1.png', 'Dice-Blue-2.png',
  'Dice-Blue-3.png', 'Dice-Blue-4.png',
  'Dice-Blue-5.png', 'Dice-Blue-6.png'
] );


// 第二个
const geometry2 = new THREE.BoxGeometry( 5, 5, 5 );

let materials = []
for (let i = 0 ; i< 6 ;i += 1) {
  const texture = new THREE.TextureLoader().load( 'images/Dice-Blue-'+ (i + 1) +'.png' );

  const material2 = new THREE.MeshBasicMaterial( { map: texture } );

  materials.push(material2)
}


const mesh = new THREE.Mesh( geometry2, materials);
// mesh.position.y = 2.5
scene.add( mesh );



// 添加辅助线
const axesHelper = new THREE.AxesHelper( 100 );
scene.add( axesHelper );

// scene.add( cube );
// scene.add( floor )


// 调试器
const stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.right = '0px';
console.log(stats.domElement.style);
document.body.appendChild( stats.domElement );


// const gui = new GUI();
// gui.add( floorPosition, 'x', 1, 18);
// gui.add( floorPosition, 'y', 1, 20 );

// 鼠标
let controls = new OrbitControls(camera,renderer.domElement);
camera.position.set( 0, 20, 100 );
controls.maxPolarAngle = Math.PI * 0.495;
controls.target.set( 0, 10, 0 );
controls.minDistance = 20.0;
controls.maxDistance = 50.0;
controls.update();

let height = 30
let lastX
let lastY
function animate() {
  requestAnimationFrame( animate );
  controls.update();
  stats.update();
  renderer.render( scene, camera );
}
animate();

// 摇骰子 有大问题需更改
let isRoll = false
const rollDice = () => {
  console.log(isRoll);
  isRoll = true
  if (isRoll) {
    requestAnimationFrame(rollDice)
    const time = performance.now() * 0.001;
    const sin = Math.abs(Math.sin( time ))* height
    mesh.position.y =  sin;
    mesh.rotation.x = time * 0.5;
    mesh.rotation.z = time * 0.51;
    if (sin.toFixed(1) < 0.2 && height > 0) {
      height -= 5
      lastX = time * 0.5
      lastY = time * 0.51
    }
    if (height <= 0) {
      mesh.rotation.x = lastX;
      mesh.rotation.z = 0;
      isRoll = false
      cancelAnimationFrame(rollDice)
    }
    renderer.render( scene, camera );
  }else {}
}

</script>

<template>
  <button @click="rollDice" :disabled="isRoll">摇骰子</button>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  padding: 0;
}
button {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 36px;
}
</style>
