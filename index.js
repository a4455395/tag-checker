const checkTagsCorrectness = require('./checkTagsCorrectness');

const strings = [
    'The following text<C><B>is centred and in boldface</B></C>',
    '<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence',
    '<B><C> This should be centred and in boldface, but the\n' +
    'tags are wrongly nested </B></C>',
    '<B>This should be in boldface, but there is an extra closing\n' +
    'tag</B></C>',
    '<B><C>This should be centred and in boldface, but there is\n' +
    'a missing closing tag</C>',
    '<B><C>This sho<G>uld be centred and in boldface, but there is\\n\' +\n' +
    ' a missing closing tag<C>'
];

strings.forEach(s => console.log(checkTagsCorrectness(s)));





