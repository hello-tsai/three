import * as THREE from 'three';

function createGridHelper(scene, size, divisions) {
  const gridHelper = new THREE.GridHelper( size, divisions, 0xffffff, 0xffffff);
  scene.add( gridHelper );
}

export default createGridHelper
