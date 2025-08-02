document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      alert('Доступно тільки демо');
    });
  }

  const learnBtn = document.getElementById('learn-btn');
  if (learnBtn) {
    learnBtn.addEventListener('click', () => {
      const section = document.getElementById('how-it-works');
      if (section) {
        section.scrollIntoView();
      }
    });
  }
});
