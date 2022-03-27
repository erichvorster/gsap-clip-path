const tl = gsap.timeline({paused: true})
const container = document.querySelector('.container')

tl.to(container,{clipPath: 'polygon(6% 6%, 95% 6%, 95% 95%, 6% 95%)'} )
tl.to(container,{clipPath: 'polygon(95% 6%, 95% 6%, 95% 95%, 95% 95%)'}, '+=1' )
tl.to('h1', {
    color:"#EB9D4B",
})

container.addEventListener('mouseover', () => {
    tl.play()
})