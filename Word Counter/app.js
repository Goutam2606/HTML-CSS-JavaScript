let textbox = document.getElementById("text");
textbox.addEventListener('input', function () {
                    var elm = this.value;
                    var char = elm.length;
                    document.getElementById("char").innerHTML = char;
                    elm = elm.trim();
                    let word = elm.split(" ");
                    let clearnlist = word.filter(function (elm) {
                                        return elm != "";
                    });
                    var wlen = clearnlist.length;
                    document.getElementById("word").innerHTML = wlen;

})