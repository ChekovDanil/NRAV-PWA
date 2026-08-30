(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62774,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(5803),a=e.i(67884);function n({active:e,children:o,chromeVisible:s=!0,navMaterial:l="regular",onCreate:u,overlay:c}){let h=(0,i.useRef)(null);return!function(e,t=!0){(0,i.useEffect)(()=>{let i=null,r=r=>{let n=e.current,o=r.touches.item(0),s=r.target,l=n?.closest(".phone")??n?.parentElement;if(1!==r.touches.length||!n||!l||!o||!(s instanceof Node)||!l.contains(s)){i=null;return}let u=l.getBoundingClientRect(),c=o.clientX-u.left<=a.SWIPE_BACK_EDGE_WIDTH,h=u.right-o.clientX<=a.SWIPE_BACK_EDGE_WIDTH,d=t&&n.contains(s)&&c?"back":h?"forward":null;if(!d){i=null;return}i={identifier:o.identifier,startX:o.clientX,startY:o.clientY,edge:d,axis:"pending"}},n=e=>{if(!i)return;let t=((e,t)=>{for(let i=0;i<e.length;i+=1){let r=e.item(i);if(r?.identifier===t)return r}return null})(e.touches,i.identifier);if(!t){i=null;return}let r=t.clientX-i.startX,a=t.clientY-i.startY;if("pending"===i.axis&&Math.max(Math.abs(r),Math.abs(a))>=8&&(i.axis=Math.abs(r)>=1.15*Math.abs(a)?"horizontal":"vertical"),"vertical"===i.axis){i=null;return}let n="back"===i.edge?r>0:r<0;"horizontal"===i.axis&&n&&e.preventDefault()},o=()=>{i=null};return document.addEventListener("touchstart",r,{capture:!0,passive:!0}),document.addEventListener("touchmove",n,{capture:!0,passive:!1}),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),()=>{document.removeEventListener("touchstart",r,!0),document.removeEventListener("touchmove",n,!0),document.removeEventListener("touchend",o,!0),document.removeEventListener("touchcancel",o,!0)}},[t,e])}(h,s),(0,r.useMainTabChrome)({active:e,chromeVisible:s,navMaterial:l,onCreate:u}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{ref:h,className:"view","data-main-tab-root":!0,children:o}),c]})}e.s(["MainTabFrame",0,n,"default",0,n],62774)},73708,e=>{"use strict";let t=(0,e.i(75254).default)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);e.s(["Image",0,t],73708)},88699,e=>{"use strict";let t=(0,e.i(75254).default)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);e.s(["Pencil",0,t],88699)},60030,e=>{"use strict";e.i(11295),e.i(15078),e.i(92230),e.i(96135),e.i(39538),e.i(56680),e.i(67254),e.i(61047),e.i(92554),e.i(68741),e.i(31423),e.i(61683),e.i(60561),e.i(62485),e.i(8715),e.i(10643),e.i(54916),e.i(96572),e.i(40691),e.i(278),e.s([])},90597,e=>{"use strict";let t=(0,e.i(75254).default)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);e.s(["Heart",0,t],90597)},955,e=>{"use strict";let t=[{id:"personNoSubscription",displayName:"Айгерим",nickname:"aigerim.city",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-aigerim.jpg",status:"Ищу компанию на кофе",statusIcon:"☕",followers:"486"},{id:"personLight",displayName:"Минджун",nickname:"minjun.walks",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-minjun.jpg",status:"Вышел пройтись у набережной",statusIcon:"🚶",followers:"842"},{id:"personOrganizer",displayName:"Амара",nickname:"amara.gallery",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-amara.jpg",status:"Собираю встречу в галерее",statusIcon:"🎨",followers:"1 268"},{id:"personOrganizerPro",displayName:"Лука",nickname:"luca.events",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-luca.jpg",status:"Веду rooftop-встречу",statusIcon:"🎧",followers:"2 415"},{id:"personPremium",displayName:"София",nickname:"sofia.night",avatarSrc:"/NRAV-PWA/assets/figma-v2/notif-avatar1.jpg",status:"Сегодня в центре",statusIcon:"✨",followers:"1 974"},{id:"personStoryOnly",displayName:"Лейла",nickname:"leila.city",avatarSrc:"/NRAV-PWA/assets/figma-v2/notif-avatar2.jpg",status:null,followers:"639"}];e.s(["PROFILE_SHARE_CHAT_TARGETS",0,[{id:"chat-aidana",name:"Айдана",subtitle:"Недавний диалог",avatarSrc:"/NRAV-PWA/assets/figma-v2/notif-avatar2.jpg",searchTerms:["личный чат","часто общаетесь"]},{id:"chat-alina",name:"Алина",subtitle:"Часто общаетесь",avatarSrc:"/NRAV-PWA/assets/figma-v2/notif-avatar1.jpg",searchTerms:["личный чат","подписка"]},{id:"chat-hike",name:"Поход в горы",subtitle:"Недавняя группа",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-minjun.jpg",searchTerms:["группа","чат"]},{id:"chat-irina",name:"Ирина",subtitle:"Часто общаетесь",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-aigerim.jpg",searchTerms:["личный чат","подписка"]},{id:"chat-nrav-team",name:"Команда НРАВ",subtitle:"Канал",avatarSrc:"/NRAV-PWA/assets/figma-v2/note-avatar.png",searchTerms:["канал","чат"]},{id:"chat-luca",name:"Лука",subtitle:"Взаимная подписка",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-luca.jpg",searchTerms:["профиль","подписки"]}],"getProfileSafetyDirectory",0,function(e){let i=new Map(t.map(e=>[e.id,e]));return Object.values(e.profiles).forEach(e=>i.set(e.id,e)),[...i.values()]}])},22915,e=>{"use strict";let t=(0,e.i(75254).default)("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);e.s(["Archive",0,t],22915)},37881,573,31967,21449,93344,35677,e=>{"use strict";var t=e.i(71645);let i=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,r=8294400;class a{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=(function(){let e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")})();uniformCache={};textureUnitMap=new Map;ownerDocument;constructor(e,t,i,a,n=0,s=0,l=2,u=r,c=[]){if(e?.nodeType===1)this.parentElement=e;else throw Error("Paper Shaders: parent element must be an HTMLElement");if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector("style[data-paper-shader]")){const e=this.ownerDocument.createElement("style");e.innerHTML=o,e.setAttribute("data-paper-shader",""),this.ownerDocument.head.prepend(e)}const h=this.ownerDocument.createElement("canvas");this.canvasElement=h,this.parentElement.prepend(h),this.fragmentShader=t,this.providedUniforms=i,this.mipmaps=c,this.currentFrame=s,this.minPixelRatio=l,this.maxPixelCount=u;const d=h.getContext("webgl2",a);if(!d)throw Error("Paper Shaders: WebGL is not supported in this browser");this.gl=d,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(n),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{let e=function(e,t,i){let r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),a=r?r.precision:null;a&&a<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),i=i.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));let o=n(e,e.VERTEX_SHADER,t),s=n(e,e.FRAGMENT_SHADER,i);if(!o||!s)return null;let l=e.createProgram();return l?(e.attachShader(l,o),e.attachShader(l,s),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS))?(e.detachShader(l,o),e.detachShader(l,s),e.deleteShader(o),e.deleteShader(s),l):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(l)),e.deleteProgram(l),e.deleteShader(o),e.deleteShader(s),null):null}(this.gl,i,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,"a_position"),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([t,i])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),i instanceof HTMLImageElement){let i=`${t}AspectRatio`;e[i]=this.gl.getUniformLocation(this.program,i)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];void 0!==t&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,i=Math.max(1,window.devicePixelRatio),r=visualViewport?.scale??1;if(this.devicePixelsSupported){let a=Math.max(1,this.minPixelRatio/i);e=this.parentDevicePixelWidth*a*r,t=this.parentDevicePixelHeight*a*r}else{var a;let n,o,s=Math.max(i,this.minPixelRatio)*r;this.isSafari&&(s*=Math.max(1,(a=this.ownerDocument,(o=Math.round(100*(n=outerWidth/((visualViewport?.scale??1)*(visualViewport?.width??window.innerWidth)+(window.innerWidth-a.documentElement.clientWidth)))))%5==0?o/100:33===o?1/3:67===o?2/3:133===o?4/3:n))),e=Math.round(this.parentWidth)*s,t=Math.round(this.parentHeight)*s}let n=Math.min(1,Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t)),o=Math.round(e*n),s=Math.round(t*n),l=o/Math.round(this.parentWidth);(this.canvasElement.width!==o||this.canvasElement.height!==s||this.renderScale!==l)&&(this.renderScale=l,this.canvasElement.width=o,this.canvasElement.height=s,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(null===this.program)return void console.warn("Tried to render before program or gl was initialized");let t=e-this.lastRenderTime;this.lastRenderTime=e,0!==this.currentSpeed&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,.001*this.currentFrame),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),0!==this.currentSpeed?this.requestRender():this.rafId=null};requestRender=()=>{null!==this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||0===t.naturalWidth)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let i=this.textures.get(e);i&&this.gl.deleteTexture(i),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let r=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+r);let a=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,a),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let n=this.gl.getError();if(n!==this.gl.NO_ERROR||null===a)return void console.error("Paper Shaders: WebGL error when uploading texture:",n);this.textures.set(e,a);let o=this.uniformLocations[e];if(o){this.gl.uniform1i(o,r);let i=`${e}AspectRatio`,a=this.uniformLocations[i];if(a){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(a,e)}}};areUniformValuesEqual=(e,t)=>e===t||!!(Array.isArray(e)&&Array.isArray(t))&&e.length===t.length&&e.every((e,i)=>this.areUniformValuesEqual(e,t[i]));setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,t])=>{let i=t;if(t instanceof HTMLImageElement&&(i=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],i))return;this.uniformCache[e]=i;let r=this.uniformLocations[e];if(!r)return void console.warn(`Uniform location for ${e} not found`);if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let i=null,a=null;if(void 0!==t[0]&&Array.isArray(t[0])){let r=t[0].length;if(!t.every(e=>e.length===r))return void console.warn(`All child arrays must be the same length for ${e}`);i=t.flat(),a=r}else a=(i=t).length;switch(a){case 2:this.gl.uniform2fv(r,i);break;case 3:this.gl.uniform3fv(r,i);break;case 4:this.gl.uniform4fv(r,i);break;case 9:this.gl.uniformMatrix3fv(r,!1,i);break;case 16:this.gl.uniformMatrix4fv(r,!1,i);break;default:console.warn(`Unsupported uniform array length: ${a}`)}}else"number"==typeof t?this.gl.uniform1f(r,t):"boolean"==typeof t?this.gl.uniform1i(r,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.setCurrentSpeed(this.ownerDocument.hidden?0:e)};setCurrentSpeed=e=>{this.currentSpeed=e,null===this.rafId&&0!==e&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),null!==this.rafId&&0===e&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=r)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(this.ownerDocument.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,null!==this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),this.ownerDocument.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}}function n(e,t,i){let r=e.createShader(t);return r?(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))?r:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(r)),e.deleteShader(r),null):null}let o=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function s(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;let t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}var l=e.i(43476);async function u(e){let t={},i=[];return Object.entries(e).forEach(([e,r])=>{if("string"==typeof r){let a=r||"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";if(!(e=>{try{if(e.startsWith("/"))return!0;return new URL(e),!0}catch{return!1}})(a))return void console.warn(`Uniform "${e}" has invalid URL "${a}". Skipping image loading.`);let n=new Promise((i,r)=>{let n=new Image;(e=>{try{if(e.startsWith("/"))return!1;return new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}})(a)&&(n.crossOrigin="anonymous"),n.onload=()=>{s(n),t[e]=n,i()},n.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${a}`),r()},n.src=a});i.push(n)}else r instanceof HTMLImageElement&&s(r),t[e]=r}),await Promise.all(i),t}let c=(0,t.forwardRef)(function({fragmentShader:e,uniforms:i,webGlContextAttributes:r,speed:n=0,frame:o=0,width:s,height:c,minPixelRatio:h,maxPixelCount:d,mipmaps:m,style:p,...f},g){var v;let x,_,[S,b]=(0,t.useState)(!1),y=(0,t.useRef)(null),w=(0,t.useRef)(null),E=(0,t.useRef)(r);(0,t.useEffect)(()=>((async()=>{let t=await u(i);y.current&&!w.current&&(w.current=new a(y.current,e,t,E.current,n,o,h,d,m),b(!0))})(),()=>{w.current?.dispose(),w.current=null}),[e]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{let t=await u(i);e||w.current?.setUniforms(t)})(),()=>{e=!0}},[i,S]),(0,t.useEffect)(()=>{w.current?.setSpeed(n)},[n,S]),(0,t.useEffect)(()=>{w.current?.setMaxPixelCount(d)},[d,S]),(0,t.useEffect)(()=>{w.current?.setMinPixelRatio(h)},[h,S]),(0,t.useEffect)(()=>{w.current?.setFrame(o)},[o,S]);let R=(v=[y,g],x=t.useRef(void 0),_=t.useCallback(e=>{let t=v.map(t=>{if(null!=t){if("function"==typeof t){let i=t(e);return"function"==typeof i?i:()=>{t(null)}}return t.current=e,()=>{t.current=null}}});return()=>{t.forEach(e=>e?.())}},v),t.useMemo(()=>v.every(e=>null==e)?null:e=>{x.current&&(x.current(),x.current=void 0),null!=e&&(x.current=_(e))},v));return(0,l.jsx)("div",{ref:R,style:void 0!==s||void 0!==c?{width:"string"==typeof s&&!1===isNaN(+s)?+s:s,height:"string"==typeof c&&!1===isNaN(+c)?+c:c,...p}:p,...f})});c.displayName="ShaderMount",e.s(["ShaderMount",0,c],37881),e.s(["colorPropsAreEqual",0,function(e,t){for(let i in e){if("colors"===i){let i=Array.isArray(e.colors),r=Array.isArray(t.colors);if(!i||!r){if(!1===Object.is(e.colors,t.colors))return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,i)=>e===t.colors?.[i]))return!1;continue}if(!1===Object.is(e[i],t[i]))return!1}return!0}],573),e.s(["ShaderFitOptions",0,{none:0,contain:1,cover:2},"defaultObjectSizing",0,{fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},"defaultPatternSizing",0,{fit:"none",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0}],31967);let h=(e,t,i)=>Math.min(Math.max(e,t),i),d=[0,0,0,1];e.s(["getShaderColorFromString",0,function(e){if(Array.isArray(e))return 4===e.length?e:3===e.length?[...e,1]:d;if("string"!=typeof e)return d;let t,i,r,a=1;if(e.startsWith("#")){var n;[t,i,r,a]=(3===(n=(n=e).replace(/^#/,"")).length&&(n=n.split("").map(e=>e+e).join("")),6===n.length&&(n+="ff"),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255,parseInt(n.slice(6,8),16)/255])}else if(e.startsWith("rgb")){let n;[t,i,r,a]=(n=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(n[1]??"0")/255,parseInt(n[2]??"0")/255,parseInt(n[3]??"0")/255,void 0===n[4]?1:parseFloat(n[4])]:[0,0,0,1]}else{let n;if(!e.startsWith("hsl"))return console.error("Unsupported color format",e),d;[t,i,r,a]=function(e){let t,i,r,[a,n,o,s]=e,l=a/360,u=n/100,c=o/100;if(0===n)t=i=r=c;else{let e=(e,t,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e,a=c<.5?c*(1+u):c+u-c*u,n=2*c-a;t=e(n,a,l+1/3),i=e(n,a,l),r=e(n,a,l-1/3)}return[t,i,r,s]}((n=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(n[1]??"0"),parseInt(n[2]??"0"),parseInt(n[3]??"0"),void 0===n[4]?1:parseFloat(n[4])]:[0,0,0,1])}return[h(t,0,1),h(i,0,1),h(r,0,1),h(a,0,1)]}],21449);let m=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,p=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,f=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,g=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`;e.s(["colorBandingFix",0,g,"declarePI",0,m,"proceduralHash21",0,f,"rotation2",0,p],93344),e.s(["readReducedMotionPreference",0,function(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches},"subscribeReducedMotionPreference",0,function(e){let t=window.matchMedia("(prefers-reduced-motion: reduce)");return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}],35677)},27045,e=>{e.v({base:"animated-wordmark-module___fehbG__base",root:"animated-wordmark-module___fehbG__root",shine:"animated-wordmark-module___fehbG__shine","wordmark-shine-forward":"animated-wordmark-module___fehbG__wordmark-shine-forward","wordmark-shine-return":"animated-wordmark-module___fehbG__wordmark-shine-return"})},19009,e=>{"use strict";var t=e.i(43476),i=e.i(27045);e.s(["AnimatedWordmark",0,function({className:e="",alt:r="НРАВ"}){return(0,t.jsxs)("span",{className:`${i.default.root} ${e}`.trim(),role:"img","aria-label":r,children:[(0,t.jsx)("img",{className:i.default.base,src:"/NRAV-PWA/assets/brand/wordmark-canonical-2026.svg",alt:"","aria-hidden":"true",draggable:!1}),(0,t.jsx)("span",{className:i.default.shine,"aria-hidden":"true"})]})}])},23230,29177,79107,e=>{"use strict";let t={enableHighAccuracy:!0,timeout:12e3,maximumAge:3e5};function i(e,t,i){let r,a=(r=111320*Math.cos(e.latitude*Math.PI/180),{longitude:e.longitude+t/r,latitude:e.latitude+i/111320});return{longitude:a.longitude,latitude:a.latitude}}e.s(["mapGeolocationCapability",0,{locate:()=>"u"<typeof navigator||!navigator.geolocation?Promise.resolve({ok:!1,reason:"unavailable"}):new Promise(e=>{try{navigator.geolocation.getCurrentPosition(({coords:t})=>e({ok:!0,point:{longitude:t.longitude,latitude:t.latitude}}),t=>e({ok:!1,reason:t.code===t.PERMISSION_DENIED?"denied":"unavailable"}),t)}catch{e({ok:!1,reason:"unavailable"})}})}],29177),e.s([],23230);let r={self:[0,0],personNoSubscription:[-285,285],personLight:[285,255],personOrganizer:[-345,65],personOrganizerPro:[335,35],personPremium:[-275,-205],personStoryOnly:[270,-190],noteOwn:[25,390],noteCoffee:[405,355],noteTraffic:[-430,-55],noteGallery:[425,-85],eventConcert:[-355,-455],eventRooftop:[0,-485],eventCycling:[355,-455]};e.s(["DEFAULT_NRAV_MAP_LOCATION",0,{longitude:76.889709,latitude:43.238949},"createDemoMapLocations",0,function(e){return Object.fromEntries(Object.entries(r).map(([t,[r,a]])=>[t,i(e,r,a)]))},"formatNravGeoPoint",0,function(e){return`${e.latitude.toFixed(5)}, ${e.longitude.toFixed(5)}`},"isNravGeoPoint",0,function(e){return!!e&&"object"==typeof e&&Number.isFinite(e.longitude)&&Number.isFinite(e.latitude)&&180>=Math.abs(e.longitude)&&90>=Math.abs(e.latitude)},"offsetNravGeoPoint",0,i],79107)},16715,e=>{"use strict";let t=(0,e.i(75254).default)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);e.s(["RefreshCw",0,t],16715)},96775,e=>{e.v({backdrop:"map-note-composer-sheet-module__ewWSrW__backdrop",categoryScroll:"map-note-composer-sheet-module__ewWSrW__categoryScroll",categorySheet:"map-note-composer-sheet-module__ewWSrW__categorySheet",categoryStep:"map-note-composer-sheet-module__ewWSrW__categoryStep",decisionActions:"map-note-composer-sheet-module__ewWSrW__decisionActions",decisionIcon:"map-note-composer-sheet-module__ewWSrW__decisionIcon",decisionStep:"map-note-composer-sheet-module__ewWSrW__decisionStep",editor:"map-note-composer-sheet-module__ewWSrW__editor",enter:"map-note-composer-sheet-module__ewWSrW__enter",error:"map-note-composer-sheet-module__ewWSrW__error",explanation:"map-note-composer-sheet-module__ewWSrW__explanation",heading:"map-note-composer-sheet-module__ewWSrW__heading",layer:"map-note-composer-sheet-module__ewWSrW__layer",locationIcon:"map-note-composer-sheet-module__ewWSrW__locationIcon",primary:"map-note-composer-sheet-module__ewWSrW__primary",secondary:"map-note-composer-sheet-module__ewWSrW__secondary",sheet:"map-note-composer-sheet-module__ewWSrW__sheet"})},48829,70778,91235,e=>{"use strict";var t=e.i(43476),i=e.i(46897),r=e.i(16715),a=e.i(14764),n=e.i(37727),o=e.i(71645);e.i(23230);var s=e.i(79107);e.i(78669);var l=e.i(30038);e.i(28623);var u=e.i(37242),c=e.i(91767),h=e.i(96775);e.s(["default",0,function({point:e,onClose:d,onPublish:m}){let[p,f]=(0,o.useState)("confirm"),[g,v]=(0,o.useState)(""),[x,_]=(0,o.useState)([]),[S,b]=(0,o.useState)(""),[y,w]=(0,o.useState)(null),E=(0,o.useRef)(null),R=(0,u.useBottomSheetGesture)({onClose:d}),A=function(e){let[t,i]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let t=()=>{let t=e.current;if(!t)return;let r=(t.parentElement??t).getBoundingClientRect(),a=window.visualViewport,n=a?.offsetTop??0,o=n+(a?.height??window.innerHeight),s=Math.max(0,n-r.top),l=Math.max(0,Math.min(r.height-s,o-Math.max(r.top,n)));i(e=>e?.height===l&&e.offsetTop===s?e:{height:l,offsetTop:s})};t();let r=window.visualViewport;return r?.addEventListener("resize",t),r?.addEventListener("scroll",t),window.addEventListener("resize",t),()=>{r?.removeEventListener("resize",t),r?.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e]),t}(E);(0,c.useEscapeDismiss)(d);let U=(t=!1)=>{if(!g.trim()||0===x.length)return;let i=m(g,e,x,{replaceExisting:t});if("published"===i.status)return void d();if("replacement-required"===i.status)return void f("replace");if("limit-reached"===i.status){w(i),f("limit");return}b("Не удалось сохранить заметку. Попробуйте ещё раз.")};return(0,t.jsxs)("div",{ref:E,className:h.default.layer,style:A?{"--map-note-viewport-height":`${A.height}px`,"--map-note-viewport-offset-top":`${A.offsetTop}px`}:void 0,children:[(0,t.jsx)("button",{className:h.default.backdrop,type:"button",onClick:d,"aria-label":"Закрыть создание заметки"}),(0,t.jsx)("section",{...R.surfaceProps,className:`${h.default.sheet} ${"category"===p?h.default.categorySheet:""}`,role:"dialog","aria-modal":"true","aria-labelledby":"category"===p?"map-note-category-title":"replace"===p?"map-note-replace-title":"limit"===p?"map-note-limit-title":"map-note-create-title",children:"replace"===p?(0,t.jsxs)("section",{className:h.default.decisionStep,children:[(0,t.jsx)("span",{className:h.default.decisionIcon,children:(0,t.jsx)(r.RefreshCw,{"aria-hidden":"true"})}),(0,t.jsx)("h2",{id:"map-note-replace-title",children:"Заменить текущую заметку?"}),(0,t.jsx)("p",{children:"На карте может быть только одна ваша активная заметка. Текущая заметка будет удалена, а новая займёт её место."}),(0,t.jsx)("small",{children:"Замена учитывается как новая публикация в недельном лимите."}),(0,t.jsxs)("div",{className:h.default.decisionActions,children:[(0,t.jsx)("button",{className:h.default.primary,type:"button","data-no-sheet-drag":!0,onClick:()=>U(!0),children:"Заменить заметку"}),(0,t.jsx)("button",{className:h.default.secondary,type:"button","data-no-sheet-drag":!0,onClick:d,children:"Отменить размещение"})]})]}):"limit"===p&&y?(0,t.jsxs)("section",{className:h.default.decisionStep,children:[(0,t.jsx)("h2",{id:"map-note-limit-title",children:"Лимит заметок исчерпан"}),(0,t.jsxs)("p",{children:["На этой неделе использовано ",y.used," из ",y.limit," публикаций. Замена действующей заметки тоже расходует лимит."]}),(0,t.jsxs)("small",{children:["Следующая публикация будет доступна ",new Intl.DateTimeFormat("ru-RU",{weekday:"long",day:"numeric",month:"long"}).format(y.resetsAt),"."]}),(0,t.jsx)("div",{className:h.default.decisionActions,children:(0,t.jsx)("button",{className:h.default.primary,type:"button","data-no-sheet-drag":!0,onClick:d,children:"Понятно"})})]}):"category"===p?(0,t.jsxs)("section",{className:h.default.categoryStep,children:[(0,t.jsxs)("header",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{id:"map-note-category-title",children:"Категории заметки"}),(0,t.jsx)("p",{children:"Выберите одну или несколько категорий, чтобы заметку находили через фильтры карты."})]}),(0,t.jsx)("button",{type:"button","data-no-sheet-drag":!0,onClick:()=>f("compose"),"aria-label":"Вернуться к тексту заметки",children:(0,t.jsx)(n.X,{})})]}),(0,t.jsx)("div",{className:h.default.categoryScroll,"data-scrollable":!0,children:(0,t.jsx)(l.MapCategoryGrid,{selectedIds:x,onToggle:e=>{_(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},ariaLabel:"Категории заметки"})}),(0,t.jsxs)("footer",{children:[(0,t.jsx)("button",{className:h.default.primary,type:"button","data-no-sheet-drag":!0,onClick:()=>U(!1),disabled:0===x.length,children:"Опубликовать"}),S&&(0,t.jsx)("p",{className:h.default.error,role:"alert",children:S})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("header",{className:h.default.heading,children:[(0,t.jsx)("span",{className:h.default.locationIcon,children:(0,t.jsx)(i.MapPin,{"aria-hidden":"true"})}),(0,t.jsxs)("span",{children:[(0,t.jsx)("h2",{id:"map-note-create-title",children:"confirm"===p?"Создать заметку здесь?":"Новая заметка"}),(0,t.jsx)("small",{children:(0,s.formatNravGeoPoint)(e)})]}),(0,t.jsx)("button",{type:"button","data-no-sheet-drag":!0,onClick:d,"aria-label":"Закрыть",children:(0,t.jsx)(n.X,{})})]}),"confirm"===p?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:h.default.explanation,children:"Заметка будет закреплена именно в выбранной точке карты."}),(0,t.jsx)("button",{className:h.default.primary,type:"button","data-no-sheet-drag":!0,onClick:()=>f("compose"),children:"Создать заметку"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("label",{className:h.default.editor,"data-no-sheet-drag":!0,children:[(0,t.jsx)("span",{children:"Текст заметки"}),(0,t.jsx)("textarea",{autoFocus:!0,inputMode:"text",enterKeyHint:"next",value:g,onChange:e=>v(e.target.value),maxLength:280,placeholder:"Что происходит в этом месте?"}),(0,t.jsxs)("small",{children:[g.length,"/280"]})]}),(0,t.jsxs)("button",{className:h.default.primary,type:"button","data-no-sheet-drag":!0,onClick:()=>f("category"),disabled:!g.trim(),"aria-label":"Выбрать категории и опубликовать заметку",children:[(0,t.jsx)(a.Send,{"aria-hidden":"true"}),"Опубликовать"]})]})]})})]})}],70778),e.i(23542);var d=e.i(60011);e.i(77827),e.s([],48829),e.s(["MAP_NOTES",()=>d.MAP_NOTE_FIXTURES],91235)}]);