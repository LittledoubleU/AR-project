// @ts-nocheck
export default function AFrame() {
    return (
        
        <a-scene embedded arjs>
            
            {/* <a-box position="0 0.5 0" 
                rotation="90 0 0" 
                material="opacity: 0.5"
                animation="property: rotation; to: 90 360 0; dur: 9000; loop: true"></a-box> */}
            {/* <a-entity gltf-model="#pillow" position="0 0.25 0" scale="0.01 0.01 0.01"></a-entity> */}

            {/* GLB model */}
            <a-entity 
                gltf-model="url(./assets/neck_pillow.glb)" 
                position="0 -0.1 0"
                animation="property: rotation; to: 90 360 0; dur: 9000; loop: true"
                scale="0.2ห 0.2 0.2">
            </a-entity>
            
            {/* Marker camera */}
            <a-marker-camera preset="hiro"></a-marker-camera>
        </a-scene>
    )
}
