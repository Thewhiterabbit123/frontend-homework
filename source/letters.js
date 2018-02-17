'use strict';

const uniUndef = ( msg, letter, index, letterDelete ) => {

    if (msg.indexOf( letter, index + 1 ) !== -1) {
        letterDelete.add(letter);
    }
    return !letterDelete.has(letter);
};

const letters = ( msg, flag ) => {
    let letterDelete = new Set();

    if( flag === undefined ) {
         return [...msg].filter( ( letter, index ) => {
             return uniUndef( msg, letter, index, letterDelete );
         }).join( '' );
    }

    flag === true ? msg = [...msg].reverse().join('') : msg;

    let outStr = [...msg].filter( ( letter, index ) => {
        return msg.indexOf( letter, index + 1 ) === -1;
    }).join( '' );

    return flag === true ? [...outStr].reverse().join( '' ) : outStr;
};