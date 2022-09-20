odoo.define('point_of_sale.WebcamButton', function(require) {
    'use strict';

    const { Component, useState } = owl;
    const { xml } = owl.tags;
    const { useRef } = owl.hooks;
    const ScanView = require('point_of_sale.ScanView');
    const Registries = require('point_of_sale.Registries');

    class WebcamButton extends Component {

        setup() {
            super.setup();
            this.state = useState({
                inCapture: false,
            });

            this.videoElem = null;
            this.camera = null;
            this.mediaRecorder = null;
            this.recordedBlobs = [];
        }

         willUnmount() {
            // this.stopVideo();
         }

         async sendVideo(videoBlob){
            console.log(videoBlob);
//            const formData = new FormData();
//            formData.append("frame", videoBlob);
//            const method = {
//                method: 'POST',
//                mode: 'no-cors',
//                headers: {
//                    'Content-Type': 'application/x-www-form-urlencoded'
//                },
//                body: formData
//            }
//            let url = window.location.origin + "/scan";
//            fetch(url, method);
//            const request = new XMLHttpRequest();
//            request.open("POST", url);
//            const data = request.send(formData)
//            console.log("returned data: ", data);
        }

        async startVideo(){
            this.camera = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            document.getElementById("loader").style.display = "block";
            this.videoElem = document.getElementById("video");
	        this.videoElem.srcObject = this.camera;

            this.mediaRecorder = new MediaRecorder(this.camera, { mimeType: 'video/webm' });

            this.mediaRecorder.addEventListener('dataavailable', (e) => {
                this.recordedBlobs.push(e.data);
            });

            this.mediaRecorder.addEventListener('stop', () => {
                let video = new Blob(this.recordedBlobs, { type: 'video/webm' });
                this.sendVideo(video);
            });

            this.mediaRecorder.start(10000)
        }

        stopVideo(){
            this.mediaRecorder.stop();
            this.camera.getTracks().forEach(function(track) {
              track.stop();
            });
            this.camera = null;
            document.getElementById("loader").style.display = "none";
            this.videoElem = null;
        }
    }

    WebcamButton.template = xml`
    <div class="w-btn-container">
        <div class="w-btn" t-on-click="startVideo">
            <i class="fa-regular fa-barcode-scan" />Scan Barcode Using Camera
        </div>
        <div id = "loader" class="loader" t-on-click="stopVideo">
            <div class="loading">
                <video id = "video" t-ref="video" autoplay="true"></video>
            </div>
        </div>
    </div>`;

    WebcamButton.components = { ScanView };

    Registries.Component.add(WebcamButton);

    return WebcamButton;
});