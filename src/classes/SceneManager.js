import * as THREE from '../libs/three.js';
import BlockManager from './BlockManager.js';

export default class SceneManager
{

    constructor ( camera ) {

        let [ fov, width, height, closeSnap, farSnap ] = camera;

        this.scene = new THREE.Scene();

        this.mainCamera = new THREE.PerspectiveCamera( fov, width / height, closeSnap, farSnap );

        this.renderer = new THREE.WebGL1Renderer();

        this.renderer.setSize( width, height );

        this.blockManager = new BlockManager( this.scene );

        this.ambientLight = new THREE.AmbientLight( 0x040404, 1 );
        this.mainLight = new THREE.DirectionalLight( 0xffffff, 1 );

        this.scene.add(this.ambientLight);
        this.scene.add(this.mainLight);

        document.body.appendChild( this.renderer.domElement );

    }

    animate = () => {

        requestAnimationFrame( this.animate );
        this.renderer.render( this.scene, this.mainCamera );

        this.blockManager.blocks.forEach( ( block ) => {

        } );

    }

    moveCamera = (
        x = this.mainCamera.position.x, 
        y = this.mainCamera.position.y, 
        z = this.mainCamera.position.z) => {

        this.mainCamera.position.x = x;
        this.mainCamera.position.y = y;
        this.mainCamera.position.z = z;

    }

    rotateCamera = (
        x = this.mainCamera.rotation.x, 
        y = this.mainCamera.rotation.y, 
        z = this.mainCamera.rotation.z) => {

        this.mainCamera.rotation.x = x;
        this.mainCamera.rotation.y = y;
        this.mainCamera.rotation.z = z;

    }

}