
// Here is the solution

const capitalizeSentences = sentence => {
    // I took help from Nimer Awad in StackOverFlow

    const capitalized = sentence.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
    return capitalized;
}

const sentence = 'hello world';
console.log(capitalizeSentences(sentence));
