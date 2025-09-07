// javascript code goes here
let textContainer = document.getElementById('text-container');
let colorChangeBtn = document.getElementById('colorchange');
let colorInput = document.getElementById('colorbox');

colorChangeBtn.addEventListener('click', () => {
  let colorName = colorInput.value.trim();
  if (colorName) {
    textContainer.style.color = colorName;
    colorInput.style.border = "";

  } else {
    colorInput.style.border = "2px solid red";
  }
})

let fontSize = document.getElementById('fontsize')
fontSize.addEventListener('input', () => {
  let fontValue = fontSize.value;
  textContainer.style.fontSize = fontValue + "px";
})

let styleBtn = document.getElementsByClassName('stylebt')
for (let btn of styleBtn) {

  btn.addEventListener('click', () => {

    if (btn.id === 'italic') {
      textContainer.style.fontStyle = textContainer.style.fontStyle === "italic" ? "normal" : "italic";
    } else if (btn.id === 'bold') {
      textContainer.style.fontWeight = textContainer.style.fontWeight === "bold" ? "normal" : "bold";

    } else if (btn.id === 'underline') {
      textContainer.style.textDecoration = textContainer.style.textDecoration === "underline" ? "none" : "underline";
    }
  })
}

let fontFamilyElement = document.getElementById('list');
fontFamilyElement.addEventListener('change', () => {
  let data = fontFamilyElement.value;
  textContainer.style.fontFamily = data;
})

let getStyle = document.getElementById('getstyle');
let showCopyElement = document.getElementById('css-props');

getStyle.addEventListener('click', () => {
  let styles = window.getComputedStyle(textContainer);

  let styleCopy = `color: ${textContainer.style.color}; font-size: ${styles.fontSize}; font-family: ${styles.fontFamily}; font-style: ${styles.fontStyle}; text-decoration: ${styles.textDecoration};`;

  showCopyElement.innerText = styleCopy;

  // Copy to clipboard
  navigator.clipboard.writeText(styleCopy).then(() => {
    alert("CSS copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
});





