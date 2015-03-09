$(function(){
 $j=$inc=0; $b=7; $Keys={49:1,50:2,51:3,52:4,53:5,54:6,55:7,56:8,57:9,48:10,32:0};
 $Colours=['green','blue','khaki','cyan','magenta','grey','green','orange','red','blue','orange'];
 $birds={3:'#6edb43',4:'#62aac6',5:'#d53530',6:'#e8d420',7:'green',8:'blue',9:'red',10:'yellow'}; $Y=[0,180,-90,90,90,-90]; $plus=0; $x='X'; $y='Y'; $Approval=false;
 $('input').on('change',function(){
  $v=this.value;
  $('#brad').text($v).css({top:$v})
 });
 cu=$('#cube');
 c=$('#cube div'); $i=$('img')[0];
 $i.setAttribute('ondrag',"e=event,X=e.pageX,Y=e.pageY, X>795 && Y>205 && Y<392 ? ($plus++,$Dir=$y,$2=1,$1=$3=0): X<795 && Y>205 && Y<392 ? ($plus--,$Dir=$y,$2=1,$1=$3=0) : Y<300 && X>705 && X<892 ? ($plus++,$Dir=$x,$1=1,$2=$3=0) : Y>300 && X>705 && X<892 ? ($plus--,$Dir=$x,$1=1,$2=$3=0) : X>705 && Y<205 ? ($plus--,$Dir=$x,$3=0,$1=$2=-1) : X<705 && Y>392 ? ($plus++,$Dir=$x,$3=0,$1=$2=-1) : X<705 && Y<205 ? ($plus--,$Dir=$x,$1=-1,$2=1,$3=0) : X>892 && Y>392 ? ($plus++,$Dir=$x,$1=-1,$2=1,$3=0) : ($plus--,$Dir=$x,$1=$2=$3=0), $('#cube').css({'-webkit-transform':'rotate3D('+$1+','+$2+','+$3+','+$plus+'deg)'}),$('#loaf').text(Y), $('#brad').text($1) ");
 setTimeout(function(){c[0].style.backgroundImage='url(img/AB.jpg)';},200);
 setTimeout(function(){cu[0].style.webkitTransform='rotateY(390deg)'; cu[0].webkitRequestFullscreen()},500);
 while($b!==11){$('<button style="background-image:-webkit-radial-gradient(top,black,'+$birds[$b-4]+',black);outline-color:'+$birds[$b]+';">'+$birds[$b++]+'</button>').appendTo('body');}
 $('button').click(function(){
  $Approval ?
   ($('#ABStyle').children().remove(), $Approval=false)
  :
   (Constructor(0),$Approval=true)
  ;
  B=$(this).index()-4;
  BG=$birds[B];
  c.css({'background-color':BG});
  c[0].style.backgroundImage='url(img/AB'+(B-3)+'.jpg)';
  $i.setAttribute('src','img/AB'+(B-3)+'.jpg');
 });
 $('body').append('<br><input type=color onchange=Body(this.value)></input><span>C</span><span>O</span><span>L</span><span>O</span><span>U</span><span>R</span><span>S</span>');
 $('span').each(function(){
  this.style.color=$Colours[$j++];
 });
 window.addEventListener('keypress',function(e){
  $k=e.keyCode;
  if($Keys[$k]){
   BodyColour($Colours[$Keys[$k]]);
   $Approval?($('#ABStyle').children().remove(),$Approval=false):(Constructor(0),$Approval=true);
  }
 });
});
function maker(){
 c.each(function(){
  $inc==2||$inc==3?$Dir=$x:$Dir=$y;
  $(this)[0].setAttribute('style',
   'background-repeat:no-repeat; -webkit-transform:rotate'+$Dir+'('+$Y[$inc++]+'deg) translateZ('+99+'px);'
  );
 });
}
function Constructor(j){
 Cl=['top','right','left','front','back','ears']; Ro=['X(-27','3D(1,-1,-1,12','3D(1,1,1,12'];
 $c=Cl[j];
 j<3 ? ($r='rotate'+Ro[j]+'0deg)', j<1 ? $XYZ=$y : $XYZ=$x) : ($r='',$XYZ='Z');
 j%2 ? $One=1 : $One=-1;
 $('<style>.'+$c+'{-webkit-transform:translate'+$XYZ+'('+($One*99.5)+'px) '+$r+'}</style>').appendTo('#ABStyle');
 if(j<6)setTimeout(function(){Constructor(++j);},j*1000);
}
function BodyColour($Colour){$('body')[0].style.backgroundImage='-webkit-radial-gradient(circle,'+$Colour+',black,dark'+$Colour+')';}
function Body($Colour){$('body')[0].style.backgroundImage='-webkit-radial-gradient(circle,'+$Colour+',black,'+$Colour+',darkgrey,black)';}
