var os = navigator.platform;
if (os.search("PlayStation 4") > -1) {
	document.documentElement.innerHTML = 'Web browser will crash soon.<a id="resetBrowser" href="psns:"></a>';
	document.getElementById("resetBrowser").click();
	alert("Browser and UI crashed");
}else{
	document.documentElement.innerHTML = 'Only works on PS4!';
}