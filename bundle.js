(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Olympian=function(i){this.trainingYears=i||0,this.qualified=!1};Olympian.prototype.getTrainingYears=function(){return this.trainingYears},Olympian.prototype.train=function(){this.trainingYears+=3},Olympian.prototype.checkIfQualified=function(){return this.trainingYears>4&&(this.qualified=!0),this.qualified},module.exports=Olympian;
},{}],2:[function(require,module,exports){
var Olympian=require("./Olympian"),input=document.getElementById("yearsInput"),submit=document.getElementById("clicker");submit.addEventListener("click",function(){var e=new Olympian(input.value);console.log("Hey new Olympian",e),document.getElementById("display").innerHTML=input.value}),console.log("welcome to the Olympics");var train=function(){};
},{"./Olympian":1}]},{},[2]);
