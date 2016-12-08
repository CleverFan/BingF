/**
 * Created by chengfan on 2016/12/7.
 */

$(document).ready(function () {
    var $show = $('#editor-show')
    var renderer_zai30 = new marked.Renderer();
    marked.setOptions({
        renderer: renderer_zai30,
        gfm: true,
        tables: true,
        breaks: true,//回车换成br
        pedantic: true,
        sanitize: true,
        smartLists: true,
        smartypants: true
    });
    $('#content').bind('input propertychange',function (e) {
        //console.log(e.target.value)
        var tr = marked(e.target.value);
        //$show.html(tr);
        //console.log(tr);
        document.getElementById('editor-show').innerHTML =tr;
    })
});