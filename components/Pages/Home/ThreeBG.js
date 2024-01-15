import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const rectangle_frag = `// rectangle_frag.glsl
precision highp float;
uniform sampler2D velocity;
varying vec2 uv;

void main() {
    // Define the rectangle bounds
    float rectX = 0.3; // X position of the rectangle center
    float rectY = 0.3; // Y position of the rectangle center
    float width = 0.4; // Width of the rectangle
    float height = 0.2; // Height of the rectangle

    // Check if we're inside the rectangle
    float leftEdge = rectX - width / 2.0;
    float rightEdge = rectX + width / 2.0;
    float bottomEdge = rectY - height / 2.0;
    float topEdge = rectY + height / 2.0;
    bool insideRect = uv.x > leftEdge && uv.x < rightEdge && uv.y > bottomEdge && uv.y < topEdge;

    // gl_FragColor = texture2D(velocity, uv);
    // Example: Draw a simple rectangle
    if (gl_FragCoord.x > 100.0 && gl_FragCoord.x < 300.0 && 
        gl_FragCoord.y > 100.0 && gl_FragCoord.y < 300.0) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // White rectangle
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // Black background
    }
    if (insideRect) {
        // Inside the rectangle
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Red color
    } else {
        // Outside the rectangle
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // Transparent or black
    }
}`;

class Common {
  constructor() {
    this.width = null;
    this.height = null;
    this.aspect = this.width / this.height;
    this.isMobile = false;
    this.breakpoint = 768;

    this.fboWidth = null;
    this.fboHeight = null;

    this.resizeFunc = this.resize.bind(this);

    this.time = 0;
    this.delta = 0;
  }

  init(wrapper) {
    this.wrapper = wrapper;

    this.pixelRatio = window.devicePixelRatio;

    this.resize();

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    this.renderer.autoClear = false;

    this.renderer.setSize(this.width, this.height);

    this.renderer.setClearColor(0xfcba03, 0);

    this.renderer.setPixelRatio(this.pixelRatio);

    this.clock = new THREE.Clock();
    this.clock.start();

    setTimeout(() => {
      this.resize();
    }, 0);
  }

  destroy() {
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }

  resize() {
    this.width = this.wrapper.offsetWidth; // document.body.clientWidth;
    this.height = this.wrapper.offsetHeight;

    console.log('this.width', this.width);
    console.log('this.height', this.height);

    this.aspect = this.width / this.height;

    if (this.renderer) this.renderer.setSize(this.width, this.height);
  }

  update() {
    this.delta = this.clock.getDelta(); // Math.min(0.01, this.clock.getDelta());
    this.time += this.delta;
  }
}

var Common$1 = new Common();

var face_vert = `attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
        vec3 pos = position;
        vec2 scale = 1.0 - boundarySpace * 2.0;
        pos.xy = pos.xy * scale;
        uv = vec2(0.5)+(pos.xy)*0.5;
        gl_Position = vec4(pos, 1.0);
  }
  `;

var line_vert =
  'attribute vec3 position;\nvarying vec2 uv;\nuniform vec2 px;\n\n\nprecision highp float;\n\nvoid main(){\n    vec3 pos = position;\n    uv = 0.5 + pos.xy * 0.5;\n    vec2 n = sign(pos.xy);\n    pos.xy = abs(pos.xy) - px * 1.0;\n    pos.xy *= n;\n    gl_Position = vec4(pos, 1.0);\n}';

var advection_frag = `precision highp float;
  uniform sampler2D velocity;
  uniform float dt;
  uniform bool isBFECC;
  // uniform float uvScale;
  uniform vec2 fboSize;
  uniform vec2 px;
  varying vec2 uv;
  uniform sampler2D cloudTexture; // Add a uniform for the cloud texture
  
  void main(){
        vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
      if(isBFECC == false){
            vec2 vel = texture2D(velocity, uv).xy;
          vec2 uv2 = uv - vel * dt * ratio;
          vec2 newVel = texture2D(velocity, uv2).xy;
          gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
            vec2 spot_new = uv;
          vec2 vel_old = texture2D(velocity, uv).xy;
          // back trace
          vec2 spot_old = spot_new - vel_old * dt * ratio;
          vec2 vel_new1 = texture2D(velocity, spot_old).xy;
          // forward trace
          vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;

          vec2 error = spot_new2 - spot_new;
          vec2 spot_new3 = spot_new - error / 2.0;
          vec2 vel_2 = texture2D(velocity, spot_new3).xy;
          // back trace 2
          vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
          // gl_FragColor = vec4(spot_old2, 0.0, 0.0);
          vec2 newVel2 = texture2D(velocity, spot_old2).xy; 

          // New code to advect the cloud texture
          vec4 cloudData = texture2D(cloudTexture, uv);
          vec2 cloudVel = texture2D(velocity, uv).xy; // Assuming 'velocity' is the fluid velocity texture

          // Calculate the new UV coordinates for the cloud based on the fluid velocity
          vec2 newUV = uv - cloudVel * dt; // 'dt' should be your delta time

          // Sample the cloud texture at the new coordinates
          vec4 newCloudData = texture2D(cloudTexture, newUV);

          // Here you can blend or otherwise process the cloud data as needed
          // For simplicity, we are just passing it through
          // Render the advected cloud data
          gl_FragColor = vec4(newCloudData.rgb, 1.0);
                
          gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}`;

