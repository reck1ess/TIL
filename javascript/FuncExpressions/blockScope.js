function outputNumbers(count) {
    (function() {
        for(var i=0; i<count; i++) {
            console.log(i);
        }
    })();

    console.log(i); // Error!
}