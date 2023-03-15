const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = letters[0].map((col, i) => letters.map(row => row[i]).join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch;