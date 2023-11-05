import { IFilm } from "../models/film.interface.js";
import { IPerson } from "../models/person.interface.js";
import { IStarships } from "../models/starship.interface.js";
import { IVehicle } from "../models/vehicle.interface.js";

// gets the title of the different models but one of them is called name
// so this function is going to "Help" us
export function getModelName(model: IPerson | IStarships | IVehicle | IFilm): string {
    if ('title' in model) return model.title;
    return model.name
}