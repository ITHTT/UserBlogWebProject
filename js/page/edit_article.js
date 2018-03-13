/**
 * Created by ithtt on 2017/9/21.
 */

$(document).ready(function () {
    var ue=UE.getEditor('article_content');

    var token_field=$('#article_tags').tokenfield();

    // $('#submit_article').on("click",new function () {
    //     var block_ui=$('.main_content');
    //     $(block_ui).block({
    //         message: '<i class="icon-spinner icon-spin" style="font-size: 20px;"></i>',
    //         timeout: 2000, //unblock after 2 seconds
    //         overlayCSS: {
    //             backgroundColor: '#fff',
    //             opacity: 0.8,
    //             cursor: 'wait'
    //         },
    //         css: {
    //             border: 0,
    //             padding: 0,
    //             backgroundColor: 'transparent'
    //         }
    //     });
    // })

    $('#submit_article').click(function () {
        alert("点击按钮")
        var article_title=$('#article_title').val();
        console.log("article_title:"+article_title);
        var article_content=ue.getContent();
        console.log("article_content:"+article_content);
        var article_tags=token_field.val();
        console.log("article_tags:"+article_tags);
        var article_is_public=$('#article_is_public').val();
        console.log("article_is_public:"+article_is_public);


    });
});