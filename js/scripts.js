$(document).ready(function() {
    $("form#roman-number").submit(function(event) {
        var number = $("input#input1").val();
        var result = '';
        var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

        for (var i = 0; i < decimals.length; i++) {
            while (number % decimals[i] < number) {
                result += romanNumerals[i];
                number -= decimals[i];

            }
        }
        console.log(result)
        $("#result").text(result);
  //      $("answer").show()
        event.preventDefault();
    });
});


// if (number > 3999 || number < 1) {
//   result = "error";
//   return result;

// switch (number) {
//   case 1:
//     return "I";
//   case 5:
//     return "V";
//   case 10:
//     return "X";
//   case 50:
//     return "L";
//   case 100:
//     return "C";
//   case 500:
//     return "D";
//   case 1000:
//     return "M";
// }
//
// if (number > 3999) {
//   return "error";
// }
//
// var digits = number.toString().split("");
// console.log(digits);
// var ones = [];
// var tens = [];
// var romanNumerals = [];
// if (digits[1] < 5) {
//   tens.push("X");
// }
// if (digits[0] > 0 && digits[0] < 5) {
//   ones.push("I");
//   if (digits[0] > 3) {
//     ones.push("V");
//   } else {
//     if (digits[0] > 1) {
//       ones.push("I");
//     }
//
//     if (digits[0] > 2) {
//       ones.push("I");
//     }
//   }
// } else if (digits[0] >= 5 && digits[0] < 10) {
//   if (digits[0] === "9") {
//     ones.push("IX");
//   } else {
//     ones.push("V");
//     if (digits[0] > 5) {
//       ones.push("I");
//     }
//     if (digits[0] > 6) {
//       ones.push("I");
//     }
//     if (digits[0] > 7) {
//       ones.push("I");
//     }
//   }
// }
//
// console.log(tens);
// console.log(ones);
// romanNumerals.unshift(ones.join(""));
// romanNumerals.unshift(tens.join(""));
//
// return romanNumerals.join("");
//};
