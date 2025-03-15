import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer();

function init() {
  camera.position.set(-22, 3, 0);
  camera.lookAt(0, 0, 0);

  renderer.setSize(window.innerWidth, window.innerHeight);

  const container = document.getElementById("three-container");
  container?.appendChild(renderer.domElement);
}

function main() {
  const material = new THREE.LineBasicMaterial({
    color: 0xeeeeee,
    linewidth: 1000,
  });

  generateGrid(20, material);

  scene.fog = new THREE.Fog(0xff0000, 10, 1000);

  function animate() {
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

function generateGrid(size: number, material: THREE.LineBasicMaterial) {
  for (let i = -size; i <= size; i++) {
    const points = [
      new THREE.Vector3(-size, 0, i),
      new THREE.Vector3(size, 0, i),
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
  }

  for (let i = -size; i <= size; i++) {
    const points = [
      new THREE.Vector3(i, 0, -size),
      new THREE.Vector3(i, 0, size),
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
  }
}

init();
main();
