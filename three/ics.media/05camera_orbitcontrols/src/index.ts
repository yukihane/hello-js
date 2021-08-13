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

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // マテリアルを作成
  const material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load("imgs/earthmap1k.jpg"),
    side: THREE.DoubleSide,
  });

  // 球体の形状を作成します
  const geometry = new THREE.SphereGeometry(300, 30, 30);
  // 形状とマテリアルからメッシュを作成します
  const earthMesh = new THREE.Mesh(geometry, material);
  // シーンにメッシュを追加します
  scene.add(earthMesh);

  const createStarField = () => {
    const vertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = 3000 * (Math.random() - 0.5);
      const y = 3000 * (Math.random() - 0.5);
      const z = 3000 * (Math.random() - 0.5);

      vertices.push(x, y, z);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 10,
      color: 0xffffff,
    });

    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh);
  };

  createStarField();

  const tick = (rot: number) => () => {
    rot += 0.5;
    console.log(rot);
    const radian = (rot * Math.PI) / 180;
    camera.position.x = 1000 * Math.sin(radian);
    camera.position.z = 1000 * Math.cos(radian);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer.render(scene, camera);

    requestAnimationFrame(tick(rot));
  };

  tick(0)();
};

window.addEventListener("DOMContentLoaded", init);
