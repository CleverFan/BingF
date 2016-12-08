/**
 * Created by chengfan on 2016/12/8.
 */
$(document).ready(function () {

    var $content =  $('#content');
    var _$content = document.getElementById('content');

    /**
     * 获得选中的文本
     * */
    function getChooseTxt() {
        return funGetSelected(_$content);
    };

    var selectTxt = funGetSelected(_$content);

    /**
    * 加粗
    * */
    var $overstriking = $('#overstriking');

    $overstriking.click(function () {
        //console.log(document.getElementById('content').val);
        //$content.html($content.html()+'\n'+'** 重点内容 **');
        /**
         * 一定要用val()函数，不然你会死的很难看！！不要用html()和text()!!!
         * */
        if(!selectTxt){
            //没有文字选中
            //$content.val($content.val() + '\n'+'** 重点内容 **');
            funInsertTopic(_$content);
        } else {
            funTextAsTopic(_$content,"##"+selectTxt+"##");
        }
    });

    /**
     * 倾斜
     * */
    var incline = $('#incline');

    incline.click(function () {
        //var $content =  $('#content');
        $content.val($content.val() + '\n'+'*倾斜*');
    });


    /**
     * 获得文本域的全部内容
     * */
    var getContentTxt = function (){

    };
    /**
     * 获得文本域的html
     * */
    var getContentHtml = function () {

    };


    /**
     * 一些方法
     * */
    function funGetSelected(element) {
        if (!window.getSelection) {
            //IE浏览器
            return document.selection.createRange().text;
        } else {
            return element.value.substr(element.selectionStart, element.selectionEnd - element.selectionStart);
        }
    };

    function funInsertTopic(textObj) {
        var msg = "## 重点内容 ##", value = textObj.value, index = value.indexOf(msg);
        if (index === -1) {
            //匹配
            funTextAsTopic(textObj, msg);
        }
        value = textObj.value;
        index = value.indexOf(msg);
        if (textObj.createTextRange) {
            var range = textObj.createTextRange();
            range.moveEnd("character", -1 * value.length)
            range.moveEnd("character", index + 5);
            range.moveStart("character", index + 1);
            range.select();
        } else {
            textObj.setSelectionRange(index + 3, index + 7);
            textObj.focus();
        }
    };

    function funTextAsTopic(textObj, textFieldValue) {
        textObj.focus();
        if (textObj.createTextRange) {
            var caretPos = document.selection.createRange().duplicate();
            document.selection.empty();
            caretPos.text = textFieldValue;
        } else if (textObj.setSelectionRange) {
            var rangeStart = textObj.selectionStart;
            var rangeEnd = textObj.selectionEnd;
            var tempStr1 = textObj.value.substring(0, rangeStart);
            var tempStr2 = textObj.value.substring(rangeEnd);
            textObj.value = tempStr1 + textFieldValue + tempStr2;
            textObj.blur();
        }
    }
});