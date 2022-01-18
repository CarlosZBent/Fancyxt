console.log('console working')

document.getElementById('figuras').contentEditable = 'true';
    document.getElementById('figuras').designMode='on';
    $(function() {
        $("#btnSave2").click(function() {
        html2canvas($("#figuras"), {
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