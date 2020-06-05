### immutable

## [Document](https://immutable-js.github.io/immutable-js/docs/#/Map/has)

#### isImmutable()
- 判断是否为Immutable
```
   Immutable.isImmutable(a)
```

#### fromJS()
- 原生js转换为immutable
```
   Immutable.fromJS([1, 2]);  // list
   Immutable.fromJS({a: 1});   // map
```

#### toJs()
- 将immutable转回到js
```
   immutableData.toJS();
```

#### is()
- 判断数据值是否一致
```
   Immutable.is(a,b);  
```


### 数据类型
#### map
```
   immutableData.get('a')  // {a:1} 得到1
   immutableData.getIn(['a', 'b'])  // {a:{b:2}} 得到2。访问深层次的key
   immutableData.set('a', 2) // {a:1} 得到1。
   immutableData.setIn(['a', 'b'], 3)
   immutableData.update('a',function(x){return x+1})
   immutableData.updateIn(['a', 'b'],function(x){return x+1})
   immutableData.delete('a')
   immutableData.deleteIn(['a', 'b'])
```

#### List
```
   immutableData.size
   immutableData.set(index,value)
   immutableData.get(index)
   immutableData.delete(index)
   immutableData.insert(index, value)
   immutableData.clear()
   immutableData.push(value)
   immutableData.pop()
   immutableData.unshift()
   immutableData.shift()
   immutableData.concat()
   immutableData.merge({name: "hejiamin"})
```

#### Set


#### Record