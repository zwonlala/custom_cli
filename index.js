const FileMaker = require("./FileMaker");
const DirectoryChecker = require("./DirectoryChecker");
const Committer = require("./Committer");

// * FileMaker code

const pythonCode1 = `
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
`;

const pythonCode2 = `
print('my name is jwSong')
`;

const commitCallback = () => {
  // * Committer code
  Committer.commit("b.txt");

  // * Commit push code
  Committer.push();
};

// FileMaker.createFile("a", "./", "python", pythonCode2);
FileMaker.createFile(
  "b",
  "/Users/songjiwon/Desktop/custom_cli",
  "py",
  pythonCode1,
  commitCallback
);

// * DirectoryChecker code
/*
const path0 = "/Users/songjiwon/Desktop/custom_cli";
const path1 = "/Users/songjiwon/Desktop";
const path2 = "/Users/songjiwon/Desktop1";
const path3 = "/Users/songjiwon/Desktop ";

const isExisted = DirectoryChecker.isExisted(path3);
console.log(isExisted);
*/
