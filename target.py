def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        count = [x for x in hours if x >= target]
        return len(count)