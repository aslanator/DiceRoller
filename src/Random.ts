export default class Random {

    static getRandomFromArray<T>(array: Array<T>): T {
        return array[Math.floor(Math.random() * array.length)];
    }
}