// speech-recognition.js

// 音声認識の初期化
const recognition = new webkitSpeechRecognition(); // Chromeの場合

// 音声認識の設定
recognition.continuous = false; // 1回の認識で停止
recognition.lang = 'ja-JP'; // 言語を日本語に設定

// 音声認識の結果を処理
recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript.trim(); // 認識されたテキストを取得

    // 認識されたテキストに基づいて操作を実行
    if (transcript.includes('はい')) {
        // "計算" というキーワードが含まれていた場合、計算ボタンをクリック
        document.getElementById('result1').click();
    } else if (transcript.includes('リセット')) {
        // "リセット" というキーワードが含まれていた場合、リセットボタンをクリック
        document.getElementById('reset1').click();
    }
};

// 音声認識を開始するためのボタンを追加
const startRecognitionButton = document.createElement('button');
startRecognitionButton.textContent = '音声認識を開始';
startRecognitionButton.addEventListener('click', () => {
    recognition.start();
});

// ページにボタンを追加
document.body.appendChild(startRecognitionButton);