advection_frag = `
  // In your advection fragment shader, add a new uniform for the cloud texture
  precision highp float;
  uniform sampler2D velocity;
  uniform float dt;
  uniform bool isBFECC;
  // uniform float uvScale;
  uniform vec2 fboSize;
  uniform vec2 px;
  varying vec2 uv;
  uniform sampler2D cloudTexture; // Add a uniform for the cloud texture

void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
          vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
  } else {
          vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        // back trace
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        // forward trace
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;

        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        // back trace 2
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        // gl_FragColor = vec4(spot_old2, 0.0, 0.0);
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 

    // New code to advect the cloud texture
    vec4 cloudData = texture2D(cloudTexture, uv);
    vec2 cloudVel = texture2D(velocity, uv).xy; // Assuming 'velocity' is the fluid velocity texture

    // Calculate the new UV coordinates for the cloud based on the fluid velocity
    vec2 newUV = uv - cloudVel * dt; // 'dt' should be your delta time

    // Sample the cloud texture at the new coordinates
    vec4 newCloudData = texture2D(cloudTexture, newUV);

    // Here you can blend or otherwise process the cloud data as needed
    // For simplicity, we are just passing it through
    // Render the advected cloud data
    // gl_FragColor = vec4(newCloudData.rgb, 1.0);
    gl_FragColor = vec4(newVel2, 0.0, 0.0);
  }
}`;

class ShaderPass {
  constructor(props) {
    this.props = props;
    this.uniforms = this.props.material?.uniforms;
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.background = null;
    this.camera = new THREE.Camera();

    if (this.uniforms) {
      this.material = new THREE.RawShaderMaterial({
        ...this.props.material,
      });
      this.geometry = new THREE.PlaneGeometry(2.0, 2.0);
      this.plane = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.plane);
    }
  }

  update() {
    Common$1.renderer.setRenderTarget(this.props.output);
    Common$1.renderer.render(this.scene, this.camera);
    Common$1.renderer.setRenderTarget(null);
  }
}

class Advection extends ShaderPass {
  constructor(simProps) {
    super({
      material: {
        vertexShader: face_vert,
        fragmentShader: advection_frag,
        uniforms: {
          cloudTexture: {
            value: simProps.cloudTexture.texture,
          },
          boundarySpace: {
            value: simProps.cellScale,
          },
          px: {
            value: simProps.cellScale,
          },
          fboSize: {
            value: simProps.fboSize,
          },
          velocity: {
            value: simProps.src.texture,
          },
          dt: {
            value: simProps.dt,
          },
          isBFECC: {
            value: true,
          },
        },
      },
      output: simProps.dst,
    });

    this.init();
  }

  init() {
    super.init();
    this.createBoundary();
  }

  createBoundary() {
    const boundaryG = new THREE.BufferGeometry();
    const vertices_boundary = new Float32Array([
      // left
      -1, -1, 0, -1, 1, 0,

      // top
      -1, 1, 0, 1, 1, 0,

      // right
      1, 1, 0, 1, -1, 0,

      // bottom
      1, -1, 0, -1, -1, 0,
    ]);
    boundaryG.setAttribute(
      'position',
      new THREE.BufferAttribute(vertices_boundary, 3)
    );

    const boundaryM = new THREE.RawShaderMaterial({
      vertexShader: line_vert,
      fragmentShader: advection_frag,
      uniforms: this.uniforms,
    });

    this.line = new THREE.LineSegments(boundaryG, boundaryM);
    this.scene.add(this.line);
  }

  update({ dt, isBounce, BFECC, cloud }) {
    this.uniforms.dt.value = dt;
    this.line.visible = isBounce;
    this.uniforms.isBFECC.value = BFECC;
    this.uniforms.cloudTexture.value = cloud.texture;

    super.update();
  }
}

var divergence_frag = `precision highp float;
  uniform sampler2D velocity;
  uniform float dt;
  uniform vec2 px;
  varying vec2 uv;
  void main(){
        float x0 = texture2D(velocity, uv-vec2(px.x, 0)).x;
        float x1 = texture2D(velocity, uv+vec2(px.x, 0)).x;
        float y0 = texture2D(velocity, uv-vec2(0, px.y)).y;
        float y1 = texture2D(velocity, uv+vec2(0, px.y)).y;
        float divergence = (x1-x0 + y1-y0) / 5.0;
      gl_FragColor = vec4(divergence / dt);
}
  `;

let Divergence$2 = class Divergence extends ShaderPass {
  constructor(simProps) {
    super({
      material: {
        // transparent: true,
        vertexShader: face_vert,
        fragmentShader: divergence_frag,
        uniforms: {
          boundarySpace: {
            value: simProps.boundarySpace,
          },
          velocity: {
            value: simProps.src.texture,
          },
          px: {
            value: simProps.cellScale,
          },
          dt: {
            value: simProps.dt,
          },
        },
      },
      output: simProps.dst,
    });

    this.init();
  }

  update({ vel }) {
    this.uniforms.velocity.value = vel.texture;
    super.update();
  }
};

var mouse_vert =
  'precision highp float;\n\nattribute vec3 position;\nattribute vec2 uv;\nuniform vec2 center;\nuniform vec2 scale;\nuniform vec2 px;\nvarying vec2 vUv;\n\nvoid main(){\n    vec2 pos = position.xy * scale * 2.0 * px + center;\n    vUv = uv;\n    gl_Position = vec4(pos, 0.0, 1.0);\n}\n';

