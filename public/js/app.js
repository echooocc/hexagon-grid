var $ = require('jquery');

var HEX_COUNT = 200;
var HEX_WIDTH = 100;

var wordPair = {
  21: 'transfer',
  22: 'information',
  23: 'products',
  29: 'train',
  30: 'project skakeholders',
  31: 'specialed problems',
  32: 'sustainable',
  37: 'presence',
  38: 'collaborate',
  39: 'align',
  40: 'communicate',
  41: 'flexible',
  45: 'safe',
  46: 'global users',
  47: 'connect',
  48: 'resue',
  49: 'open technology',
  50: 'customization',
  54: 'groups',
  55: 'global institution',
  56: 'deliver',
  57: 'resuable solutions',
  58: 'blueprints',
  63: 'access',
  64: 'roles',
  65: 'usability',
  66: 'availability'
};

var classPair ={
  30: 'blue',
  31: 'blue',
  39: 'green transform',
  46: 'blue',
  47: 'gin transform',
  48: 'orange transform',
  49: 'blue',
  55: 'blue',
  57: 'blue'
};

//set up hexagon grids
var draw = (function () { 
  console.log("drawing done");
  var html = '';
  var width = $(".list").width();
  var hexWidth = HEX_WIDTH;
  var breakpoint = width / hexWidth;
  var max = parseInt(breakpoint);
  var min = max - 1;
  if (breakpoint > max + 0.5) {
    min = max;
  }
  var count = (max + 1);
  var temp = 1;
  for (var i = 1; i <= HEX_COUNT; i++) {
    if (i === count) {
      html += '<li id=' + i + ' class="hex-wrapper left"><span class="hex"></span></li>';
      temp = count + min;
    }
    else {
      html += '<li id=' + i + ' class="hex-wrapper"><span class="hex"></span></li>';
      count = temp + max;
    }
  };
  $('ul.list').html(html);
})();

//customize list text
for (var i = 1; i <HEX_COUNT; i++) {
    if(wordPair[i]){
      $('.hex-wrapper#'+i+' span').addClass(classPair[i]);
      $('.hex-wrapper#'+i+' span').html('<span class="word">'+wordPair[i]+'</span>');
    }
}

var redraw = function(){
  console.log("drawing");
  var width = $(".list").width();
  var hexWidth = HEX_WIDTH;
  var breakpoint = width / hexWidth;
  var max = parseInt(breakpoint);
  var min = max - 1;
  if (breakpoint > max + 0.5) {
    min = max;
  }
  var count = (max + 1);
  var temp = 1;
  for (var i = 1; i <= HEX_COUNT; i++) {
    if (i === count) {
      $('.hex-wrapper#'+i).addClass("left");
      temp = count + min;
    }
    else {
      count = temp + max;
    }
  };
}

$(window).resize(function () {
   $(".list li").removeClass("left");
   redraw();
});