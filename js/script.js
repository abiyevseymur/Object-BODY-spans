function Body(className) {
    this.main = document.getElementsByClassName('main');
    var self = this;
    this.img = document.getElementById('img');
    this.img.addEventListener('click', function (event) {
        self.x = event.x;
        self.y = event.y;
        self.span = document.createElement('span');
        self.span.className = 'badge';
        self.span.style.top = self.y;
        self.span.style.left = self.x;
        self.main[0].appendChild(self.span);
        console.log(event.y)
    });

    this.main[0].addEventListener('click', function (event) {
        if (event.target.className == 'badge') {
            self.main[0].removeChild(event.target);
        }
    })
}
var body = new Body('main');