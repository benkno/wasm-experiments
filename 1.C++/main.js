var circle = require('./circle.js');

circle().then(instance => {
  console.log(instance._Area(5));
  console.log(instance._Circumference(8));
});
