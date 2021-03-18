import * as THREE from '../libs/three.js';

export default class MovementManager
{

    constructor ( controlled ) {

        document.addEventListener( 'keydown', function ( e ) {

            console.log( e.keyCode );

            switch ( e.keyCode ) {

                case 37:
                    controlled.position.x -= 0.1;
                    break;

                case 38:
                    controlled.position.z -= 0.1;
                    break;

                case 39:
                    controlled.position.x += 0.1;
                    break;

                case 40:
                    controlled.position.z += 0.1;
                    break;

                case 32:
                    controlled.position.y += 0.1;
                    break;

                case 16:
                    controlled.position.y -= 0.1;
                    break;

            }

        } );

    }

}