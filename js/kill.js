// 몬스터와 마주치면 모션 변화

// plan A) 좌표 겹쳐지면 모션


//보비랑 몬스터 불러오기
// (() => {
  const $bobby = document.getElementById('bobby');
  const $mst = document.querySelector('.monsterkArea');

  console.log('연동');
  console.log($bobby.offsetLeft);
  console.log($mst.offsetLeft);


  document.onclick=()=>{
    console.log($bobby.offsetLeft);
    console.log($mst.offsetLeft);
  }


  if($bobby.offsetLeft>=$mst.offsetLeft){
    console.log('좌표 성공!!');
    addScore(n);
  };


// 적 죽일 때 스코어 올리기
  const $myscore = document.getElementById('myscore');
  
  const addScore = () => {
    for (let n = 1; n <= 9999; n++) {
      $myscore.innerText = n;
    }
  }
    console.log(addScore());
  


/*
  const $bobbyX = $bobby.getBoundingClientRect().x;
  const $mstX = $mst.getBoundingClientRect().x;

  if ($bobbyX === $mstX) {
    console.log('성공!!');

    // $bobby.style.transform = 'rotate(360deg)';
  }
*/


// })();