import { useEffect, useRef } from 'react'
import * as THREE from 'three'

declare const THREEx: any;

export default function ARScene() {

    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene + Camera
        const scene = new THREE.Scene();
        const camera = new THREE.Camera();
        scene.add(camera);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);
    
        // --- AR.js setup ---
        const arToolkitSource = new THREEx.ArToolkitSource({
          sourceType: "webcam",
        });

        arToolkitSource.init(() => {
            setTimeout(() => {
                arToolkitSource.onResize();
                arToolkitSource.copySizeTo(renderer.domElement);
            }, 2000);
        });
    
        const arToolkitContext = new THREEx.ArToolkitContext({
            cameraParametersUrl: "data/camera_para.dat",
            detectionMode: "mono",
        });
    
        arToolkitContext.init(() => {
            camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
        });
    
        // --- Marker setup ---
        const markerRoot = new THREE.Group();
        scene.add(markerRoot);
    
        // const markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
        //     type: "pattern",
        //     patternUrl: "./assets/test.patt", // custom marker
        // });

        // console.log(markerControls)
    
        // --- Example 3D Object ---
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.7 });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.y = 0.5;
        markerRoot.add(cube);
    
        // --- Animate ---
        function animate() {
            requestAnimationFrame(animate);
      
            if (arToolkitSource.ready) {
                arToolkitContext.update(arToolkitSource.domElement);
            }
    
            renderer.render(scene, camera);
        }
    
        animate();
    
        return () => {
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };

    }, [])

  return <div ref={mountRef} />
}
