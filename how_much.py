def get_total(costs, items, tax):
    sub_total = 0
    for x in items:
        if x in costs:
            sub_total += costs[x]
    tax_to_apply = sub_total * tax
    total = sub_total + tax_to_apply
    return round(total,2)