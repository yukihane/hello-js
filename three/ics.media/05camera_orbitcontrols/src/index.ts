import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const init = () => {
  const width = 960;
  const height = 540;

  const myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
  const renderer = new THREE.WebGL1Renderer({
    canvas: myCanvas,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, +1000);

  const controls = new OrbitControls(camera, myCanvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;

  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(300, 300, 300),
    new THREE.MeshNormalMaterial()
  );
  scene.add(mesh);

  const tick = () => {
    controls.update;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };

  tick();
};

window.addEventListener("DOMContentLoaded", init);
