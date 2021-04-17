function match(string) {
  for (let i of string) {
    if (i === 'a') {
      return true
    }
  }
  return false
}

match('fanshiliu') // true
match('sddfds') // false