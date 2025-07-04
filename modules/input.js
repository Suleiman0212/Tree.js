// Component responsible for Keybord and Mouse input
export const Input = {
  keys: new Set(),
  mouse: {
    x: 0,
    y: 0,
    buttons: new Set(),
  },

  // Initialize the Input, must do before use
  // Engine does it automatically
  init() {
    console.info(`Input.init()`);
    window.addEventListener('keydown', e => {
      this.keys.add(e.code);
    });

    window.addEventListener('keyup', e => {
      this.keys.delete(e.code);
    });

    window.addEventListener('mousemove', e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mousedown', e => {
      this.mouse.buttons.add(e.button);
    });

    window.addEventListener('mouseup', e => {
      this.mouse.buttons.delete(e.button);
    });
  },

  // Return true when `key` is pressed on keyboard
  isKeyDown(key) {
    return this.keys.has(key);
  },

  // Return true when `key` is pressed on mouse
  isMouseDown(button) {
    return this.mouse.buttons.has(button);
  }
};
