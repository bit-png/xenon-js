// xenon / constructor
$ = (
    selector,
    parent = document,
    all
) => {
    // let startsWithNode = elOrSel.blur; // reversing this is 1 byte
    return parent[
        'querySelector' + (all ? 'All' : '')
    ](selector);
}

$.new = (
    elementName,
    props = {},
    // Variables for function
    el = document.createElement(elementName),
    o = Object
) => o.assign(el, o.keys(props).reduce((all, cur) => {
    if (typeof props[cur] === 'object')// && !!props[cur])
        o.assign(el[cur], props[cur]);
    else
        all[cur] = props[cur];
    return all;
}, {}));

$$ = (...args) => {
    return $(...args, true)
}