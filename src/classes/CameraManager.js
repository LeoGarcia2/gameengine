import * as THREE from '../libs/three.js';

export default class CameraManager
{

    constructor ( scene, camera ) {

        const [ fov, width, height, closeSnap, farSnap ] = camera;

        this.mainCamera = new THREE.PerspectiveCamera( fov, width / height, closeSnap, farSnap );

        this.blocks = [];
        this.scene = scene;

    }

}