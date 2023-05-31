
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
effect = new THREE.StereoEffect( renderer );
    effect.setSize( window.innerWidth, window.innerHeight );
var controls = new THREE.DeviceOrientationControls(camera);

// Agregar eventos de clic izquierdo y derecho
let isLeftMouseDown = false;
let isRightMouseDown = false;
const maxCameraZ = 45;
const minCameraZ = 20;

document.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    isLeftMouseDown = true;
  } else if (event.button === 2) {
    isRightMouseDown = true;
  }
});

document.addEventListener("mouseup", function (event) {
  if (event.button === 0) {
    isLeftMouseDown = false;
  } else if (event.button === 2) {
    isRightMouseDown = false;
  }
});

//Piso
const geometrypiso = new THREE.BoxGeometry(70, 0.1, 120);
const textPiso = new THREE.TextureLoader().load("Texturas/suelo.jpg");
const materialPiso = new THREE.MeshBasicMaterial({ map: textPiso });
const Piso = new THREE.Mesh(geometrypiso, materialPiso);
scene.add(Piso);
Piso.position.y = 0;
Piso.position.z = 30;
Piso.castShadow = false;
Piso.receiveShadow = true;

//Paredes
const geometrypared = new THREE.BoxGeometry(0.1, 40, 120);
const texturapared = new THREE.TextureLoader().load("Texturas/pared.jpg");
const materialpared = new THREE.MeshBasicMaterial({ map: texturapared });
const geometrypared1 = new THREE.BoxGeometry(0.1, 40, 70);
const texturapared1 = new THREE.TextureLoader().load("Texturas/pared.jpg");
const materialpared1 = new THREE.MeshBasicMaterial({ map: texturapared1 });

const Pared1 = new THREE.Mesh(geometrypared, materialpared);
scene.add(Pared1);
Pared1.position.x = 35;
Pared1.position.y = 20;
Pared1.castShadow = false;
Pared1.receiveShadow = true;

const Pared2 = new THREE.Mesh(geometrypared, materialpared);
scene.add(Pared2);
Pared2.position.x = -35;
Pared2.position.y = 20;
Pared2.castShadow = false;
Pared2.receiveShadow = true;

const Pared3 = new THREE.Mesh(geometrypared1, materialpared1);
scene.add(Pared3);
Pared3.rotation.y = 1.5708;
Pared3.position.x = 0;
Pared3.position.y = 20;
Pared3.position.z = -30;
Pared3.castShadow = false;
Pared3.receiveShadow = true;

const Pared4 = new THREE.Mesh(geometrypared1, materialpared1);
scene.add(Pared4);
Pared4.rotation.y = -1.5708;
Pared4.position.x = 0;
Pared4.position.y = 20;
Pared4.position.z = 90;
Pared4.castShadow = false;
Pared4.receiveShadow = true;

Piso.add(Pared1);
Piso.add(Pared2);

//Geometria Cuadros
const geometrycuadros = new THREE.BoxGeometry(0.4, 1, 15);
const texturacuadros = new THREE.TextureLoader().load("Texturas/madera.jpg");
const materialcuadros = new THREE.MeshBasicMaterial({ map: texturacuadros });

const geometrycuadros1 = new THREE.BoxGeometry(0.4, 21, 1);
const texturacuadros1 = new THREE.TextureLoader().load("Texturas/madera.jpg");
const materialcuadros1 = new THREE.MeshBasicMaterial({ map: texturacuadros1 });


//Marcos horizontales Pared 1
const cuadro11 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro11);
cuadro11.position.x = 34.6;
cuadro11.position.y = 33;
cuadro11.position.z = -4;
cuadro11.castShadow = false;
cuadro11.receiveShadow = true;
const cuadro12 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro12);
cuadro12.position.x = 34.6;
cuadro12.position.y = 11;
cuadro12.position.z = -4;
cuadro12.castShadow = false;
cuadro12.receiveShadow = true;

