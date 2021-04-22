package chap04

fun main(arg:Array<String>) {
    doFunction()
    doIfElse1()
    doIfElse2()
}

fun doFunction() {
    val a = 12
    val b = 7

    val max = if (a > b) {
        println("a 선택")
        a
    } else {
        println("b 선택")
        b
    }

    println(max)
}

fun doIfElse1() {
    println("Enter the score : ")
    val score = readLine()!!.toDouble()
    var grade = 'F'

    if (score >= 90.0) {
        grade = 'A'
    } else if (score >= 80.0 && score < 90.0) {
        grade = 'B'
    } else if (score >= 70.0 && score < 80.0) {
        grade = 'C'
    }

    println("Score:$score, Grade : $grade")
}

fun doIfElse2() {
    println("Enter the score : ")
    val score = readLine()!!.toDouble()
    var grade = 'F'

    if (score >= 90.0) {
        grade = 'A'
    } else if (score in 80 until 90) {
        grade = 'B'
    } else if (score in 70 until 80) {
        grade = 'C'
    }

    println("Score:$score, Grade : $grade")
}