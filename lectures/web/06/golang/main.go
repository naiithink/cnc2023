package main

import {
	"fmt"
	"go101/models"
}

const PI float64 = 3.14

func foo(x int, y int) (z int) {
	fmt.Println("FOOO")

	z = x + y

	return
}

type Student struct {
	id   int
	name string
	age  int
}

func increaseBy10(ptr *int) {
	*ptr += 10
}

func increaseAgeBy10(ptr *Student) {
	ptr.age += 10
}

func main() {
	// var x int

	// y := 20

	// fmt.Println(x, y, PI)

	// c := 'C'

	// switch c {
	// case 'C':
	// 	fmt.Println("This is ")
	// 	fmt.Println("This is ")
	// default:
	// 	fmt.Println("eiei")
	// }

	// if c == 'C' {
	// 	fmt.Println("yes")
	// }

	// for i := 0; i < 5; i++ {
	// 	fmt.Println(i)
	// }

	// foo(2, 5)

	// fmt.Println(foo(2, 5))

	// var arr = []int{1, 2, 3, 4, 5}

	// arr2 := make([]int, len(arr))

	// copy(arr2, arr)

	// arr = append(arr, 6, 7, 8, 9)

	// fmt.Println(arr)
	// fmt.Println(arr2)

	// fmt.Println(len(arr))

	// var std1 Student

	// std1.id = 1
	// std1.name = "John"
	// std1.age = 20

	// fmt.Printf("std1: %v\n", std1)

	// var x int = 10
	// var xPtr *int = &x

	// *xPtr = 20

	// increaseBy10(xPtr)

	// fmt.Println(*xPtr)

	fmt.Println(GetUser())
}
