/*알고리즘 - 완전탐색(Exhaustive Search)
  가능한 모든 경우의 수를 다 체크해서 정답을 찾는 방법
  무식하게 한다는 의미로 "Brute Force"라고도 부른다.
  문제의 정확한 결과값을 얻어낼 수 있는 가장 확실하고 기초적인 방법이다.
*/

/* Q3. 자릿수의 합
: N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요. 
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

입력설명 
- 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
  각 자연수의 크기는 10,000,000를 넘지 않는다.

출력설명
- 자릿수의 합이 최대인 자연수를 출력한다.


- 입력 : 7
        128 460 603 40 521 137 123

- 출력 : 137
*/

/* sum of digits in JavaScript
  1st. convert the number to a string and use the split() method to split it into an array of strings.
  2nd. Call the reduce() method on the array and sum the accumulator with each array element converted back to a number.

  - 입력받은 수를 형변환(정수형 -> 문자열)
  - 문자열을 쪼갠다
  - 자연수로 다시 변환하여 더한다

자연수 + 문자열 = 문자열
문자열 * 자연수 = 자연수
*/

function solution(arr) {
  let answer;
  // 최대값을 비교 하기 위해 자바스크립트에서 가장 작은수를 지정한다.
  let max = Number.MIN_SAFE_INTEGER;

  for (let el of arr) {
    let sum = el
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
    // 더한 숫자를 비교하는 방법
    if (sum > max) {
      max = sum;
      // 진짜 원하는건 배열의 요소
      answer = el;
      // 값이 더한 값이 같을때는 요소의 숫자가 큰걸 리턴해라
    } else if (sum === max) {
      if (el > answer) {
        answer = el;
      }
    }
  }
  return answer;
}

/* Array.prototype.reduce()
  reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고 하나의 결과값을 반환한다.
*/
