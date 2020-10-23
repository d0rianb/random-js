// TODO: Add examples in docs


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
     * @static randint - Random integer in [a, b]
     *
     * @param  {number} a The lower band of the interval
     * @param  {number} b The upper band of the interval
     * @return {number}      A random integer in the interval [a, b]
     */
    static randint(a, b) {
        return Math.floor(a + Math.random() * (b - a))
    }


    /**
     * @static choice - A random element in an array
     *
     * @param  {Array} array An array of elements
     * @return {any}         The element randomly choosen
     */
    static choice(array) {
        return array[~~(Random.random() * array.length)]
    }


    /**
     * @static bool - Random boolean
     *
     * @return {boolean}  A random boolean
     */
    static bool() {
        return Random.random() > 0.5
    }


    /**
     * @static percent - Random percentage below a certain probablitity
     *
     * @param  {number} percentage    A percentage between 0 and 100
     * @return {boolean}
     */
    static percent(percentage) {
        return Random.random() < percentage / 100
    }
}

module.exports = Random