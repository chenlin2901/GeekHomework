function match(string) {
  let isA = false
  for (let i of string) {
    if (i === 'a') {
      isA = true
    } else if (i === 'b' && isA) {
      return true
    } else {
      isA = false
    }
  }
  return false
}

match('abcdefg') // true
match('acbdefg') // false