import * as THREE from './libs/three.js';
import SceneManager from './classes/SceneManager.js';
import BlockManager from './classes/BlockManager.js';
import CameraManager from './classes/CameraManager.js';
import MovementManager from './classes/MovementManager.js';

const scene = new SceneManager( window.innerWidth/2, window.innerHeight/2 );
const ambientLight = new THREE.AmbientLight( 0x040404, 1 );
const mainLight = new THREE.DirectionalLight( 0xffffff, 1 );

scene.cameraManager = new CameraManager( scene.scene, [ 75, window.innerWidth/2, window.innerHeight/2, 0.1, 1000 ]);
scene.cameraManager.mainCamera.position.z = 5;

scene.movementManager = new MovementManager( scene.cameraManager.mainCamera, 0.1 );

scene.blockManager = new BlockManager( scene.scene );
scene.blockManager.createBlock( 0xffe922, 0.5 );
scene.blockManager.createBlock( 0xffe922, -0.5 );

scene.scene.add( ambientLight );
scene.scene.add( mainLight );

scene.animate();