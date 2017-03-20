const url = require('url');

exports.formatMStoS = function (ms) {
  let num = ms / 1000,
    result;

  if (num < 60) {
    result = num < 10 ? '0:0' + parseInt(num) : '0:' + parseInt(num);
  } else if (num > 60) {
    let div = parseInt(num / 60),
      dif = parseInt(num) - (60 * div),
      mins = div < 10 ? '0' + div : num,
      secs = dif < 10 ? '0' + dif : dif;

    result = mins + ':' + secs;
  }

  return result;
};

exports.formatCover = function (coverUri, size = 't300x300', format = '.png') {
  const {host, protocol, pathname, search} = url.parse(coverUri);

  return protocol + '//' + host + pathname.split('.')[0].split('-').slice(0, -1).join('-') + '-' + size + format + (search || '');
};

exports.formatTitle = function (title, lim = 50) {
  return title.length >= lim ? (title.substr(0, lim - 3) + '...') : title
};

exports.shuffle = function (arr) {
  let a = arr.slice(),
    j, x, i;

  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }

  return a;
};

exports.normalizeIndices = function (arr) {
  let i;

  for (i = 0; i < arr.length; i++) {
    arr[i].index = i;
  }

  return arr;
};