
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Receipt verification (https://github.com/mozilla/receiptverifier)
    require('receiptverifier');

    // Installation button
    require('./lib/html5slider');

    // Installation button
    require('./install-button');

    // Install the layouts
    require('layouts/layouts');

    // Write your app here.

var intervalo = 0;


// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

var videoElement = document.getElementById("videoElement");

// If the page is hidden, pause the video;
// if the page is shown, play the video
function handleVisibilityChange() {
    if (document[hidden]) {
        clearInterval(intervalo);
    } else {
    }
}
document.addEventListener(visibilityChange, handleVisibilityChange, false);

// prevent onscreen keyboard
document.getElementById('theslider').addEventListener('focus', function sliderFocus(event){
    event.target.blur();
});



document.getElementById('volume').addEventListener('change', function sliderFocus(event){
    alert('Volume é uma funcionalidade da app Premium - R$30,00');
})

document.getElementById('theslider').addEventListener('change', function sliderFocus(event){
    var names = [
        "lento assai",
        "largo",
        "larghetto",
        "adagio",
        "andante",
        "moderatto",
        "allegro",
        "vivace",
        "presto",
        "prestissimo"
    ];
    document.getElementById('bpmdisplay').innerHTML = this.value;

    document.getElementById('bpmname').innerHTML = names[0];
    if (this.value > 39){    document.getElementById('bpmname').innerHTML = names[0];}
    if (this.value > 59){    document.getElementById('bpmname').innerHTML = names[1];}
    if (this.value > 65){    document.getElementById('bpmname').innerHTML = names[2];}
    if (this.value > 75){    document.getElementById('bpmname').innerHTML = names[3];}
    if (this.value > 100){    document.getElementById('bpmname').innerHTML = names[4];}
    if (this.value > 107){    document.getElementById('bpmname').innerHTML = names[5];}
    if (this.value > 119){    document.getElementById('bpmname').innerHTML = names[6];}
    if (this.value > 139){    document.getElementById('bpmname').innerHTML = names[7];}
    if (this.value > 167){    document.getElementById('bpmname').innerHTML = names[8];}
    if (this.value > 199){    document.getElementById('bpmname').innerHTML = names[9];}

    clearInterval(intervalo);

    intervalo = setInterval(function playSound() {
        document.getElementById('a').cloneNode(true).play();
        console.log('BAR');
    }, (60 / this.value) *1000 );
});

    // function formatDate(d) {
    //     return (d.getMonth()+1) + '/' +
    //         d.getDate() + '/' +
    //         d.getFullYear();
    // }

    // // List view

    // var list = $('.list').get(0);
    // list.add({ title: 'Learn this template',
    //            desc: 'This is a list-detail template. Learn more ' +
    //                  'about it at its ' +
    //                  '<a href="https://github.com/mozilla/mortar-list-detail">project page!</a>',
    //            date: new Date() });
    // list.add({ title: 'Make things',
    //            desc: 'Make this look like that',
    //            date: new Date(12, 9, 5) });
    // for(var i=0; i<8; i++) {
    //     list.add({ title: 'Move stuff',
    //                desc: 'Move this over there',
    //                date: new Date(12, 10, 1) });
    // }

    // Detail view

    // var detail = $('.detail').get(0);
    // detail.render = function(item) {
    //     $('.title', this).html(item.get('title'));
    //     $('.desc', this).html(item.get('desc'));
    //     $('.date', this).text(formatDate(item.get('date')));
    // };

    // Edit view

    // var edit = $('.edit').get(0);
    // edit.render = function(item) {
    //     item = item || { id: '', get: function() { return ''; } };

    //     $('input[name=id]', this).val(item.id);
    //     $('input[name=title]', this).val(item.get('title'));
    //     $('input[name=desc]', this).val(item.get('desc'));
    // };

    // edit.getTitle = function() {
    //     var model = this.view.model;

    //     if(model) {
    //         return model.get('title');
    //     }
    //     else {
    //         return 'New';
    //     }
    // };

    // $('button.add', edit).click(function() {
    //     var el = $(edit);
    //     var title = el.find('input[name=title]');
    //     var desc = el.find('input[name=desc]');
    //     var model = edit.model;

    //     if(model) {
    //         model.set({ title: title.val(), desc: desc.val() });
    //     }
    //     else {
    //         list.add({ title: title.val(),
    //                    desc: desc.val(),
    //                    date: new Date() });
    //     }

    //     edit.close();
    // });
});