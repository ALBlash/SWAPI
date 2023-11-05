import { IPerson } from "./models/person.interface.js";
import { getCollection } from "./services/dal.service.js";
import { createElementList } from "./services/elements.services.js";

// imidiatly invoced function expression
// no need to activate the function it runs by it self
(async () => {
    const { results: people } = await getCollection<IPerson>('people');

    // get refrence to the lists
    const peopleList = document.querySelector('.people-list') as HTMLDivElement;
    const vehiclesList = document.querySelector('.vehicles-list') as HTMLDivElement;
    const starshipsList = document.querySelector('.starships-list') as HTMLDivElement;
    const filmsList = document.querySelector('.films-list') as HTMLDivElement;
    const homeworld = document.querySelector('.homeworld') as HTMLDivElement;


    // populate the data in the peopleList
    peopleList.querySelector('.list-group')?.remove();

    const personList: HTMLDivElement = createElementList(people);
    peopleList.appendChild(personList);
})();