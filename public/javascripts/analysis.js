/**
 * Created by chengfan on 2016/12/7.
 */

$(document).ready(function () {
    var $show = $('#editor-show')
    $('#content').bind('input propertychange',function (e) {
        //alert(e.target.value)
        var tr = marked(e.target.value);
        //$show.html(tr);
        //console.log(tr);
        document.getElementById('editor-show').innerHTML =tr;
    })
});