var externalForce_frag = `precision highp float;
  uniform vec2 force;
  uniform vec2 center;
  uniform vec2 scale;
  uniform vec2 px;
  varying vec2 vUv;
  varying vec2 uv;
  uniform vec2 resolution;
  
  uniform sampler2D cloudTexture; // The cloud texture
  
  void main(){
        vec2 circle = (vUv - 0.5) * 2.0;
        float d = 1.0-min(length(circle), 1.0);
        d *= d;

        gl_FragColor = vec4(force * d, 0, 1);


        vec2 uv = gl_FragCoord.xy / resolution; // Assuming resolution is passed
        // Logic to apply force to the cloud texture
        vec4 cloudData = texture2D(cloudTexture, uv);
    
        // // Apply transformation to cloudData based on the force
        // // Modify only the x and y components of the rgb vector
        // cloudData.r += force.x * d; // Apply force to red channel as an example
        // cloudData.g += force.y * d; // Apply force to green channel as an example
        // cloudData.rgb += force * d; // 'd' is the existing force factor in your shader
        // cloudData.r += force.y * d;
        // cloudData.g += force.x * d;
        cloudData.b += force.y * d;
        // Set the fragment color
        vec3 c = vec3(force*d, 1);
        vec3 c2 = mix(c, cloudData.rgb, cloudData.a);
        gl_FragColor = vec4(cloudData.rgb, 1.0);
        // gl_FragColor = vec4(force * d, 0, 1);
  }`;

externalForce_frag = `
  precision highp float;
uniform vec2 force;
uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;
uniform vec2 resolution;
uniform sampler2D cloudTexture; // The cloud texture

void main() {
    vec2 uv = gl_FragCoord.xy / resolution; // Normalize pixel coordinates
    vec4 cloudData = texture2D(cloudTexture, uv);

    // Calculate the distance from the center of the force application
    vec2 pos = (uv - center) * resolution;
    float d = max(0.0, 1.0 - length(pos) / scale.x);
    vec2 circle = (vUv - 0.5) * 2.0;
    d = 1.0-min(length(circle), 1.0);
    d *= d;
    // Apply the force to the cloud texture
    // Adjust this logic based on how you want the force to affect the cloud
    cloudData.rg += d * force;
    // cloudData.rgb += d * force;
    // cloudData.r += force.y * d;
    // cloudData.g += force.x * d;

    // Ensure the color stays within the valid range
    cloudData.rgb = clamp(cloudData.rgb, 0.0, 1.0);

    gl_FragColor = vec4(cloudData.rg, 0.0, 1.0);
    gl_FragColor = vec4(force * d, 0, 1);
}`;

class Mouse {
  constructor() {
    this.mouseMoved = false;
    this.coords = new THREE.Vector2();
    this.coords_old = new THREE.Vector2();
    this.diff = new THREE.Vector2();
    this.timer = null;
    this.count = 0;
    this.idleTimer = null;
  }

  init(nodeElement) {
    this.nodeElement = nodeElement;
    this.onDocumentMouseEnter = this.onDocumentMouseEnter.bind(this);
    this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
    this.onDocumentTouchStart = this.onDocumentTouchStart.bind(this);
    this.onDocumentTouchMove = this.onDocumentTouchMove.bind(this);

    this.nodeElement.addEventListener(
      'mousemove',
      this.onDocumentMouseMove,
      false
    );

    this.nodeElement.addEventListener(
      'mouseenter',
      this.onDocumentMouseEnter,
      false
    );
    // this.nodeElement.addEventListener(
    //   'touchstart',
    //   this.onDocumentTouchStart,
    //   false
    // );
    this.nodeElement.addEventListener(
      'touchmove',
      this.onDocumentTouchMove,
      false
    );
  }

  destroy() {
    this.nodeElement.removeEventListener('mousemove', this.onDocumentMouseMove);
    this.nodeElement.removeEventListener(
      'mouseenter',
      this.onDocumentMouseEnter
    );
    // this.nodeElement.removeEventListener(
    //   'touchstart',
    //   this.onDocumentTouchStart
    // );
    this.nodeElement.removeEventListener('touchmove', this.onDocumentTouchMove);
  }

  setCoords(x, y, forceUpdate = false) {
    if (this.timer) clearTimeout(this.timer);
    if (this.idleTimer) clearTimeout(this.idleTimer);

    const rect = this.nodeElement.getBoundingClientRect();
    const relativeX = x - rect.left;
    const relativeY = y - rect.top;

    this.coords.set(
      (relativeX / rect.width) * 2 - 1,
      -(relativeY / rect.height) * 2 + 1
    );

    if (forceUpdate) {
      this.coords_old.copy(this.coords);
    }

    this.mouseMoved = true;
    this.timer = setTimeout(() => {
      this.mouseMoved = false;
    }, 100);
  }

  onDocumentMouseMove(event) {
    this.setCoords(event.clientX, event.clientY);
  }

  onDocumentMouseEnter(event) {
    this.setCoords(event.clientX, event.clientY, true);
  }

  onDocumentTouchStart(event) {
    if (event.touches.length === 1) {
      // event.preventDefault();
      this.setCoords(event.touches[0].pageX, event.touches[0].pageY);
    }
  }
  onDocumentTouchMove(event) {
    if (event.touches.length === 1) {
      // event.preventDefault();

      this.setCoords(event.touches[0].pageX, event.touches[0].pageY);
    }
  }

