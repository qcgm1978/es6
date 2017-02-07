var text = `
    This is a template literal
    'It can span multiple lines'
    "And can contain quotation marks"

    `

var text1 = (
    'This is the old method\n' +
    '     \'It can span multiple lines\'\n' +
    '     "And can contain quotation marks"\n\n'
)

var text2 = [
    '     This is the old method',
    '     \'It can span multiple lines\'',
    '     "And can contain quotation marks"'
].join('\n');
let string=()=>{
    console.log(text,text1,text2)
}
export default string;
    