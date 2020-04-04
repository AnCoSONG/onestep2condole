//* onestep to get get Colorful Page
(function(){
    let html = document.querySelector('html')
    function transitionToGray(dom){
        
        const transitionConfig = "filter 0.5s linear"
        dom.style.transition = transitionConfig
        dom.style.webkitTransition = transitionConfig
        dom.style['-moz-transition'] = transitionConfig
        dom.style['-o-transition'] = transitionConfig
        dom.style['-ms-transition'] = transitionConfig
    }
    
    function grayScalify(dom){
        const grayscale = `grayscale(0)`
        dom.style.filter = grayscale
        dom.style.webkitFilter = grayscale
        dom.style['-moz-filter'] = grayscale
        dom.style['-o-filter'] = grayscale
        dom.style['-ms-filter'] = grayscale
    }
    transitionToGray(html);
    grayScalify(html);
})();