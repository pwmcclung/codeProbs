def buyChoco(self, prices: List[int], money: int) -> int:
    prices_sorted = sorted(prices)
    if prices_sorted[0] + prices_sorted[1] <= money:
        return money - (prices_sorted[0] + prices_sorted[1])
    else:
        return money