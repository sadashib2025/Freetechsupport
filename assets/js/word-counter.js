
function countWords() {
const text = document.getElementById('text').value.trim();
const words = text ? text.split(/\s+/).length : 0;
document.getElementById('result').innerText = "Word Count: " + words;
}
