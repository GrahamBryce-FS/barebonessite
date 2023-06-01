function addMessage() {
    var message = document.getElementById('message');
    message.textContent = 'Hi professor';
}

var middleElement = document.documentElement;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

middleElement.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var centerThreshold = 100;

    var isMouseInCenter = Math.abs(mouseX - screenWidth / 2) < centerThreshold &&
    Math.abs(mouseY - screenHeight / 2) < centerThreshold;

    if (isMouseInCenter) {
        addMessage();
    } else {
        var message = document.getElementById('message');
        message.textContent = '';
    }
});