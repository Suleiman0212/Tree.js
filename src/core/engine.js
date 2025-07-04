import { Graphics, Input } from '../index.js';

// Features for easiest Engine components contol
export const Feature = Object.freeze({
  Graphics: 'graphics',
  Audio: 'audio',
  Input: 'input',
  Physics: 'physics',
  Ui: 'ui',
});

// One of the most important objects
// Used for initialization components and runnign them
export const Engine = {
  // Default features, all possible
  enabledFeatures: [Feature.Graphics, Feature.Audio, Feature.Input, Feature.Physics, Feature.Ui],

  // Helper for better feature contol
  hasFeature(feature) {
    return this.enabledFeatures.includes(feature);
  },

  // Initializating enabled Engine features
  init() {
    console.info(`Engine.init()`);
    console.debug(`Engine.features: ${this.enabledFeatures}`);
    console.debug(`Engine.debugLevels: ${this.enabledDebugLevels}`)

    if (this.hasFeature(Feature.Graphics)) {
      Graphics.init();
    }

    if (this.hasFeature(Feature.Input)) {
      Input.init();
    }
  },

  // Game loop, ticks 1/60s(in most cases)
  // Setup a rendering process
  run(code) {
    if (this.hasFeature(Feature.Graphics)) {
      Graphics.animationLoop = this.process(code);
      Graphics.renderer.setAnimationLoop(Graphics.animationLoop);
    }

    console.info(`Engine.run()`);
  },

  // Used by Engine
  // Better don't use manualy
  process(code) {
    return () => {
      code();
      Graphics.render();
    };
  },
}
