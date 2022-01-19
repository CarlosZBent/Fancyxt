console.log('console working')

// *******************************************************************
// snippet taken from tutorial. only changed the id names
document.getElementById('mainText').contentEditable = 'true';
    document.getElementById('mainText').designMode='on';
    $(function() {
        $("#downloadBt").click(function() {
        html2canvas($("#mainText"), {
            onrendered: function(canvas) {
            saveAs(canvas.toDataURL(), 'Fancyxt.png');
            }
        });
        });
        function saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
        }
    });
// *******************************************************************