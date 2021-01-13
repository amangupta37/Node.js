module.exports = (objdata , changedata) {

  
    let  placedata = changedata.replace(/{%PRODUCTNAME%}/g,objdata.productName);
  
     placedata = placedata.replace(/{%IMAGE%}/g,objdata.image);
     placedata =placedata.replace(/{%PRICE%}/g,objdata.price);
     placedata =placedata.replace(/{%FROM%}/g,objdata.from);
     placedata =placedata.replace(/{%NUTRIENTS%}/g,objdata.nutrients);
     placedata =placedata.replace(/{%QUANTITY%}/g,objdata.quantity);
     placedata =placedata.replace(/{%DESCRIPTIONS%}/g,objdata.description);
     placedata =placedata.replace(/{%ID%}/g,objdata.id);
     if(!objdata.organic)
     placedata = placedata.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
     return placedata;
  }