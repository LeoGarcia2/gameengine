import SceneManager from './classes/SceneManager.js';

const scene = new SceneManager( [ 75, window.innerWidth, window.innerHeight, 0.1, 1000 ] );

scene.blockManager.createBlock( 0xffe922, 0.5 );
scene.blockManager.createBlock( 0xffe922, -0.5 );

scene.moveCamera( 1, 1, 5 );
scene.rotateCamera( -0.02, 0.3, 0 );

scene.animate();

console.log( scene.blockManager );