const pinWrap = document.querySelector('.pin-wrap');
const track = document.querySelector('.h-track');
const desktopQuery = window.matchMedia('(min-width: 769px)');

function updateTrackPosition() {
  if (!pinWrap || !track) return;

  if (!desktopQuery.matches) {
    track.style.transform = '';
    return;
  }

  const rect = pinWrap.getBoundingClientRect();
  const scrollableDistance = rect.height - window.innerHeight;
  const scrolled = -rect.top;
  const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

  const slideCount = track.children.length;
  const maxShift = (slideCount - 1) * window.innerWidth;

  track.style.transform = `translateX(-${progress * maxShift}px)`;
}

window.addEventListener('scroll', updateTrackPosition, { passive: true });
window.addEventListener('resize', updateTrackPosition);
updateTrackPosition();
