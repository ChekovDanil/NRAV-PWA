(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81134,e=>{"use strict";function i(e){return encodeURIComponent(e)}e.s(["publicProfileCardStatPath",0,function(e,t){return`/profiles/${i(e)}/card/${t}`},"publicProfilePath",0,function(e){return`/profiles/${i(e)}`},"publicProfileStatPath",0,function(e,t){return`/profiles/${i(e)}/${t}`}])},61485,23065,e=>{"use strict";let i="/NRAV-PWA/assets/figma-v2/",t=[["aliya.music","notif-avatar2.jpg"],["leila.frames","search-avatar.png"],["timur.urban","chat-avatar1.png"],["maya.coffee","chat-avatar2.png"],["nikita.route","chat-avatar3.png"],["arman.run","map-avatar-small.png"],["dina.art","note-avatar.png"],["elena.moves","avatar-aigerim.jpg"],["rina.books","notif-avatar1.jpg"],["mark.city","avatar-minjun.jpg"],["polina.sunset","avatar-amara.jpg"],["alex.walks","avatar-luca.jpg"],["milana.food","notif-avatar2.jpg"],["roman.photo","search-avatar.png"],["samira.live","chat-avatar1.png"],["anton.music","chat-avatar2.png"],["dana.yoga","chat-avatar3.png"],["kirill.cycling","map-avatar-small.png"],["vera.design","note-avatar.png"],["ilya.film","avatar-aigerim.jpg"],["nora.space","notif-avatar1.jpg"],["adam.events","avatar-minjun.jpg"],["anya.cats","avatar-amara.jpg"],["max.rooftop","avatar-luca.jpg"],["kamila.travel","notif-avatar2.jpg"],["denis.street","search-avatar.png"],["zara.dance","chat-avatar1.png"],["olga.mood","chat-avatar2.png"],["erik.sound","chat-avatar3.png"],["lina.flow","map-avatar-small.png"],["pavel.city","note-avatar.png"],["aesel.notes","avatar-aigerim.jpg"],["misha.night","notif-avatar1.jpg"],["sergey.frames","avatar-minjun.jpg"],["ines.city","avatar-aigerim.jpg"],["dmitry.coffee","chat-avatar1.png"],["yulia.light","notif-avatar2.jpg"],["oliver.walks","avatar-luca.jpg"],["kim.route","chat-avatar2.png"],["naomi.art","note-avatar.png"],["rafael.live","map-avatar-small.png"],["eva.music","notif-avatar1.jpg"],["tomas.photo","search-avatar.png"],["kira.events","avatar-amara.jpg"],["vadim.run","chat-avatar3.png"],["selin.gallery","avatar-aigerim.jpg"],["leo.night","avatar-minjun.jpg"],["irina.flow","notif-avatar2.jpg"],["david.urban","chat-avatar1.png"],["mila.design","note-avatar.png"],["emil.books","chat-avatar2.png"],["sonya.sun","avatar-amara.jpg"],["adrian.food","avatar-luca.jpg"],["ayana.travel","search-avatar.png"],["victor.street","map-avatar-small.png"],["lara.dance","chat-avatar3.png"],["noah.sound","notif-avatar1.jpg"],["emma.space","avatar-aigerim.jpg"]].map(([e,t],a)=>{let r,o=(r=e.split(/[._]/)[0]||"Пользователь").charAt(0).toLocaleUpperCase("ru")+r.slice(1),n=`${i}${t}`,s=[`${i}profile-media${a%6+1}.jpg`,`${i}profile-media${(a+2)%6+1}.jpg`,`${i}profile-media${(a+4)%6+1}.jpg`];return{id:`profile-viewer-${e.replaceAll(".","-")}`,username:e,displayName:o,replyName:o,avatarSrc:n,verified:a%7==0,followers:String(180+17*e.length),following:String(90+9*e.length),vibe:(6.4+e.length%25/10).toFixed(1).replace(".",","),activity:String(18+e.length),bio:"Пользователь НРАВ.",role:"Профиль пользователя",location:"Алматы, Казахстан",coverSrc:s[0],media:s,highlights:["Город","Люди","Моменты"].map((i,t)=>({id:`${e}-highlight-${t+1}`,title:i,preview:s[t%s.length]}))}}),a=t.map(e=>e.username),r="/NRAV-PWA/assets/figma-v2/",o=["profile-media1.jpg","profile-media2.jpg","profile-media3.jpg","profile-media4.jpg","profile-media5.jpg","profile-media6.jpg"];function n(e){var i;let t=e.mediaNames??o,a=function(...e){return e.map(e=>`${r}${e}`)}(...t),n=e.highlightNames??["Сегодня","Город","Люди","Кафе","Поездки"],{mediaNames:s,highlightNames:l,...u}=e;return{...u,coverSrc:u.coverSrc??a[0]??`${r}profile-header.jpg`,media:a,highlights:(i=u.username,n.map((e,a)=>({id:`${i}-highlight-${a+1}`,title:e,preview:`${r}${t[a%t.length]}`})))}}let s=[n({id:"profile-alina-city",username:"alina.city",displayName:"Алина",replyName:"Алине",avatarSrc:`${r}notif-avatar1.jpg`,verified:!0,followers:"1 974",following:"412",vibe:"9,4",activity:"64",bio:"Город после полуночи, музыка и прогулки без маршрута.",role:"Автор городских историй",location:"Алматы, Казахстан",status:"Сегодня в центре",statusIcon:"✨"}),n({id:"profile-alina-chat",username:"alina.v",displayName:"Алина",replyName:"Алине",avatarSrc:`${r}notif-avatar1.jpg`,verified:!0,followers:"1 974",following:"412",vibe:"9,4",activity:"48",bio:"Люблю горы, городские прогулки и встречи за кофе. Собираю места, к которым хочется возвращаться.",role:"Premium-профиль",location:"Алматы, Казахстан",highlightNames:["Поездки","Горы","Город","Кофе","Друзья"]}),n({id:"profile-aidana-chat",username:"aidana.city",displayName:"Айдана",replyName:"Айдане",avatarSrc:`${r}notif-avatar2.jpg`,verified:!1,followers:"486",following:"214",vibe:"6,9",activity:"31",bio:"Исследую Алматы и сохраняю хорошие места для встреч.",role:"Профиль пользователя",location:"Алматы, Казахстан",mediaNames:["profile-media4.jpg","profile-media2.jpg","profile-media5.jpg","profile-media1.jpg","profile-media6.jpg","profile-media3.jpg"]}),n({id:"profile-aigerim-frames",username:"aigerim.frames",displayName:"Айгерим",replyName:"Айгерим",avatarSrc:`${r}avatar-aigerim.jpg`,verified:!1,followers:"486",following:"219",vibe:"6,9",activity:"31",bio:"Свет, галереи и небольшие открытия рядом.",role:"Фотограф",location:"Алматы, Казахстан",mediaNames:["event-gallery.jpg","profile-media2.jpg","profile-media5.jpg","profile-media1.jpg","profile-media4.jpg","profile-media6.jpg"]}),n({id:"profile-amara-local",username:"amara.local",displayName:"Амара",replyName:"Амаре",avatarSrc:`${r}avatar-amara.jpg`,verified:!1,followers:"1 268",following:"347",vibe:"8,6",activity:"48",bio:"Кофе, тихие дворы и новые пространства города.",role:"Автор локальных подборок",location:"Алматы, Казахстан",status:"Собираю встречу в галерее",statusIcon:"🎨"}),n({id:"profile-minjun-sees",username:"minjun.sees",displayName:"Минджун",replyName:"Минджуну",avatarSrc:`${r}avatar-minjun.jpg`,verified:!1,followers:"842",following:"203",vibe:"7,4",activity:"39",bio:"Портреты незнакомцев и прогулки по городу.",role:"Фотограф",location:"Алматы, Казахстан",status:"Вышел пройтись у набережной",statusIcon:"🚶"}),n({id:"profile-night-ride",username:"night.ride",displayName:"Айдана",replyName:"Айдане",avatarSrc:`${r}notif-avatar2.jpg`,verified:!1,followers:"639",following:"284",vibe:"7,8",activity:"42",bio:"Городские маршруты, велосипеды и компания на вечер.",role:"Участник сообщества",location:"Алматы, Казахстан",mediaNames:["event-cycling.jpg","profile-media4.jpg","profile-media2.jpg","profile-media5.jpg","profile-media1.jpg","profile-media6.jpg"]}),n({id:"profile-nrav-city",username:"nrav.city",displayName:"Данил",replyName:"Данилу",avatarSrc:`${r}note-avatar.png`,verified:!0,followers:"2 184",following:"386",vibe:"8,8",activity:"71",bio:"Собираю идеи для вечера и места, к которым хочется возвращаться.",role:"Автор НРАВ",location:"Алматы, Казахстан"}),n({id:"profile-aigerim-city",username:"aigerim.city",displayName:"Айгерим",replyName:"Айгерим",avatarSrc:`${r}avatar-aigerim.jpg`,verified:!0,followers:"486",following:"219",vibe:"6,9",activity:"31",bio:"Исследую город и сохраняю хорошие места для встреч.",role:"Профиль пользователя",location:"Алматы, Казахстан"}),n({id:"profile-minjun-walks",username:"minjun.walks",displayName:"Минджун",replyName:"Минджуну",avatarSrc:`${r}avatar-minjun.jpg`,verified:!1,followers:"842",following:"203",vibe:"7,4",activity:"39",bio:"Прогулки, город и живые портреты.",role:"Профиль пользователя",location:"Алматы, Казахстан",status:"Вышел пройтись у набережной",statusIcon:"🚶"}),n({id:"profile-amara-gallery",username:"amara.gallery",displayName:"Амара",replyName:"Амаре",avatarSrc:`${r}avatar-amara.jpg`,verified:!1,followers:"1 268",following:"347",vibe:"8,6",activity:"48",bio:"Собираю встречи в галереях и интересные разговоры.",role:"Организатор",location:"Алматы, Казахстан",status:"Собираю встречу в галерее",statusIcon:"🎨"}),n({id:"profile-luca-events",username:"luca.events",displayName:"Лука",replyName:"Луке",avatarSrc:`${r}avatar-luca.jpg`,verified:!0,followers:"2 415",following:"528",vibe:"9,1",activity:"86",bio:"Организую городские встречи, rooftop-вечеринки и новые знакомства.",role:"Организатор событий",location:"Алматы, Казахстан",status:"Веду rooftop-встречу",statusIcon:"🎧",highlightNames:["События","Rooftop","Команда","Город","Музыка"]}),n({id:"profile-sofia-night",username:"sofia.night",displayName:"София",replyName:"Софии",avatarSrc:`${r}notif-avatar1.jpg`,verified:!0,followers:"1 974",following:"412",vibe:"9,4",activity:"64",bio:"Собираю красивые места, людей и атмосферные моменты города.",role:"Premium-профиль",location:"Алматы, Казахстан",status:"Сегодня в центре",statusIcon:"✨"}),n({id:"profile-leila-city",username:"leila.city",displayName:"Лейла",replyName:"Лейле",avatarSrc:`${r}notif-avatar2.jpg`,verified:!1,followers:"639",following:"284",vibe:"7,8",activity:"37",bio:"Город, поездки и истории рядом.",role:"Профиль пользователя",location:"Алматы, Казахстан"})],l=s.map(e=>e.username);function u(e){return s.find(i=>i.username===e)??null}e.s(["PUBLIC_PROFILE_ROUTE_USERNAMES",0,l,"findPublicProfileFixture",0,u,"publicProfileFixtures",0,s],23065),[...l,...a],e.s(["findPublicProfileFixture",0,function(e){return u(e)??t.find(i=>i.username===e)??null}],61485)},73708,e=>{"use strict";let i=(0,e.i(75254).default)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);e.s(["Image",0,i],73708)},88699,e=>{"use strict";let i=(0,e.i(75254).default)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);e.s(["Pencil",0,i],88699)},60030,e=>{"use strict";e.i(11295),e.i(15078),e.i(92230),e.i(96135),e.i(39538),e.i(56680),e.i(67254),e.i(61047),e.i(92554),e.i(68741),e.i(31423),e.i(61683),e.i(60561),e.i(62485),e.i(8715),e.i(10643),e.i(54916),e.i(96572),e.i(40691),e.i(278),e.s([])},90597,e=>{"use strict";let i=(0,e.i(75254).default)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);e.s(["Heart",0,i],90597)},955,e=>{"use strict";let i=[{id:"personNoSubscription",displayName:"Айгерим",nickname:"aigerim.city",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-aigerim.jpg",status:"Ищу компанию на кофе",statusIcon:"☕",followers:"486"},{id:"personLight",displayName:"Минджун",nickname:"minjun.walks",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-minjun.jpg",status:"Вышел пройтись у набережной",statusIcon:"🚶",followers:"842"},{id:"personOrganizer",displayName:"Амара",nickname:"amara.gallery",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-amara.jpg",status:"Собираю встречу в галерее",statusIcon:"🎨",followers:"1 268"},{id:"personOrganizerPro",displayName:"Лука",nickname:"luca.events",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-luca.jpg",status:"Веду rooftop-встречу",statusIcon:"🎧",followers:"2 415"},{id:"personPremium",displayName:"София",nickname:"sofia.night",avatarSrc:"/NRAV-PWA/assets/figma-v2/notif-avatar1.jpg",status:"Сегодня в центре",statusIcon:"✨",followers:"1 974"},{id:"personStoryOnly",displayName:"Лейла",nickname:"leila.city",avatarSrc:"/NRAV-PWA/assets/figma-v2/notif-avatar2.jpg",status:null,followers:"639"}];e.s(["PROFILE_SHARE_CHAT_TARGETS",0,[{id:"chat-aidana",name:"Айдана",subtitle:"Недавний диалог",avatarSrc:"/NRAV-PWA/assets/figma-v2/notif-avatar2.jpg",searchTerms:["личный чат","часто общаетесь"]},{id:"chat-alina",name:"Алина",subtitle:"Часто общаетесь",avatarSrc:"/NRAV-PWA/assets/figma-v2/notif-avatar1.jpg",searchTerms:["личный чат","подписка"]},{id:"chat-hike",name:"Поход в горы",subtitle:"Недавняя группа",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-minjun.jpg",searchTerms:["группа","чат"]},{id:"chat-irina",name:"Ирина",subtitle:"Часто общаетесь",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-aigerim.jpg",searchTerms:["личный чат","подписка"]},{id:"chat-nrav-team",name:"Команда НРАВ",subtitle:"Канал",avatarSrc:"/NRAV-PWA/assets/figma-v2/note-avatar.png",searchTerms:["канал","чат"]},{id:"chat-luca",name:"Лука",subtitle:"Взаимная подписка",avatarSrc:"/NRAV-PWA/assets/figma-v2/avatar-luca.jpg",searchTerms:["профиль","подписки"]}],"getProfileSafetyDirectory",0,function(e){let t=new Map(i.map(e=>[e.id,e]));return Object.values(e.profiles).forEach(e=>t.set(e.id,e)),[...t.values()]}])},22915,e=>{"use strict";let i=(0,e.i(75254).default)("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);e.s(["Archive",0,i],22915)},37881,573,31967,21449,93344,35677,e=>{"use strict";var i=e.i(71645);let t=`#version 300 es
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
}`,a=8294400;class r{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=(function(){let e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")})();uniformCache={};textureUnitMap=new Map;ownerDocument;constructor(e,i,t,r,o=0,s=0,l=2,u=a,c=[]){if(e?.nodeType===1)this.parentElement=e;else throw Error("Paper Shaders: parent element must be an HTMLElement");if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector("style[data-paper-shader]")){const e=this.ownerDocument.createElement("style");e.innerHTML=n,e.setAttribute("data-paper-shader",""),this.ownerDocument.head.prepend(e)}const h=this.ownerDocument.createElement("canvas");this.canvasElement=h,this.parentElement.prepend(h),this.fragmentShader=i,this.providedUniforms=t,this.mipmaps=c,this.currentFrame=s,this.minPixelRatio=l,this.maxPixelCount=u;const p=h.getContext("webgl2",r);if(!p)throw Error("Paper Shaders: WebGL is not supported in this browser");this.gl=p,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(o),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{let e=function(e,i,t){let a=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),r=a?a.precision:null;r&&r<23&&(i=i.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),t=t.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));let n=o(e,e.VERTEX_SHADER,i),s=o(e,e.FRAGMENT_SHADER,t);if(!n||!s)return null;let l=e.createProgram();return l?(e.attachShader(l,n),e.attachShader(l,s),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS))?(e.detachShader(l,n),e.detachShader(l,s),e.deleteShader(n),e.deleteShader(s),l):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(l)),e.deleteProgram(l),e.deleteShader(n),e.deleteShader(s),null):null}(this.gl,t,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,"a_position"),i=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([i,t])=>{if(e[i]=this.gl.getUniformLocation(this.program,i),t instanceof HTMLImageElement){let t=`${i}AspectRatio`;e[t]=this.gl.getUniformLocation(this.program,t)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let i=e.devicePixelContentBoxSize?.[0];void 0!==i&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=i.inlineSize,this.parentDevicePixelHeight=i.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,i=0,t=Math.max(1,window.devicePixelRatio),a=visualViewport?.scale??1;if(this.devicePixelsSupported){let r=Math.max(1,this.minPixelRatio/t);e=this.parentDevicePixelWidth*r*a,i=this.parentDevicePixelHeight*r*a}else{var r;let o,n,s=Math.max(t,this.minPixelRatio)*a;this.isSafari&&(s*=Math.max(1,(r=this.ownerDocument,(n=Math.round(100*(o=outerWidth/((visualViewport?.scale??1)*(visualViewport?.width??window.innerWidth)+(window.innerWidth-r.documentElement.clientWidth)))))%5==0?n/100:33===n?1/3:67===n?2/3:133===n?4/3:o))),e=Math.round(this.parentWidth)*s,i=Math.round(this.parentHeight)*s}let o=Math.min(1,Math.sqrt(this.maxPixelCount)/Math.sqrt(e*i)),n=Math.round(e*o),s=Math.round(i*o),l=n/Math.round(this.parentWidth);(this.canvasElement.width!==n||this.canvasElement.height!==s||this.renderScale!==l)&&(this.renderScale=l,this.canvasElement.width=n,this.canvasElement.height=s,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(null===this.program)return void console.warn("Tried to render before program or gl was initialized");let i=e-this.lastRenderTime;this.lastRenderTime=e,0!==this.currentSpeed&&(this.currentFrame+=i*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,.001*this.currentFrame),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),0!==this.currentSpeed?this.requestRender():this.rafId=null};requestRender=()=>{null!==this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,i)=>{if(!i.complete||0===i.naturalWidth)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let t=this.textures.get(e);t&&this.gl.deleteTexture(t),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let a=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+a);let r=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,i),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let o=this.gl.getError();if(o!==this.gl.NO_ERROR||null===r)return void console.error("Paper Shaders: WebGL error when uploading texture:",o);this.textures.set(e,r);let n=this.uniformLocations[e];if(n){this.gl.uniform1i(n,a);let t=`${e}AspectRatio`,r=this.uniformLocations[t];if(r){let e=i.naturalWidth/i.naturalHeight;this.gl.uniform1f(r,e)}}};areUniformValuesEqual=(e,i)=>e===i||!!(Array.isArray(e)&&Array.isArray(i))&&e.length===i.length&&e.every((e,t)=>this.areUniformValuesEqual(e,i[t]));setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,i])=>{let t=i;if(i instanceof HTMLImageElement&&(t=`${i.src.slice(0,200)}|${i.naturalWidth}x${i.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],t))return;this.uniformCache[e]=t;let a=this.uniformLocations[e];if(!a)return void console.warn(`Uniform location for ${e} not found`);if(i instanceof HTMLImageElement)this.setTextureUniform(e,i);else if(Array.isArray(i)){let t=null,r=null;if(void 0!==i[0]&&Array.isArray(i[0])){let a=i[0].length;if(!i.every(e=>e.length===a))return void console.warn(`All child arrays must be the same length for ${e}`);t=i.flat(),r=a}else r=(t=i).length;switch(r){case 2:this.gl.uniform2fv(a,t);break;case 3:this.gl.uniform3fv(a,t);break;case 4:this.gl.uniform4fv(a,t);break;case 9:this.gl.uniformMatrix3fv(a,!1,t);break;case 16:this.gl.uniformMatrix4fv(a,!1,t);break;default:console.warn(`Unsupported uniform array length: ${r}`)}}else"number"==typeof i?this.gl.uniform1f(a,i):"boolean"==typeof i?this.gl.uniform1i(a,+!!i):console.warn(`Unsupported uniform type for ${e}: ${typeof i}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.setCurrentSpeed(this.ownerDocument.hidden?0:e)};setCurrentSpeed=e=>{this.currentSpeed=e,null===this.rafId&&0!==e&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),null!==this.rafId&&0===e&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=a)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(this.ownerDocument.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,null!==this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),this.ownerDocument.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}}function o(e,i,t){let a=e.createShader(i);return a?(e.shaderSource(a,t),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(a)),e.deleteShader(a),null):null}let n=`@layer paper-shaders {
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
}`;function s(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;let i=e.naturalWidth/e.naturalHeight;e.width=Math.round(i>1?1024*i:1024),e.height=Math.round(i>1?1024:1024/i)}}var l=e.i(43476);async function u(e){let i={},t=[];return Object.entries(e).forEach(([e,a])=>{if("string"==typeof a){let r=a||"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";if(!(e=>{try{if(e.startsWith("/"))return!0;return new URL(e),!0}catch{return!1}})(r))return void console.warn(`Uniform "${e}" has invalid URL "${r}". Skipping image loading.`);let o=new Promise((t,a)=>{let o=new Image;(e=>{try{if(e.startsWith("/"))return!1;return new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}})(r)&&(o.crossOrigin="anonymous"),o.onload=()=>{s(o),i[e]=o,t()},o.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${r}`),a()},o.src=r});t.push(o)}else a instanceof HTMLImageElement&&s(a),i[e]=a}),await Promise.all(t),i}let c=(0,i.forwardRef)(function({fragmentShader:e,uniforms:t,webGlContextAttributes:a,speed:o=0,frame:n=0,width:s,height:c,minPixelRatio:h,maxPixelCount:p,mipmaps:g,style:m,...f},v){var d;let x,_,[y,S]=(0,i.useState)(!1),b=(0,i.useRef)(null),w=(0,i.useRef)(null),R=(0,i.useRef)(a);(0,i.useEffect)(()=>((async()=>{let i=await u(t);b.current&&!w.current&&(w.current=new r(b.current,e,i,R.current,o,n,h,p,g),S(!0))})(),()=>{w.current?.dispose(),w.current=null}),[e]),(0,i.useEffect)(()=>{let e=!1;return(async()=>{let i=await u(t);e||w.current?.setUniforms(i)})(),()=>{e=!0}},[t,y]),(0,i.useEffect)(()=>{w.current?.setSpeed(o)},[o,y]),(0,i.useEffect)(()=>{w.current?.setMaxPixelCount(p)},[p,y]),(0,i.useEffect)(()=>{w.current?.setMinPixelRatio(h)},[h,y]),(0,i.useEffect)(()=>{w.current?.setFrame(n)},[n,y]);let E=(d=[b,v],x=i.useRef(void 0),_=i.useCallback(e=>{let i=d.map(i=>{if(null!=i){if("function"==typeof i){let t=i(e);return"function"==typeof t?t:()=>{i(null)}}return i.current=e,()=>{i.current=null}}});return()=>{i.forEach(e=>e?.())}},d),i.useMemo(()=>d.every(e=>null==e)?null:e=>{x.current&&(x.current(),x.current=void 0),null!=e&&(x.current=_(e))},d));return(0,l.jsx)("div",{ref:E,style:void 0!==s||void 0!==c?{width:"string"==typeof s&&!1===isNaN(+s)?+s:s,height:"string"==typeof c&&!1===isNaN(+c)?+c:c,...m}:m,...f})});c.displayName="ShaderMount",e.s(["ShaderMount",0,c],37881),e.s(["colorPropsAreEqual",0,function(e,i){for(let t in e){if("colors"===t){let t=Array.isArray(e.colors),a=Array.isArray(i.colors);if(!t||!a){if(!1===Object.is(e.colors,i.colors))return!1;continue}if(e.colors?.length!==i.colors?.length||!e.colors?.every((e,t)=>e===i.colors?.[t]))return!1;continue}if(!1===Object.is(e[t],i[t]))return!1}return!0}],573),e.s(["ShaderFitOptions",0,{none:0,contain:1,cover:2},"defaultObjectSizing",0,{fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},"defaultPatternSizing",0,{fit:"none",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0}],31967);let h=(e,i,t)=>Math.min(Math.max(e,i),t),p=[0,0,0,1];e.s(["getShaderColorFromString",0,function(e){if(Array.isArray(e))return 4===e.length?e:3===e.length?[...e,1]:p;if("string"!=typeof e)return p;let i,t,a,r=1;if(e.startsWith("#")){var o;[i,t,a,r]=(3===(o=(o=e).replace(/^#/,"")).length&&(o=o.split("").map(e=>e+e).join("")),6===o.length&&(o+="ff"),[parseInt(o.slice(0,2),16)/255,parseInt(o.slice(2,4),16)/255,parseInt(o.slice(4,6),16)/255,parseInt(o.slice(6,8),16)/255])}else if(e.startsWith("rgb")){let o;[i,t,a,r]=(o=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(o[1]??"0")/255,parseInt(o[2]??"0")/255,parseInt(o[3]??"0")/255,void 0===o[4]?1:parseFloat(o[4])]:[0,0,0,1]}else{let o;if(!e.startsWith("hsl"))return console.error("Unsupported color format",e),p;[i,t,a,r]=function(e){let i,t,a,[r,o,n,s]=e,l=r/360,u=o/100,c=n/100;if(0===o)i=t=a=c;else{let e=(e,i,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6)?e+(i-e)*6*t:t<.5?i:t<2/3?e+(i-e)*(2/3-t)*6:e,r=c<.5?c*(1+u):c+u-c*u,o=2*c-r;i=e(o,r,l+1/3),t=e(o,r,l),a=e(o,r,l-1/3)}return[i,t,a,s]}((o=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(o[1]??"0"),parseInt(o[2]??"0"),parseInt(o[3]??"0"),void 0===o[4]?1:parseFloat(o[4])]:[0,0,0,1])}return[h(i,0,1),h(t,0,1),h(a,0,1),h(r,0,1)]}],21449);let g=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,m=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,f=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,v=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`;e.s(["colorBandingFix",0,v,"declarePI",0,g,"proceduralHash21",0,f,"rotation2",0,m],93344),e.s(["readReducedMotionPreference",0,function(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches},"subscribeReducedMotionPreference",0,function(e){let i=window.matchMedia("(prefers-reduced-motion: reduce)");return i.addEventListener("change",e),()=>i.removeEventListener("change",e)}],35677)}]);