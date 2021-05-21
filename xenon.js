// xenon
$ = (
    selector,
    parent = document
) => {
    return parent.querySelector(selector);
};

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

$$ = (selector, parent = document) => {
    return Array.from(parent.querySelectorAll(selector))
} 
