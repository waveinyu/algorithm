/*
Q1. 세 수 중 최솟값 구하기
: 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

입력설명 
- 첫 번째 줄에 100이하의 세 자연수가 입력된다.

출력설명
- 첫 번째 줄에 가장 작은 수를 출력한다.

예제 1
- 입력 : 6 5 11
- 출력 : 5 
*/

/*
1단계)
            function solution(a, b, c){
                let answer;
								// 이 안에 어떤 코드를 넣어야 해결이 될까요?
                return answer;
            }

            console.log(solution(2, 5, 1));


2단계)
            function solution(a, b, c){
                let answer;
                if() answer=;
                else answer=;
                if() answer=; 
                return answer;
            }

            console.log(solution(2, 5, 1));
*/

function solution(a, b, c) {
  let answer;
  if (a < b) {
    answer = a;
  } else answer = b;

  if (answer > c) answer = c;

  return answer;
}

console.log(solution(2, 5, 1));
