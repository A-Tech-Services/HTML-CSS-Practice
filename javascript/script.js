// changing hero text

let example = ['Web Developer.', 'UI/UX Designer.', 'Graphic Designer.'];

textSequence(0);
function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            document.getElementById("textchange").innerHTML = example[i];
            textSequence(++i);
        }, 1200); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

}