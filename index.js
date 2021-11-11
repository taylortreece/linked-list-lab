function getName(node){
    return node.name;
}

function next(node, collection){
  let nextAddress = node.next
  return collection[`${nextAddress}`]
}