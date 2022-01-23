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

// Info overlay
$('h2.info').click(()=>{
    $('div.infoOverlay').css('display', 'block')
})

document.onclick = function(event){
    let target = event.target;
    if(target.className == 'infoOverlay') {
    target.style.display = 'none';
    }
    }

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
        ? $('#mainText').css('font-size', '30px') & $('button.fontSizeBtSmall').addClass('btn-outline-primary')
            : $('#mainText').css('font-size', '40px') & $('button.fontSizeBtSmall').removeClass('btn-outline-primary')
    })  
$('button.fontSizeBtLarge').click(()=>{
    $('#mainText').css('font-size') < '50px' 
        ? $('#mainText').css('font-size', '50px') & $('button.fontSizeBtLarge').addClass('btn-outline-primary')
            : $('#mainText').css('font-size', '40px') & $('button.fontSizeBtLarge').removeClass('btn-outline-primary')
    })  
$('button.fontSizeBtLarger').click(()=>{
    $('#mainText').css('font-size') < '60px' 
        ? $('#mainText').css('font-size', '60px') & $('button.fontSizeBtLarger').addClass('btn-outline-primary')
            : $('#mainText').css('font-size', '40px') & $('button.fontSizeBtLarger').removeClass('btn-outline-primary')
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

// making the active button visually active too
let currentCurve = $('#mainText').css('border-radius')
let cornerCurveButtons = Array.from($('#cornerCurveSection').children())
for (const button of cornerCurveButtons) {
    /* each time a cornerCurveBt is clicked, it'll check if any of this button's border radius
    is equal to that of the mainText, if it finds a conicidence it activates said button.
    When a different button is activated like this, the former loses the equality and 
    therefore the color activation */
    if (currentCurve == button.style.borderRadius) { 
        button.classList.add('btn-outline-primary')
    } else { button.classList.remove('btn-outline-primary') }
}
})
// *******************************************************************
// text style change
$('#textShadowBt').click(()=> {
    $('#mainText').toggleClass('textShadow')
    $('#textShadowBt').toggleClass('btn-outline-primary')
})
$('#smallCapsBt').click(()=> {
    $('#mainText').toggleClass('smallCapsText')
    $('#smallCapsBt').toggleClass('btn-outline-primary')
})