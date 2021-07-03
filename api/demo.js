const calculate = require('../build/Release/calculate');


exports.demo1 = async (req, res) => {
    res.json({
        "value": calculate.calc(), error: false
    })
}

exports.demo2 = async (req, res) => {
    res.json({
        "value": calculate.calc2(), error: false
    })
}