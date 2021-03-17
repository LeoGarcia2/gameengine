import * as THREE from '../libs/three.js';

export default class BlockManager
{

    constructor ( scene ) {

        this.blocks = [];
        this.scene = scene;

    }

    createBlock = ( hexColor, x = 0, y = 0, z = 0 ) => {

        const material = new THREE.MeshToonMaterial( { color: hexColor } );
        const geometry = new THREE.BoxGeometry();
        const newBlock = new THREE.Mesh( geometry, material );

        this.blocks.push( newBlock );
        this.scene.add( newBlock );

        newBlock.position.x = x;
        newBlock.position.y = y;
        newBlock.position.z = z;

    }

}