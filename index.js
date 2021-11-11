function getName(node){
    return node.name;
}

function next(node, collection){
  let nextAddress = node.next
  return collection[`${nextAddress}`]
}

function addressAt(index, linkedList, collection){
    if(index == 0){
      return linkedList
    } else {
      let node = nodeAt(index-1, linkedList, collection)
      return node.next
    }
}

function headNode(linkedList, collection){
    return collection[linkedList]
}