function match(string) {
  let isA = false
  let isB = false
  let isC = false
  let isD = false
  let isE = false
  for (let i of string) {
    if (i === 'a') {
      isA = true
    } else if (i === 'b' && isA) {
      isB = true
    } else if (i === 'c' && isB) {
      isC = true
    } else if (i === 'd' && isC) {
      isD = true
    } else if (i === 'e' && isD) {
      isE = true
    } else if (i === 'f' && isE) {
      return true
    }
  }
  return false
}

match('1232abcdef34') // true
match('1232abc2ef34') // false