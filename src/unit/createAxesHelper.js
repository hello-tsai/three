import * as THREE from 'three';

function createAxesHelper(scene, size) {
  const axesHelper = new THREE.AxesHelper( size );
  scene.add( axesHelper );
}

export default createAxesHelper
