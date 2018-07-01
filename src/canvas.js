/* 
author: capsloth (BNSE)
update: 15/04/2018
*/


//"use strict";
////////////////////////////////////
//GLOBAL VARIABLES:
//TME: TIME BETWEEN RECURSIVE CALLS
//STK: STACK OF SETTIME CALLS
////////////////////////////////////
var tme = 200; var stk = [];


window.onload = function()
{
    var aux = "Please click on the top right" +
              " button < \u22EE > in case of" +
              " any doubts.";

    //alert(aux); 
    
    //handles all kinds of inputs
    inputs();
    
    //handles the buttons 
    buttons();
    
    //handles the captions and titles
    captions();
    
    //handles support and footer
    about_text();
    
    //handles select options 
    select_opt();     
    
};



/////////////////////////////////////////////////
////////////HTML STRUCTURE FUNCTIONS/////////////
/////////////////////////////////////////////////

/////////////////////////////
/////ANY INPUT DISPLAYED/////
/////////////////////////////
function inputs()
{
    var aux;
    
    //CANVAS
    aux = document.getElementById("canvas");
    aux.width = 300; aux.height = 300;
    
    //main input
    aux = document.getElementById("rep_in");
    aux.type = "number"; aux.min = "1"; 
    
    //Tree Input
    aux = document.getElementById("tr_in");
    aux.type = "range";
    aux.min = "0";aux.max = "180"; aux.value = "40";
    
    //Dragon Input
    document.getElementById("ang1").type = "number";
    document.getElementById("ang2").type = "number";

    //BFern Input
    aux = document.getElementById("size_in");
    aux.type = "range";
    aux.min = "10"; aux.max = "50"; aux.value = "15";
    
    //Julia Set Input
    aux = document.getElementById("cx_in");
    aux.type = "range";
    aux.min = "-999";aux.max = "999"; aux.value = "285";
    
    aux = document.getElementById("cy_in");
    aux.type = "range";
    aux.min = "-999"; aux.max = "999"; aux.value = "10";
}

/////////////////////////////
/////ANY BUTTON DISPLAYED////
/////////////////////////////
function buttons()
{
    var aux;
    
    //Main Input buttons
    aux = document.getElementById("send");
    aux.innerHTML = "SEND"; aux.onclick = start;
    
    aux = document.getElementById("stop");
    aux.innerHTML = "STOP";
    aux.onclick = function () 
                    {   
                        document.getElementById("send").disabled = false;
                        stop();
                    };
    
    //Tree button
    document.getElementById("done_tr").innerHTML = "DONE";
    
    //Dragon buttons
    document.getElementById("done_dg").innerHTML = "DONE";
    
    aux = document.getElementById("clear");
    aux.innerHTML = "CLEAR";
    aux.onclick = stop;
                       
    //BFern button                                        
    document.getElementById("done_fb").innerHTML = "DONE";
    
    //Julia button
    document.getElementById("done_jl").innerHTML = "PLAY";
}

/////////////////////////////
///////DROP DOWN MENU////////
/////////////////////////////
function select_opt()
{
    //Select     
    add_select("Sierpinski Triangle");
    add_select("Sierpinski Carpet");
    add_select("Keplerian Hexagon");
    add_select("Keplerian Diamond");
    add_select("Keplerian Square.1");
    add_select("Keplerian Square.2");
    add_select("Circle");
    add_select("Box");
    add_select("Cantor Symmetric");
    add_select("Cantor Asymmetric");
    add_select("Tree");
    add_select("Dragon");
    add_select("Dragon 0.1");
    add_select("Dragon 0.2");
    add_select("Dragon 0.3");
    add_select("Dragon 0.4");
    add_select("IFS - Dragon: Try it");
    add_select("Barnsley Fern");
    add_select("Julia Set"); 
    add_select("Kosh Curve"); 
    add_select("Moore Curve");

}

/////////////////////////////    
////CAPTIONS & TITLES////////
/////////////////////////////
function captions()
{
    var aux;
    
    //Header
    aux = document.createTextNode("About a Fractal");
          document.getElementById("header").appendChild(aux);
    
    //About 
    aux = document.getElementById("about");
    aux.innerHTML = "&#8942;";  
    aux.onclick = function()
                    {
                        let temp = document.getElementById("abt");
                    
                        if(temp.style.display != "block")
                        {   show("abt"); hide("dcanvas");}
                        else { show("dcanvas"); hide("abt");} 
                        
                    };
    
    
    //info title
    document.getElementById("t_msg").innerHTML = "FRACTALS";
    
    //input caption
    document.getElementById("desc").innerHTML = "# ";
    
    //tree angles input caption
    document.getElementById("infotr").innerHTML = "&#920;";
    
    //angles input caption
    document.getElementById("infodg1").innerHTML = "&#920;" + "1 ".sub();
    document.getElementById("infodg2").innerHTML = "&#920;" + "2 ".sub();
    
    //Bfern div
    document.getElementById("infobf").innerHTML = "Size";
    
    //Julia div
    document.getElementById("infocx").innerHTML = "C" + "x".sub() + ": ";
    document.getElementById("infocy").innerHTML = "C" + "y".sub() + ": ";
}

