const froyoFlavorAmount = (froyoOrderArray) =>{
  const froyoOrderAmt = {};

  for(const i in froyoOrderArray){
    const currentOrder = froyoOrderArray[i];
    //if the current order is not in the
    //order amount object
    //add it to the object and set it to one
    if(!froyoOrderAmt[currentOrder]){
      froyoOrderAmt[currentOrder] = 1;
    //if it is in the order amount object
    //add one to the total
    }else{
      froyoOrderAmt[currentOrder] += 1;
    }
  }
  return froyoOrderAmt;
}

const orderPrompt = prompt(
  "Input your order separated by a single comma and no spaces",
  `vanilla,vanilla,vanilla,strawberry,coffee,coffee`
);
const froyoOrder = orderPrompt.split(`,`);

console.log(froyoFlavorAmount(froyoOrder));
