import pkg from "lodash"
import data from "./src/data/datos.js"

const { filter, find, uniq } = pkg

const uniqueCars = uniq(data.autos)
console.log(uniqueCars)

// if i use find i only get "tigre"
const savageAnimals = filter(data.animales, (el) => {
	if (el.tipo === "salvaje") {
		return true
	}
})

console.log(savageAnimals)
