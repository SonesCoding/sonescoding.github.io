/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Lillian Sones
      Date:   1/29/23

      Filename: project02-01.js
 */

     function FahrenheitToCelsius(degree){
      degree = (degree - 32)/ 1.8
      return degree;}

     function CelsiusToFahrenheit(degree){
      degree = (degree * 1.8) + 32
      return degree;}