require([
	'test1',
	'lazy!test2'
],
function(t1, t2) {

    $('#main').click(function () {
        t2.get().then(function (m) {

        });
    });



});
