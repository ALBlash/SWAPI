import { getCollection } from "./services/dal.service.js";
import { createElementList } from "./services/elements.services.js";

// imidiatly/instant invoced function expression
// no need to activate the function it runs by it self
(async () => {
    const { results: people } = await getCollection<IPerson>('people')

    //get refrence to the lists
    const peopleList = document.querySelector('.people-list') as HTMLDivElement;
    const vehiclesList = document.querySelector('.vehicles-list') as HTMLDivElement;
    const starshipsList = document.querySelector('.starships-list') as HTMLDivElement;
    const filmList = document.querySelector('.films-list') as HTMLDivElement;
    const homeworld = document.querySelector('.homeworld-name') as HTMLDivElement;

    // populate the data in the people list
    peopleList.querySelector('.list-group')?.remove();

    const personList: HTMLDivElement = createElementList(people);
    peopleList.appendChild(personList);
})();