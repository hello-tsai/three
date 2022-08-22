import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createControls(camera, renderer) {
  const controls = new OrbitControls( camera, renderer.domElement );
  camera.position.set( 0, 20, 100 );
  // controls.minDistance = 20.0;
  // controls.maxDistance = 50.0;
  // controls.maxPolarAngle = Math.PI * 0.495;
  // controls.minPolarAngle = 0;
  controls.update();
}

export default createControls
