import { getModelName } from "./helper.service.js";
function createButtonElement(element) {
    const btn = document.createElement('button');
    btn.classList.add('list-group-item', 'list-group-item-action');
    btn.innerText = getModelName(element);
    btn.addEventListener('click', function (e) {
        var _a;
        this.classList.add('active');
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll('button').forEach((btn) => {
            if (btn !== this)
                btn.classList.remove('active');
        });
    });
    return btn;
}
export function createElementList(elements) {
    const div = document.createElement('div');
    div.classList.add('list-group');
    elements.forEach((element) => {
        const btn = createButtonElement(element);
        div.appendChild(btn);
    });
    return div;
}
