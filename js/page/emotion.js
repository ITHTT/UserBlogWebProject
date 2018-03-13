/**
 * Created by ithtt on 2017/9/22.
 */

$(function () {
    var emotion={
        // 定义表情
        emotions : {
            "微笑":"smile","撇嘴":"curl","色":"color","发呆":"trance","得意":"proud",
            "流泪":"tears","害羞":"shy","闭嘴":"shut","睡":"sleep","大哭":"crying",
            "尴尬":"embarrass","发怒":"torment","调皮":"naughty","龇牙":"growl","惊讶":"surprise",
            "难过":"sad","酷":"cool","冷汗":"cold","抓狂":"crazy","吐":"spit",
            "偷笑":"titter","可爱":"lovely","白眼":"whiteeye","傲慢":"arrogant","饥饿":"hunger",
            "困":"sleepy","惊恐":"panic","流汗":"sweating","憨笑":"mirth","大兵":"soldier",
            "奋斗":"fight","咒骂":"curse","疑问":"doubt","嘘…":"hiss","晕":"Halo",
            "折磨":"torture","衰":"wane","骷髅":"skeleton","敲打":"beating","再见":"goodbye",
            "擦汗":"wipe","抠鼻":"pullnose","鼓掌":"applause","糗大了":"humiliating","坏笑":"grin",
            "左哼哼":"lefthum","右哼哼":"righthum","哈欠":"yawn","鄙视":"despise","委屈":"aggrieved",
            "快哭了":"gonnacry","阴险":"sinister","亲亲":"kiss","吓":"scared","可怜":"poor",
            "菜刀":"cookknife","西瓜":"watermelon","啤酒":"beer","篮球":"basketball","兵乓":"pingpang",
            "咖啡":"coffee","饭":"rice","猪头":"pig","玫瑰":"rose","凋谢":"withered",
            "示爱":"affection","爱心":"heart","心碎":"brokenheart","蛋糕":"cake","闪电":"lighting",
            "炸弹":"bomb","刀":"knife","足球":"soccer","瓢虫":"ladybug","便便":"shit",
            "月亮":"moon","太阳":"sun","礼物":"gift","拥抱":"hug","强":"strong",
            "弱":"weak","握手":"hands","胜利":"victory","抱拳":"holdfist","勾引":"seduce",
            "拳头":"fist","差劲":"bad","爱你":"loveu","NO":"NO","OK":"OK"
        },

        box: function() {
            return $('#c-emotion');
        },

        lnk: function() {
            return $('.emotion-list');
        },

        isHidden: function(){
            return this.box().css("display") == "none" ? true : false;
        },

        showBox: function(offset) {
            this.box().slideDown("300");
            //this.lnk().show();
        },

        hideBox: function() {
            this.box().slideUp("300");
            //this.lnk().hide();
        }
    };

    // 点击表情图标
    $('#c-btn').bind("click", function(){
        if (emotion.isHidden()) {
            // 显示表情窗口
            emotion.showBox();
            // 显示表情
            if($("span", emotion.box()).length > 0){
                return false;
            }
            $.each(emotion.emotions, function(k, v){
                emotion_item="<span><a href='javascript:;' title='"+k+"'><img src='../images/emotion/" + v + ".gif'/></a></span>"
                $('.emotion-list').append(emotion_item);
            });

            // 点击某个表情
            $("[view='c-phizs']>span>a").bind("click", function(){
                var t = $('#chat_text');
                var content = t.val() + "[" + $(this).attr("title") + "]";
                t.val(content);
            });
        } else {
            emotion.hideBox();
        }
        return false;
    });

    $("body").click(function(){
        if(!emotion.isHidden()){
            emotion.hideBox();
        }
    });
});




