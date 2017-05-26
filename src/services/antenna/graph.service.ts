import { Injectable } from '@angular/core'

@Injectable()
export class GraphService {

    constructor() { }

    generateRandomPointsList() {
        let lowest: number = 0;
        let highest: number = 20;
        let step: number = highest / 2;
        let range: number = (highest - lowest) + 1;
        let list: any[] = [];
        for (var index = 0; index < 400; index++) {
            let random_integer = lowest + (range * Math.random());
            list.push(random_integer);
            lowest = (random_integer - step) < 0 ? 0 : (random_integer - step);
            highest = (random_integer + step) > 255 ? 255 : (random_integer + step);
        }
        return list;
    }
}