/////////////////////////////    
//////ABOUT & TUTORIAL///////
/////////////////////////////
function about_text()
{
    document.getElementById("t_abt").innerHTML = "<br/>About a Fractal".italics();
    document.getElementById("p_abt").innerHTML = 
    
            "Just another fractal program.<br/>" +
            "<br />This one started back at the end of 2017 as a html" +
            "- javascript exercise.<br/>" +
            "<br/>If you are curious:<br/>" +
            "<a href='https://code.sololearn.com/WjNc2zvYGCAN/#html'>"+
            "This is the "+ "first try".bold() + "</a><br/>" +
            "<a href='https://code.sololearn.com/W16MNTbMs3fb/#html'>" +
            "And this is the " + "first version.".bold() + "</a>" +
            "<hr /><br />" +
            
            "The list of fractals can be " +
            "<a href='https://en.wikipedia.org/wiki/" + 
            "List_of_fractals_by_Hausdorff_dimension'>" +
            "found here.".bold() + "</a><br/>" +
            "<hr /><br />" +
            
            "Very important to mention <br />" +
            "<a href='https://rosettacode.org'>" +
            "The Rosetta code,".bold() + "</a> " +
            "where I found the awesome coloring function of the <br /> " +
            "<a href='https://rosettacode.org/wiki/Julia_set'>" +
            "Julia Set".bold() + "</a>, " +
            "without it, the result would be just plain " +
            "black, which is not the same." +
            "<hr /><br />" + 
            
            "Instructions:".bold() + "<br /><ul>" +
            "<li>Select any fractal and click send.</li>" +
            "<li>A hint on the input range will be displayed.</li>" +
            "<li>Click send and watch while its done.</li>" +
            "<li>Use the stop button to halt the " +
            "execution at any time.</li>" + 
            "<li>Tree, IFS-Dragon, Barnsley Fern and Julia Set:".bold() +
            "<ul><li>Accept additional input;</li>" + 
            "<li>The " + "SEND".italics() + 
            " button is disabled in favor of the new " + 
            "DONE/PLAY".italics() + " button;</li>" + 
            "<li>To change fractal click " + 
            "STOP".italics().bold() + " first.</li>"+
            "<li>In the " + "IFS".bold() + " use the " + 
            "CLEAR".italics() + " button to clear the" +
            " canvas when playing with the angles.</li>" +
            "</ul></li>" + 
            "<li>New functions - Kosh and Moore - added, both follow the" +
            " Lindenmayer system.".bold() + " In both cases, to change values, " +
            "or change fractals please click " + "STOP".bold() + " first." +
            "</li></ul>" + "<hr /><br/>" +

            "capsloth &copy; 2018 <br/><hr />".bold();
            
     document.getElementById("tfoot").innerHTML = "capsloth &copy; 2018";
    
}










/////////////////////////////////////////////////
////////////BASIC FUNCTIONS//////////////////////
/////////////////////////////////////////////////
    
    
/////////////////////////////////////////
///hide/show html element selected
/////////////////////////////////////////
function hide(e)
{   document.getElementById(e).style.display = "none";
}

function show(e)
{   document.getElementById(e).style.display = "block";
} 

/////////////////////////////////////////
//Adds new option on select input
////////////////////////////////////////
function add_select(name)
{
    let select = document.getElementById("slct");
                            
    let opt = document.createElement("option");
        opt.innerHTML = name;
        opt.value = "f" + (select.length+1);
        if(!select.length) opt.selected = "true"; 
        
        document.getElementById("slct").appendChild(opt);
}

//////////////////////////////////////////
///Clear stack of setTimeouts 
///values stored to be able  
///to halt executioin any time
/////////////////////////////////////////
function clear_stack()
{

    if(stk.length > 0)
    {
        let k = stk.length-1;
        
        while(k>=0)
        {
            clearInterval(stk[k]);
            stk.pop();
            k--;
        }
    }
}

