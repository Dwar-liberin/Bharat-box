// import { videoLoader } from "https://cdn.jsdelivr.net/gh/aadarshbabu/lib/videoLoader/videoLoader.js";
// import { loadGLTF } from "https://cdn.jsdelivr.net/gh/aadarshbabu/lib/loader.js";
// import * as THREE from "three";
// import { MindARThree } from "mindar-image-three";
// import { FontLoader } from "https://unpkg.com/three@0.160.0/examples/jsm/loaders/FontLoader.js";
// import { TextGeometry } from "https://unpkg.com/three@0.160.0/examples/jsm/geometries/TextGeometry.js";
// import * as THREE from "./three.js-r132/build/three.module.js";
import {
  loadGLTF,
  loadTexture,
  loadTextures,
  loadVideo,
} from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", () => {
  async function start() {
    const textureLoader = new THREE.TextureLoader();
    const mindThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "./assets/targetBrocher.mind",
    });

    const { renderer, scene, camera } = mindThree;
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    const loadFont = () => {
      return new Promise((resolve, reject) => {
        const loader = new THREE.FontLoader();

        loader.load(
          "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
          (font) => {
            resolve(font); // Resolve the promise with the loaded font
          },
          undefined, // Progress callback (optional)
          (error) => {
            reject(error); // Reject the promise with the error
          }
        );
      });
    };

    const font = await loadFont();

    const target_image10e19e42e5d_iconGeometry = new THREE.PlaneGeometry(
      1,
      1.4361851332398317
    );
    const target_image10e19e42e5d_texture = await loadTexture(
      "assets/Image (2).jpg"
    );
    const target_image10e19e42e5d_image = new THREE.MeshBasicMaterial({
      map: target_image10e19e42e5d_texture,
    });
    const target_image10e19e42e5d = new THREE.Mesh(
      target_image10e19e42e5d_iconGeometry,
      target_image10e19e42e5d_image
    );
    target_image10e19e42e5d.scale.set(1, 1, 1);
    target_image10e19e42e5d.position.set(0, 0, 0);
    target_image10e19e42e5d.rotation.set(0, 0, 0);

    const logo_acfdc20e_461dacfdc_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_acfdc20e_461dacfdc_texture = await loadTexture(
      "assets/circle-wa-sm_113.png"
    );
    const logo_acfdc20e_461dacfdc_image = new THREE.MeshBasicMaterial({
      map: logo_acfdc20e_461dacfdc_texture,
    });
    const logo_acfdc20e_461dacfdc = new THREE.Mesh(
      logo_acfdc20e_461dacfdc_iconGeometry,
      logo_acfdc20e_461dacfdc_image
    );
    logo_acfdc20e_461dacfdc.scale.set(0.4, 0.4, 1);
    logo_acfdc20e_461dacfdc.position.set(-0.5, -2, 0);
    logo_acfdc20e_461dacfdc.rotation.set(0, 0, 0);
    logo_acfdc20e_461dacfdc.userData.clickable = true;
    const logo_fa53a11b_6be8fa53a_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_fa53a11b_6be8fa53a_texture = await loadTexture(
      "assets/circle-web-sm_114.png"
    );
    const logo_fa53a11b_6be8fa53a_image = new THREE.MeshBasicMaterial({
      map: logo_fa53a11b_6be8fa53a_texture,
    });
    const logo_fa53a11b_6be8fa53a = new THREE.Mesh(
      logo_fa53a11b_6be8fa53a_iconGeometry,
      logo_fa53a11b_6be8fa53a_image
    );
    logo_fa53a11b_6be8fa53a.scale.set(0.4, 0.4, 1);
    logo_fa53a11b_6be8fa53a.position.set(0.2, -2, 0);
    logo_fa53a11b_6be8fa53a.rotation.set(0, 0, 0);
    logo_fa53a11b_6be8fa53a.userData.clickable = true;
    const logo_7fe9733b_0dcb7fe97_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_7fe9733b_0dcb7fe97_texture = await loadTexture(
      "assets/circle-mail-sm_125.png"
    );
    const logo_7fe9733b_0dcb7fe97_image = new THREE.MeshBasicMaterial({
      map: logo_7fe9733b_0dcb7fe97_texture,
    });
    const logo_7fe9733b_0dcb7fe97 = new THREE.Mesh(
      logo_7fe9733b_0dcb7fe97_iconGeometry,
      logo_7fe9733b_0dcb7fe97_image
    );
    logo_7fe9733b_0dcb7fe97.scale.set(0.4, 0.4, 1);
    logo_7fe9733b_0dcb7fe97.position.set(0.9, -2, 0);
    logo_7fe9733b_0dcb7fe97.rotation.set(0, 0, 0);
    logo_7fe9733b_0dcb7fe97.userData.clickable = true;

    // const [video_asset_4e2e1582d8e, video_asset_4e2e1582d8e_video] =
    //   await videoLoader({
    //     path: "assets/MicrosoftTeams-video.mp4",
    //     ratio: 1,
    //   });
    const planeGeometry = new THREE.PlaneGeometry(1, 0.4);

    const portfolioItem0Video = await loadVideo("assets/Bharat.mp4");

    const portfolioItem0VideoTexture = new THREE.VideoTexture(
      portfolioItem0Video
    );
    const portfolioItem0VideoMaterial = new THREE.MeshBasicMaterial({
      map: portfolioItem0VideoTexture,
    });

    const video_asset_4e2e1582d8e = new THREE.Mesh(
      planeGeometry,
      portfolioItem0VideoMaterial
    );

    video_asset_4e2e1582d8e.position.set(1.5, 0, 0);

    const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;

    portfolioItem0Video.muted = isIOS;
    portfolioItem0Video.autoPlay = true;

    video_asset_4e2e1582d8e.scale.set(2, 2.7, 1);

    video_asset_4e2e1582d8e.rotation.set(0, 0, 0);

    document.body.addEventListener("click", (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      const mouse = new THREE.Vector2(mouseX, mouseY);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        let o = intersects[0].object;

        while (o.parent && !o.userData?.clickable) {
          o = o.parent;
        }

        if (o.userData.clickable && o === logo_acfdc20e_461dacfdc) {
          window.location.href = "https://wa.me/918175814482/?text=hi";
        }

        if (o.userData.clickable && o === logo_fa53a11b_6be8fa53a) {
          window.location.href = "https://bharatbox.sandbox.game/";
        }

        if (o.userData.clickable && o === logo_7fe9733b_0dcb7fe97) {
          window.location.href = "mailto:sandeep@reworks.in";
        }
      }
    });

    const anchor = mindThree.addAnchor(0);
    // anchor.group.add(target_image10e19e42e5d)
    anchor.group.add(logo_acfdc20e_461dacfdc);
    anchor.group.add(logo_fa53a11b_6be8fa53a);
    anchor.group.add(logo_7fe9733b_0dcb7fe97);
    anchor.group.add(video_asset_4e2e1582d8e);

    anchor.onTargetFound = () => {
      portfolioItem0Video.play();
    };

    anchor.onTargetLost = () => {
      portfolioItem0Video.pause();
    };

    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }

  start();
});
