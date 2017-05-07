import './styles.scss'

import IScroll from 'iscroll/build/iscroll-lite'

new IScroll('#wrapper', {
  scrollX: true,
  scrollY: false
})

$('#protocol').tap(function (e) {
  $(this).toggleClass('pay-confirm__protocol__label--on')
})

$('#pay').tap(function () {
  alert('pay')
})
