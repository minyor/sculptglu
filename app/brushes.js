
function addElement(parentElement, tagName, className, innerText='') {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerText = innerText;
    parentElement.appendChild(element);
    return element;
}

function updateBrushParams(brush, idAlpha) {
    brush._idAlpha = idAlpha;
    const brushParams = Object.entries(Picking.ALPHAS_PARAMS[idAlpha] || {});
    let _intensity = 0.5;
    let _negative = false;
    let _clay = true;
    let _lockPosition = false;
    for (let paramIndex = 0; paramIndex < brushParams.length; ++paramIndex) {
        [name, value] = brushParams.at(paramIndex);
        switch (name) {
          case 'i':
            _intensity = parseFloat(value);
            break;
          case 'n':
            _negative = value === '1' ? true : false;
            break;
          case 'l':
            _lockPosition = value === '1' ? true : false;
            _clay = value === '1' ? false : true;
          case 'c':
            _clay = value === '1' ? true : false;
            break;
        }
    }
    brush._intensity = _intensity;
    brush._negative = _negative;
    brush._clay = _clay;
    brush._lockPosition = _lockPosition;
}

document.addEventListener("DOMContentLoaded", function() {
    const viewport = document.getElementById('viewport')

    const brushContainer = addElement(viewport, 'div', 'brush-container');
    const brushContainerContext = addElement(brushContainer, 'div', 'brush-container-context');

    const brushContainerBtn = addElement(viewport, 'div', 'brush-container-btn', '🖌');
    brushContainerBtn.addEventListener('click', function(e) {
        brushContainer.classList.toggle("hidden");
    });

    const brushContainerSearch = addElement(brushContainer, 'input', 'brush-container-search');
    brushContainerSearch.addEventListener('keyup', (e) => {
        e.stopPropagation();
    });
    brushContainerSearch.addEventListener('keyup', (e) => {
        let term = e.currentTarget.value;
        if(e.key === "Escape") {
            brushContainerSearch.value = term = '';
        }
        for(let i=0; i<brushContainerContext.children.length; i++){
            const brush = brushContainerContext.children[i];
            const name = brush.getAttribute('data-id');
            if (name.toLowerCase().startsWith(term.toLowerCase())) {
                brush.style='display: inline';
            } else {
                brush.style='display: none';
            }
        }
        e.stopPropagation();
    });

    const brushContainerSearchIcon = addElement(brushContainer, 'div', 'brush-container-search-icon', '🔍');

    var alphaIndex = 0;
    setInterval(() => {
        const alphas = Object.entries(window.Picking.ALPHAS);
        for (; alphaIndex < alphas.length; ++alphaIndex) {
            [name, alpha] = alphas.at(alphaIndex);

            const brushItem = addElement(brushContainerContext, 'div', 'brush-item');
            brushItem.setAttribute('data-id', name);
            brushItem.addEventListener('click', function(e) {
                updateBrushParams(window.sculptManager.getCurrentTool(), e.target.getAttribute("data-id"));
            });

            const brushItemIcon = addElement(brushItem, 'div', 'brush-item-icon');
            brushItemIcon.setAttribute('data-id', name);

            if (alpha) {
                brushItemIcon.appendChild(alpha._can);
                alpha._can.setAttribute('data-id', name);
            }

            const brushItemTitle = addElement(brushItem, 'div', 'brush-item-title', name);
            brushItemTitle.setAttribute('data-id', name);
        }
    }, 100);
});
