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
  camera.position.set(0, 0, +1000);

  const geometry = new THREE.SphereGeometry(300, 30, 30);
  // 画像を読み込む
  const loader = new THREE.TextureLoader();
  const texture = loader.load("imgs/earthmap1k.jpg");
  // マテリアルにテクスチャーを設定
  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });
  // const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  const tick = () => {
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };

  tick();
};

window.addEventListener("DOMContentLoaded", init);