  update() {
    this.diff.subVectors(this.coords, this.coords_old);
    this.coords_old.copy(this.coords);

    if (this.coords_old.x === 0 && this.coords_old.y === 0) this.diff.set(0, 0);

    // // Reset idleTimer in update if mouse has moved
    // if (!this.diff.equals(new THREE.Vector2(0, 0))) {
    //   if (this.idleTimer) clearTimeout(this.idleTimer);
    //   this.idleTimer = setTimeout(() => {
    //     console.log('set coords');
    //     const offsetX = Math.random() * 15;
    //     const offsetY = Math.random() * 15;

    //     // this.update(true);
    //     this.setCoords(this.coords.x + offsetX, this.coords.y + offsetY, true);
    //   }, 500);
    // }
  }
}

var Mouse$1 = new Mouse();

class ExternalForce extends ShaderPass {
  constructor(simProps) {
    super({
      output: simProps.dst,
    });

    this.init(simProps);
  }

  init(simProps) {
    super.init();
    const mouseG = new THREE.PlaneGeometry(1, 1);

    const mouseM = new THREE.RawShaderMaterial({
      vertexShader: mouse_vert,
      fragmentShader: externalForce_frag,
      blending: THREE.AdditiveBlending,
      uniforms: {
        resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        cloudTexture: { value: simProps.cloudTexture.texture }, // Add the cloud texture
        px: {
          value: simProps.cellScale,
        },
        force: {
          value: new THREE.Vector2(0.0, 0.0),
        },
        center: {
          value: new THREE.Vector2(0.0, 0.0),
        },
        scale: {
          value: new THREE.Vector2(simProps.cursor_size, simProps.cursor_size),
        },
      },
    });

    this.mouse = new THREE.Mesh(mouseG, mouseM);
    this.scene.add(this.mouse);
  }

  update(props) {
    const forceX = (Mouse$1.diff.x / 2) * props.mouse_force;
    const forceY = (Mouse$1.diff.y / 2) * props.mouse_force;

    const cursorSizeX = props.cursor_size * props.cellScale.x;
    const cursorSizeY = props.cursor_size * props.cellScale.y;

    const centerX = Math.min(
      Math.max(Mouse$1.coords.x, -1 + cursorSizeX + props.cellScale.x * 2),
      1 - cursorSizeX - props.cellScale.x * 2
    );
    const centerY = Math.min(
      Math.max(Mouse$1.coords.y, -1 + cursorSizeY + props.cellScale.y * 2),
      1 - cursorSizeY - props.cellScale.y * 2
    );

    const uniforms = this.mouse.material.uniforms;

    uniforms.force.value.set(forceX, forceY);
    uniforms.center.value.set(centerX, centerY);
    uniforms.scale.value.set(props.cursor_size, props.cursor_size);

    uniforms.cloudTexture.value = props.cloudTexture.texture;

    super.update();
  }
}

var poisson_frag =
  'precision highp float;\nuniform sampler2D pressure;\nuniform sampler2D divergence;\nuniform vec2 px;\nvarying vec2 uv;\n\nvoid main(){    \n    // poisson equation\n    float p0 = texture2D(pressure, uv+vec2(px.x * 2.0,  0)).r;\n    float p1 = texture2D(pressure, uv-vec2(px.x * 2.0, 0)).r;\n    float p2 = texture2D(pressure, uv+vec2(0, px.y * 2.0 )).r;\n    float p3 = texture2D(pressure, uv-vec2(0, px.y * 2.0 )).r;\n    float div = texture2D(divergence, uv).r;\n    \n    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;\n    gl_FragColor = vec4(newP);\n}\n';

let Divergence$1 = class Divergence extends ShaderPass {
  constructor(simProps) {
    super({
      material: {
        // transparent: true,
        vertexShader: face_vert,
        fragmentShader: poisson_frag,
        uniforms: {
          boundarySpace: {
            value: simProps.boundarySpace,
          },
          pressure: {
            value: simProps.dst_.texture,
          },
          divergence: {
            value: simProps.src.texture,
          },
          px: {
            value: simProps.cellScale,
          },
        },
      },
      output: simProps.dst,

      output0: simProps.dst_,
      output1: simProps.dst,
    });

    this.init();
  }

  update({ iterations }) {
    let p_in, p_out;

    for (var i = 0; i < iterations; i++) {
      if (i % 2 == 0) {
        p_in = this.props.output0;
        p_out = this.props.output1;
      } else {
        p_in = this.props.output1;
        p_out = this.props.output0;
      }

      this.uniforms.pressure.value = p_in.texture;
      this.props.output = p_out;
      super.update();
    }

    return p_out;
  }
};

var pressure_frag =
  'precision highp float;\nuniform sampler2D pressure;\nuniform sampler2D velocity;\nuniform vec2 px;\nuniform float dt;\nvarying vec2 uv;\n\nvoid main(){\n    float step = 1.0;\n\n    float p0 = texture2D(pressure, uv+vec2(px.x * step, 0)).r;\n    float p1 = texture2D(pressure, uv-vec2(px.x * step, 0)).r;\n    float p2 = texture2D(pressure, uv+vec2(0, px.y * step)).r;\n    float p3 = texture2D(pressure, uv-vec2(0, px.y * step)).r;\n\n    vec2 v = texture2D(velocity, uv).xy;\n    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;\n    v = v - gradP * dt;\n    gl_FragColor = vec4(v, 0.0, 1.0);\n}\n';

