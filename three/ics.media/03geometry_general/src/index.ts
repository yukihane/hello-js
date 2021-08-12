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

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 500, +1000);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  const container = new THREE.Object3D();
  scene.add(container);

  const material = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
  });

  const directionalLigt = new THREE.DirectionalLight(0xffffff);
  directionalLigt.position.set(1, 1, 1);
  scene.add(directionalLigt);

  const ambientLight = new THREE.AmbientLight(0x999999);
  scene.add(ambientLight);

  const geometries = [
    new THREE.SphereGeometry(50), // 球体
    new THREE.BoxGeometry(100, 100, 100), // 直方体
    new THREE.PlaneGeometry(100, 100), // 平面
    new THREE.TetrahedronGeometry(100, 0), // 四面体
    new THREE.ConeGeometry(100, 100, 32), // 円錐
    new THREE.CylinderGeometry(50, 50, 100, 32), // 円柱
    new THREE.TorusGeometry(50, 30, 16, 100), // ドーナツ形状
  ];

  geometries.map((geometry, index) => {
    const mesh = new THREE.Mesh(geometry, material);
    container.add(mesh);

    mesh.position.x = 400 * Math.sin((index / geometries.length) * Math.PI * 2);
    mesh.position.y = 400 * Math.cos((index / geometries.length) * Math.PI * 2);
  });

  const tick = () => {
    container.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };

  tick();
};

window.addEventListener("DOMContentLoaded", init);
