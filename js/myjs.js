 
var mn =$('#menu');
var se =$('#search');

$('#btnwindows').click(function (){
          var c=mn.hasClass("Menuwidjets M")
           if (c==true)
            {
            mn.addClass('Menuwidjetstrans');
            mn.removeClass('M');
                
            se.removeClass('Menuwidjetstrans');
            se.addClass('M');     
            }
             else
            {
            mn.removeClass('Menuwidjetstrans');
            mn.addClass('M');
                
            }});

$('#btnsearch').click(function (){
          var c=se.hasClass("Menuwidjets M")
           if (c==true)
            {
            se.addClass('Menuwidjetstrans');
            se.removeClass('M');
                
            mn.removeClass('Menuwidjetstrans');
            mn.addClass('M');     
            }
             else
            {
            se.removeClass('Menuwidjetstrans');
            se.addClass('M');
                
            }});


    var l1 =$('#fisrtline');
        $('#Btnmenu').click(function (){
            
          var c=l1.hasClass("line1 L");
          
           if (c==true)
            {
                
            l1.addClass('line1Vis');
            l1.removeClass('L');
                
            }
             else
            {
                
            l1.removeClass('line1Vis');
            l1.addClass('L');
                
            }});

  var l2 =$('#fisrtlinesearch');
        $('#Btsearch').click(function (){
            
          var c=l2.hasClass("line1 L");
          
           if (c==true)
            {
                
            l2.addClass('line1Vis');
            l2.removeClass('L');
                
            }
             else
            {
                
            l2.removeClass('line1Vis');
            l2.addClass('L');
                
            }});







 var ic =$('#icons');
 var wi =$('#wifi');
 var bt =$('#battery');
 var ti =$('#time');
 var lg =$('#lang');
 var sd =$('#sound');

$('#btnicon').click(function (){
          var c=ic.hasClass("widjetsso W")
           if (c==true)
            {
            ic.addClass('widjetssotrans');
            ic.removeClass('W');
                
            wi.removeClass('widjetstrans');
            wi.addClass('W'); 
                
            bt.removeClass('widjetstrans');
            bt.addClass('W');
                
            lg.removeClass('widjetstrans');
            lg.addClass('W');
                
            ti.removeClass('widjetstrans');
            ti.addClass('W');
                
            sd.removeClass('widjetstrans');
            sd.addClass('W');
                
            }
             else
            {
            ic.removeClass('widjetssotrans');
            ic.addClass('W');
                
            }});

$('#btnwifi').click(function (){
          var c=wi.hasClass("widjets W")
           if (c==true)
            {
            wi.addClass('widjetstrans');
            wi.removeClass('W');
                
            ic.removeClass('widjetssotrans');
            ic.addClass('W'); 
                
            bt.removeClass('widjetstrans');
            bt.addClass('W');
                
            ti.removeClass('widjetstrans');
            ti.addClass('W');
                
            lg.removeClass('widjetstrans');
            lg.addClass('W');
                
            sd.removeClass('widjetstrans');
            sd.addClass('W');
                
            }
             else
            {
            wi.removeClass('widjetstrans');
            wi.addClass('W');
                
            }});



$('#btnsound').click(function (){
          var c=sd.hasClass("widjets W")
           if (c==true)
            {
            sd.addClass('widjetstrans');
            sd.removeClass('W');
                
            ic.removeClass('widjetssotrans');
            ic.addClass('W'); 
                
            bt.removeClass('widjetstrans');
            bt.addClass('W');
                
            ti.removeClass('widjetstrans');
            ti.addClass('W');
                
            lg.removeClass('widjetstrans');
            lg.addClass('W');
                
            wi.removeClass('widjetstrans');
            wi.addClass('W');
                
            }
             else
            {
            sd.removeClass('widjetstrans');
            sd.addClass('W');
                
            }});


$('#btnlang').click(function (){
          var c=lg.hasClass("widjets W")
           if (c==true)
            {
            lg.addClass('widjetstrans');
            lg.removeClass('W');
                
            ic.removeClass('widjetssotrans');
            ic.addClass('W'); 
                
            bt.removeClass('widjetstrans');
            bt.addClass('W');
                
            ti.removeClass('widjetstrans');
            ti.addClass('W');
                
            wi.removeClass('widjetstrans');
            wi.addClass('W');
                
            sd.removeClass('widjetstrans');
            sd.addClass('W');
                
            }
             else
            {
            lg.removeClass('widjetstrans');
            lg.addClass('W');
                
            }});


$('#btntime').click(function (){
          var c=ti.hasClass("widjets W")
           if (c==true)
            {
            ti.addClass('widjetstrans');
            ti.removeClass('W');
                
            ic.removeClass('widjetssotrans');
            ic.addClass('W'); 
                
            bt.removeClass('widjetstrans');
            bt.addClass('W');
                
            wi.removeClass('widjetstrans');
            wi.addClass('W');
                
            lg.removeClass('widjetstrans');
            lg.addClass('W');
                
            sd.removeClass('widjetstrans');
            sd.addClass('W');
                
            }
             else
            {
            ti.removeClass('widjetstrans');
            ti.addClass('W');
                
            }});
$('#btnbattery').click(function (){
          var c=bt.hasClass("widjets W")
           if (c==true)
            {
            bt.addClass('widjetstrans');
            bt.removeClass('W');
                
            ic.removeClass('widjetssotrans');
            ic.addClass('W'); 
                
            ti.removeClass('widjetstrans');
            ti.addClass('W');
                
            wi.removeClass('widjetstrans');
            wi.addClass('W');
                
            lg.removeClass('widjetstrans');
            lg.addClass('W');
                
            sd.removeClass('widjetstrans');
            sd.addClass('W');
                
            }
             else
            {
            bt.removeClass('widjetstrans');
            bt.addClass('W');
                
            }});

