// xenon / constructor
var $ = (
    elOrSel,
    selOrAll,
    all,
    // Variables for function
    startsWithNode = elOrSel.blur
) => {
    // let startsWithNode = elOrSel.blur; // reversing this is 1 byte
    return (
        // What to look through:
        // if the first parameter is the selector, select from the document
        // Otherwise, assume first parameter is a DOM element.
        startsWithNode ? elOrSel : document
    )[
        // Select one or all:
        // If this starts with a selector, the 2nd parameter will have the "All" flag set to True or False
        // Otherwise use the third and final parameter to determine whether it should select all
        'querySelector' + ((startsWithNode ? all : selOrAll) ? 'All' : '')
    ](
        // What to query:
        // If the selector is the first thing passed, look through the document for it
        // Otherwise the selector is the second param
        startsWithNode ? selOrAll : elOrSel
    );
}

$.new = (
    elementName,
    props = {},
    // Variables for function
    el = document.createElement(elementName),
    o = Object
) => {
    o.assign(el, o.keys(props).reduce((all, cur) => {
        if (typeof props[cur] === 'object')// && !!props[cur])
            o.assign(el[cur], props[cur]);
        else
            all[cur] = props[cur];
        return all;
    }, {}));
    return el;
}

$.all = (...args) => {
    return $(...args, true)
}