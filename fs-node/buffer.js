const buffer = new Buffer.from("koalatr33");

console.log(buffer);
// <Buffer 6b 6f 61 6c 61 74 72 33 33>

console.log(buffer.toString());
// koalatr33 (string)

console.log(buffer.toString('base64'));
// a29hbGF0cjMz

console.log(buffer.toJSON());
/*
{
  type: 'Buffer',
  data: [
    107, 111,  97, 108,
     97, 116, 114,  51,
     51
  ]
}
*/
