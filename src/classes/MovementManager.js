import * as THREE from '../libs/three.js';

export default class MovementManager
{

    constructor ( controlled, speed ) {

        this.controlled = controlled;
        this.speed = speed;

        this.mouse = new THREE.Vector2;
        this.mouseTarget = new THREE.Vector3;

        this.moveUp = false;
        this.moveDown = false;

        this.moveForward = false;
        this.moveBackward = false;

        this.moveRight = false;
        this.moveLeft = false;
        
        document.addEventListener( 'keydown', this.onKeyDown );
        document.addEventListener( 'keyup', this.onKeyUp );

        document.addEventListener( 'mousemove', this.onMouseMove );

    }

    onKeyDown = (e) => {

        // console.log( e.keyCode );

        switch ( e.keyCode ) {

            case 37:
                this.moveLeft = true;
                break;

            case 38:
                this.moveForward = true;
                break;

            case 39:
                this.moveRight = true;
                break;

            case 40:
                this.moveBackward = true;
                break;

            case 32:
                this.moveUp = true;
                break;

            case 16:
                this.moveDown = true;
                break;

        }

    }

    onKeyUp = (e) => {

        switch ( e.keyCode ) {

            case 37:
                this.moveLeft = false;
                break;

            case 38:
                this.moveForward = false;
                break;

            case 39:
                this.moveRight = false;
                break;

            case 40:
                this.moveBackward = false;
                break;

            case 32:
                this.moveUp = false;
                break;

            case 16:
                this.moveDown = false;
                break;

        }

    }

    onMouseMove = ( e ) => {

        this.mouse.x += ( e.clientX - window.innerWidth / 2 );
        this.mouse.y += ( e.clientY - window.innerHeight / 2 );

    }

    animate = () => {

        this.mouseTarget.x = ( this.mouse.x - this.mouseTarget.x ) * 0.02;
        this.mouseTarget.y = ( this.mouse.y - this.mouseTarget.y ) * 0.02;
        this.mouseTarget.z = this.controlled.position.z;

        // this.controlled.lookAt( this.mouseTarget );

        if ( this.moveUp ) {
            this.controlled.position.y += this.speed;
        }

        if ( this.moveDown ) {
            this.controlled.position.y -= this.speed;
        }

        if ( this.moveForward ) {
            this.controlled.position.z -= this.speed;
        }

        if ( this.moveBackward ) {
            this.controlled.position.z += this.speed;
        }

        if ( this.moveRight ) {
            this.controlled.position.x += this.speed;
        }

        if ( this.moveLeft ) {
            this.controlled.position.x -= this.speed;
        }

    }

}