class Divergence extends ShaderPass {
  constructor(simProps) {
    super({
      material: {
        // transparent: true,
        vertexShader: face_vert,
        fragmentShader: pressure_frag,
        uniforms: {
          boundarySpace: {
            value: simProps.boundarySpace,
          },
          pressure: {
            value: simProps.src_p.texture,
          },
          velocity: {
            value: simProps.src_v.texture,
          },
          px: {
            value: simProps.cellScale,
          },
          dt: {
            value: simProps.dt,
          },
        },
      },
      output: simProps.dst,
    });

    this.init();
  }

  update({ vel, pressure }) {
    this.uniforms.velocity.value = vel.texture;
    this.uniforms.pressure.value = pressure.texture;
    super.update();
  }
}

var viscous_frag =
  'precision highp float;\nuniform sampler2D velocity;\nuniform sampler2D velocity_new;\nuniform float v;\nuniform vec2 px;\nuniform float dt;\n\nvarying vec2 uv;\n\nvoid main(){\n    // poisson equation\n    vec2 old = texture2D(velocity, uv).xy;\n    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0)).xy;\n    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0)).xy;\n    vec2 new2 = texture2D(velocity_new, uv + vec2(0, px.y * 2.0)).xy;\n    vec2 new3 = texture2D(velocity_new, uv - vec2(0, px.y * 2.0)).xy;\n\n    vec2 new = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);\n    new /= 4.0 * (1.0 + v * dt);\n    \n    gl_FragColor = vec4(new, 0.0, 0.0);\n}\n';

class Viscous extends ShaderPass {
  constructor(simProps) {
    super({
      material: {
        vertexShader: face_vert,
        fragmentShader: viscous_frag,
        uniforms: {
          boundarySpace: {
            value: simProps.boundarySpace,
          },
          velocity: {
            value: simProps.src.texture,
          },
          velocity_new: {
            value: simProps.dst_.texture,
          },
          v: {
            value: simProps.viscous,
          },
          px: {
            value: simProps.cellScale,
          },
          dt: {
            value: simProps.dt,
          },
        },
      },

      output: simProps.dst,

      output0: simProps.dst_,
      output1: simProps.dst,
    });

    this.init();
  }

  update({ viscous, iterations, dt }) {
    let fbo_in, fbo_out;
    this.uniforms.v.value = viscous;
    for (var i = 0; i < iterations; i++) {
      if (i % 2 == 0) {
        fbo_in = this.props.output0;
        fbo_out = this.props.output1;
      } else {
        fbo_in = this.props.output1;
        fbo_out = this.props.output0;
      }

      this.uniforms.velocity_new.value = fbo_in.texture;
      this.props.output = fbo_out;
      this.uniforms.dt.value = dt;

      super.update();
    }

    return fbo_out;
  }
}

class Simulation {
  constructor(props) {
    this.props = props;

    this.fbos = {
      vel_0: null,
      vel_1: null,

      // for calc next velocity with viscous
      vel_viscous0: null,
      vel_viscous1: null,

      // for calc pressure
      div: null,

      // for calc poisson equation
      pressure_0: null,
      pressure_1: null,
    };

    this.options = {
      iterations_poisson: 8,
      iterations_viscous: 8,
      mouse_force: 250,
      resolution: 0.5,
      cursor_size: 50,
      viscous: 185,
      isBounce: true,
      dt: 0.003,
      isViscous: true,
      BFECC: true,
    };

    this.fboSize = new THREE.Vector2();
    this.cellScale = new THREE.Vector2();
    this.boundarySpace = new THREE.Vector2();

    this.init();
  }

  initRectangle() {
    // Create a shader material for drawing the rectangle
    const rectangleMaterial = new THREE.RawShaderMaterial({
      vertexShader: face_vert, // Use the existing vertex shader
      fragmentShader: rectangle_frag, // The rectangle fragment shader
      uniforms: {
        velocity: {
          value: this.fbos.vel_0.texture,
        },
        // Add any necessary uniforms here
      },
    });

    // Create a mesh with a plane geometry and the rectangle material
    const rectangleMesh = new THREE.Mesh(
      new THREE.BufferGeometry(2, 2),
      rectangleMaterial
    );

    this.camera = new THREE.Camera();

    // Create a scene for rendering the rectangle
    const rectangleScene = new THREE.Scene();
    rectangleScene.add(rectangleMesh);

    this.rScene = rectangleScene;

    this.updateRect();
  }

  updateRect() {
    // Render the rectangle to the vel_0 FBO
    Common$1.renderer.setRenderTarget(this.fbos.vel_0);
    Common$1.renderer.render(this.rScene, this.camera);
    Common$1.renderer.setRenderTarget(null); // Reset to default render target
  }

  createCloud() {
    this.cloudTexture = new THREE.WebGLRenderTarget(
      this.fboSize.x,
      this.fboSize.y,
      { type: THREE.FloatType }
    );

    // Create a scene and a camera for rendering the cloud
    this.cloudScene = new THREE.Scene();
    this.cloudScene.background = null;
    this.cloudCamera = new THREE.Camera();

    // Create a plane geometry that covers the entire render target
    const cloudGeometry = new THREE.PlaneGeometry(2, 2);

    // Create a shader material for rendering the cloud
    const cloudMaterial = new THREE.RawShaderMaterial({
      vertexShader: `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
    }`,
      fragmentShader: `
  precision highp float;

    void main() {
        // Simple cloud shape, e.g., a soft circle
        vec2 uv = gl_FragCoord.xy / vec2(${this.fboSize.x}, ${this.fboSize.y});
        float distance = length(uv - vec2(0.5));
        float alpha = smoothstep(0.2, 0.3, distance);
        // Pre-multiply color by alpha
        vec3 color = vec3(1.0, 1.0, 1.0) * (1.0 - alpha);
    
        gl_FragColor = vec4(color, 1.0 - alpha);
    }`,
    });

    // Create a mesh with the geometry and material
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    this.cloudScene.add(cloudMesh);

    this.updateCloud();
  }

