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
export function createElementList(elements: IPerson[] | IStarships[] | IVehicle[] | IFilm[]) {
    const div = document.createElement('div');
    div.classList.add('list-group');
    elements.forEach((element: IPerson | IStarships | IVehicle | IFilm) => {
        const btn = createButtonElement(element);
        div.appendChild(btn);
    });
    return div;
}


