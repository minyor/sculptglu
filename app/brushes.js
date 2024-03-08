
document.addEventListener("DOMContentLoaded", function() {
    const viewport = document.getElementById('viewport')

    const brushContainer = document.createElement('div');
    brushContainer.className = 'brush-container';
    viewport.appendChild(brushContainer);
    var alphaIndex = 0;

    const brushContainerBtn = document.createElement('div');
    brushContainerBtn.className = 'brush-container-btn';
    brushContainerBtn.innerText = '🖌';
    viewport.appendChild(brushContainerBtn);
    brushContainerBtn.addEventListener('click', function(e) {
        brushContainer.classList.toggle("hidden");
    });

    setInterval(() => {
        const alphas = Object.entries(window.Picking.ALPHAS);
        for (; alphaIndex < alphas.length; ++alphaIndex) {
            [name, alpha] = alphas.at(alphaIndex);

            const brushItem = document.createElement('div');
            brushItem.className = 'brush-item';
            brushContainer.appendChild(brushItem);
            brushItem.addEventListener('click', function(e) {
                window.sculptManager.getCurrentTool()._idAlpha = e.target.getAttribute("data-id");
            });

            const brushItemIcon = document.createElement('div');
            brushItemIcon.className = 'brush-item-icon';
            brushItemIcon.setAttribute('data-id', name);
            brushItem.appendChild(brushItemIcon);

            if (alpha) {
                brushItemIcon.appendChild(alpha._can);
                alpha._can.setAttribute('data-id', name);
            }

            const brushItemTitle = document.createElement('div');
            brushItemTitle.className = 'brush-item-title';
            brushItemTitle.setAttribute('data-id', name);
            brushItemTitle.innerText = name;
            brushItem.appendChild(brushItemTitle);
        }
    }, 100);
});
