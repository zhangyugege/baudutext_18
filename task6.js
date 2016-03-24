/**
 * Created by Administrator on 2016/3/24.
 */
function $(id){
    return document.getElementById(id);
}
var input=$('input');
var num="";
var queue=[];
var box=$('box');
var btns=document.getElementsByTagName('button');
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){

        if(!num.match(/^\d+$/)){
            alert('请输入数字');
            return ;
        }
        switch(this.id){
            case 'left-in':queue.unshift(num);
                break;
            case 'left-out':queue.shift();
                break;
            case 'right-in':queue.push(num);
                break;
            case 'right-out':queue.pop();
                break;
        }
        flushQueue(box, queue);
    })
}
input.addEventListener('change',function(){
    num=input.value;
    if(!num.match(/^\d+$/)){
        alert('格式不正确，请输入数字');
    }
})
//事件委托
box.addEventListener('click',function(e){
    var event = window.event || e;
    var div= event.target;
    console.log(div);
    var index=parseInt(div.getAttribute('data-index'));
    console.log(index);
    queue.splice(index,1);
    console.log(queue);

    flushQueue(box,queue);
});
function flushQueue(ele,queue){
    var res="";
    for(var i= 0,len=queue.length;i<len;i++){
        res+="<div class='res-box' data-index="+ i.toString()+">"+queue[i].toString()+"</div>";
    }
    box.innerHTML=res;

}
