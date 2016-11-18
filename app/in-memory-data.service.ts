import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService  {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Marron' },
            { id: 12, name: 'Lord of the Dark Costeñas' },
            { id: 13, name: 'Chilly' },
            { id: 14, name: 'Billy' },
            { id: 15, name: 'Tio Ani' },
            { id: 16, name: 'Troneron' },
            { id: 17, name: 'Superman' },
            { id: 18, name: 'Buscando a Moncho' },
            { id: 19, name: 'Romeme' },
            { id: 20, name: 'Konrad' }
        ];
        return { heroes };
    }
}