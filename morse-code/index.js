'use strict';


var translate = function (message, codes) {
  var morseCharMap = {
    '.': '1',
    '-': '111'
  };

  return message
    .split(' ')
    .map(function (word) {
      return word
        .split('')
        .map(function (char) {
          return codes[char]
            .split('')
            .map(function (morseChar) {
              return morseCharMap[morseChar];
            })
            .join('0');
        })
        .join('000');
    })
    .join('0000000');
};


var play = function play(opts, message, cb) {
  if (!message.length) {
    opts.toggle();
    return cb(null);
  }

  var count = 1;
  while (message[count] == message[0]) {
    count += 1;
  }

  opts.toggle();
  opts.timeouter(function () {
    play(opts, message.slice(count), cb);
  }, count);
};


module.exports = function (options, cb) {
  var message = translate(options.message, options.codes);
  play(options, message, cb);
};