const cuadro21 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro21);
cuadro21.position.x = 34.6;
cuadro21.position.y = 33;
cuadro21.position.z = 30;
cuadro21.castShadow = false;
cuadro21.receiveShadow = true;
const cuadro22 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro22);
cuadro22.position.x = 34.6;
cuadro22.position.y = 11;
cuadro22.position.z = 30;
cuadro22.castShadow = false;
cuadro22.receiveShadow = true;

const cuadro31 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro31);
cuadro31.position.x = 34.6;
cuadro31.position.y = 33;
cuadro31.position.z = 65;
cuadro31.castShadow = false;
cuadro31.receiveShadow = true;
const cuadro32 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro32);
cuadro32.position.x = 34.6;
cuadro32.position.y = 11;
cuadro32.position.z = 65;
cuadro32.castShadow = false;
cuadro32.receiveShadow = true;

//Marcos horizontales Pared 2
const cuadro41 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro41);
cuadro41.position.x = -34.6;
cuadro41.position.y = 33;
cuadro41.position.z = -4;
cuadro41.castShadow = false;
cuadro41.receiveShadow = true;
const cuadro42 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro42);
cuadro42.position.x = -34.6;
cuadro42.position.y = 11;
cuadro42.position.z = -4;
cuadro42.castShadow = false;
cuadro42.receiveShadow = true;

const cuadro51 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro51);
cuadro51.position.x = -34.6;
cuadro51.position.y = 33;
cuadro51.position.z = 30;
cuadro51.castShadow = false;
cuadro51.receiveShadow = true;
const cuadro52 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro52);
cuadro52.position.x = -34.6;
cuadro52.position.y = 11;
cuadro52.position.z = 30;
cuadro52.castShadow = false;
cuadro52.receiveShadow = true;

const cuadro61 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro61);
cuadro61.position.x = -34.6;
cuadro61.position.y = 33;
cuadro61.position.z = 65;
cuadro61.castShadow = false;
cuadro61.receiveShadow = true;
const cuadro62 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadro62);
cuadro62.position.x = -34.6;
cuadro62.position.y = 11;
cuadro62.position.z = 65;
cuadro62.castShadow = false;
cuadro62.receiveShadow = true;

//Marcos verticales Pared 1
const cuadro13 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro13);
cuadro13.position.x = 34.6;
cuadro13.position.y = 22;
cuadro13.position.z = -11;
cuadro13.castShadow = false;
cuadro13.receiveShadow = true;

const cuadro14 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro14);
cuadro14.position.x = 34.6;
cuadro14.position.y = 22;
cuadro14.position.z = 3;
cuadro14.castShadow = false;
cuadro14.receiveShadow = true;

const cuadro23 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro23);
cuadro23.position.x = 34.6;
cuadro23.position.y = 22;
cuadro23.position.z = 23;
cuadro23.castShadow = false;
cuadro23.receiveShadow = true;

const cuadro24 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro24);
cuadro24.position.x = 34.6;
cuadro24.position.y = 22;
cuadro24.position.z = 37;
cuadro24.castShadow = false;
cuadro24.receiveShadow = true;

const cuadro33 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro33);
cuadro33.position.x = 34.6;
cuadro33.position.y = 22;
cuadro33.position.z = 58;
cuadro33.castShadow = false;
cuadro33.receiveShadow = true;

const cuadro34 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro34);
cuadro34.position.x = 34.6;
cuadro34.position.y = 22;
cuadro34.position.z = 72;
cuadro34.castShadow = false;
cuadro34.receiveShadow = true;

//Marcos verticales Pared 2
const cuadro43 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro43);
cuadro43.position.x = -34.6;
cuadro43.position.y = 22;
cuadro43.position.z = -11;
cuadro43.castShadow = false;
cuadro43.receiveShadow = true;

const cuadro44 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro44);
cuadro44.position.x = -34.6;
cuadro44.position.y = 22;
cuadro44.position.z = 3;
cuadro44.castShadow = false;
cuadro44.receiveShadow = true;

const cuadro53 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro53);
cuadro53.position.x = -34.6;
cuadro53.position.y = 22;
cuadro53.position.z = 23;
cuadro53.castShadow = false;
cuadro53.receiveShadow = true;

