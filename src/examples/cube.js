import './cube.css'
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { Camera, Engine, Graphics, Scene, Input } from '../index.js';
import * as THREE from 'three';

// Adding label
const info = document.createElement('div')
info.id = 'info';
document.body.appendChild(info);

// Initialize default engine features:
// Graphics, Audio, Input, UI and etc.
Engine.init();

// Camera() is a getter for
// Graphics.camera
Camera().position.set(3, 3, 3);
const contols = new OrbitControls(Graphics.camera, Graphics.renderer.domElement);

// Scene is also gette, for colletcion of Meshes
const ambientLight = new THREE.AmbientLight(0x333333, 3);
Scene().add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
directionalLight.position.set(-30, 50, 0);
Scene().add(directionalLight);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
Scene().add(cube);

// Game loop
// In most cases 60 times per second
Engine.run(() => {

  // Keyboard input
  if (Input.isKeyDown('Space')) {
    info.textContent = 'ZA WARUDO!';
  } else {
    info.textContent = 'Press space to stop!';
    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;
  }

  // Update contols, when moving camera
  // otherwise it will be not work correct
  contols.update();
});
