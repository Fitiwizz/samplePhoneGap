function Api() {
    this._url = 'http://awarefan.net/appTest/test.php';
}

Api.prototype.getData = function() {
    var that = this;

    $.ajax({
        url: that._url,
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        success: function(data) {
            that.callback(data);
        },
        error: function(j, e, a){
            $('#your-tweets').append(e).append(a);
        }
    });
};

Api.prototype.callback = function(data) {
    console.log("kikoo",data);
    $.each(data, function(i,item){
        var tweet = item.label;
        $('#your-tweets').append('<li>'+tweet);
    });
};