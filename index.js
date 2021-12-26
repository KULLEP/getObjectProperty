const getObjectProperty = (obj, path, defaultValue) => {
    let arrPath = typeof path === 'string' ? path.split('.') : []; // ['pupa', 'lupa']
    let thisObj = { ...obj };
    arrPath.forEach((e) => thisObj = thisObj && thisObj[e]);
    return thisObj ??= defaultValue || undefined;
}

const getObjectProperty2 = (object, path, defaultValue) => {
    let arrPath = typeof path === 'string' ? path.split('.') : [];
    let obj = { ...object };
    let result;
    for(let i = 0; obj; obj = obj && obj[arrPath[i++]]) {
        result = obj;
}
    return result ??= defaultValue || undefined;;
}

