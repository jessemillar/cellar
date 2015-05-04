var Pantry = function() { // For temporary, session storage
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

        sessionStorage.setItem(key, tempValue);

        return true;
    };

    this.get = function(key) {
        if (sessionStorage.getItem(key)) {
            try {
                return JSON.parse(sessionStorage.getItem(key));
            } catch (err) {
                return sessionStorage.getItem(key);
            }
        } else {
            return undefined;
        }

    };

    this.delete = function(key) {
        if (sessionStorage.getItem(key)) {
            sessionStorage.removeItem(key);

            return true;
        } else {
            return false;
        }
    };

    this.clear = function() {
        sessionStorage.clear();

        return true;
    };
};
