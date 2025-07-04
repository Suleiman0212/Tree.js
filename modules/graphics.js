import * as THREE from "three";

// Getters for easiest use
export const Renderer = () => Graphics.renderer;
export const Scene = () => Graphics.scene;
export const Camera = () => Graphics.camera;

// Component responsible for all what related to screen
export const Graphics = {
  // Importatnt `three.js` components
  // Renderer user for ... rendering
  // Scene is a collection of all objects on "screen"
  // Camera is a ... camera
  renderer: null,
  scene: null,
  camera: null,
  // Callback used for rendering
  animationLoop: null,

  // Initialize the Graphics, must do before use
  // Engine does it automatically
  init() {
    console.info(`Graphics.init()`);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    document.body.appendChild(this.renderer.domElement);
  },

  // Render all thigs on canvas
  // Automatically called every 1/60s(in most cases)
  // by Engine whily running
  render() {
    this.renderer.render(this.scene, this.camera);
  },
};
