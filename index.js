function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function callback() {};
}

function returnsAnAnonymousFunction () {
    return function() {};
}