import * as THREE from "three";
import {
  Line2,
  LineGeometry,
  LineMaterial,
} from "three/examples/jsm/Addons.js";

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

  scene.background = new THREE.Color("#141415");
}

function main() {
  generateGrid(20);
  renderer.setAnimationLoop(animate);
}

function animate() {
  renderer.render(scene, camera);
}

function generateGrid(size: number) {
  const material = new LineMaterial({
    color: 0xeeeeee,
    linewidth: 1.5,
  });

  for (let i = -size; i <= size; i++) {
    const xpoints = new Float32Array([i, 0, -size, i, 0, size]);
    const xgeometry = new LineGeometry();
    xgeometry.setPositions(xpoints);
    const xline = new Line2(xgeometry, material);
    scene.add(xline);

    const zpoints = new Float32Array([-size, 0, i, size, 0, i]);
    const zgeometry = new LineGeometry();
    zgeometry.setPositions(zpoints);
    const zline = new Line2(zgeometry, material);
    scene.add(zline);
  }
}

init();
main();
