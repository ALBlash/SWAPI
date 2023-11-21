var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCollection } from "./services/dal.service.js";
import { createElementList } from "./services/elements.services.js";
// imidiatly/instant invoced function expression
// no need to activate the function it runs by it self
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { results: people } = yield getCollection('people');
    //get refrence to the lists
    const peopleList = document.querySelector('.people-list');
    const vehiclesList = document.querySelector('.vehicles-list');
    const starshipsList = document.querySelector('.starships-list');
    const filmList = document.querySelector('.films-list');
    const homeworld = document.querySelector('.homeworld-name');
    // populate the data in the people list
    (_a = peopleList.querySelector('.list-group')) === null || _a === void 0 ? void 0 : _a.remove();
    const personList = createElementList(people);
    peopleList.appendChild(personList);
}))();
