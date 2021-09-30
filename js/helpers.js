export function isObject(obj) {
    return typeof obj == 'object';
}

export function isFunction(obj) {
    return typeof obj == 'function';
}

export function isHandlerValid(obj) {
    return (!!obj && isFunction(obj));
}

export function isFieldValid(obj) {
    return (!!obj && isObject(obj));
}