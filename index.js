getObjectProperty = (obj, path, defaultValue) => {
    let arrPath = typeof path === 'string' ? path.split('.') : []; // ['pupa', 'lupa']
    let thisObj = { ...obj };
    arrPath.forEach((e) => thisObj = thisObj && thisObj[e]);
    return thisObj || defaultValue || undefined;
}


