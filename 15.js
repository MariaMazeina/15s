function Fithteen(){
    var mas=[];
    for (let i=1; i<=15;i++){
        mas.push(i);
    }
    return mas;
}
function Shift(ray){
    ray.push(0);
    for(i=0;i<100;i++){
        let r=Math.ceil(Math.random()*4);
        let ind=ray.indexOf(0);
        let right=ray[ind+1]
        let left=ray[ind-1]
        let up=ray[ind-4]
        let down=ray[ind+4]
        switch(r){
            case 1:
                if(ind%4<3){
                ray[ind]=right;
                ray[ind+1]=0;
                }
            break;

            case 2:
                if(ind>3){
                ray[ind]=up;
                ray[ind-4]=0;
                }
            break;

            case 3:
                if(ind%4>0){
                ray[ind]=left;
                ray[ind-1]=0;
                }
            break;

            case 4:
                if(ind<12){
                ray[ind]=down;
                ray[ind+4]=0;
                }
            break;
        }
    }
    ray[ray.indexOf(0)]="";
    return ray;
}

let mix;
let count=0;
window.onload=function(){
    var c=0;
    const fith=Fithteen();
    mix=Shift(fith);
    for(i=0;i<16;i++){
        document.getElementById(i).innerHTML=mix[i];
    }
}
document.onclick=Click;
document.onkeyup=Click;

function Click(event){
    let neighbours=[];
    let e;
    let tt=event.target;
    let numE;
    for(i=0;i<16;i++){
        if(mix[i]===""){
            e=document.getElementById(i);
            numE=i;
            if(i%4>0){
                neighbours.push(document.getElementById(i-1));
            }
            if(i>3){
                neighbours.push(document.getElementById(i-4));
            }
            if(i<12){
                neighbours.push(document.getElementById(i+4));
            }
            if(i%4<3){
                neighbours.push(document.getElementById(i+1));
            }

        }
    }

    if (event.code==="ArrowUp" && numE<12){
        tt=document.getElementById(numE+4);
    }
    if (event.code==="ArrowDown" && numE>3){
        tt=document.getElementById(numE-4);
    }
    if (event.code==="ArrowRight" && numE%4>0){
        tt=document.getElementById(numE-1);
    }
    if (event.code==="ArrowUp" && numE%4<3){
        tt=document.getElementById(numE+1);
    }
    if(neighbours.includes(tt)){
        it=mix.indexOf(Number(tt.innerHTML));
        /*it=Number(target.id);*/
        let b=tt.innerHTML;
        e.innerHTML=b;
        tt.innerHTML="";
        let mass=[];
        for(let i=0;i<mix.length;i++){
            mass.push(Number(document.getElementById(i).innerHTML));
        }
        mass[mass.indexOf(0)]="";
        mix=mass;
        count++;
        counter.innerHTML=count.toString();
    }
    let newFith=Fithteen();
    newFith.push("");
    if (newFith.toString()===mix.toString()){
        alert("you win");
    }
}