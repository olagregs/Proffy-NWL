const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=switchTheme]');

const getStyle = (element, style) => 
  window.getComputedStyle(element).getPropertyPriority(style);


const lightTheme = {
 colorThumb: getStyle(html, "--color-thumb"),
 colorBackground: getStyle(html, "--color-background"),
 colorPrimaryLTR: getStyle(html, "--color-primaryltr"),
 colorPrimaryL: getStyle(html, "--color-primaryl"),
 colorIndicator: getStyle(html, "--color-indicator"),
 colorPrimary: getStyle(html, "--color-primary"),
 colorPrimaryD: getStyle(html, "--color-primaryd"),
 colorPrimaryDKR: getStyle(html, "--color-primarydkr"),
 colorSecondary: getStyle(html, "--color-secondary"),
 colorSecondaryD: getStyle(html, "--color-secondaryd"),
 colorTitleP: getStyle(html, "--color-titlep"),
 colorTextP: getStyle(html, "--color-textp"),
 colorTitle: getStyle(html, "--color-title"),
 colorTextC: getStyle(html, "--color-textc"),
 colorText: getStyle(html, "--color-text"),
 colorLine: getStyle(html, "--color-line"),
 colorInput: getStyle(html, "--color-input"),
 colorButton: getStyle(html, "--color-button"),
 colorBox: getStyle(html, "--color-box"),
 colorFooter: getStyle(html, "--color-footer"),
 colorSmall: getStyle(html, "--color-small"),
};

const darkTheme = {
  colorThumb: "#8257E5",
  colorBackground: "#cccccc",
  colorPrimaryLTR: "#604a94",
  colorPrimaryL: "#4c3386",
  colorIndicator: "#44268a",
  colorPrimary: "#3f267a",
  colorPrimaryD: "#27164d",
  colorPrimaryDKR: "#6842c2",
  colorSecondary: "#0eaf44",
  colorSecondaryD: "#098842",
  colorTitleP: "#dddddd",
  colorTextP: "#a19fa5",
  colorTitle: "#433368",
  colorTextC: "#57535f",
  colorText: "#4f4764",
  colorLine: "#c3c3c3",
  colorInput: "#b8b8bd",
  colorButton: "#FFFFFF",
  colorBox: "#dddbdb",
  colorFooter: "#d8d7d8",
  colorSmall: "#ccc3bc",
}

const exchangeLetters = key => 
  "--" + key.replace(/([A-Z])/,  "-$1") .toLowerCase();

const switchTheme = (colors) => {
  Object.keys(colors).map((key) =>
  html.style.setProperty(exchangeLetters(key), colors[key]));
};

const activeTheme = JSON.parse(localStorage.getItem("theme"));

if (activeTheme) {
  checkbox.checked = activeTheme;
  switchTheme(darkTheme);
}

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? switchTheme(darkTheme) : switchTheme(lightTheme)

  localStorage.setItem("theme", target.checked);
});