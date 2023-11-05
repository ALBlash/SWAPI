import { IFilm } from "../models/film.interface.js";
import { IPerson } from "../models/person.interface.js";
import { IStarships } from "../models/starship.interface.js";
import { IVehicle } from "../models/vehicle.interface.js";
import { getModelName } from "./helper.service.js";

function createButtonElement(element: IPerson | IStarships | IVehicle | IFilm): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.classList.add('list-group-item', 'list-group-item-action');
    btn.innerText = getModelName(element);

    btn.addEventListener('click', function (e: MouseEvent) {
        this.classList.add('active');
        this.parentElement?.querySelectorAll('button').forEach((btn: HTMLButtonElement) => {
            if (btn !== this) btn.classList.remove('active');
        })
    })
    return btn;
}
// the reason there is an export its for other pages to have access to this function(check script.ts)
// but createButtonElement function is being used just by createElementList(and its on the same page)
export function createElementList(elements: IPerson[] | IStarships[] | IVehicle[] | IFilm[]): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('list-group');
    elements.forEach((element: IPerson | IStarships | IVehicle | IFilm) => {
        const btn = createButtonElement(element);
        div.appendChild(btn);
    });
    return div;
}


