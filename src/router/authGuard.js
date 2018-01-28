import store from '../store';

var authGuard = function (to, from, next) {
    next();
}

export default authGuard;
