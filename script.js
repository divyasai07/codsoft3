function show(num) {
  document.form.input.value = document.form.input.value + num;
}

function equal() {
  var exp = document.form.input.value;
  if (exp) {
    document.form.input.value = eval(exp);
  }
}

function del() {
  var exp = document.form.input.value;
  document.form.input.value = exp.substring(0, exp.length - 1);
}
