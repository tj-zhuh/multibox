
require.config({
    paths: {
        "multibox": "../src/multibox",
        "jquery": "jquery-1.12.4"
    }
})

define(function (require) {

    var $ = require('jquery');
    var multibox = require('multibox');

    multibox.init();

    var data = getData();

    multibox.bindSource(data); 

    multibox.change(function () {
        var selections = multibox.getSelections();
        $('.display').html('当前选择了' + selections.length + '项');
    });

    $('html').click(function () {
        multibox.hide();
    }) 

    $("#setEnable").click(function () {
        multibox.setDisabled(false);
    })

    $("#setDisable").click(function () {
        multibox.setDisabled(true);
    })
})

function getData() {
    var data = [{
        itemId: '1',
        itemName: '北京'
    }, {
        itemId: '2',
        itemName: '上海'
    }, {
        itemId: '3',
        itemName: '广州'
    }, {
        itemId: '4',
        itemName: '克孜勒苏柯尔克孜自治州'
    }];

    return data;
}