/////////////////////////////////////////
///Clear canvas and the stack of calls, 
///effecive stopping what is being done
/////////////////////////////////////////
function stop(t)
{
    clear_stack();
    let canvas = document.getElementById("canvas");
    
    if(canvas.getContext) 
    {
        let ctx = canvas.getContext("2d");
        ctx.restore();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

/////////////////////////////////////////
///Write text about chosen fractal  
/////////////////////////////////////////
function write_about(text, parag)
{
    document.getElementById("t_msg").innerHTML = text;
    document.getElementById("p_msg").innerHTML = parag;
}










/////////////////////////////////////////////////
////////////////MAIN FUNCTION CALL///////////////
/////////////////////////////////////////////////


function start()
{
    clear_stack();
    hide("dtree_in");
    hide("ddragon_in");
    hide("dbfern_in");
    hide("djulia_in");
    
 
 
    var ntimes = document.getElementById("rep_in").value;
    var slct = document.getElementById("slct").value;
    var canvas = document.getElementById("canvas");
    
    
    if(canvas.getContext) 
    {
        var size = canvas.width;
        
        var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, size, size);
            ctx.strokeStyle = "#804000";
            ctx.fillStyle = "#ffb366";  
        
        
        switch(slct)
        {
            case "f1": 
            {
                write_about("Sierpinski Triangle",
                            "Enter number: 1-8." +
                            "<br/>Large numbers take a lot of time.".italics());
                                
                sp_tri(ctx, size, ntimes); break;
            }
            
            case "f2":
            {   
                write_about("Sierpinski Carpet",
                            "Enter number: 1-8. " +
                            "<br/>Large numbers take a lot of time.".italics());
                                
                sp_ct(ctx, size, ntimes); break;
                
            }
            
            case "f3":
            { 
                write_about("Keplerian Hexagon",
                            "Enter number: 1-8. "+
                            "<br/>Large numbers take a lot of time.".italics());
                                
                kp_hx(ctx, size/3, ntimes); break;
            
            }
            
            case "f4":
            { 
                write_about("Keplerian Diamond",
                            "Enter number: 1-8. " +
                            "<br/>Large numbers take a lot of time.".italics());  
                                
                kp_lsg(ctx, size/2, ntimes); break;
            }
            
            case "f5": 
            { 
                write_about("Keplerian Square",
                            "Enter number: 1-8. " +
                            "<br/>Large numbers take a lot of time.".italics());
                
                kp_sq(ctx, size, 1, ntimes); break;
            }
            
            case "f6": 
            { 
                write_about("Keplerian Square - A nice mistake",
                            "Enter number: 1-8. " +
                            "<br/>Large numbers take a lot of time.".italics()); 
                
                kp_sq(ctx, size, 0, ntimes); break;
            }
            
            case "f7":
            { 
                write_about("Circles and Circles", 
                            "Enter number: 1-8. " +
                            "<br/>Large numbers don't " +
                            "show more nice results.".italics()); 
                                
                circle(ctx, size/2, ntimes); break;
            }
            
            case "f8":
            { 
                write_about("Squares",
                            "Enter number: 1-8. " +
                            "<br/>Large numbers take a lot of time.".italics());
                                
                box(ctx, size, ntimes); break;
            }
            
            case "f9":
            { 
                write_about("Cantor Symmetric",
                            "Enter number: 1-8. " +
                            "<br/>Large numbers don't show results.".italics()); 
                
                ctor(ctx, size, ntimes, 1); break;
            }
            
            case "f10":
            { 
                write_about("Cantor Asymmetric",
                            "Enter number: 1-8." +
                            "<br/>Large numbers don't show results.".italics()); 
                
                ctor(ctx, size, ntimes, 0); break;
            }
            
            case "f11":
            { 
                write_about("Two branched Tree", 
                            "Enter number." + 
                            "<br/>Large numbers take time.".italics() +
                            "<br/>Play with the angles." +
                            "<br/>Press Done.");
                            
                show("dtree_in");
                tree(ctx, 100); break;
            }
            
            case "f12":
            { 
                write_about("Dragon Curve",
                            "Enter number: 6-16." +
                            "<br/>Large numbers take a lot of time.".italics()); 
                
                drag(ctx, 100, ntimes, 0); break;
            }
            
            case "f13":
            { 
                write_about("Dragon Curve - A Nice Mistake",
                            "Enter number: 6-16. " +
                            "<br/>Large numbers take a lot of time.".italics());  
                
                drag(ctx, 100, ntimes, 1); break;
            }
            
            case "f14":
            { 
                write_about("Dragon Curve - A Nice Mistake",
                            "Enter number: 6-16. " +
                            "<br/>Large numbers take a lot of time.".italics()); 
                                
                drag(ctx, 100, ntimes, 2); break;
            }
            
            case "f15":
            { 
                write_about("Dragon Curve - A Nice Mistake",
                            "Enter number: 6-16. " +
                            "<br/>Large numbers take a lot of time.".italics());  
                                
                drag(ctx, 100, ntimes, 3); break;
            }
            
            case "f16":
            { 
                write_about("Dragon Curve - A Nice Mistake",
                            "Enter number: 6-16." +
                            "<br/>Large numbers take a lot of time.".italics());  
                
                drag(ctx, 100, ntimes, 4); break;
            }
            
            case "f17":
            { 
                write_about("IFS- Iterated function system",
                            "Enter number: 6-16. " +
                            "<br/>Large numbers take a lot of time. ".italics() +
                            "<br/>Play with the rotation angles.".italics() +
                            "<br/>Press Done");
                            
                show("ddragon_in");
                drag_try(ctx, 100, ntimes); break;
            }
            
            case "f18":
            { 
                write_about("Barnsley Fern",
                            "Enter number of points. " +
                            "<br/>No less than 1000. " + 
                            "<br/>Play with the size of the leaf." +
                            "<br/>Press Done.");
                            
                show("dbfern_in");
                b_fern(ctx, ntimes); break;
            }
            
            case "f19":
            { 
                write_about("Julia Set",
                            ("F" + "c".sup() + "(z) = z" + 
                            "2".sup() + " + c <br/> c = c" + 
                            "x".sub() + "+ ic" + "y".sub()).bold() + 
                            "<br/>Play with the constants." +
                            "<br/>Press Play." + 
                            "<br/>*Please wait, may take time.".italics().bold()); 
                
                
                show("djulia_in");
                julia(ctx, size); break;
            }

			case "f20":
            { 
                write_about("Kosh Curve",
                            "Lindenmayer System:".bold() + 
                            "<br/>Axiom: F" +
                            "<br/>Rules: F -> F+F--F+F" + 
                            "<br/>Enter numer: 1-10"); 
                
               kosh(ctx, size, ntimes); break;
            }

            case "f21":
            { 
                write_about("Moore Curve",
                            "Lindenmayer System:".bold() + 
                            "<br/>Axiom: LFL+F+LFL" +
                            "<br/>Rules: L -> -RF+LFL+FR-" + 
                            "<br/>Rules: R -> +LF-RFR-FL+" +
                            "<br/>Enter numer: 1-10"); 
                
               moore(ctx, size, ntimes); break;
            }

            
        }
    }
}










/////////////////////////////////////////////////
/////////FRACTAL CREATION FUNCTIOS///////////////
/////////////////////////////////////////////////


/////////////////////////////////////////
///SIERPINKI TRIANGLE
/////////////////////////////////////////
function sp_tri(ctx, size, ntimes = 1, cx = 0, cy = 0)
{
    let s = size/2;
    let h = size*(Math.sqrt(3)/2);
    
    ctx.save();
    ctx.translate(cx, cy);
    
    let draw = function()
            {   
                ctx.beginPath();
                    ctx.moveTo(0, h);
                    ctx.lineTo(size, h);
                    ctx.lineTo(s, 0);
                ctx.closePath();
            }();
    
    ctx.stroke();
    ctx.restore();
    
    if(ntimes > 1)
    {   
        stk.push(setTimeout(sp_tri, tme, ctx, s, ntimes-1, cx+s/2, cy));
        stk.push(setTimeout(sp_tri, tme, ctx, s, ntimes-1, cx, cy+h/2));
        stk.push(setTimeout(sp_tri, tme, ctx, s, ntimes-1, cx+s, cy+h/2));
    }
}


/////////////////////////////////////////
///SIERPINKI CARPET
/////////////////////////////////////////
function sp_ct(ctx, side, ntimes = 1, cx = -1, cy = 0)
{
    ctx.fillStyle = "#804000";
    
    if(cx == -1) 
    {
        if(ntimes == 1)
        {   
            quadro(ctx, side/3, side/3, side/3);
            return;
        }
        else cx = 0;
    }
    
 
    quadro(ctx, side/9, cx + side/9, cy + side/9);
    quadro(ctx, side/9, cx + 4*side/9, cy + side/9);
    quadro(ctx, side/9, cx + 7*side/9, cy + side/9);
        
    quadro(ctx, side/9, cx + side/9, cy + 4*side/9);
    quadro(ctx, side/3, cx + side/3, cy + side/3);
    quadro(ctx, side/9, cx + 7*side/9, cy + 4*side/9);
        
    quadro(ctx, side/9, cx + side/9, cy + 7*side/9);
    quadro(ctx, side/9, cx + 4*side/9, cy + 7*side/9);
    quadro(ctx, side/9, cx + 7*side/9, cy + 7*side/9);
    
    
    if(ntimes > 2)
    {   
        stk.push(setTimeout(sp_ct,tme,ctx,side/3,ntimes-1,cx,cy));
        stk.push(setTimeout(sp_ct,tme,ctx,side/3,ntimes-1,cx+side/3,cy));
        stk.push(setTimeout(sp_ct,tme,ctx,side/3,ntimes-1,cx+2*side/3,cy));
        
        stk.push(setTimeout(sp_ct,tme,ctx,side/3,ntimes-1,cx,cy+side/3));
        stk.push(setTimeout(sp_ct,tme,ctx,side/3,ntimes-1,cx+side/3,cy+side/3));
        stk.push(setTimeout(sp_ct,tme,ctx,side/3,ntimes-1,cx+2*side/3,cy+side/3));
        
        stk.push(setTimeout(sp_ct,tme,ctx,side/3,ntimes-1,cx,cy+2*side/3));
        stk.push(setTimeout(sp_ct,tme,ctx,side/3,ntimes-1,cx+side/3,cy+2*side/3));
        stk.push(setTimeout(sp_ct,tme,ctx,side/3,ntimes-1,cx+2*side/3,cy+2*side/3));
    
    }
}

function quadro(ctx, side, cx = 0, cy = 0)
{
   
    ctx.save();
    ctx.translate(cx, cy);
    
    let draw = function()
            {  
                ctx.beginPath();
                    ctx.moveTo(0, side);
                    ctx.lineTo(side, side);
                    ctx.lineTo(side, 0);
                    ctx.lineTo(0, 0);
                ctx.closePath();
            }();
            
    ctx.fill();
    ctx.restore();
}


/////////////////////////////////////////
///KEPLERIAN - HEXAGON
/////////////////////////////////////////
function kp_hx(ctx, size, ntimes = 1, cx = -1, cy = -1)
{
    
    if(cx == -1)
    {
        cx = size*3/4;
        cy = size*3/4;
    }
    
    ctx.save();
    ctx.translate(cx, cy);
    
    let draw = function()
            {
                ctx.beginPath();
                    let x0 = cx + size*Math.sin(0);
                    let y0 = cy + size*Math.cos(0);
                        ctx.moveTo(x0, y0);
        
                    let xaux = x0, yaux = y0;
                
                    for(let side=0;side<7;side++)
                    {   
                        let x1 = cx + size*Math.sin(side*2*Math.PI/6);
                        let y1 = cy + size*Math.cos(side*2*Math.PI/6);
                            ctx.lineTo(x1, y1);
                        
                        if(!(side%2))
                        {
                            ctx.lineTo(xaux, yaux);
                            ctx.moveTo(x1, y1);
                            xaux = x1; yaux = y1;
                        }
                    }       
            }();
            
    ctx.stroke();
    ctx.restore();
    
    if (ntimes > 1)
    {  
       stk.push(setTimeout(kp_hx, tme, ctx, size/2, ntimes-1, cx, cy+size/4));
       stk.push(setTimeout(kp_hx, tme, ctx, size/2, ntimes-1, cx-size/4.6, cy-size/8));
       stk.push(setTimeout(kp_hx, tme, ctx, size/2, ntimes-1, cx+size/4.6, cy-size/8));
       
    }
}


/////////////////////////////////////////
///KEPLERIAN - DIAMOND
/////////////////////////////////////////
function kp_lsg(ctx, size, ntimes = 1, cx = -1, cy = -1)
{
    
    let s = size/2;
    
    if(cx == -1)
    {
        cx = s;
        cy = s;
    }
  
    ctx.save();
    ctx.translate(cx, cy);
   
    
    let draw = function()
            {
                ctx.beginPath();
                    let x0 = cx + s*Math.sin(0);
                    let y0 = cy + s*Math.cos(0);
                        ctx.moveTo(x0, y0);
                    
                    for(let side=0;side<4;side++)
                    {   
                        let x1 = cx + s*Math.sin(side*2*Math.PI/3);
                        let y1 = cy + s*Math.cos(side*2*Math.PI/3);
                            ctx.lineTo(x1, y1);
                    }
                
                    for (let side=0;side<4;side++)
                    {  
                        let x1 = cx + s*Math.sin(side*2*Math.PI/3);
                        let y1 = cy - s*Math.cos(side*2*Math.PI/3);
                        
                        if (side) ctx.lineTo(x1, y1-s);
                        else ctx.moveTo(x1, y1-s);
                    }
            }();
    
    ctx.stroke();
    ctx.restore();
    

    if(ntimes > 1)
    {   
        stk.push(setTimeout(kp_lsg, tme, ctx, s, ntimes-1, cx, cy-s/2));
        stk.push(setTimeout(kp_lsg, tme, ctx, s, ntimes-1, cx-size/9.5, cy-s/8));
        stk.push(setTimeout(kp_lsg, tme, ctx, s, ntimes-1, cx+size/9.5, cy-s/8));
        stk.push(setTimeout(kp_lsg, tme, ctx, s, ntimes-1, cx, cy+s/4));
        
    }
   
}


/////////////////////////////////////////
///KEPLERIAN - SQUARE
/////////////////////////////////////////
function kp_sq(ctx, side, c, ntimes = 1, cx = 0, cy = 0)
{
    ctx.save();
    ctx.translate(cx, cy);
   
    let draw = function()
            {   
                ctx.beginPath();
                    ctx.moveTo(0, side);
                    ctx.lineTo(side, side);
                    ctx.lineTo(side, 0);
                    ctx.lineTo(0, 0);
                    ctx.lineTo(0, side);
                    ctx.moveTo(0, side);
                    ctx.lineTo(side, 0);
                    ctx.moveTo(0, 0);
                    ctx.lineTo(side, side);
                ctx.closePath();
                
            }();
    
    if(c)
    {   
        ctx.fill();
        ctx.stroke();
    }
    else
    {   
        ctx.stroke();
        ctx.fill();
    }
    
    ctx.restore();

    if(ntimes > 1)
    {   
        stk.push(setTimeout(kp_sq,tme,ctx,side/2,c,ntimes-1,cx,cy));
        stk.push(setTimeout(kp_sq,tme,ctx,side/2,c,ntimes-1,cx+side/2,cy));
        
        stk.push(setTimeout(kp_sq,tme,ctx,side/2,c,ntimes-1,cx,cy+side/2));
        stk.push(setTimeout(kp_sq,tme,ctx,side/2,c,ntimes-1,cx+side/2,cy+side/2));
        
        stk.push(setTimeout(kp_sq,tme,ctx,side/2,c,ntimes-1,cx+side/4,cy+side/4));
        
    }

}


/////////////////////////////////////////
///INFINITE CIRCLES
/////////////////////////////////////////
function circle(ctx, side, ntimes = 1, cx = -1, cy = -1)
{
    let s = side/2;
    
    if(cx == -1)
    {
        cx = s;
        cy = s;
    }
    
    ctx.save();
    ctx.translate(cx, cy);
    
    let draw = function()
            {
                ctx.beginPath();
                    var x0 = cx + s*Math.sin(0);
                    var y0 = cy + s*Math.cos(0);
                        ctx.moveTo(x0, y0);
                    
                    for(let side=0;side<181;side++)
                    {   
                        let x1 = cx + s*Math.sin(side*2*Math.PI/180);
                        let y1 = cy + s*Math.cos(side*2*Math.PI/180);
                            ctx.lineTo(x1, y1);
                    }
            }();
    
    ctx.stroke();
    ctx.restore();
    
    if(ntimes > 1)
    {   
        stk.push(setTimeout(circle,tme,ctx,side/2.1,ntimes-1,cx-s/8,cy-side/8.5));
        stk.push(setTimeout(circle,tme,ctx,side/2.1,ntimes-1,cx+side/7.5,cy));
        stk.push(setTimeout(circle,tme,ctx,side/2.1,ntimes-1,cx-s/8,cy+side/8.5));
        
    }

}


/////////////////////////////////////////
///INFINITE SQUARES
/////////////////////////////////////////
function box(ctx, side, ntimes = 1, cx = 0, cy = 0)
{
    ctx.save();
    ctx.translate(cx, cy);

    let draw = function()
            {
                ctx.beginPath();
                    ctx.moveTo(0, side);
                    ctx.lineTo(side, side);
                    ctx.lineTo(side, 0);
                    ctx.lineTo(0, 0);
                ctx.closePath();
            }();
    
    ctx.stroke();
    ctx.restore();
    
    if(ntimes > 1)
    {   
        stk.push(setTimeout(box,tme,ctx,side/3,ntimes-1,cx,cy));
        stk.push(setTimeout(box,tme,ctx,side/3,ntimes-1,cx+2*side/3,cy));
        
        stk.push(setTimeout(box,tme,ctx,side/3,ntimes-1,cx+side/3,cy+side/3));
        
        stk.push(setTimeout(box,tme,ctx,side/3,ntimes-1,cx,cy+2*side/3));
        stk.push(setTimeout(box,tme,ctx,side/3,ntimes-1,cx+2*side/3,cy+2*side/3));
    }
}


/////////////////////////////////////////
///CANTOR SET
/////////////////////////////////////////
function ctor(ctx, side, ntimes = 1, sm = 1, cx = 0, cy = 40)
{
    
    ctx.save();
    ctx.translate(cx, cy);
    ctx.lineWidth = 15;

    let draw = function()
            {
                ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(side, 0);
                    
            }();
    
    ctx.stroke();
    ctx.restore();
    
    if(ntimes > 1)
    {
        if(sm)
        {   
            stk.push(setTimeout(ctor,tme,ctx,side/3,ntimes-1,sm,cx,cy+20));
            stk.push(setTimeout(ctor,tme,ctx,side/3,ntimes-1,sm,cx+2*side/3,cy+20));
            
        }
        else
        {
            stk.push(setTimeout(ctor,tme,ctx,side/4,ntimes-1,sm,cx,cy+20));
            stk.push(setTimeout(ctor,tme,ctx,side/2,ntimes-1,sm,cx+side/2,cy+20));
        }
    }
}


/////////////////////////////////////////
///TWO BRANCH TREE
/////////////////////////////////////////
function tree(ctx, size)
{
 
    document.getElementById("send").disabled = true;
    
    var ti = document.getElementById("tr_in");
    var tout = document.getElementById("tr_out");
        tout.innerHTML = ti.value;
        
    ti.oninput = function() { tout.innerHTML = this.value;};    
        
    document.getElementById("done_tr").onclick = function()
    {
        clear_stack();
        let canvas = document.getElementById('canvas');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
        let n1 =  document.getElementById("rep_in").value;
        
        let ntimes = n1 > 1 ? n1 : 8;
        
        d_tree(ctx, size, ntimes, Math.abs(ti.value));
        
    };    
}



function d_tree(ctx, size, ntimes = 15, delta = 40, cx = 150, cy = 300, ang = -90)
{
    
    let x1, y1;
    
    if(size != 100)
    {  
        x1 = cx + size*Math.cos(ang*Math.PI/180);
        y1 = cy + size*Math.sin(ang*Math.PI/180);
    }
    else
    {
        x1 = cx;
        y1 = cy-size;
    }
    
    let draw = function()
            {   
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(x1, y1);
                
            }();
    
    ctx.stroke();
   
   
    if(ntimes > 0)
    {   
        stk.push(setTimeout(d_tree,tme,ctx,3*size/4,ntimes-1,delta,x1,y1,ang-delta));
        stk.push(setTimeout(d_tree,tme,ctx,3*size/4,ntimes-1,delta,x1,y1,ang+delta));
    }

}


/////////////////////////////////////////
///DRAGON CURVE
/////////////////////////////////////////
function drag(ctx, size, ntimes = 2, f = 0, cx = 50, cy = 100, ang = 45, d = 1)
{
    
    let draw = function(x0, y0, x, y)
            {   
                ctx.beginPath();
                ctx.moveTo(x0, y0);
                ctx.lineTo(x, y);
                ctx.stroke();
                
            };
    
    let x1, y1, x2, y2;
    let ang_aux = (ang != 45) ? (d) ? 90-ang : -90-ang : ang;
  
    x1 = cx + size * Math.cos(ang*Math.PI/180);
    y1 = cy + size * Math.sin(ang*Math.PI/180);
    x2 = x1 + size * Math.cos(ang_aux*Math.PI/180);
    y2 = y1 - size * Math.sin(ang_aux*Math.PI/180);
    
    draw(cx, cy, x1, y1);
    draw(x1, y1, x2, y2);
    
    
    
    if(ntimes > 1)
    {   
        ctx.strokeStyle = "#ffb366";
        draw(cx, cy, x1, y1);
        draw(x1, y1, x2, y2);
        
        ctx.strokeStyle = "#000000";
        
        
        let _ang1, _ang2;
        
        _ang1 = ang+45;
        
        switch(f)
        {
            case 0:
            {
                _ang2 = (ang != 45 && !d) ? ang+45 : ang-135; 
                break;
            }
            case 1:
            {
                _ang2 = (ang != 45) ? ang-135 : (!d) ? -ang-45 : ang-135;
                break;
            }
            case 2:
            {   
                _ang2 = (ang != 45 && ang != -45) ? ang-45 : (!d) ? ang-135 : ang+45;
                break;
            }
            case 3:
            {
                _ang1 = (ang != 45 && ang != -45) ? ang  : !d ? ang : ang+45;
                _ang2 = (ang != 45 && ang != -45) ? ang  : !d ? ang : ang+135;
                break;
            }
            case 4:
            {
                _ang1=(45+ang)*(1+Math.sin(Math.PI));
                _ang2=(ang-135)*(1-Math.cos(Math.PI/2)); 
                break;
            }
        }
        
        stk.push(setTimeout(drag,tme,ctx,size/Math.sqrt(2),ntimes-1,f,cx,cy,_ang1,1));
        stk.push(setTimeout(drag,tme,ctx,size/Math.sqrt(2),ntimes-1,f,x1,y1,_ang2,0));
        
    }
    
}


/////////////////////////////////////////
///IFS- Iterated function system
///DRAGON CURVE BASED
/////////////////////////////////////////
function drag_try(ctx, size, ntimes = 2, cx = 150, cy = 200, ang = 45, d = 1)
{

    document.getElementById("send").disabled = true;
    
    document.getElementById("done_dg").onclick = function()
    {
        clear_stack();
        let n1 = document.getElementById("rep_in").value;
        let n2 = document.getElementById("ang1").value;
        let n3 = document.getElementById("ang2").value;
        
        clear_stack();
        drag1(ctx, size, n1, cx, cy, ang, d, n2, n3);
    };
    clear_stack();
}

function drag1(ctx, size, ntimes=2, cx=50, cy=100, ang=45, d=1, n2=45, n3=135)
{
    let draw = function(x0, y0, x, y)
            {   
                ctx.beginPath();
                ctx.moveTo(x0, y0);
                ctx.lineTo(x, y);
                ctx.stroke();
                
            };
    
    let x1, y1, x2, y2;
    let ang_aux = (ang != 45) ? (d) ? 90-ang : -90-ang : ang;
  
    x1 = cx + size * Math.cos(ang*Math.PI/180);
    y1 = cy + size * Math.sin(ang*Math.PI/180);
    x2 = x1 + size * Math.cos(ang_aux*Math.PI/180);
    y2 = y1 - size * Math.sin(ang_aux*Math.PI/180);
    
    draw(cx, cy, x1, y1);
    draw(x1, y1, x2, y2);
    
    if(ntimes > 1)
    {   
        ctx.strokeStyle = "#ffb366";
        draw(cx, cy, x1, y1);
        draw(x1, y1, x2, y2);
        
        ctx.strokeStyle = "#000000";
        
        
        let _ang1, _ang2;
        let _size = size/Math.sqrt(2);
        
        _ang1=(n2+ang)*(1+Math.sin(Math.PI));
        _ang2=(ang-n3)*(1-Math.cos(Math.PI/2)); 
        
        stk.push(setTimeout(drag1,tme,ctx,_size,ntimes-1,cx,cy,_ang1,1,n2,n3));
        stk.push(setTimeout(drag1,tme,ctx,_size,ntimes-1,x1,y1,_ang2,0,n2,n3));
        
    }
    
}


/////////////////////////////////////////
///Barnsley Fern
/////////////////////////////////////////
function b_fern(ctx, ntimes = 500,cx = 0.0, cy = 0.0)
{
    document.getElementById("send").disabled = true;
    
    var si = document.getElementById("size_in");
    var so = document.getElementById("size_out");
        so.innerHTML = si.value;
        
    si.oninput = function() { so.innerHTML = this.value;};    
        
    document.getElementById("done_fb").onclick = function()
    {
        let canvas = document.getElementById('canvas');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let n1 = document.getElementById("rep_in").value;
        
        barn_fern(ctx, n1, si.value);
    };    
        
}

function barn_fern(ctx, ntimes = 500, size = 25, cx = 0.0, cy = 0.0)
{
    let x0 = cx, y0 = cy;
    let x1 = 0.0, y1 = 0.0;
    
    let f1 = function(){ x1 = 0.0; y1 = 0.16*y0; };
    
    let f2 = function(){ x1 = 0.85*x0 + 0.04*y0; y1= -0.04*x0 + 0.85*y0 + 1.6; };
    
    let f3 = function(){ x1 = 0.2*x0 - 0.26*y0; y1 = 0.23*x0 + 0.22*y0 + 1.6; };
    
    let f4 = function(){ x1 = -0.15*x0 + 0.28*y0; y1 = 0.26*x0 + 0.24*y0 + 0.44 };
    
    let fr = function(n) { return Math.floor(Math.random()*n); };
    
    let draw = function(x, y) 
            {
                ctx.fillStyle="green"; 
                ctx.fillRect(x*size+100,-y*size+300,1,1);
            };
    
    
    for(let i=1;i<ntimes;i++)
    {
        let value = fr(100);
        
        if(value <= 1) f1();
        else if(value <= 8) f3();
        else if(value <= 15) f4();
        else f2();
        
        draw(x1, y1);
        
        x0 = x1; y0 = y1;

    }

}


/////////////////////////////////////////
///Julia set 
/////////////////////////////////////////
function julia(ctx, size)
{
    var tempx = -0.70176;
    var tempy = -0.3842;
    
    julia_frac(ctx, tempx, tempy);
    
    document.getElementById("send").disabled = true;
    
    var nx = document.getElementById("cx_in");
    var px = document.getElementById("cx_out");
        px.innerHTML = nx.value + "/1000";
        
    var ny = document.getElementById("cy_in");
    var py = document.getElementById("cy_out");
        py.innerHTML = ny.value + "/1000";
        
    nx.oninput = function() { px.innerHTML = this.value + "/1000";};    
    ny.oninput = function() { py.innerHTML = this.value + "/1000";};   
        
        
    document.getElementById("done_jl").onclick = function()
    {
    
        let tx = document.getElementById("cx_in").value / 1000.0;
        let ty  = document.getElementById("cy_in").value / 1000.0;
    
        julia_frac(ctx, tx, ty);
    
    };
}

function julia_frac(ctx, jx, jy, w=300, h=300)
{
    var MAX_IT = 1000, it = 0;
    var min = -1.5, max = 1.5;
    var tempx = jx;
    var tempy = jy;
    
    
    let map_range = function(_in, from1, to1, from2, to2)
                {
                    return (from2 + ((_in - from1) * (to2 - from2) / (to1 - from1)));
                };
    
    
    let color = function(c)
            {
                let r, g, b;
                let p = c / 32;
                let l = ~~( p * 6 );
                let o = p * 6 - l;
                let q = 1 - o;
             
                switch(l % 6)
                {
                    case 0: r = 1; g = o; b = 0; break;
                    case 1: r = q; g = 1; b = 0; break;
                    case 2: r = 0; g = 1; b = o; break;
                    case 3: r = 0; g = q; b = 1; break;
                    case 4: r = o; g = 0; b = 1; break;
                    case 5: r = 1; g = 0; b = q; break;
                }
                
                let cor = "#" +("00"+(~~(r*255)).toString(16)).slice(-2) + 
                             ("00"+(~~(g*255)).toString(16)).slice(-2) + 
                             ("00"+(~~(b*255)).toString(16)).slice(-2);
                return (cor);
            };

    for(let i=0;i<h;i++)
    {
        for(let j=0;j<w;j++)
        {   
            let sclx = map_range(i, 0, w, min, max);
            let scly = map_range(j, 0, h, min, max);
            
            it = 0;
            while(it < MAX_IT) 
            {
                let x2 = sclx*sclx - scly*scly; 
                let y2 = 2*sclx*scly;

                sclx = x2 + tempx;
                scly = y2 + tempy;
                
                if(x2 + y2 > 4) break;
                it++; 
            }
            
            ctx.fillStyle = color(it);
            ctx.fillRect(i, j, 1, 1);
            
        }
    }
}


/////////////////////////////////////////
///Kosh Curve
/////////////////////////////////////////
function kosh(ctx, size, ntimes)
{
	let lin_sys = new kosh_production(ntimes);
	let instructions = lin_sys.get_road();
	let angle = 60
	let dist = 100/ntimes;


	ctx.save();
	ctx.translate(size/2, size);
	draw_kosh(ctx, instructions, 0, angle, dist);
}

function draw_kosh(ctx, instructions, index, angle, dist)
{

	let aux = instructions[index];

	if(aux == "F")
	{
		ctx.strokeStyle = "black";
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, -dist);
		ctx.stroke();
		ctx.translate(0, -dist);
	}
	else if(aux == "+") ctx.rotate(angle*Math.PI/180);
	else if(aux == "-") ctx.rotate(-angle*Math.PI/180);
	
	
	if(index+1 >= instructions.length) return;
	
	stk.push(setTimeout(draw_kosh,tme,ctx,instructions, index+1, angle, dist)); 

}

