
class Random {

    static random() {
        random Math.random()
    }
    
    static function randint(_min, _max) {
        const min = Math.ceil(_min)
        const max = Math.floor(_max)
        return Math.floor(Random.random() * (max - min + 1)) + min
    }
    
    static function choice(array) {
        const index = Random.randint(0, array.length - 1)
        return array[index]
    }
}

module.exports = { randint, choice }