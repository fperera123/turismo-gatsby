"use strict";

//  START Kevin change (expose to window)
window.ellipsis = ellipsis;
// END Kevin change

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 *   Copyright (C) 2017 Nicola Zambello
 *
 *    The JavaScript code in this page is open source software licensed under MIT license
 *    References about this code and its license, see:
 *
 *    https://github.com/nzambello/ellipsed
 *
 */
function tokensReducer(acc, token) {
    var el = acc.el,
        elStyle = acc.elStyle,
        elHeight = acc.elHeight,
        rowsLimit = acc.rowsLimit,
        rowsWrapped = acc.rowsWrapped,
        options = acc.options;
    var oldBuffer = acc.buffer;
    var newBuffer = oldBuffer;

    if (rowsWrapped === rowsLimit + 1) {
        return _objectSpread({}, acc);
    }

    var textBeforeWrap = oldBuffer;
    var newRowsWrapped = rowsWrapped;
    var newHeight = elHeight;
    el.innerHTML = newBuffer = oldBuffer.length ? "".concat(oldBuffer).concat(options.delimiter).concat(token).concat(options.replaceStr) : "".concat(token).concat(options.replaceStr);

    if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
        newRowsWrapped++;
        newHeight = elStyle.height;

        if (newRowsWrapped === rowsLimit + 1) {
            el.innerHTML = newBuffer = textBeforeWrap[textBeforeWrap.length - 1] === '.' && options.replaceStr === '...' ? "".concat(textBeforeWrap, "..") : "".concat(textBeforeWrap).concat(options.replaceStr);
            return _objectSpread({}, acc, {
                elHeight: newHeight,
                rowsWrapped: newRowsWrapped
            });
        }
    }

    el.innerHTML = newBuffer = textBeforeWrap.length ? "".concat(textBeforeWrap).concat(options.delimiter).concat(token) : "".concat(token);
    return _objectSpread({}, acc, {
        buffer: newBuffer,
        elHeight: newHeight,
        rowsWrapped: newRowsWrapped
    });
}

function ellipsis() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var defaultOptions = {
        replaceStr: '...',
        responsive: false,
        debounceDelay: 250,
        delimiter: ' '
    };

    var opts = _objectSpread({}, defaultOptions, {}, options);


    var elements = selector instanceof HTMLElement ? [selector] : document.querySelectorAll(selector);
    var originalTexts = [];

    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        originalTexts[i] = el.innerHTML;
        var splittedText = el.innerHTML.split(opts.delimiter);
        el.innerHTML = '';
        var elStyle = window.getComputedStyle(el);
        splittedText.reduce(tokensReducer, {
            el: el,
            buffer: el.innerHTML,
            elStyle: elStyle,
            elHeight: 0,
            rowsLimit: rows,
            rowsWrapped: 0,
            options: opts
        });
    }

    if (opts.responsive) {
        var resizeTimeout = false;
        var last_window_w = window.innerWidth;

        var resizeHandler = function resizeHandler() {
            if (window.innerWidth !== last_window_w) {
                last_window_w = window.innerWidth;

                for (var _i = 0; _i < elements.length; _i++) {
                    elements[_i].innerHTML = originalTexts[_i];
                }

                ellipsis(selector, rows, _objectSpread({}, options, {
                    responsive: false
                }));
            }
        };

        var resizeListener = function resizeListener() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeHandler, opts.debounceDelay);
        };

        window.addEventListener('resize', resizeListener);
        return resizeListener;
    }
}

function disableResponsive(listener) {
    window.removeEventListener('resize', listener);
}