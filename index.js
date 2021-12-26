const obj = {
    'pupa': {
    'lupa': {
        'beep': 'boop',
    },
        'foo': 'bar',
    },
};

const getObjectProperty = (obj, path, defaultValue) => {
    let arrPath = typeof path === 'string' ? path.split('.') : []; // ['pupa', 'lupa']
    let thisObj = { ...obj };
    arrPath.forEach((e) => thisObj = thisObj && thisObj[e]);
    return thisObj ??= defaultValue || undefined;
}

const getObjectProperty_2 = (object, path, defaultValue) => {
    let arrPath = typeof path === 'string' ? path.split('.') : [];
    let obj = { ...object };
    let result;
    for(let i = 0; obj; obj = obj && obj[arrPath[i++]]) {
        result = obj;
    }
    return result ??= defaultValue || undefined;;
}



getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'
