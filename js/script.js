function rand(x){return parseInt(Math.random()*x,10);}
deck=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
deckptr=0;
group=[0,0,0,0,0,0,0,0,0,0,0,0,0];
hand=[0,0,0,0,0,0,0,0,0,0,0];
debug=0;
bug=0;
resist=0;
ophelp=true;
function shuffle(){
  for(i=1;i<=23333;i++){
    x=rand(18);
    y=rand(18);
    t=deck[x];
    deck[x]=deck[y];
    deck[y]=t;
  }
}
function imgname(x){
  ret="https://i.loli.net/2020/02/16/"
  if(x==0)ret+="2tf53eawQjFhXTV.jpg";
  if(x==1)ret+="KmPpLxO56b24vRF.jpg";
  if(x==2)ret+="Udt1Hb7ZIFlE3PW.jpg";
  if(x==3)ret+="x38VAQgn5vGY9ck.jpg";
  if(x==4)ret+="J9wzAqb6S1gtpC5.jpg";
  if(x==5)ret+="oTaJ456OdGIERvf.jpg";
  if(x==6)ret+="CVq4rW5EJGe6giR.jpg";
  if(x==7)ret+="PMqEebaGHkUzuvp.jpg";
  if(x==8)ret+="nWGQTEfOxqXd2aU.jpg";
  if(x==9)ret+="RtyWI2GElHaejuC.jpg";
  if(x==10)ret+="TPJt4ahF6snDGjC.jpg";
  if(x==11)ret+="qTUxyeRISKnGhgZ.jpg";
  if(x==12)ret+="uVE7pwmcG1d9bJU.jpg";
  if(x==13)ret+="K8gPe54Ul26mnj3.jpg";
  if(x==14)ret+="8CPgS5XeGJ6RyEm.jpg";
  if(x==15)ret+="M6jtio2gbZTFr8a.jpg";
  if(x==16)ret+="8I1EHhgGwDoAKUs.jpg";
  if(x==17)ret+="3jgstXBaOYef7pk.jpg";
  if(x==18)ret+="ydR3an5fsFMwuzO.jpg";
  return ret;
}
function paint(){
  console.log(666);
  var x=document.getElementById("gi1");
  x.src=imgname(group[0]);
  x=document.getElementById("gi2");
  x.src=imgname(group[1]);
  x=document.getElementById("gi3");
  x.src=imgname(group[2]);
  x=document.getElementById("gi4");
  x.src=imgname(group[3]);
  x=document.getElementById("gi5");
  x.src=imgname(group[4]);
  x=document.getElementById("gi6");
  x.src=imgname(group[5]);
  x=document.getElementById("gi7");
  x.src=imgname(group[6]);
  x=document.getElementById("gi8");
  x.src=imgname(group[7]);
  x=document.getElementById("gi9");
  x.src=imgname(group[8]);
  x=document.getElementById("gi10");
  x.src=imgname(group[9]);
  x=document.getElementById("gi11");
  x.src=imgname(group[10]);
  x=document.getElementById("gi12");
  x.src=imgname(group[11]);
  x=document.getElementById("gi13");
  x.src=imgname(group[12]);
  x=document.getElementById("hi1");
  x.src=imgname(hand[0]);
  x=document.getElementById("hi2");
  x.src=imgname(hand[1]);
  x=document.getElementById("hi3");
  x.src=imgname(hand[2]);
  x=document.getElementById("hi4");
  x.src=imgname(hand[3]);
  x=document.getElementById("hi5");
  x.src=imgname(hand[4]);
  x=document.getElementById("hi6");
  x.src=imgname(hand[5]);
  x=document.getElementById("hi7");
  x.src=imgname(hand[6]);
  x=document.getElementById("hi8");
  x.src=imgname(hand[7]);
  x=document.getElementById("hi9");
  x.src=imgname(hand[8]);
  x=document.getElementById("hi10");
  x.src=imgname(hand[9]);
  x=document.getElementById("hi11");
  x.src=imgname(hand[10]);
  x=document.getElementById("t2");
  x.innerHTML="Debug数："+debug.toString();
  bug=0;
  for(i=0;i<11;i++){
    if(hand[i]!=0&&hand[i]!=18){
      bug++;
    }
  }
  x=document.getElementById("t3");
  x.innerHTML="Bug数："+bug.toString();
  x=document.getElementById("t4");
  x.innerHTML="扣分减免："+resist.toString();
  x=document.getElementById("t5");
  x.innerHTML="DDL距今天数："+(18-deckptr).toString();
  x=document.getElementById("ophelp");
  if(ophelp){
    x.style="background-color:green;color:white";
    x.innerHTML="操作帮助：开";
  }
  else{
    x.style="background-color:grey;color:black";
    x.innerHTML="操作帮助：关";
  }
  if(z3!=0){
    beginturn();
  }
}
function initgame(){
  shuffle();
  for(i=0;i<7;i++){
    group[i]=deck[deckptr];
    deckptr++;
  }
  for(i=0;i<5;i++){
    hand[i]=deck[deckptr];
    deckptr++;
  }
  //console.log(233);
  //paint();  
  //alert('点击【开始回合】，开始你的第一个回合吧！');
  beginturn();
}
function putleft(){
  for(i=0;i<13;i++){
    if(group[i]==0){
      for(j=i+1;j<13;j++){
        group[j-1]=group[j];
      }
      group[12]=0;
    }
  }
  for(i=0;i<11;i++){
    if(hand[i]==0){
      for(j=i+1;j<11;j++){
        hand[j-1]=hand[j];
      }
      hand[10]=0;
    }
  }
}
function addtogroup(x){
  for(i=0;i<13;i++){
    if(group[i]==0){
      group[i]=x;
      return;
    }
  }
}
function addtohand(x){
  for(i=0;i<11;i++){
    if(hand[i]==0){
      hand[i]=x;
      return;
    }
  }
}
function deletefromgroup(x){
  for(i=0;i<13;i++){
    if(group[i]==x){
      for(j=i+1;j<13;j++){
        group[j-1]=group[j];
      }
      group[12]=0;
      break;
    }
  }
}
function ok(a,b,c){
  if(a>b){t=a;a=b;b=t;}
  if(b>c){t=b;b=c;c=t;}
  if(a>b){t=a;a=b;b=t;}
  if(a==0)return false;
  if(b>=13||c<=12)return false;
  if(c==18&&a<b&&b<=12)return true;
  if(b-a>=3)return false;
  //console.log(a,b,c);
  if(a==1&&b==2&&c==13)return true;
  if(a==1&&b==3&&c==13)return true;
  if(a==2&&b==3&&c==13)return true;
  if(a==1&&b==2&&c==14)return true;
  if(a==1&&b==3&&c==14)return true;
  if(a==2&&b==3&&c==14)return true;
  if(a==1&&b==2&&c==15)return true;
  if(a==1&&b==3&&c==15)return true;
  if(a==2&&b==3&&c==15)return true;
  if(a==4&&b==5&&c==13)return true;
  if(a==4&&b==6&&c==13)return true;
  if(a==5&&b==6&&c==13)return true;
  if(a==4&&b==5&&c==16)return true;
  if(a==4&&b==6&&c==16)return true;
  if(a==5&&b==6&&c==16)return true;
  if(a==7&&b==8&&c==14)return true;
  if(a==7&&b==9&&c==14)return true;
  if(a==8&&b==9&&c==14)return true;
  if(a==7&&b==8&&c==16)return true;
  if(a==7&&b==9&&c==16)return true;
  if(a==8&&b==9&&c==16)return true;
  if(a==7&&b==8&&c==17)return true;
  if(a==7&&b==9&&c==17)return true;
  if(a==8&&b==9&&c==17)return true;
  if(a==10&&b==11&&c==15)return true;
  if(a==10&&b==12&&c==15)return true;
  if(a==11&&b==12&&c==15)return true;
  if(a==10&&b==11&&c==17)return true;
  if(a==10&&b==12&&c==17)return true;
  if(a==11&&b==12&&c==17)return true;
  return false;
}
function canpung(x){
  flag=false;
  for(var i=0;i<13;i++){
    if(flag)break;
    if(group[i]==0)continue;
    for(var j=i+1;j<13;j++){
      //console.log(i,j);
      if(group[j]!=0&&ok(group[i],group[j],x)){
        flag=true;
        break;
      }
    }
  } 
  return flag;
}
z1=999;
z2=0;
z3=0;
cp=[false,false,false,false,false,false,false,false,false,false,false];
function gameover(){
  s1=debug*3;
  s2=Math.max(0,bug*2-resist);
  alert('大作业顺利提交啦！\n基础得分：95\nDebug得分：'+s1.toString()+'\nBug扣分：'+s2.toString()+'\n总分：'+(s1-s2+95).toString());
  location.reload(true);
  
}
function beginturn(){
  z1=0;
  z2=0;
  z3=0;
  if(deckptr<18){
    addtohand(deck[deckptr]);
    deckptr++;
    paint();
  }
  
    end=true;
    for(i=0;i<11;i++){
      if(hand[i]!=0){
        cp[i]=canpung(hand[i]);
        if(cp[i]){
          end=false;
        }
      }
    }
    if(deckptr==18&&end){
      gameover();
    }
    if(ophelp)alert('回合开始！');
}
function foo(x){
  if(group[x]==0){
    if(ophelp)alert('这里什么都没有哦，请点击群里的牌');
    return;
  }
  if(z1==0){
    if(ophelp)alert('请先出牌');
  }
  else if(z3!=0){
   //if(ophelp) alert('本回合操作已全部完成，开始下个回合吧');
  }
  else{
    if(z2==-1){
      addtohand(group[x]);
      group[x]=0;
      putleft();
      paint();
      if(ophelp)alert('换牌成功！');
      z2=999;
      z3=999;
    }
    else if(z2==0){
      z2=group[x];
    }
    else{
      z3=group[x];
      if(ok(z1,z2,z3)){
        deletefromgroup(z1);
        deletefromgroup(z2);
        deletefromgroup(z3);
        if(ophelp)alert('debug成功！');
        debug++;
      }
      else{
        if(ophelp)alert('这个组合好像不太对，重新选择吧');
        z2=0;
        z3=0;
      } 
    }
  }
  paint();
}
function fooo(x){
  if(hand[x]==0){
    if(ophelp)alert('这里什么都没有哦，请点击手牌');
    return;
  }
  if(z1==0){
    if(!cp[x]&&deckptr==18){
      if(ophelp)alert('你不能出这张牌！');
    }
    else{
      z1=hand[x];
      if(cp[x]){
        if(ophelp)alert('请点击你要与刚出的牌组合的两张场上的牌');
        z2=0;
        z3=0;
      }
      else{
        if(z1==1||z1==7||z1==10){
          if(deckptr<18){
            addtogroup(deck[deckptr]);
            deckptr++;
          }
          if(ophelp)alert('触发了【摸鱼】');
          z2=999;
          z3=999;
        }
        if(z1==4){
          if(deckptr<18){
            addtogroup(deck[deckptr]);
            deckptr++;
          }
          if(deckptr<18){
            addtogroup(deck[deckptr]);
            deckptr++;
          }
          if(ophelp)alert('触发了【超级摸鱼】');
          z2=999;
          z3=999;
        }
        if(z1==2||z1==5||z1==8){
          resist++;
          if(ophelp)alert('触发了【躲猫猫】');
          z2=999;
          z3=999;
        }
        if(z1==11){
          resist+=2;
          if(ophelp)alert('触发了【超级躲猫猫】');
          z2=999;
          z3=999;
        }
        if(z2==0&&(z1==3||z1==6||z1==9||z1==12)){
          //alert('233');
          if(hand[0]==0){
            z2=999;
            z3=999;
          }
          else{
            if(ophelp)alert('请选择你要弃掉的手牌');
            z2=-2; //表明等待弃牌
          }
        }
      }
      addtogroup(z1);
      hand[x]=0;
      putleft(); //cp在本回合内失效！
      paint();
    }
  }
  else{
    if(z2==-2){
      addtogroup(hand[x]);
      hand[x]=0;
      putleft();
      z2=-1; //表明等待换牌
      paint(); 
     if(ophelp) alert('请选择你要拿回的场上的牌');
    }
    else{
      if(ophelp)alert('你本回合已经出过牌了');
    }
  }
}
function foooo(){ophelp=!ophelp;paint();}
function fooooo(){alert('一个合法的组合形如ABA，其中两个A是相同的括号牌，B是非括号牌，且表达式ABA在B给定的语言中是语法正确且有意义的。\n特别地，“软院小哥哥”与任意两张括号牌（可以不同）组成的组合都是合法的。\nDebug数=你凑成的合法组合数量\nBug数=你的非小哥哥的手牌数量\nDDL距今天数=牌堆剩余牌的数量\n每当你点完“开始回合”后，依次：\n1.如果DDL还没到，从牌堆抽一张牌\n2.打出一张手牌，将其放到场上。\n  -如果该手牌可以与场上的某两张牌凑成合法组合，则你接着点击两张场上的牌。凑成后将这三张牌移出游戏。\n  -如果该手牌不可以与场上的任何两张牌凑成合法组合：\n    -如果DDL还没到，则触发该手牌的效果。\n    -如果DDL到了，则你不能打出这张牌。如果所有手牌都不能打出，游戏结束。\n游戏结束时，每个Debug加3分，每个Bug扣2分。你需要最大化得分。');}

initgame();