function saveGame() {
	localStorage.setItem('poesave', btoa(JSON.stringify(player)));
}

function loadGame() {
    if (localStorage.getItem('poesave') != null) {
        data = JSON.parse(atob(localStorage.getItem('poesave')));
        function isDecimal(o) {
            if (!(o instanceof Object)) {
                return false;
            }
            return Object.keys(o).length === 2 && Object.keys(o).every(function (v) {
                return ['mantissa', 'exponent'].indexOf(v) > -1
            });
        }

        function handleObject(prop, target, source) {
            if (!hasOwnProperty.call(target, prop)) {
                return;
            }

            if (isDecimal(target[prop])) {
                return (target[prop] = new Decimal(source[prop]));
            }

            if (target[prop] instanceof Object && !Array.isArray(target[prop])) {
                for (key in source[prop]) {
                    handleObject(key, target[prop], source[prop]);
                }
                return;
            }

            return (target[prop] = source[prop]);
        }
        for (key in data) {
            handleObject(key, player, data);
        }
        return true;
    } else {
        return false;
    }
}

function deleteGame() {
    localStorage.removeItem('poesave');
}