var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'

function padding(s, len) {
  const lens = len - (s + '').length
  for (let i = 0; i < lens; i++) {
    s = '0' + s
  }
  return s
}
// 阻止冒泡
export function clearEventBubble(e) {
  if (e.stopPropagation) e.stopPropagation()
  else e.cancelBubble = true
  if (e.preventDefault) e.preventDefault()
  else e.returnValue = false
}
// 获取样式
export function getStyle(obj, styleName) {
  if (obj.currentStyle) {
    return obj.currentStyle[styleName]
  } else {
    return getComputedStyle(obj, null)[styleName]
  }
}
// 顶层边距
export function GetPosition(obj) {
  let left = 0
  let top = 0
  while (obj.offsetParent) {
    left += obj.offsetLeft
    top += obj.offsetTop
    obj = obj.offsetParent
  }
  return { left, top }
}

export const getQueryStringByName = function(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  var context = ''
  if (r != null) context = r[2]
  reg = null

  return context == null || context === '' || context === 'undefined'
    ? ''
    : context
}
export const trim = function(s) {
  return s.replace(/(^\s*)|(\s*$)/g, '')
}
export const formatDate = {
  format: function(date, pattern) {
    pattern = pattern || DEFAULT_PATTERN
    return pattern.replace(SIGN_REGEXP, function($0) {
      switch ($0.charAt(0)) {
        case 'y':
          return padding(new Date(date).getFullYear(), $0.length)
        case 'M':
          return padding(new Date(date).getMonth() + 1, $0.length)
        case 'd':
          return padding(new Date(date).getDate(), $0.length)
        case 'w':
          return new Date(date).getDay() + 1
        case 'h':
          return padding(new Date(date).getHours(), $0.length)
        case 'm':
          return padding(new Date(date).getMinutes(), $0.length)
        case 's':
          return padding(new Date(date).getSeconds(), $0.length)
      }
    })
  },
  parse: function(dateString, pattern) {
    var matchs1 = pattern.match(SIGN_REGEXP)
    var matchs2 = dateString.match(/(\d)+/g)
    if (matchs1.length === matchs2.length) {
      var _date = new Date(1970, 0, 1)
      for (var i = 0; i < matchs1.length; i++) {
        var _int = parseInt(matchs2[i])
        var sign = matchs1[i]
        switch (sign.charAt(0)) {
          case 'y':
            _date.setFullYear(_int)
            break
          case 'M':
            _date.setMonth(_int - 1)
            break
          case 'd':
            _date.setDate(_int)
            break
          case 'h':
            _date.setHours(_int)
            break
          case 'm':
            _date.setMinutes(_int)
            break
          case 's':
            _date.setSeconds(_int)
            break
        }
      }
      return _date
    }
    return null
  }
}
export const deepCopy = function(source) {
  if (!source) {
    return source
  }
  const sourceCopy = source instanceof Array ? [] : {}
  for (const item in source) {
    sourceCopy[item] =
      typeof source[item] === 'object' ? deepCopy(source[item]) : source[item]
  }
  return sourceCopy
}

export const isObject = function(params) {
  return typeof params === 'object' && params !== null
}

export const isArray = function(params) {
  return params instanceof Array
}
export const isString = function(params) {
  return typeof params === 'string'
}
export const isNumber = function(params) {
  return typeof params === 'number'
}
export const isBoolean = function(params) {
  return typeof params === 'boolean'
}
export const isUndefined = function(params) {
  return params === undefined
}
export const isFunction = function(params) {
  return typeof params === 'function'
}
export const isNullOrUndefined = function(params) {
  return params == null
}
export const isError = function(params) {
  return params instanceof Error
}
export const isInArray = function(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return true
    }
  }
  return false
}
export class WaitUntil {
  constructor({ condition, callback, timeout }) {
    this._condition = condition
    this._callback = callback
    this._timeout = timeout || 150
    this.wait()
  }

  wait() {
    clearTimeout(this._handle)
    this._handle = setTimeout(() => {
      if (this._condition()) {
        this._callback()
      } else {
        clearTimeout(this._handle)
        this.wait()
      }
    }, this._timeout)
  }

  kill() {
    clearTimeout(this._handle)
  }
}

// 数组去重
export const uniqueArr = function(arr, key) {
  var temp = []
  arr.map(item => {
    let flag = true
    temp.map(tempItem => {
      if (item[key] === tempItem[key]) {
        flag = false
      }
    })
    if (flag) {
      temp.push(item)
    }
  })
  return temp
}

export const getWindowWidth = () => {
  return window.innerWidth
}
export const getWindowHeight = () => {
  return window.innerHeight
}