const cuadro54 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro54);
cuadro54.position.x = -34.6;
cuadro54.position.y = 22;
cuadro54.position.z = 37;
cuadro54.castShadow = false;
cuadro54.receiveShadow = true;

const cuadro63 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro63);
cuadro63.position.x = -34.6;
cuadro63.position.y = 22;
cuadro63.position.z = 58;
cuadro63.castShadow = false;
cuadro63.receiveShadow = true;

const cuadro64 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadro64);
cuadro64.position.x = -34.6;
cuadro64.position.y = 22;
cuadro64.position.z = 72;
cuadro64.castShadow = false;
cuadro64.receiveShadow = true;

//Marcos horizontales Pared 5
const cuadroh5 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadroh5);
cuadroh5.position.x = 0;
cuadroh5.position.y = 33;
cuadroh5.position.z = 89.6;
cuadroh5.rotation.y = 1.5708;
cuadroh5.castShadow = false;
cuadroh5.receiveShadow = true;
const cuadroh52 = new THREE.Mesh(geometrycuadros, materialcuadros);
scene.add(cuadroh52);
cuadroh52.position.x = 0;
cuadroh52.position.y = 11;
cuadroh52.position.z = 89.6;
cuadroh52.rotation.y = 1.5708;
cuadroh52.castShadow = false;
cuadroh52.receiveShadow = true;


//Marcos verticales Pared 5
const cuadroh522 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadroh522);
cuadroh522.position.x = -7;
cuadroh522.position.y = 22;
cuadroh522.position.z = 89.6;
cuadroh522.rotation.y = 1.5708;
cuadroh522.castShadow = false;
cuadroh522.receiveShadow = true;

const cuadroh55 = new THREE.Mesh(geometrycuadros1, materialcuadros1);
scene.add(cuadroh55);
cuadroh55.position.x = 7;
cuadroh55.position.y = 22;
cuadroh55.position.z = 89.6;
cuadroh55.rotation.y = 1.5708;
cuadroh55.castShadow = false;
cuadroh55.receiveShadow = true;

//Pinturas
const geometrypintura = new THREE.BoxGeometry(0.2, 21, 13);
const texturapintura = new THREE.TextureLoader().load("Texturas/grito.jpg");
const materialpintura = new THREE.MeshBasicMaterial({ map: texturapintura });
const texturapintura3 = new THREE.TextureLoader().load("Texturas/van1.jpg");
const materialpintura3 = new THREE.MeshBasicMaterial({ map: texturapintura3 });
const texturapintura4 = new THREE.TextureLoader().load("Texturas/van2.jpg");
const materialpintura4 = new THREE.MeshBasicMaterial({ map: texturapintura4 });
const texturapintura5 = new THREE.TextureLoader().load("Texturas/van3.jpg");
const materialpintura5 = new THREE.MeshBasicMaterial({ map: texturapintura5 });
const texturapintura6 = new THREE.TextureLoader().load("Texturas/van4.jpg");
const materialpintura6 = new THREE.MeshBasicMaterial({ map: texturapintura6 });
const texturapintura7 = new THREE.TextureLoader().load("Texturas/van5.jpg");
const materialpintura7 = new THREE.MeshBasicMaterial({ map: texturapintura7 });
const texturapintura8 = new THREE.TextureLoader().load("Texturas/van6.jpg");
const materialpintura8 = new THREE.MeshBasicMaterial({ map: texturapintura8 });

const pintura1 = new THREE.Mesh(geometrypintura, materialpintura);
scene.add(pintura1);
pintura1.position.x = 0;
pintura1.position.y = 22;
pintura1.position.z = 89.6;
pintura1.rotation.y = 1.5708;
pintura1.castShadow = false;
pintura1.receiveShadow = true;

const pintura3 = new THREE.Mesh(geometrypintura, materialpintura3);
scene.add(pintura3);
pintura3.position.x = 34.6;
pintura3.position.y = 22;
pintura3.position.z =-4;
pintura3.castShadow = false;
pintura3.receiveShadow = true;

