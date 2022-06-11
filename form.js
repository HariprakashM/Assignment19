let container=basic("container");
let row=basic("row");
let col=basic("col-lg-4");
let head=headfn("head","Form Submission");
head.setAttribute("id","title");
var p=document.createElement("p");
p.setAttribute("id","description");
p.innerHTML="Fill the form details properly";
let form=divfn("form");
form.setAttribute("onsubmit","return false")
var w=document.createElement("div");
w.setAttribute("class","form-group");
let a=lab("label","first","Firstname:"); 
let a0=bn();
let a1=inp("text","first-name","firstname");
let a2=bn();
let b=lab("label","last","Lastname");
let b0=bn();
let b1=inp("text","last-name","lastname");
let b2=bn();
let c=lab("label","address","Address"); 
let c0=bn();
let c1=add("address");
let c2=bn();
let d=lab("label","pincode","Pincode"); 
let d0=bn();
let d1=inp("text","pincode","pincode");
let d2=bn();
let e=lab("label","gender","Gender");
let e9=bn();
let e1=rad("radio","gender","Male");
let e2=lab("label","rad","Male");
let e8=bn();
let e3=rad("radio","gender","Female");
let e4=lab("label","rad","Female");
let e7=bn();
let f=lab("label","check","Choice of food<span>(must choose atleast 2 out of 5 items)</span>");
let f9=bn();
let f1=check("checkbox","food1","North indian");
let f2=lab("label","food1","North indian");
let f8=bn();
let f3=check("checkbox","food2","South indian");
let f4=lab("label","food2","South indian");
let f7=bn();
let f5=check("checkbox","food3","Italian");
let f6=lab("label","food3","Italian");
let f91=bn();
let f51=check("checkbox","food4","Chinese");
let f61=lab("label","food4","Chinese");
let f92=bn();
let f52=check("checkbox","food5","Japanese");
let f62=lab("label","food5","Japanese");
let f11=bn();
let f12=lab("label","state","State");
let f120=bn();
let f13=inp("text","state","state");
let f14=bn();
let f15=lab("label","country","Country");
let f150=bn();
let f16=inp("text","country","country");
let f17=bn();
let input=document.createElement("input");
input.setAttribute("type","submit");
input.setAttribute("id","submit");
input.setAttribute("class","btn btn-primary");
input.setAttribute("onclick","print()");

col.append(head,p);
col.append(form);
w.append(a,a0,a1,a2,b,b0,b1,b2,c,c0,c1,c2,d,d0,d1,d2);
form.append(w);
form.append(e,e9,e1,e2,e8,e3,e4,e7,f,f9,f1,f2,f8,f3,f4,f7,f5,f6,f91,f51,f61,f92,f52,f62,f11,f12,f120,f13,f14,f15,f150,f16,f17,input);
row.append(col);
container.append(row);
document.body.append(container);


/*table code*/

let col1=basic("col-lg-8");
let head2=headfn("head2","Temporary Database");
col1.append(head2);
row.append(col1);
container.append(row);
document.body.append(container);

let div=document.createElement("div0");
let table=document.createElement("table");
table.setAttribute("border","3");
table.setAttribute("id","tab");
table.setAttribute("class","table");
let thead=document.createElement("thead");
let trow=document.createElement("tr");
let h1=tabhead("First name");
let h2=tabhead("Last name");
let h3=tabhead("Address");
let h4=tabhead("Pincode");
let h5=tabhead("Gender");
let h6=tabhead("Food");
let h7=tabhead("State");
let h8=tabhead("Country");
trow.append(h1,h2,h3,h4,h5,h6,h7,h8);
thead.append(trow);
table.append(thead);
div.append(table);
col1.append(div);

function add(x){
    var q=document.createElement("textarea");
    q.setAttribute("cols","15");
    q.setAttribute("rows","3");
    q.setAttribute("id",x)
    q.setAttribute("placeholder","address");
    return q;
}
function basic(classname){
    let ele=document.createElement("div");
    ele.setAttribute("class",classname);
    return ele;
}
function lab(tagname,ref,cont){
    let ab =document.createElement(tagname);
    ab.setAttribute("for",ref);
    ab.innerHTML=cont;
    return ab;
}
function inp(cat,idne,holder){
    let cd=document.createElement("input");
    cd.setAttribute("type",cat);
    cd.setAttribute("id",idne);
    cd.setAttribute("placeholder",holder);
    cd.setAttribute("required","");
    return cd;
}
function rad(cat,idne,idnem){
    let ef=document.createElement("input");
    ef.setAttribute("type",cat);
    ef.setAttribute("name",idne);
    ef.setAttribute("value",idnem);
    return ef;
}
function bn(){
    let ef=document.createElement("br");
    return ef;
}
function divfn(classname){
    let gh =document.createElement("form");
    gh.setAttribute("id",classname);
    gh.setAttribute("autocomplete","off");
    return gh;
}
function headfn(classname,def){
    let ij =document.createElement("h1");
    ij.setAttribute("class",classname);
    ij.innerHTML=def;
    return ij;
}
function check(cat,idne,outvalue){
    let kl=document.createElement("input");
    kl.setAttribute("type",cat);
    kl.setAttribute("id",idne);
    kl.setAttribute("value",outvalue);
    kl.setAttribute("name","tick");
    return kl;
}
function tabhead(x){
    let op=document.createElement("th");
    op.innerHTML=x;
    op.setAttribute("class","pad");
    return op; 
}
var row1 =1;
function print(){
     document.getElementById("submit").addEventListener("click", function(event){
        event.preventDefault()
      });
var first=document.getElementById("first-name").value;
var last=document.getElementById("last-name").value;
var address=document.getElementById("address").value;
var pincode=document.getElementById("pincode").value;
var state=document.getElementById("state").value;
var country=document.getElementById("country").value;   
var entry=document.getElementById("tab");
var nrow=entry.insertRow(row1);
var cell1=nrow.insertCell(0);
var cell2=nrow.insertCell(1);
var cell3=nrow.insertCell(2);
var cell4=nrow.insertCell(3);
var cell5=nrow.insertCell(4);
var cell6=nrow.insertCell(5);
var cell7=nrow.insertCell(6);
var cell8=nrow.insertCell(7);

cell1.innerHTML=first;
cell2.innerHTML=last;
cell3.innerHTML=address;
cell4.innerHTML=pincode;
var rp=[];
var data = document.getElementsByName('gender');
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked === true)
                rp.push(data[i].value);  
            }
         if(rp.length!=1)
           alert('Please select any one gender');
         else
           cell5.innerHTML = rp;  
 
var ch=[];
var markedCheckbox = document.getElementsByName("tick");  
                for (var i=0;i<markedCheckbox.length;i++) {  
                   
                  if (markedCheckbox[i].checked) 
                    ch.push(markedCheckbox[i].value);
                }
                if(ch.length<2)
                 alert('Must choose any two food items');
                else
                cell6.innerHTML=ch.join(",");
                          
cell7.innerHTML=state;
cell8.innerHTML=country;
var tbody=document.createElement("tbody");
tbody.append(cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8);
table.append(tbody);
row1++;
document.getElementById("form").reset(); 
}
