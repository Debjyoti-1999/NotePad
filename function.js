var bold=document.querySelector('#bold');
var italic=document.querySelector('#italic');
var strikethrough=document.querySelector('#strikethrough');
var justifyLeft=document.querySelector('#justifyLeft');
var justifyCentre=document.querySelector('#justifyCentre');
var justifyRight=document.querySelector('#justifyRight');
var cut=document.querySelector('#cut');
var copy=document.querySelector('#copy');
var indent=document.querySelector('#indent');
var outdent=document.querySelector('#outdent');
var subscript=document.querySelector('#subscript');
var superscript=document.querySelector('#superscript');
var undo=document.querySelector('#undo');
var redo=document.querySelector('#redo');
var insertUnorderedList=document.querySelector('#insertUnorderedList');
var fontarr=document.querySelector('#font');
var forecolor=document.querySelector('#forecolor');
var backcolor=document.querySelector('#backcolor');
var hr=document.querySelector('#HR');
var link=document.querySelector('#link');
var unlink=document.querySelector('#unlink');
var size=document.querySelector('#size');
var toggle=document.querySelector('#Toggle');
var selectAll=document.querySelector('#selectAll');
var editmode=true;
var head=document.querySelector('#headings');

var button=document.querySelector('button');

//------------------------------------------------------------------
bold.addEventListener('click',function(){
	execCmd('bold');
});
italic.addEventListener('click',function(){
  execCmd('italic');
});
strikethrough.addEventListener('click',function(){
  execCmd('strikethrough');
});
justifyLeft.addEventListener('click',function(){
  execCmd('justifyLeft');
});
justifyCentre.addEventListener('click',function(){
   execCmd('justifyCentre');
});
justifyRight.addEventListener('click',function(){
   execCmd('justifyRight');
});
cut.addEventListener('click',function(){
   execCmd('cut');
});
copy.addEventListener('click',function(){
   execCmd('copy'); 
});
indent.addEventListener('click',function(){
   execCmd('indent');
});
outdent.addEventListener('click',function(){
   execCmd('outdent');
});
subscript.addEventListener('click',function(){
   execCmd('subscript');
});
superscript.addEventListener('click',function(){
  execCmd('superscript');
});
undo.addEventListener('click',function(){
  execCmd('undo');
});
redo.addEventListener('click',function(){
  execCmd('redo');
});
insertUnorderedList.addEventListener('click',function(){
  execCmd('insertUnorderedList');
});
hr.addEventListener('click',function(){
 execCmd('insertHorizontalRule');
});
link.addEventListener('click',function(){
	 var url=prompt('Enter a url');
	execCommandWithArg('createLink',url);
});
unlink.addEventListener('click',function(){
	execCmd('unlink');
});
fontarr.addEventListener('click',function(){
	execCommandWithArg('fontName',this.value);
});
size.addEventListener('change',function(){
	execCommandWithArg('fontSize',this.value);
});
forecolor.addEventListener('change',function(){
 execCommandWithArg('foreColor',this.value);
});
backcolor.addEventListener('change',function(){
	execCommandWithArg('backcolor',this.value);
});
toggle.addEventListener('click',function(){
  if(editmode==true){
    editmode=false;
    textArea.document.designMode='Off';
  }
  else{
  	editmode=true;
  	textArea.document.designMode='On';
  }
})
selectAll.addEventListener('click',function(){
 execCmd('selectAll');
});
headings.addEventListener('change',function(){
  execCommandWithArg('formatBlock',this.value);
});



//-----------------------------------------------------------------
for(var i=0;i<fontarr.length;i++){
	fontarr[i].style.fontFamily=fontarr[i].value;
}



//-----------------------------------------------------------------
function enableEditMode(){
	textArea.document.designMode='On';
}
function execCmd(command){
	textArea.document.execCommand(command,false,null);
}
function execCommandWithArg(command,arg){
	textArea.document.execCommand(command,false,arg);
}

enableEditMode();