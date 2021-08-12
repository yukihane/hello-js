import * as THREE from "three";

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

  const geometry = new THREE.BoxGeometry(400, 400, 400);
  const material = new THREE.MeshNormalMaterial();
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  const tick = () => {
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };

  tick();
};

window.addEventListener("DOMContentLoaded", init);
