// FAQ accordion functionality
window.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.faq-toggle');
  toggles.forEach(toggle => {
    const content = toggle.nextElementSibling;
    if (content) {
      content.style.maxHeight = '0px';
    }
    toggle.addEventListener('click', () => {
      if (!content) return;
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0px';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
