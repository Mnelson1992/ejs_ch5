function loop(value, test, update, execute) {
  if (test(value)) {
    execute(value);
    return loop(update(value), test, update, execute);
  } // else stop
}
