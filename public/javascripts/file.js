/**
 * Created by chengfan on 2016/12/7.
 */

$(document).ready(function () {


    var $showFile = $('#controlFilePanel');
    var $filePanel = $('#filePanel');
    var $mainPanel = $('#mainPanel');
    var isShow = false;
    $showFile.click(function () {
        if(!isShow){
            //show
            $filePanel.fadeIn("slow");
            $mainPanel.removeClass("col-md-12").addClass("col-md-10");
            isShow = true;
        }else {
            //hide
            $filePanel.fadeOut();
            $mainPanel.removeClass("col-md-10").addClass("col-md-12");
            isShow = false;
        }
    });

});