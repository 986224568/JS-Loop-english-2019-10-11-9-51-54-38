document.write("<table algin='center'>");
for (var i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (var j = 1; j <= i; j++) {
        document.write("<td>" + i + "*" + j + "=" + (j * i) + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");