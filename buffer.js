var buf=new Buffer(256);
var len =buf.write('长空')
var json =buf.toJSON();
console.log(json);
