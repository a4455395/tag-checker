const getTagName = tag =>  tag.match(/([^\/<>]+)/)[0];

const isOpenedTag = tag => !/\//.test(tag);

const checkTagsCorrectness = string => {
    //extract tags from string
    let tagArr = string.match(/(<\/?[A-Z]+>)/g);
    let current = 0;
    //when cursor will reach last element it should stop
    while (current < tagArr.length - 1) {
        //check if first tag is closed
        if(!isOpenedTag(tagArr[current])) {
            return 'expected # found ' + tagArr[current];
        }
        //check if tags are pair (open + closed)
        if(isOpenedTag(tagArr[current]) && !isOpenedTag(tagArr[current + 1])) {
            //check if tag names are matched
            const tagName1 = getTagName(tagArr[current]),
                tagName2 = getTagName(tagArr[current+1]);
            if(tagName1 === tagName2) {
                tagArr.splice(current,2);
                if(current) {
                    current--;
                    continue;
                }
                //if tags are mismatched => return negative result
            } else {
                return `Expected </${tagName1}> found </${tagName2}>`
            }
        }
        current++;
    }


    if(tagArr.length > 0) {
        const tag = tagArr[tagArr.length-1],
            tagName = getTagName(tag);
        if(isOpenedTag(tag)) {
            return `Expected </${tagName}> found #`;
        } else {
            return `Expected # found ${tag}`;
        }
    }
    return 'Correctly tagged paragraph';
};

module.exports = checkTagsCorrectness;