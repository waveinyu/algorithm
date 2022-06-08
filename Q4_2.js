/*
Q4. 1부터 N까지 합 출력하기
: 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

입력설명 
- 첫 번째 줄에 20이하의 자연수 N이 입력된다.

출력설명
- 첫 번째 줄에 1부터 N까지의 합을 출력한다.

예제 1
- 입력 : 6
- 출력 : 21

예제 2
- 입력 : 10
- 출력 : 55
*/

function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    // answer = answer + i;
    answer += i;
  }
  return answer;
}

console.log(solution(10));

// 응용) 1부터 n / 2까지의 합을 출력하는 프로그램 작성
function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n / 2; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(10));
