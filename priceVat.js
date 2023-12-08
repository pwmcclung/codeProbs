function Calculator(vatRate){ 
    this.getNet = ele => +(100 * ele / (100 + vatRate)).toFixed(2);
   this.getVat = ele => +(vatRate * ele / (100 + vatRate)).toFixed(2);
 }