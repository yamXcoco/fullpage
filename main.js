$(function () {
  //햄버거
  $('.hamburger').on('click', function () {
    $('.menu').addClass('on')
    // 햄버거 아이콘을 클릭하면 클래스 on이라는 추가함
  })

  $('.close').on('click', function () {
    $('.menu').removeClass('on')
    // 클로즈 버튼을 클릭하면 클래스 on 삭제
  })

  //풀페이지
  $('#fullpage').fullpage({
    //options here
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],

    // autoScrolling:true,
    // scrollHorizontally: true,
    navigation: true,

    sectionsColor: ['#F6C61E', '#F6C61E', '#F6C61E', '#F6C61E', '#CB9E00'],
    afterLoad: function (anchorLink, index) {
      console.log('현재 섹션번호는 ' + index)
      if (index == 5) {
        alert('마지막입니다')
      }
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log('현재 슬라이드 번호' + slideIndex)
    },
    onLeave: function (anchorLink, index, destination, direction, trigger) {
      var origin = this

      //구역 2를 떠난 후
      // if (index == 1 && direction == 'down')
      // else if (index == 4 && direction == 'up')
      //if(destination.index==1)로 사용가능
      if (index == 2) {
        $('.section1 .friends').addClass('active')
      } else if (index == 2) {
      } else if (index == 3) {
        $('.section3 .imgs').addClass('active')
      } else if (index == 4) {
        $('.section4 img').addClass('active')
      } else if (index == 5) {
      }

      if (index != 2) {
        $('.section1 .friends').removeClass('active')
      }

      if (index != 3) {
        $('.section3 .imgs').removeClass('active')
      }

      if (index != 4) {
        $('.section4 img').removeClass('active')
      }
    },
  })
})

// 사건(이벤트)
// beforeLeave: function(origin, destination, direction, trigger){},
// onLeave: function(origin, destination, direction, trigger){},
// afterLoad: function(origin, destination, direction, trigger){},
// afterRender: function(){},
// afterResize: function(width, height){},
// afterReBuild: function(){},
// afterResponsive: function(isResponsive){},
// afterSlideLoad: function(section, origin, destination, direction, trigger){},
// onSlideLeave: function(section, origin, destination, direction, trigger){},
// onScrollOverflow: function(section, slide, position, direction){}
