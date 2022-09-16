import $ from "jquery";
// import './css/index.css';
import './css/index.less'
import logo from '../images/1.png'

$('.box').attr('src', logo);

$(function () {
    $("li:odd").css('background-color', 'red');
    $("li:even").css('background-color', 'pink');
})

function info(target) {
    target.info = "RRPerson info";
}

@info
class Person { }

console.log(Person.info);

consle.log(111)