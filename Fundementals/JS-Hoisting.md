# Predict the output of the code

## 1
```javascript
console.log(hello);
var hello = 'world';
```
Predicted output 'undefined'

## 2
```javascript
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
```
Predicted output 'magnet'

## 3
```javascript
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
```
Predicted output 'super cool'

## 4
```javascript
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = ‘gone’;
}
```
Predicted output 'chicken' 'half-chicken'

## 5
```javascript
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
```
Predicted output 'undefined is not a function'

## 6
```javascript
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
```
Predicted output 'undefined', "rock", "r&b", "disco"

## 7
```javascript
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
```
Predicted output "san jose", "seattle", "burbank" "san jose"