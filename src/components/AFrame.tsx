// @ts-nocheck

export default function AFrame() {
    return (
        <a-scene 
            embedded 
            arjs="sourceType: webcam; debugUIEnabled: false; trackingMethod: best; sourceWidth: 640; sourceHeight: 480; displayWidth: window.innerWidth; displayHeight: window.innerHeight;"
            vr-mode-ui="enabled: false"
            device-orientation-permission-ui="enabled: true"
        >
            
            {/* <a-box position="0 0.5 0" 
                rotation="90 0 0" 
                material="opacity: 0.5"
                animation="property: rotation; to: 90 360 0; dur: 9000; loop: true"></a-box> */}
            {/* <a-entity gltf-model="#pillow" position="0 0.25 0" scale="0.01 0.01 0.01"></a-entity> */}

            {/* GLB model */}
            <a-marker 
              preset="hiro" 
              smooth="true" 
              smoothCount="10" 
              smoothTolerance="0.01" 
              smoothThreshold="5"
            >
                <a-entity 
                    gltf-model={'url(./assets/neck_pillow.glb)'} 
                    position="0 -0.1 0"
                    animation="property: rotation; to: 90 360 0; dur: 9000; loop: true"
                    scale="0.2 0.2 0.2">
                </a-entity>
                {/* <a-text value="Hello, World!"></a-text> */}
            </a-marker>

            {/* Marker camera */}
            {/* <a-marker-camera preset="hiro"></a-marker-camera> */}
            <a-entity camera></a-entity>
        </a-scene>
    )
}
