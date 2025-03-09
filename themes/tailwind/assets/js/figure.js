document.addEventListener('DOMContentLoaded', function() {
  const figures = document.querySelectorAll('.figure-wrapper');
  
  figures.forEach(figure => {
    figure.addEventListener('click', function(e) {
      // Don't trigger if clicking a link inside the figure
      if (e.target.closest('a[href]')) return;
      
      this.classList.toggle('fullscreen');
      
      // Prevent scrolling when in fullscreen
      document.body.style.overflow = this.classList.contains('fullscreen') ? 'hidden' : '';
    });
  });
  
  // Close fullscreen when pressing Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const fullscreenFigure = document.querySelector('.figure-wrapper.fullscreen');
      if (fullscreenFigure) {
        fullscreenFigure.classList.remove('fullscreen');
        document.body.style.overflow = '';
      }
    }
  });
}); 