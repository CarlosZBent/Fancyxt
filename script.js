console.log('js working')

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

// *******************************************************************
// font type change
$('button.fontTypeBt').click( function (font) {
    font = $(this).css('font-family')
    $('#mainText').css('font-family', font)
})
// *******************************************************************
// font size change
$('button.fontSizeBtSmall').click(()=>{
    $('#mainText').css('font-size') > '35px' 
        ? $('#mainText').css('font-size', '30px')
            : $('#mainText').css('font-size', '40px')
    })  
$('button.fontSizeBtLarge').click(()=>{
    $('#mainText').css('font-size') < '50px' 
        ? $('#mainText').css('font-size', '50px')
            : $('#mainText').css('font-size', '40px')
    })  
$('button.fontSizeBtLarger').click(()=>{
    $('#mainText').css('font-size') < '60px' 
        ? $('#mainText').css('font-size', '60px')
            : $('#mainText').css('font-size', '40px')
    })  
// *******************************************************************
// text style change
$('#textShadowBt').click(()=> {
    $('#mainText').toggleClass('textShadow')
})
$('#smallCapsBt').click(()=> {
    $('#mainText').toggleClass('smallCapsText')
})
// *******************************************************************
// background color change
$('button.backgroundColorBt').click( function (gradient) {
    gradient = $(this).css('background')
    $('#mainText').css('background', gradient)
})
// *******************************************************************
// font color change
$('button.fontColorBt').click( function (color) {
    color = $(this).css('background-color')
    $('#mainText').css('color', color)
})
// *******************************************************************
// border radius change
$('button.cornerCurveBt').click( function (curve) {
    curve = $(this).css('border-radius')
    $('#mainText').css('border-radius', curve)
})
// *******************************************************************