  updateCloud() {
    // Render the cloud shape to the cloud texture
    Common$1.renderer.setRenderTarget(this.cloudTexture);
    // Common$1.renderer.setRenderTarget(this.fbos.cloud);

    Common$1.renderer.render(this.cloudScene, this.cloudCamera);
    Common$1.renderer.setRenderTarget(null); // Reset to default render target
  }

  init() {
    this.calcSize();

    this.createAllFBO();

    this.createCloud();

    this.createShaderPass();

    this.initRectangle();
  }

  createAllFBO() {
    const type = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
      ? THREE.HalfFloatType
      : THREE.FloatType;

    for (let key in this.fbos) {
      this.fbos[key] = new THREE.WebGLRenderTarget(
        this.fboSize.x,
        this.fboSize.y,
        {
          type: type,
        }
      );
    }
  }

  createShaderPass() {
    this.advection = new Advection({
      cellScale: this.cellScale,
      fboSize: this.fboSize,
      dt: this.options.dt,
      src: this.fbos.vel_0,
      dst: this.fbos.vel_1,
      cloudTexture: this.cloudTexture,
    });
    // this.advection = stub;

    this.externalForce = new ExternalForce({
      cellScale: this.cellScale,
      cursor_size: this.options.cursor_size,
      dst: this.fbos.vel_1,
      cloudTexture: this.cloudTexture,
    });
    // this.externalForce = stub;

    this.viscous = new Viscous({
      cellScale: this.cellScale,
      boundarySpace: this.boundarySpace,
      viscous: this.options.viscous,
      src: this.fbos.vel_1,
      dst: this.fbos.vel_viscous1,
      dst_: this.fbos.vel_viscous0,
      dt: this.options.dt,
    });

    this.divergence = new Divergence$2({
      cellScale: this.cellScale,
      boundarySpace: this.boundarySpace,
      src: this.fbos.vel_viscous0,
      dst: this.fbos.div,
      dt: this.options.dt,
    });

    this.poisson = new Divergence$1({
      cellScale: this.cellScale,
      boundarySpace: this.boundarySpace,
      src: this.fbos.div,
      dst: this.fbos.pressure_1,
      dst_: this.fbos.pressure_0,
    });

    this.pressure = new Divergence({
      cellScale: this.cellScale,
      boundarySpace: this.boundarySpace,
      src_p: this.fbos.pressure_0,
      src_v: this.fbos.vel_viscous0,
      dst: this.fbos.vel_0,
      dt: this.options.dt,
    });
  }

  calcSize() {
    const width = Math.round(this.options.resolution * Common$1.width);
    const height = Math.round(this.options.resolution * Common$1.height);

    const px_x = 1.0 / width;
    const px_y = 1.0 / height;

    this.cellScale.set(px_x, px_y);
    this.fboSize.set(width, height);
  }

  resize() {
    this.calcSize();

    for (let key in this.fbos) {
      this.fbos[key].setSize(this.fboSize.x, this.fboSize.y);
    }
  }

  update() {
    // return;
    if (this.options.isBounce) {
      this.boundarySpace.set(0, 0);
    } else {
      this.boundarySpace.copy(this.cellScale);
    }

    this.updateCloud();

    this.advection.update({
      ...this.options,
      cloud: this.cloudTexture,
    });

    this.externalForce.update({
      cursor_size: this.options.cursor_size,
      mouse_force: this.options.mouse_force,
      cellScale: this.cellScale,
      cloudTexture: this.cloudTexture,
    });

    let vel = this.fbos.vel_1;

    if (this.options.isViscous) {
      vel = this.viscous.update({
        viscous: this.options.viscous,
        iterations: this.options.iterations_viscous,
        dt: this.options.dt,
      });
    }

    this.divergence.update({ vel });

    const pressure = this.poisson.update({
      iterations: this.options.iterations_poisson,
    });

    this.pressure.update({ vel, pressure });

    this.updateRect();

    // this.cloudRestoration.update({ cloudTexture: this.cloudTexture });
  }
}

// var color_frag = `
// precision highp float;
// uniform sampler2D velocity;
// uniform sampler2D velocity2;
// varying vec2 uv;

// #define PI 3.14159265359

// void main() {
//     vec2 vel = texture2D(velocity, uv).xy;
//     float len = length(vel);
//     vel = vel * 0.5 + 0.5;

//     // Enhanced color mapping
//     float intensity = smoothstep(0.0, 1.0, len); // Smooth transition based on velocity length
//     vec3 baseColor = vec3(1.0, 1.0, 1.0); // Base color (white)
//     vec3 fluidColor = vec3(0.8901960784313725, 0.19607843137254902, 0.18823529411764706); // Fluid color (reddish)
//     // vec3 fluidColor = vec3(1.0, 1.0, 1.0); // Fluid color (reddish)

//     vec3 color = mix(baseColor, fluidColor, intensity); // Blending base and fluid colors

