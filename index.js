fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, callback) {
      let newCol = (typeof col) === Array ? col.slice() : Object.values(col)

      for (let i = 0; i < newCol.length; i++) {
        callback(newCol[i])
      }
      return col
    },

    map: function(col, cb) {
        let newArr = []
        let newCol = (typeof col) === Array ? col.slice() : Object.values(col)
        // debugger
        for (let i = 0; i < newCol.length; i++) {
          newArr.push(cb(newCol[i]))
        }
        return newArr
    },

    reduce: function(col, cb, acc) {
      let newCol = (typeof col) === Array ? col.slice() : Object.values(col)
      // debugger
      if (acc) {
        for (let i = 0; i < newCol.length; i++) {
          acc = cb(acc, newCol[i], newCol)
          console.log(acc);
        }
        return acc
      } else {
          let acc = 0
          for (let i = 0; i < newCol.length; i++) {
            acc = cb(acc,newCol[i], newCol)
          }
          return acc
      }

    },

    find: function(col, predicate) {
      let newCol = (typeof col) === Array ? col.slice() : Object.values(col)

        for (let i = 0; i < newCol.length; i++) {
          if (predicate(newCol[i])) {
            return newCol[i]
          }
        }
      },

    filter: function (col, predicate) {
      let newCol = (typeof col) === Array ? col.slice() : Object.values(col)
        newArr = []
        for (let i = 0; i < newCol.length; i++) {
          if (predicate(newCol[i])) {
            newArr.push(newCol[i])
          }
        }
        return newArr
    },

    size: function (col) {
      let newCol = (typeof col) === Array ? col.slice() : Object.keys(col)
      let counter = 0
      for (let i = 0; i < newCol.length; i++) {
        counter++
      }
      return counter
    },

    first: function(col,n){

      if (n) {
        return col.slice(0,n)
      } else {
        for(const el of col){
          return el
        }
      }
    },

    last: function(col,n){
      if (n) {
        return col.slice(-n)
      } else {
        return parseInt(col.slice(-1).join())
      }
    },

    compact: function (col) {
      let newArr = []
      for(const element of col){
        if (!!element === true) {
          newArr.push(element)
        }
      }
      return newArr
    },

    sortBy: function (col,cb) {
      let newCol = [...col]
      return newCol.sort((a,b)=> cb(a)-cb(b))
    },

    flatten : function(col, dd){
      if(!dd){
        return col.join().split(",").map((a) =>  parseInt(a) )
      } else {
          let newArr = []
        for (const el of col) {
          if (el.length > 1) {
            for (const elinel of el) {
              newArr.push(elinel)
            }
          } else {
            newArr.push(el)
          }
        }
        // console.log(newArr)
        return newArr
      }
    },

    uniqSorted: function(collection, iteratee) {
        const sorted = [collection[0]]
        for (let idx = 1; idx < collection.length; idx++) {
          if (sorted[idx-1] !== collection[idx])
            sorted.push(collection[idx])
        }
        return sorted
      },

      uniq: function(collection, sorted=false, iteratee=false) {
        if (sorted) {
          return fi.uniqSorted(collection, iteratee)
        } else if (!iteratee) {
          return Array.from(new Set(collection))
        } else {
          const modifiedVals = new Set()
          const uniqVals = new Set()
          for (let val of collection) {
            const moddedVal = iteratee(val)
            if (!modifiedVals.has(moddedVal)) {
              modifiedVals.add(moddedVal)
              uniqVals.add(val)
            }
          }
          return Array.from(uniqVals)
        }
      },

    keys: function(col){
      let key = []
      for (const keys in col) {
        key.push(keys)
      }
      return key
    },

    values: function(col){
      let val = []
      for (const key in col) {
        val.push(col[key])
      }
      return val
    },

    functions: function(col){
        let methods = []
        for (const key in col) {
          if (typeof col[key] === 'function') {
            methods.push(key)
          }
        }
        return methods
    },
    giveMeMore: function () {
      return true
    }

  }
})()

fi.libraryMethod()
