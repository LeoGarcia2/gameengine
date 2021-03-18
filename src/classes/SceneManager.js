import * as THREE from '../libs/three.js';

export default class SceneManager
{

    constructor ( width, height ) {

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGL1Renderer();

        this.renderer.setSize( width, height );

        document.body.appendChild( this.renderer.domElement );

    }

    animate = () => {

        if ( this.cameraManager?.mainCamera ) {

            requestAnimationFrame( this.animate );
            this.renderer.render( this.scene, this.cameraManager.mainCamera );

        }

    }

}