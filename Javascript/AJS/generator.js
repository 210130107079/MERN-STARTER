function* generatorFunction()
{
    yield 'Hello'
    yield 'World'
}

const genObject = generatorFunction()
for(const word of genObject){
    console.log(word);
}