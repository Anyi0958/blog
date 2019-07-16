/**
 * Created by tarena on 2019/5/20.
 */
$(function(){
    $.ajax({
        url:'head.html',
        type:'get',
        success:function(msg){
            $('header').html($(msg))
        }
    })
})

$(function(){
    $.ajax({
        url:'foot.html',
        type:'get',
        success:function(msg){
            $('footer').html($(msg))
        }
    })
})