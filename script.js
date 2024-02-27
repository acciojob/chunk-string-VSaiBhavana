function stringChop(str, size) {
  if (size <= 0) {
        throw new Error("Chunk length must be greater than 0");
    }
    const result = [];
    let index = 0;
    while (index < str.length) {
        const chunk = str.substr(index, chunkLength);
        result.push(chunk);
        index += chunkLength;
    }
    return result;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