const pintura4 = new THREE.Mesh(geometrypintura, materialpintura4);
scene.add(pintura4);
pintura4.position.x = 34.6;
pintura4.position.y = 22;
pintura4.position.z =30;
pintura4.castShadow = false;
pintura4.receiveShadow = true;

const pintura5 = new THREE.Mesh(geometrypintura, materialpintura5);
scene.add(pintura5);
pintura5.position.x = 34.6;
pintura5.position.y = 22;
pintura5.position.z =65;
pintura5.castShadow = false;
pintura5.receiveShadow = true;

const pintura6 = new THREE.Mesh(geometrypintura, materialpintura6);
scene.add(pintura6);
pintura6.position.x = -34.6;
pintura6.position.y = 22;
pintura6.position.z = -4;
pintura6.castShadow = false;
pintura6.receiveShadow = true;

const pintura7 = new THREE.Mesh(geometrypintura, materialpintura7);
scene.add(pintura7);
pintura7.position.x = -34.6;
pintura7.position.y = 22;
pintura7.position.z =30;
pintura7.castShadow = false;
pintura7.receiveShadow = true;

const pintura8 = new THREE.Mesh(geometrypintura, materialpintura8);
scene.add(pintura8);
pintura8.position.x = -34.6;
pintura8.position.y = 22;
pintura8.position.z =65;
pintura8.castShadow = false;
pintura8.receiveShadow = true;

const geometry = new THREE.BoxGeometry(1, 1, 1); // Cambia los valores según la geometría que deseas utilizar
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Cambia los valores según el material que deseas utilizar

camera.position.z = 50;
camera.position.y = 25;


// Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function createMessageGeometry(message) {
    const textGeometry = new THREE.TextGeometry(message, {
      font: new THREE.FontLoader().load('fonts/helvetiker_bold.typeface.json'),
      size: 1,
      height: 0.1,
    });
  
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  
    return textMesh;
  }

let selectedGeometry = null;
let messageGeometry = null;

function raycastFromCamera() {
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);

  for (let i = 0; i < intersects.length; i++) {
    if (intersects[i].object instanceof THREE.Mesh) {
      const selectedObject = intersects[i].object;

      if (selectedObject === pintura1 || selectedObject === pintura3 || selectedObject === pintura4 || selectedObject === pintura5 || selectedObject === pintura6 || selectedObject === pintura7 || selectedObject === pintura8) {
        if (selectedGeometry !== null) {
          scene.remove(selectedGeometry);
          selectedGeometry = null;
        }

        if (messageGeometry !== null) {
          scene.remove(messageGeometry);
          messageGeometry = null;
        }

        const geometry = new THREE.BoxGeometry(1, 5, 8);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        selectedGeometry = new THREE.Mesh(geometry, material);
        scene.add(selectedGeometry);

        // Ajustar la posición de la geometría seleccionada
        selectedGeometry.position.copy(selectedObject.position);
        selectedGeometry.position.z += 1; // Mover la geometría hacia adelante

        selectedGeometry.rotation.copy(selectedObject.rotation);

        // Crear el mensaje en la geometría
        const message = "¡Van Gogh!";
        messageGeometry = createMessageGeometry(message);
        messageGeometry.position.copy(selectedGeometry.position);
        messageGeometry.position.y += 3; // Ajustar la posición del mensaje en la geometría

        scene.add(messageGeometry);
      }
    }
  }
}

// Render loop
function animate() {
    requestAnimationFrame(animate);
  
    // Control de la posición de la cámara con los botones del mouse
    if (isLeftMouseDown) {
      camera.position.z -= 0.1;
      if (camera.position.z < minCameraZ) {
        camera.position.z = minCameraZ;
      }
    }
  
    if (isRightMouseDown) {
      camera.position.z += 0.1;
      if (camera.position.z > maxCameraZ) {
        camera.position.z = maxCameraZ;
      }
    }
  
    raycastFromCamera(); // Llamar a la función raycastFromCamera
  
    controls.update();
    effect.render(scene, camera);
}
animate()