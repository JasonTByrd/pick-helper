import * as THREE from "three";


export default class PickHelper {

    constructor(scene, camera) {
        this.pickPosition = {x: 0, y: 0};
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
        this.hover = null;
        this.scene = scene;
        this.camera = camera;
    }

    pick(event, scene, camera, mount) {
        this.setPickPosition(event, mount);
        let normalizedPosition = this.pickPosition;

        this.raycaster.setFromCamera(normalizedPosition, camera);

        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        if (intersectedObjects.length) {
        this.pickedObject = intersectedObjects[0].object;
        }
        else {
        this.pickedObject = false;
        }
        return this.pickedObject;
    }

    pickOnce(event, scene, camera, mount) {
        this.setPickPosition(event, mount);
        let normalizedPosition = this.pickPosition;

        this.raycaster.setFromCamera(normalizedPosition, camera);

        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        if (intersectedObjects.length) {
        if(intersectedObjects[0].object === this.pickedObject) {
            return false;
        }
        this.pickedObject = intersectedObjects[0].object;
        }
        else {
        this.pickedObject = false;
        }
        return this.pickedObject;
    }

    setPickPosition(event, mount) {
        const pos = this.getCanvasRelativePosition(event, mount);
        this.pickPosition.x = (pos.x / mount.clientWidth ) *  2 - 1;
        this.pickPosition.y = (pos.y / mount.clientHeight) * -2 + 1;  // note we flip Y
    }

    getCanvasRelativePosition(event, mount) {
        const rect = mount.getBoundingClientRect();
        return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        };
    }

    clearPickPosition() {
        // unlike the mouse which always has a position
        // if the user stops touching the screen we want
        // to stop picking. For now we just pick a value
        // unlikely to pick something
        this.pickPosition.x = -100000;
        this.pickPosition.y = -100000;
    }
  
}