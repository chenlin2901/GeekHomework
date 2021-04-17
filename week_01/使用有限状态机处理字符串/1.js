function matchStr(str) {
  let state = isA
  for (let i of str) {
    state = isA(i)
  }
  return state === end
}

function end(i) {
  return end
}

function isA(i) {
  if (i === 'a') {
    return isB
  }
  return isA
}


function isB(i) {
  if (i === 'b') {
    return isC
  }
  return isA(i)
}

function isC(i) {
  if (i === 'c') {
    return isD
  }
  return isA(i)
}

function isD(i) {
  if (i === 'D') {
    return isE
  }
  return isA(i)
}

function isE(i) {
  if (i === 'f') {
    return end(i)
  }
  return isA(i)
}

matchStr('234abcdef3') // true
matchStr('234ab3def3') // true