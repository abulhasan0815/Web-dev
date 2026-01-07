// document.getElementById("count").innerText = 5;

let count = 0;

function increment() {
    count += 1;
    document.getElementById("count").textContent = count;
}

function save() {
    let savedCount = count + " - ";
    document.getElementById("save-el").textContent += savedCount
    document.getElementById("count").textContent = 0;
    count = 0;
}
