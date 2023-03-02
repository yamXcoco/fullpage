$(function () {
  $('#fullpage').fullpage({
    //options here
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],

    // autoScrolling:true,
    // scrollHorizontally: true,
    navigation: true,

    sectionsColor: ['#F6C61E', '#F6C61E', '#F6C61E', '#F6C61E'],
    afterLoad: function (anchorLink, index) {
      console.log('현재 섹션번호는 ' + index)
      if (index == 5) {
        alert('마지막입니다')
      }
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log('현재 슬라이드 번호' + slideIndex)
    },
  })
})
