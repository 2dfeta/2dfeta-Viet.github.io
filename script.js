const audio = document.getElementById('bg-music');

function enableAudio() {
  if (!audio) return;
  audio.volume = 0.35;
  audio.muted = false;
  audio.loop = true;
  audio.autoplay = true;

  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => {
      // Một số trình duyệt chặn autoplay lần đầu, nhưng sẽ phát sau khi có tương tác hoặc khi truy cập qua localhost.
    });
  }
}

window.addEventListener('DOMContentLoaded', enableAudio);
window.addEventListener('load', enableAudio);
document.addEventListener('pointerdown', enableAudio, { once: true });
document.addEventListener('keydown', enableAudio, { once: true });
