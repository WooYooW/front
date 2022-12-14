/* eslint-disable */
import * as faceapi from 'face-api.js';
import React from 'react';

function FaceCam(props) {
  const [modelsLoaded, setModelsLoaded] = React.useState(false);
  const [captureVideo, setCaptureVideo] = React.useState(false);
  const [data, setData] = React.useState('감정을 알아봐요');

  const videoRef = React.useRef();
  const videoHeight = 480;
  const videoWidth = 640;
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + '/models';

      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]).then(setModelsLoaded(true));
    };
    loadModels();
  }, []);

  const startVideo = () => {
    setCaptureVideo(true);
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error('error:', err);
      });
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (canvasRef && canvasRef.current) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current
        );
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };

        faceapi.matchDimensions(canvasRef.current, displaySize);

        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceExpressions();

        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        let max = Object.keys(resizedDetections[0].expressions).reduce((a, b) =>
          resizedDetections[0].expressions[a] >
          resizedDetections[0].expressions[b]
            ? a
            : b
        );

        setData(max);

        canvasRef &&
          canvasRef.current &&
          canvasRef.current
            .getContext('2d')
            .clearRect(0, 0, videoWidth, videoHeight);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawFaceExpressions(
            canvasRef.current,
            resizedDetections
          );
      }
    }, 100);
  };

  const closeWebcam = () => {
    videoRef.current.pause();
    videoRef.current.srcObject.getTracks()[0].stop();
    setCaptureVideo(false);
  };

  if (data == 'happy') {
    setData('행복해요');
  }
  //  else if (data == 'angry') {
  //   setData('화가 났어요');
  // } else if (data == 'surprised') {
  //   setData('놀랐어요');
  // } else if (data == 'fearful') {
  //   setData('두려워요');
  // } else if (data == 'sad') {
  //   setData('슬퍼요');
  // } else if (data == 'disgusted') {
  //   setData('역겨워요');
  // } else {
  //   setData('표정을 지어보세요');
  // }

  return (
    <div>
      <span>{data}</span>
      <div style={{ textAlign: 'center', padding: '10px' }}>
        {captureVideo && modelsLoaded ? (
          <button
            onClick={closeWebcam}
            style={{
              cursor: 'pointer',
              backgroundColor: '#7887F0',
              color: 'white',
              padding: '15px',
              fontSize: '25px',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            닫아볼까요?
          </button>
        ) : (
          <button
            onClick={startVideo}
            style={{
              cursor: 'pointer',
              backgroundColor: '#7887F0',
              color: 'white',
              padding: '15px',
              fontSize: '25px',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            눌러볼까요?
          </button>
        )}
      </div>
      {captureVideo ? (
        modelsLoaded ? (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10px',
              }}
            >
              <video
                ref={videoRef}
                height={videoHeight}
                width={videoWidth}
                onPlay={handleVideoOnPlay}
                style={{ borderRadius: '10px' }}
              />
              <canvas ref={canvasRef} style={{ position: 'absolute' }} />
            </div>
          </div>
        ) : (
          <div>loading...</div>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default FaceCam;
