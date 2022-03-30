# Fancyxt
Give Fancyxt an input, style it, and it will turn it into a cool loking image you can download.

# How does it work?
Fancyxt's main functioning is very simple. The `body` is divided in two `divs`. The one on the left contains the text editor and the info texts, and the one on the right contains the side panel.
### The text editor
That text editor is a `div` with it's `contentEditable` property set to `true` and it's `designMode` to `'on'`. That allows editing by the user.
### Applying styles
The editing controls on the left work by simply applying CSS styles to the text editor `div` through jQuery.
### Converting the `div` to an image
The conversion is done with two external libraries. With [html2canvas](https://github.com/niklasvh/html2canvas) the element is converted to a canvas, that will then be converted to an image with [canvas2image](https://github.com/randreucetti/canvas2image).
Through the very same code is then created and used a link to download the generated image.
The name of the filw to be downloaded can be stablished in the same JS code.

#### Final notes
Overall, the code is very simple. The only parts that are a bit more complex are those external libraries. There are other alternatives, in case you want to try something else. [dom-to-image](https://github.com/tsayen/dom-to-image) is one, for example.

Feel free to use, fork and modify Fancyxt's code. And if you end up building something cool just give me a heads up 😉.
