export const getLocalStorageData = (type) => {
    const lsData = window?.localStorage.getItem(type);
    return lsData ? JSON.parse(lsData) : {};
};

export const setLocalStorageData = (type, data) => {
    window?.localStorage.setItem(type, JSON.stringify(data));
};

export const clearLocalStorageData = (type) => {
    window?.localStorage.clear(type);
};

export const clearAllLocalStorageData = () => {
    window?.localStorage.clear();
};