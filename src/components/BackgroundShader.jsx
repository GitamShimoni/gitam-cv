import { useEffect, useRef } from 'react';

// Fullscreen fragment-shader background: a slow, domain-warped FBM field in
// the site's navy palette with a whisper of green. Scroll position feeds a
// uniform so the field drifts (parallax) as the page moves; the accent layer
// scrolls at a different rate than the base field for depth.
// Renders at half resolution (the field is soft, upscaling is invisible),
// pauses when the tab is hidden, and draws a single static frame under
// prefers-reduced-motion. If WebGL is unavailable the CSS gradient blobs in
// .bg-field remain as the fallback.

const VERT = 'attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0.0,1.0);}';

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_scroll;

float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p);
  vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),u.x),
             mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),u.x),u.y);
}
float fbm(vec2 p){
  float v=0.0,a=0.5;
  for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.0+vec2(3.1,1.7);a*=0.5;}
  return v;
}

void main(){
  vec2 uv=gl_FragCoord.xy/u_res;
  vec2 p=uv*vec2(u_res.x/u_res.y,1.0)*1.6;
  float t=u_time*0.03;
  float s=u_scroll;

  vec2 q=vec2(fbm(p+vec2(0.0,t)),fbm(p+vec2(5.2,t*1.3)-s*0.25));
  float f=fbm(p+q*1.2+vec2(t*0.6,-s*0.6));

  vec3 base=vec3(0.039,0.098,0.184);
  vec3 lift=vec3(0.098,0.160,0.272);
  vec3 green=vec3(0.392,1.0,0.855);

  vec3 col=mix(base,lift,smoothstep(0.30,0.85,f));
  float g=smoothstep(0.60,0.95,fbm(p*0.7+vec2(t*0.4,-s*0.35)+4.7));
  col+=green*g*0.036;

  float vig=smoothstep(1.25,0.35,length(uv-0.5));
  col*=mix(0.88,1.0,vig);

  gl_FragColor=vec4(col,1.0);
}
`;

export default function BackgroundShader() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas.getContext('webgl', {
      antialias: false,
      alpha: false,
      powerPreference: 'low-power',
    });
    if (!gl) return undefined;

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return undefined;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return undefined;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uScroll = gl.getUniformLocation(prog, 'u_scroll');

    const resize = () => {
      const scale = 0.5 * Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(window.innerWidth * scale));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (t) => {
      gl.uniform1f(uTime, t * 0.001);
      gl.uniform1f(uScroll, (window.scrollY || 0) * 0.0012);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    let rafId;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(0);
    } else {
      const loop = (t) => {
        if (!document.hidden) draw(t);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return <canvas ref={ref} className="bg-shader" aria-hidden="true" />;
}
