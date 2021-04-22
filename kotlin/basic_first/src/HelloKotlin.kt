import java.lang.Math.PI
import java.lang.Math.abs

fun main(args: Array<String>) {
    helloPrint()
    printArgs(args)
    printValue()
    printMathValue()
    printString()
    printMaxValue()
}

fun helloPrint() {
    println("Hello")
}

fun printArgs(args: Array<String>) {
    if (args.size === 0) {
        return println("printArgs no data")
    }

    println(args[0])
    println(args[1])
    println(args[2])
}

fun printValue() {
    val intro = "Hello Kotlin"
    val num = 20

    println("intro : $intro, num:$num")
}

fun printMathValue() {
    val intro = "Hello Kotlin"
    val num = 20

    println(PI)
    println(abs(-12.6))

    println("intro : $intro, num:$num")
}

fun printString() {
    val number = 10
    var language = "Korean"
    val secondNumber = 20

    println("language = $language")

    language = "English"

    println("number = $number")
    println("language = $language")
    println("secondNumber = $secondNumber")
}

fun printMaxValue() {
    println(max("Test", "abc"))
    println(max("Test", "abide"))
    println(max("Test", "Test"))
}

fun max(a: String, b: String) = if (a.length > b.length) a else b
