/**
 * @class Random
 */
class Random {

    /**
     * @static random - Random seed
     *
     * @return {number}  Random number between 0 and 1
     */
    static random() {
        return Math.random()
    }


    /**
     * @static randint - Random integer in [min, max]
     *
     * @param  {number} _min The lower band of the interval
     * @param  {number} _max The upper band of the interval
     * @return {number}      A random integer in the interval [min, max]
     */
    static randint(_min, _max) {
        const min = Math.ceil(_min)
        const max = Math.floor(_max)
        return Math.floor(Random.random() * (max - min + 1)) + min
    }


    /**
     * @static choice - A random element in an array
     *
     * @param  {Array} array An array of elements
     * @return {any}         The element randomly choosen
     */
    static choice(array) {
        const index = Random.randint(0, array.length - 1)
        return array[index]
    }
}

module.exports = Random