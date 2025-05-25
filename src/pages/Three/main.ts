import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass, UnrealBloomPass } from "three/examples/jsm/Addons.js";

init();
function init() {
  const scene = new THREE.Scene();
  const backgroundColour = new THREE.Color("#141415");
  scene.background = backgroundColour;
  const near = 1;
  const far = 30;
  scene.fog = new THREE.Fog(backgroundColour, near, far);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.set(-22, 2, 0);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const gridHelper = new THREE.GridHelper(100, 100, 0xffffff, 0xffffff);
  scene.add(gridHelper);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.8,
    0.8,
    0.1,
  );

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(bloomPass);

  renderer.setAnimationLoop(animate(composer));

  const container = document.getElementById("three-container");
  container?.appendChild(renderer.domElement);
}

function animate(composer: EffectComposer) {
  return () => {
    composer.render();
  };
}
