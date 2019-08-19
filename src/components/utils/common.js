function isEmptyObj (obj) {
  if (typeof (obj) === 'object') {
    let tmp = JSON.stringify(obj)
    if (tmp === '{}') {
      return true
    } else {
      return false
    }
  } else {
    alert('isEmptyObj function need obj...')
    return null
  }
}

export {isEmptyObj}
