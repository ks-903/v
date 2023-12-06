const video = document.getElementById('input');
const canvas = document.getElementById('output');
const canvas2 = document.querySelector("#picture");
const ctx = canvas.getContext('2d');

// ビデオ再生用のビデオ要素
const gestureVideo = document.getElementById('gestureVideo');
const playButton = document.getElementById('playButton');

// Add CSS styles to hide the camera feed elements
video.style.display = 'none'; // Hide the camera video element
canvas.style.display = ''; // Hide the canvas element

  
  

    
const config = {
  locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
};
const hands = new Hands(config);

//カメラからの映像をhands.jsで使えるようにする
const camera = new Camera(video, {
  onFrame: async () => {
    await hands.send({image: video});
  },
  audio: false,
  video: {
  width: 600,
  height: 400,
  facingMode: "user"   // フロントカメラを利用する
      // facingMode: { exact: "environment" }  // リアカメラを利用する場合
}
});

hands.setOptions({
    maxNumHands: 2,              //検出する手の最大数
    modelComplexity: 1,          //ランドマーク検出精度(0か1)
    minDetectionConfidence: 0.5, //手を検出するための信頼値(0.0~1.0)
    minTrackingConfidence: 0.5   //ランドマーク追跡の信頼度(0.0~1.0)
});



//形状認識した結果の取得
hands.onResults(results => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(results.image,0,0,canvas.width,canvas.height);
  
  if(results.multiHandLandmarks) {
    results.multiHandLandmarks.forEach(marks => {
        // 各指の末端のランドマークを取得
        const fingerTips = [marks[4], marks[8], marks[12], marks[16], marks[20]];
  
        // 指の数をカウント
        let fingerCount = 0;
        for (let i = 0; i < fingerTips.length; i++) {
          // 画面の下半分に指がある場合にカウント
          if (fingerTips[i].y * canvas.height < canvas.height / 2) {
            fingerCount++;
          }
        }
  
        console.log(`検出された指の数: ${fingerCount}`);
        // ピースサインを検出する条件をチェック
      const OneSign = fingerCount === 1; // 1本の指を曲げた状態をピースサインとみなす 
      const isPeaceSign = fingerCount === 2; // 2本の指を曲げた状態をピースサインとみなす
      const isTreeSign = fingerCount === 3; // 3本の指を曲げた状態をピースサインとみなす
      const isForSign = fingerCount === 4; // 4本の指を曲げた状態をピースサインとみなす
      const isPaperSign = fingerCount === 5; // 5本の指を曲げた状態をピースサインとみなす
    //   const isCrash  = fingerCount === 0; 
    //   const nonCrash = fingerCount !== 2345;

        if (OneSign) {
          
     } else if (isPeaceSign){
        

      } else if (isTreeSign) {

      } else if (isForSign){
        

      } else if (isPaperSign) {
    
          
         
        }
        // 指の数を div 要素に表示
      const fingerCountDisplay = document.getElementById('fingerCountDisplay');
      fingerCountDisplay.textContent = `検出された指の数: ${fingerCount}`;
     

    });

    
    results.multiHandLandmarks.forEach(marks => {
      // 緑色の線で骨組みを可視化
      drawConnectors(ctx, marks, HAND_CONNECTIONS, {color: '#0f0'});

      // 赤色でランドマークを可視化
      drawLandmarks(ctx, marks, {color: '#f00'});

      
    })
  }
});


camera.start()


