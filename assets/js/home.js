window.addEventListener('load', function() {
  var header = document.querySelector('.header-img');
  var topImg = document.querySelector('.top-img');

  function setHeaderHeight() {
    var imgHeight = topImg.offsetHeight;
    header.style.height = imgHeight + 'px';
  }

  setHeaderHeight();
});



window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.fadeIn');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var position = element.getBoundingClientRect().top;

    if (position < window.innerHeight) {
      element.classList.add('show');
    }
  }
});

const texts = document.querySelectorAll('.background-text');

texts.forEach((text) => {
  const content = text.textContent;
  text.setAttribute('data-text', content);
});


window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.background-text');
  var windowHeight = window.innerHeight;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var position = element.getBoundingClientRect().top;

    if (position < windowHeight) {
      element.classList.add('show2');
    }
  }
});




window.addEventListener('scroll', function() {
  var rightElements = document.querySelectorAll('.right');
  var leftElements = document.querySelectorAll('.left');

  for (var i = 0; i < rightElements.length; i++) {
    if (isElementInView(rightElements[i])) {
      rightElements[i].classList.add('animate');
    }
  }

  for (var i = 0; i < leftElements.length; i++) {
    if (isElementInView(leftElements[i])) {
      leftElements[i].classList.add('animate');
    }
  }
});

// 要素が表示されているかどうかを判定する関数
function isElementInView(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight;
}


window.addEventListener('load', function() {
  var topImg = document.querySelector('.top-img');

  // 画像の読み込み完了後、アニメーションが完了したらoverflowをautoにする
  topImg.addEventListener('animationend', function() {
    document.body.style.overflow = 'auto';
  });
});



(function() {
  const image = document.querySelectorAll('.img-wrap');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation');
      } else {
        entry.target.classList.remove('img-animation');
      }
    });
  });

  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();



function adjustFontSize() {
    var screenWidth = window.innerWidth;
    var fontSize = screenWidth / 80; // 50は適宜調整してください

    document.getElementById('html').style.fontSize = fontSize + 'px';
}

window.onresize = adjustFontSize;
adjustFontSize(); // ページ読み込み時にもフォントサイズを調整する

function adjustImageSize() {
  var areaWidth = document.querySelector('.area').clientWidth　* 0.4; // .area要素の幅を取得
  var logoImg = document.querySelector('.logo'); // .logo要素（画像）を取得

  logoImg.style.width = areaWidth + 'px'; // 画像の幅を領域の幅に合わせて設定
  }

window.onresize = adjustImageSize;
adjustImageSize(); // ページ読み込み時にも画像サイズを調整する