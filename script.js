function calc(){

let s1 = Number(document.getElementById("s1").value);
let s2 = Number(document.getElementById("s2").value);
let s3 = Number(document.getElementById("s3").value);
let s4 = Number(document.getElementById("s4").value);

let cgpa = (s1+s2+s3+s4)/4;

document.getElementById("result").innerHTML =
"Your CGPA : " + cgpa.toFixed(2);

}
<footer>
<p>© 2026 Holy Cross Women’s College</p>
<p>Student Portal Website</p>
</footer>