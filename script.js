// q1. 1~100까지 랜덤한 숫자(정수를 반환하는 변수 randomNumber를 선언하고 초기화 하세요.
let randomNumber = Math.floor(Math.random()*100)+1
// q2. DOM 요소 5가지를 선택해서 변수로 선언해 주세요
// guesses, lastResult, lowOrHi, guessSubmit, guessField
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')
// q3. 변수 2가지를 선언해주세요. guessCount 초기값 = 1, resetButton 선언만
let guessCount = 1
let resetButton
// 올바른 번호인지 확인하는 함수 만들기
function checkGuess(event){
    // 기본값 막기
    event.preventDefault();
    // 사용자가 추측한 번호를 알아내는 변수
    const userGuess = Number(guessField.value)
    if(userGuess===randomNumber)
    {
        lastResult.textContent = guessCount + "번 시도하셨습니다 정답입니다 축하합니다" 
        setgameOver()
    }
    else if(guessCount===10)
    {
        if(userGuess===randomNumber)
        {
            lastResult.textContent = guessCount + "번 시도하셨습니다 정답입니다 축하합니다" 
        }
        else
        {
            lastResult.textContent = "게임 오버 10회를 모두 사용하셨습니다"
        }
        setgameOver()
    }
    else{
        if(userGuess>randomNumber)
        {
            lastResult.lowOrHi = "추측한 숫자보다 낮습니다 "+guessCount+"번 시도하셨습니다"
        }
        else{
            lastResult.lowOrHi = "추측한 숫자보다 높습니다 "+guessCount+"번 시도하셨습니다"
        }
    }
    guessCount++
    guessField.value=''
}
// 이벤트 리스너 만들기 click 했을 때 checkGuess 함수를 실행하는 리스너 추가
guessSubmit.addEventListener('click',checkGuess)
function setgameOver(){
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement('button')
    resetButton.textContent = "새 게임하기"
    document.body.appendChild(resetButton)
    resetButton.addEventListener('click',resetGame)
}

function resetGame()
{
    guessCount = 1;
    guessField.disabled = false
    guessSubmit.disabled = false
    document.body.removeChild(resetButton)
    randomNumber = Math.floor(Math.random()*100)+1
    guessField.value=''
    lowOrHi.textContent=''
    lastResult.textContent=''
}