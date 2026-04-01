'use strict';

const StorageManager = {
    save: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    load: function (key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },

    remove: function (key) {
        localStorage.removeItem(key);
    },

    clear: function () {
        localStorage.clear();
    }
};

export default StorageManager;