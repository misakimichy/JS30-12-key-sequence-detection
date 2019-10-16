(function(){
    const pressed = [];
    const secretCode = 'donuts';
    window.addEventListener('keyup', (e) => {
        pressed.push(e.key);
        // keep the maximum pressed array length as same as secretCode length
        pressed.splice(0, pressed.length - secretCode.length);
        const typedWord = pressed.join('');

        // check if pressed has the secretCode
        if(secretCode === typedWord) cornify_add();
    });
}());