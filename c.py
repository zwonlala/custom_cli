
def solution(answers):
    answer = []
    supo1 = [1, 2, 3, 4, 5]
    supo2 = [2, 1, 2, 3, 2, 4, 2, 5]
    supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    numOfQ = len(answers)
    
    answer1 = supo1 * (numOfQ // 5) + supo1[0: (numOfQ % 5)]
    answer2 = supo2 * (numOfQ // 8) + supo2[0: (numOfQ % 8)]
    answer3 = supo3 * (numOfQ // 10) + supo3[0: (numOfQ % 10)]
    
    p = [0, 0, 0]
    
    for i in range( len(answers)):
        if answer1[i] - answers[i] == 0 :
            p[0] += 1
        if answer2[i] - answers[i] == 0 :
            p[1] += 1
        if answer3[i] - answers[i] == 0 : 
            p[2] += 1
        
    maxP = max(p)
    for idx, val in enumerate(p):
        if val == maxP:
            answer.append(idx + 1)
            
    return answer
