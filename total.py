def calculate_total(subtotal, tax, tip):
    tax_amt = subtotal * (tax/100)
    tip_amt = subtotal * (tip/100)
    return round((subtotal + tax_amt + tip_amt),2)