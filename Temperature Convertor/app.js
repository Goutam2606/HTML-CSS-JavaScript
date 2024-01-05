var cel = document.getElementById("celsius");
var fer = document.getElementById("fahrenheit");

cel.addEventListener('input', function () {
                    let c = this.value;
                    let f = (c * 9 / 5) + 32;
                    fer.value = f;
});
fer.addEventListener('input', function () {
                    let f = this.value;
                    let c = (f - 32) * 5 / 9;
                    cel.value = c;
});