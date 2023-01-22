const search = (object, sPath) => {
    return sPath.split("/").reduce((oObj, sKey) => {
        return oObj && sKey ? oObj[sKey] : oObj;
    }, object);
};

module.exports = search;