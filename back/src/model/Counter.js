/**
 * 维护用户ID自增长表
 */
const mongoose = require("../db/db");
const CounterSchema = mongoose.Schema({
	_id: String,
	sequence_value: Number,
});
const Counter = mongoose.model("counter", CounterSchema);
module.exports = Counter;
