modal.style.display = "none";

const themes = {
    "desktop_light": "css/themes/desktop_light.css",
    "desktop_dark": "css/themes/desktop_dark.css",
    "kaosu": "css/themes/kaosu.css"
};

function setTheme(themeName) {
    if (!themes[themeName]) {
        console.warn(`Theme "${themeName}" not found.`);
        return;
    }

    const themePath = themes[themeName];
    let themeLink = document.getElementById("theme-stylesheet");

    if (!themeLink) {
        themeLink = document.createElement("link");
        themeLink.rel = "stylesheet";
        themeLink.id = "theme-stylesheet";
        document.head.appendChild(themeLink);
    }

    themeLink.href = themePath;

    localStorage.setItem("selectedTheme", themeName);
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("selectedTheme") || "desktop_dark";
    setTheme(savedTheme);
});

function yabai_theme_keikoku() {
    const keikoku1 = window.confirm("警告！\nこのテーマを使用すると、あなたの目およびディスプレイに影響を与える可能性があります。\nご注意ください\n(キャンセルを押すとテーマは適用されません)")
    if(keikoku1) {
        alert("OKを押すとテーマが適用されます。")
        setTheme('kaosu');
    }
    else {
        alert("テーマの適用をキャンセルしました")
    }
}

//もーだる
function m_open(){
    document.getElementById("modal").animate(
        {
            opacity: [0, 1]
        },
        {
            duration: 250,
            easing: "ease"
        }
    );
    modal.style.display = "flex";
}

function m_close(){
    document.getElementById("modal").animate(
        {
            opacity: [1, 0]
        },
        {
            duration: 250,
            easing: "ease"
        }
    ).onfinish = () => {
        modal.style.display = "none";
    };
}
