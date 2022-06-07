/*
Q2. 삼각형 판별하기
: 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

입력설명 
- 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

출력설명
- 첫 번째 줄에 “YES", "NO"를 출력한다.

예제 1
- 입력 : 6 7 11
- 출력 : YES 

예제 2
- 입력 : 13 33 17
- 출력 : NO
*/

/*
1단계)
인터넷 검색을 통해 세 변의 길이가 주어질 때 어떤 조건이면 삼각형을 만들 수 있는지 알아내고 코드에 표현해내면 좋아요


2단계)
let tot = a+b+c 라는 세 변을 다 더한 변수를 사용해보세요. 
코드를 더 줄일 수 있을지 모릅니다
*/

// 삼각형의 가장 긴 변의 길이는 나머지 두 변의 합보다 작아야 한다.
function solution(a, b, c) {
  let max;
  if (a > b) max = a;
  else max = b;
  if (max < c) max = c;

  let tot = a + b + c;
  if (tot - max < max) answer = "NO";
  else answer = "YES";
  return answer;
}

console.log(solution(13, 33, 17));
