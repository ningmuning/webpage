// JavaScript Document
$(function(){
	
	 $('ul#nov li a').click(function(){
	 
	 $('ul#nov li a').removeClass('changeBgcolor');
	 $('ul#nov li a').css('color','');
	 $('ul#nov li a').css('borderBottomColor','')
	 
	 $(this).addClass('changeBgcolor');
	 $(this).css('color','white');
	 $(this).css('borderBottomColor','#24D197')
	 
		})
	/*这是头导航栏的jq*/
	
  
  
  
  
  
  /*以下是图片轮播*/
  
    var	 titles=$('ul#btn li ').get();
    var  content=$('ul#picture li img').get();
   //以下为初始化
   
     $(content).css('display','none');
     $(content[0]).css('display','block');
	
	//绑定事件
	     $(titles).hover(
		 function(){
			      clearInterval(timer);
				 $(content).css('display','none');
				  $( titles).css('border','');  
				 this.style.border='1px solid #24D197';
				  mark=$(this).index();
			      $( content[mark]).css('display','block');
			      }
		
		 )
		 
		 $(titles).mouseleave(function(){
			 
		 timer=setInterval( autoPlay
		    
		   ,700)
		 
		 })	   
			 
			
	 var mark=0;
     var timer=null;
	 
   timer=setInterval(autoPlay,700);	   
	
	
	
	
/*这是自动播放函数块*/function autoPlay(){
		    
		   if(mark>titles.length)
		 	{
				mark=0;
				
				}
		   $( titles).css('border','');  
		   $(content).css('display','none');
		  
		   $(content[mark]).css('display','block');
		   $(titles[mark]).css('border','1px solid #24D197');
		    mark++;
		 }
	
	/*轮播结束*/
	
	
	
	
	
	
	
	  
	  



	//这是搜索框的的动态
	 $('ul#novSmall li').click(function(){
	 $(this).addClass('changeBgcolor').siblings().removeClass('changeBgcolor');
		})
	
	
	  
	  
	  
  /*这是选项卡的自定义动画*/
  
     var flag="go_to_left"; 
	    var nov=$('ul.littleNov li').get();
  
     $('ul.littleNov li').not('li#final').hover(function(){
		 
		 var sy=$(this).index(); //获取点击对象的索引'sy是索引的简拼'
		  var point=sy*705; 
		
	
			if(point==-2115){
				flag="go_to_right";
				}
			else if(point==0){
				 flag="go_to_left";
				}
				
			if(flag=="go_to_left"){
				
				$('ul#concent').animate({left:-point},100);
				 point-=sy*705;
				
				}
				else if(flag=="go_to_right"){
					
					$('ul#concent').animate({left:-point},100);
				     point+=sy*705;
				
				}
			
			
   })
  /*选项卡结束*/
      
    
	
	
	
	/*这是图片的自定义动画*/
	  $('div.font').hover(function(){
		  var index=$(this).index();
		  $(this).animate({top:0},'slow')
		  })
     $('div.font').mouseleave(function(){
		  $(this).animate({top:60},'slow')
		  })
  
     
	 })
	
	<!---------------------end---------------------------------------->
	
