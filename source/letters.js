'use strict';

const uniUndef = ( msg, letter, index, letterDelete, flag ) => {

    if ( flag !== undefined ) {
        return msg.indexOf( letter, index + 1 ) === -1;
    }

    if ( msg.indexOf( letter, index + 1 ) !== -1 ) {
        letterDelete.add(letter);
    }
    return !letterDelete.has(letter);
};

const letters = ( msg, flag ) => {
    let letterDelete = new Set();

    flag === true ? msg = [...msg].reverse().join('') : msg;

    let outStr = [...msg].filter( ( letter, index ) => {
        return uniUndef( msg, letter, index, letterDelete, flag );
    }).join( '' );

    return flag === true ? [...outStr].reverse().join( '' ) : outStr;
};