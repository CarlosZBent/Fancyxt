// *******************************************************************
// clean maintext text value on click
$('#mainText').click(()=>{
    if ($('#mainText').text() == "write something beautiful..." ) {
    $('#mainText').text('');
    }
})

// *******************************************************************
// snippet taken from tutorial. only changed the id names
document.getElementById('mainText').contentEditable = 'true';
    document.getElementById('mainText').designMode='on';
    $(function() {
        $("#downloadBt").click(function() {
        html2canvas($("#mainText"), {
            onrendered: function(canvas) {
            /* getting the text value from the mainText to add a part of it to the file name */
            let mainTextText = $('#mainText').text()
            let mainTextArray = Array.from(mainTextText).splice(0, 60)
            let mainTextArrayToPrint = mainTextArray.join('')
            
            saveAs(canvas.toDataURL(), `${mainTextArrayToPrint} - Fancyxt.png`);
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
$('.fontSizeBtSmall').click(()=>{
    $('#mainText').css('font-size', '30px')
})
$('.fontSizeBtNormal').click(()=>{
    $('#mainText').css('font-size', '40px')
})
$('.fontSizeBtLarge').click(()=>{
    $('#mainText').css('font-size', '50px')
})
$('.fontSizeBtLarger').click(()=>{
    $('#mainText').css('font-size', '60px')
})
/* if statement to check the active font size buttons and visually activate it */
$('.fontSizeBt').click(()=>{
    let mainTextFontSize = $('#mainText').css('font-size');
    if (mainTextFontSize == '30px') {
        $('.fontSizeBtSmall').addClass('btn-outline-primary')
    } else { $('.fontSizeBtSmall').removeClass('btn-outline-primary') }
    if (mainTextFontSize == '40px') {
        $('.fontSizeBtNormal').addClass('btn-outline-primary')
    } else { $('.fontSizeBtNormal').removeClass('btn-outline-primary') }
    if (mainTextFontSize == '50px') {
        $('.fontSizeBtLarge').addClass('btn-outline-primary')
    } else { $('.fontSizeBtLarge').removeClass('btn-outline-primary') }
    if (mainTextFontSize == '60px') {
        $('.fontSizeBtLarger').addClass('btn-outline-primary')
    } else { $('.fontSizeBtLarger').removeClass('btn-outline-primary') }
})
// *******************************************************************

// background color change
$('button.backgroundColorBt').click( function (gradient) {
    gradient = $(this).css('background')
    $('#mainText').css('background', gradient)

// making the active button visually active too
let currentBgColor = $('#mainText').css('background-color')
let backgroundColorButtons = Array.from($('div.backgroundColorSection').children())
for (const button of backgroundColorButtons) {
    /* each time a button with this loop applied to it
    is clicked, it'll check if any of it's kind has a value
    applied to the mainText, if it finds a coincidence it visually activates said button.
    When a different button is activated like this, the former loses the equality and 
    therefore the color activation */
    if (currentBgColor == button.style.backgroundColor) { 
        button.classList.add('colorButtonActive')
    } else { button.classList.remove('colorButtonActive') }
}
})
// *******************************************************************
// font color change
$('button.fontColorBt').click( function (color) {
    color = $(this).css('background-color')
    $('#mainText').css('color', color)
// making the active button visually active too
let currentColor = $('#mainText').css('color')
let colorButtons = Array.from($('div.fontColorSection').children())
for (const button of colorButtons) {
    if (currentColor == button.style.backgroundColor) { 
        button.classList.add('colorButtonActive')
    } else { button.classList.remove('colorButtonActive') }
}
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