// Aviso simples caso o arquivo de vídeo não seja encontrado ou não carregue
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.video-player');

  if (!video) return;

  video.addEventListener('error', () => {
    console.error('Não foi possível carregar o vídeo em videos/mala.mp4. Verifique se o arquivo existe nesse caminho.');
  });
});
