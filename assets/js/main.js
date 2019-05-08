// inner variables
var song;
var tracker = $('.tracker');
var volume = $('.volume');
// initialization - first element in playlist
initAudio($('.playlist li:first-child'));
// set volume
song.volume = 0.8;
// initialize the volume slider
volume.slider({
    range: 'min',
    min: 1,
    max: 100,
    value: 80,
    start: function(event,ui) {},
    slide: function(event, ui) {
        song.volume = ui.value / 100;
    },
    stop: function(event,ui) {},
});
// empty tracker slider
tracker.slider({
    range: 'min',
    min: 0, max: 10,
    start: function(event,ui) {},
    slide: function(event, ui) {
        song.currentTime = ui.value;
    },
    stop: function(event,ui) {}
});