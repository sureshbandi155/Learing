//buffers - are used to store temporary data and share across with the application

//Buffers
// Node provides Buffer class which provides instances to store raw data similar to an array of integers 
// networking
var buf1 = new Buffer(10);
var buf2 = new Buffer([10, 20, 30, 40]);
var buf3 = new Buffer('sample data', 'utf-8');
buf4 = new Buffer(256);
len = buf4.write(' Hello all..!!!');
console.log('Octects written: ' + len);
buf = new Buffer(26);
for (var i = 0; i < 256; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii')); //output: ab..z
console.log(buf.toString('utf-8', 0, 5)); //output: abcde
console.log(buf.toString('ascii', 0, 5));//output: abcde
console.log(buf.toString(undefined, 0, 5));//output: abcde default uft8
var json = buf4.toJSON();
console.log(json);
var bufferContact = Buffer.concat([buf3, buf4]);
console.log('Buffer3 contact: ' + bufferContact.toString());
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('XYZ');
var result = buffer1.compare(buffer2);
if (result < 0) {
    console.log(`${buffer1} comes before ${buffer2}`);
} else if (result === 0) {
    console.log(`${buffer1} is same as ${buffer2}`);
} else {
    console.log(`${buffer1} comes after ${buffer2}`);
}
//coping
var buffer1 = new Buffer('Welcome');
//copy a buffer
var buffer2 = new Buffer('SURESH');
buffer1.copy(buffer2);
console.log('Buffer 1 content: ' + buffer1);
console.log('Buffer2 content: ' + buffer2.toString());
// slicing a buffer 
var buffer3 = buffer1.slice(0, 3);
console.log(`Buffer3 content: ${buffer3.toString()}`);


