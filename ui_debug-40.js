function faceletsDebug(URL) {
    day = new Date();
    id = day.getTime();
    eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=600,left = 240,top = 212');");
};
(function() {
        if (typeof faceletsDebug === 'undefined') {
            var faceletsDebug = false;
        }
        if (!faceletsDebug) {
            var faceletsOrigKeyup = document.onkeyup;
            document.onkeyup = function(e) {
                if (window.event) e = window.event;
                if (String.fromCharCode(e.keyCode) == 'X' & e.shiftKey & e.ctrlKey) faceletsDebug('/mojarra-bug-ui-debug-0.0.1-SNAPSHOT/index.xhtml?facelets.ui.DebugOutput=1679180862413');
                faceletsDebug = true;
                if (faceletsOrigKeyup) faceletsOrigKeyup(e);
            };