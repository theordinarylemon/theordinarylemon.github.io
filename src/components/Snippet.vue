<template>
    <div class="snippet">
    <h3>
        <b><a target="_blank" href="#"
            title="MORE">
            <img :src="samon" alt="MORE" title="MORE" /></a></b>
            <em><a
                target="_blank" href="#"
                title="欧麦西动态">
                欧麦西动态</a></em></h3>
    
            <dl class="clearfix">
                <dt><a href="#" target="_blank"
                    title="欧麦西为您打造“智能生活”">
                    <img :src="samon"  alt="欧麦西为您打造“智能生活”"
                        title="欧麦西为您打造“智能生活”" /></a></dt>
                <dd>
                    <h6>
                        <a href="#/" target="_blank" title="欧麦西为您打造“智能生活”">
                            欧麦西为您打造“智能生活”</a></h6>
                    <p>
                        清晨，当你醒来时，只需轻轻一按手边的智能家居开关，卧室的灯自动亮起，窗帘自动拉开，和煦的阳光温暖整个卧室，轻缓的音乐随之而起，唤醒你..</p>
                </dd>
            </dl>
        
    <ul>
        
                <li><a href="#/" target="_blank"
                    title="与欧麦西一起探访2021广州建博会">
                    与欧麦西一起探访2021广州建博会</a></li>
            
                <li><a href="#/Article/znczdgzyl_1.html" target="_blank"
                    title="智能插座的工作原理">
                    智能插座的工作原理</a></li>
            
                <li><a href="#/Article/ykqdfl_1.html" target="_blank"
                    title="智能家居的分类">
                    智能家居的分类</a></li>
            
                <li><a href="#/Article/kbykqczff_1.html" target="_blank"
                    title="拷贝智能家居操作方法">
                    拷贝智能家居操作方法</a></li>
            
                <li><a href="#/Article/2021dessjz_1.html" target="_blank"
                    title="2021第二十三届中国（广州）国际建筑装饰会">
                    2021第二十三届中国（广州）国际建筑..</a></li>
            
    </ul>
</div>
</template>
<script>
import samon from "../assets/samon.jpeg"

export default {
   name:"SnippetVue",
   data(){
    return{
    samon
    }
   }
}
</script>

<style scoped>
.snippet h3 em a,.dt h3 em a:hover,.dt h3 em a.cur {
    /* background:url('samon.jpeg')  */
    /* repeat:repeat-x; */
    color:#651a1a;
    }
.snippet img{
    width: 50px;
    height: 80px;
}
.dt h3 b {
    float: right; 
    font-weight:normal; 
    font-size:12px; 
    padding:8px 0 0;
    }

.dt h3 b a {
    color:#999;
    }
.dt-l h3 {
    padding-left:20px;
    }
.snippet h3 {
    padding-right:18px;
    }
.dt-l{width:445px; float: left;}
.snippet{
    width:445px; 
    float: right; 
    padding:0 0 20px 28px; 
    /* background:url('samon.jpeg')  */
    /* no-repeat 0 20px; */
    }
.dt dl{padding:25px 0 0 20px;}
.dt dt{float: left; width:184px;}
.dt dt img{display:block; width:180px;height:140px; padding:1px; border:1px solid #ddd;}
.dt dd{width:210px; float: right;}
.dt h6{line-height:25px; }
.dt h6 a{font-size:12px;line-height:25px; display:inline-block; color:#ed4200;}
.dt dd p{overflow: hidden;line-height:26px; height:108px;margin:6px 0 0;}
.dt dd span{display:block;}
.dt dd span a{color:#0450a4;}
.dt ul{padding:8px 0 0 20px;}
.dt li {
    height:32px; 
    line-height:32px; 
    border-bottom:1px dashed #ccc; 
    padding-left:25px; 
    /* background:url('samon.jpeg')  */
    /* background:no-repeat 
    background-position: 0 center;  */
    }

</style>
