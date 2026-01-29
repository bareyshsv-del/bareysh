// Small interactive helpers: theme toggle, year fill, smooth scroll
(function(){
  const btn = document.getElementById('theme-toggle');
  const year = document.getElementById('year');

  // Set year
  if(year) year.textContent = new Date().getFullYear();

  // Theme toggle: toggles a 'dark' class on <html>
  const html = document.documentElement;
  const saved = localStorage.getItem('bareysh-theme');

  function applyTheme(theme){
    if(theme === 'dark'){
      html.style.colorScheme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      html.style.colorScheme = 'light';
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('bareysh-theme', theme);
    if(btn) btn.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  // Init preference
  if(saved) applyTheme(saved);
  else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  if(btn){
    btn.addEventListener('click', ()=>{
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  // Smooth scroll for in-page links (reduce motion respected)
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const href = a.getAttribute('href');
      if(href === '#' || href === '#0') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
        target.focus({preventScroll:true});
      }
    });
  }
})();