//     // Adding a glow-like effect based on the velocity length
//     float glow = pow(intensity, 5.); // Increase glow at higher speeds
//     color += vec3(glow) * 0.1; // Adding a bit of glow

//     gl_FragColor = vec4(color, 1.0);
// }
//   `;

var color_frag = `
precision highp float;
uniform sampler2D velocity;
uniform sampler2D velocity2;
varying vec2 uv;
uniform sampler2D cloudTexture; // Add the cloud texture uniform

#define PI 3.14159265359

void main() {
    vec4 fluidData = texture2D(velocity, uv);
    vec2 vel = fluidData.xy;
    float len = length(vel);
    vel = vel * 0.5 + 0.5;

    // Enhanced color mapping
    float intensity = smoothstep(0.0, 1.0, len); // Smooth transition based on velocity length
    vec3 baseColor = vec3(1.0, 1.0, 1.0); // Base color (white)
    // vec3 fluidColor = vec3(0.8901960784313725, 0.19607843137254902, 0.18823529411764706); // Fluid color (reddish)
    vec3 fluidColor = vec3(1.0, 1.0, 1.0); // Fluid color (reddish)

    vec3 color = mix(baseColor, fluidColor, intensity); // Blending base and fluid colors

    // Adding a glow-like effect based on the velocity length
    // float glow = pow(intensity, 5.); // Increase glow at higher speeds
    // color += vec3(glow) * 0.1; // Adding a bit of glow

    gl_FragColor = fluidData;
    gl_FragColor = vec4(color, 1.0);
}
`;

color_frag = `precision highp float;
uniform sampler2D velocity;
varying vec2 uv;

void main() {
    vec4 fluidData = texture2D(velocity, uv);
    vec2 vel = fluidData.xy;
    float len = length(vel);

    // Enhanced color mapping
    float intensity = smoothstep(0.0, 1.0, len); // Smooth transition based on velocity length
    vec3 fluidColor = vec3(1.0, 1.0, 1.0); // Fluid color (light grey)

    // Set alpha based on intensity
    float alpha = intensity; // Alpha is high where the fluid is and low (transparent) where it isn't

    // Optionally, you can adjust the threshold for visibility
    // if (alpha < 0.5) {
    //     alpha = 0.0; // Making areas with low intensity fully transparent
    // }

    gl_FragColor = vec4(fluidColor, intensity);
}`;
// uniform sampler2D velocity; // precision highp float; // color_frag = `
// uniform sampler2D cloudTexture; // Cloud texture uniform
// varying vec2 uv;

// #define PI 3.14159265359

// void main() {
//     vec4 fluidData = texture2D(velocity, uv);
//     vec2 vel = fluidData.xy;
//     float len = length(vel);

//     // Calculate the intensity for the wave effect
//     float waveIntensity = smoothstep(0.0, 1.0, len);

//     // Set the wave color to white
//     vec3 waveColor = vec3(1.0, 1.0, 1.0); // White color for waves

//     // Sample the cloud texture
//     vec4 cloudData = texture2D(cloudTexture, uv);

//     // Set the cloud color to red
//     vec3 cloudColor = vec3(0.8901960784313725, 0.19607843137254902, 0.18823529411764706); // Reddish color for cloud

//     // Apply the cloud color
//     cloudData.rgb = cloudColor * cloudData.a;

//     // Blend the waves over the cloud
//     vec3 combinedColor = mix(cloudData.rgb, waveColor, waveIntensity);

//     gl_FragColor = vec4(combinedColor, 1.0);

//     // Set the background color to white
//     // vec3 backgroundColor = vec3(1.0, 1.0, 1.0); // White background

//     // Blend the combined color over the background
//     // gl_FragColor = vec4(mix(backgroundColor, combinedColor, cloudData.a), 1.0);
//     // gl_FragColor = fluidData;
// }
// `;
// color_frag = `
// precision highp float;
// uniform sampler2D velocity;
// uniform sampler2D cloudTexture; // Cloud texture uniform
// varying vec2 uv;

// #define PI 3.14159265359

// void main() {
//     vec4 fluidData = texture2D(velocity, uv);
//     vec4 cloudData = texture2D(cloudTexture, uv);

//     // Define the cloud color (e.g., white)
//     vec3 cloudColor = vec3(1.0, 1.0, 1.0); // White cloud

//     // Apply the cloud color
//     cloudData.rgb = cloudColor * cloudData.rgb;

//     // Blend the cloud with the fluid
//     // This could be a simple alpha blending or more complex logic depending on your needs
//     vec4 finalColor = mix(fluidData, cloudData, cloudData.a);

//     gl_FragColor = finalColor;
//     // gl_FragColor = texture2D(cloudTexture, uv);
// }

`;
// var color_frag = `;
// precision highp float;

// uniform vec2 u_resolution; // Canvas size
// uniform float time; // Time variable for any animation
// uniform sampler2D velocity;
// varying vec2 uv;

// void main() {
//     vec2 uv2 = gl_FragCoord.xy / u_resolution.xy; // Normalize pixel coordinates
//     uv2 = uv2 * 2.0 - 1.0; // Convert to range -1 to 1

//     // Parameters for the oval
//     vec2 center = vec2(0.0, 0.0); // Center of the oval
//     vec2 radius = vec2(0.5, 0.3); // x and y radius of the oval

//     // Calculate distance from the oval's edge
//     vec2 distFromCenter = abs(uv2 - center);
//     float oval = length(max(distFromCenter - radius, 0.0));

