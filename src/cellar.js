var Cellar = function() { // For more permanent storage
    if (typeof(Storage) == 'undefined') {
        console.warn('This browser does not support localStorage');
    }

    this.save = function(key, value) {
        var tempValue;

        if (typeof value == 'object') {
            tempValue = JSON.stringify(value);
        } else {
            tempValue = value;
        }

        localStorage.setItem(key, tempValue);

        return true;
    };

    this.get = function(key) {
        if (localStorage.getItem(key)) {
            try {
                return JSON.parse(localStorage.getItem(key));
            } catch (err) {
                return localStorage.getItem(key);
            }
        } else {
            return undefined;
        }
    };

    this.delete = function(key) {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key);

            return true;
        } else {
            return false;
        }
    };

    this.clear = function() {
        localStorage.clear();

        return true;
    };
};
