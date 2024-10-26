let themes = ['light-theme', 'dark-theme', 'green-theme', 'purple-theme'];
let themeIndex = 0;

function changeTheme() {
    themeIndex = (themeIndex + 1) % themes.length;
    document.body.className = themes[themeIndex];
}
