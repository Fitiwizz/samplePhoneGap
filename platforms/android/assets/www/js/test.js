
$(document).ready(function(){
    $.ajax({
        url: 'http://awarefan.net/appTest/test.json',
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        success: function(data, status){
            $.each(data, function(i,item){
                var tweet = item.label;
                $('#your-tweets').append('<li>'+tweet);
            });
        },
        error: function(){
            alert('fu');
        }
    });


    /*
    $.jsonp({
        url: 'http://awarefan.net/appTest/test.json',
        callbackParameter: 'callback',
        success: function(data, status) {
            //$('#your-tweets').append('<li>The feed loads fine');
            $.each(data, function(i,item){
                var tweet = item.label;
                $('#your-tweets').append('<li>'+tweet);
            });
        }
    });*/
});
/*

function callback(data) {
    $.each(data, function(i,item){
        var tweet = item.label;
        $('#your-tweets').append('<li>'+tweet);
    });
}*/