//     // Smooth edges
//     float edgeSmoothness = 1.9; // Adjust for smoother edges
//     float alpha = 1.0 - smoothstep(0.0, edgeSmoothness, oval);

//     // Set the color
//     vec3 color = vec3(0.8901960784313725, 0.19607843137254902, 0.18823529411764706); // Example color
//     vec3 backgroundColor = vec3(1.0, 1.0, 1.0); // White background
//     color = mix(backgroundColor, color, alpha);

//     vec2 vel = texture2D(velocity, uv).xy;
//     float len = length(vel);
//     vel = vel * 0.5 + 0.5;

//     // Enhanced color mapping
//     float intensity = smoothstep(0.0, 1.0, len); // Smooth transition based on velocity length
//     vec3 baseColor = vec3(1.0, 1.0, 1.0); // Base color (white)
//     vec3 fluidColor = vec3(0.8901960784313725, 0.19607843137254902, 0.18823529411764706); // Fluid color (reddish)
//     vec3 color2 = mix(fluidColor, baseColor, intensity); // Blending base and fluid colors

//     // Adding a glow-like effect based on the velocity length
//     float glow = pow(intensity, 5.); // Increase glow at higher speeds
//     color2 += vec3(glow) * 0.1; // Adding a bit of glow

//     color = mix(color, color2, intensity);

//     gl_FragColor = vec4(color, 1.0);
// }

// `;

class Output {
  constructor() {
    this.init();
  }

  init() {
    this.simulation = new Simulation();

    this.scene = new THREE.Scene();
    this.scene.background = null;
    this.camera = new THREE.Camera();

    this.material = new THREE.RawShaderMaterial({
      transparent: true,
      // depthTest: true,
      // depthWrite: false,
      // blending: THREE.CustomBlending,
      vertexShader: face_vert,
      fragmentShader: color_frag,
      uniforms: {
        cloudTexture: {
          value: this.simulation.cloudTexture.texture,
        },
        velocity: {
          value: this.simulation.fbos.vel_0.texture,
        },
        time: {
          value: 0.0,
        },
        u_resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },

        boundarySpace: {
          value: new THREE.Vector2(),
        },
      },
    });

    this.output = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);

    this.scene.add(this.output);
  }
  addScene(mesh) {
    this.scene.add(mesh);
  }

  resize() {
    this.simulation.resize();
  }

  render() {
    Common$1.renderer.setRenderTarget(null);
    Common$1.renderer.render(this.scene, this.camera);
  }

  update() {
    this.material.uniforms.time += 1;
    this.material.uniforms.cloudTexture.value =
      this.simulation.cloudTexture.texture;
    this.simulation.update();
    this.render();
  }
}

class CloudRestoration extends ShaderPass {
  constructor(simProps, initialCloudTexture) {
    super({
      material: {
        vertexShader: face_vert, // Use your basic vertex shader
        fragmentShader: `
              precision highp float;

              uniform sampler2D currentCloudState;
              uniform sampler2D initialCloudState;
              uniform float restorationRate;
              uniform float time;
              varying vec2 uv;

              void main() {
                  vec4 currentCloud = texture2D(currentCloudState, uv);
                  vec4 initialCloud = texture2D(initialCloudState, uv);
                  vec4 restoredCloud = mix(currentCloud, initialCloud, restorationRate * time);
                  gl_FragColor = restoredCloud;
              }`,
        uniforms: {
          currentCloudState: { value: null },
          initialCloudState: { value: initialCloudTexture.texture },
          restorationRate: { value: 200.0 }, // Adjust as needed
          time: { value: 0 },
        },
      },
      output: simProps.cloudRenderTarget, // Assuming a render target for the cloud
    });

    this.init();
    this.initialCloudTexture = initialCloudTexture;
    this.time = 0;
  }

  update(props) {
    this.time += 0.1;
    this.uniforms.time.value = this.time;
    this.uniforms.currentCloudState.value = props.cloudTexture.texture;

    super.update();
  }
}

// import * as THREE from "three";

class Webgl {
  constructor(props) {
    this.props = props;

    Common$1.init(props.$wrapper);
    Mouse$1.init(props.$wrapper);

    this.resize = this.resize.bind(this);
    this.loop = this.loop.bind(this);

    this.init();
    this.loop();

    window.addEventListener('resize', this.resize);
  }

  init() {
    this.props.$wrapper.prepend(Common$1.renderer.domElement);
    this.output = new Output();
  }

  resize() {
    Common$1.resize();
    this.output.resize();
  }

  render() {
    Mouse$1.update();
    Common$1.update();
    this.output.update();
  }

  loop() {
    this.render();

    this.id = requestAnimationFrame(this.loop);
  }

  destroy() {
    window.removeEventListener('resize', this.resize);
    cancelAnimationFrame(this.id);
    Mouse$1.destroy();
    Common$1.destroy();
  }
}

function createBG(wrapper) {
  return new Webgl({
    $wrapper: wrapper,
  });
}

export default function ThreeBG() {
  const ref = useRef();

  useEffect(() => {
    const instance = createBG(ref.current);

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div
      style={{
        border: '1px solid red',
      }}
    >
      <img
        className="absolute z-[1] h-screen w-full"
        src="/bg-backdrop.png"
        alt=""
      />
      <div ref={ref} className="absolute z-[1] h-screen w-full"></div>
    </div>
  );
}
