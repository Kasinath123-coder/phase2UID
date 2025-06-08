document.addEventListener('DOMContentLoaded', function() {
    const themeButton=document.getElementById('themeToggle');
    const moonSunIcon=themeButton.querySelector('.theme-icon');
    const modeText=themeButton.querySelector('.theme-text');
    
    
    const savedTheme=localStorage.getItem('theme');
    
    
    const systemPrefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    
    if (savedTheme==='dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        moonSunIcon.textContent='☀️';
        modeText.textContent='Light Mode';
    }
    
    
    themeButton.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            moonSunIcon.textContent='🌙';
            modeText.textContent='Dark Mode';
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            moonSunIcon.textContent = '☀️';
            modeText.textContent='Light Mode';
        }
    });
});