function kosh_production(loop)
{
	this.axiom = "F";
	this.rules = {a: "F", b: "F+F--F+F"};
	this.loop = loop;


	this.get_road = function()
	{
		let instruction = "";

		if(this.loop > 10) this.loop = 10;

		for(let i=0;i<this.loop;i++)
		{
			if(!i) 
			{	instruction = this.axiom;
				continue;
			}

			let temp = "";

			for(let j=0;j<instruction.length;j++)
			{
				if(instruction[j] == this.rules.a) temp += this.rules.b;
				else temp += instruction[j];
			}

			instruction = temp;
		}

		return instruction;
	}

}



/////////////////////////////////////////
///Moore Curve
/////////////////////////////////////////
function moore(ctx, size, ntimes)
{
	let lin_sys = new moore_production(ntimes);
	let instructions = lin_sys.get_road();
	let angle = 90;
	let dist = 100/ntimes;

	ctx.save();
	ctx.translate(size, size);
	draw_moore(ctx, instructions, 0, angle, dist);
}




function draw_moore(ctx, instructions, index, angle, dist)
{

	let aux = instructions[index];

	if(aux == "F")
	{
		ctx.strokeStyle = "black";
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, -dist);
		ctx.stroke();
		ctx.translate(0, -dist);
	}
	else if(aux == "+") ctx.rotate(angle*Math.PI/180);
	else if(aux == "-") ctx.rotate(-angle*Math.PI/180);
	
	
	if(index+1 >= instructions.length) return;
	
	stk.push(setTimeout(draw_moore,tme,ctx,instructions, index+1, angle, dist)); 

}


function moore_production(loop)
{
	this.axiom = "LFL+F+LFL";
	this.rules = [];
	this.loop = loop;


	this.set = function()
	{	
		this.rules[0] = {a: "L", b: "-RF+LFL+FR-"};
		this.rules[1] = {a: "R", b: "+LF-RFR-FL+"};
	}

	this.get_road = function()
	{
		this.set();

		let instruction = "";

		if(this.loop > 10) this.loop = 10;

		for(let i=0;i<this.loop;i++)
		{
			if(!i) 
			{	instruction = this.axiom;
				continue;
			}

			let temp = "";

			for(let j=0;j<instruction.length;j++)
			{
				let ctr = 0;

				for(k=0;k<this.rules.length;k++)
				{
					if(instruction[j] == this.rules[k].a)
					{
						temp += this.rules[k].b;
						ctr = 1;
					}
				}

				if(!ctr) temp += instruction[j];
			}

			instruction = temp;
		}

		return instruction;
	}

}































