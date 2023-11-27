def sort_grades(lst):
    grades_val = {'VB':1, 'V0':2, 'V0+':3, 'V1':4, 'V2':5, 'V3':6, 'V4':7,'V5':8,'V6':9, 'V7':10, 'V8':11, 'V9':12, 'V10':13,'V11':14, 'V12':15,'V13':16,'V14':17, 'V15':18, 'V16':19, 'V17':20}
    result = sorted(lst, key = grades_val.get)
    return result