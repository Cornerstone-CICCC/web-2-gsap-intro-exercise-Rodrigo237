// PUT YOUR CODE HERE
const box_animation = gsap.timeline()
box_animation.from(".box.red",{x:"-100vw",y:"-100vh", duration: 1})
            .from(".box.green",{x:"100vw",y:"-100vh", duration: 1},"-=1")
            .from(".box.blue",{x:"100vw",y:"100vh", duration: 1},"-=1")
            .from(".box.yellow",{x:"-100vw",y:"100vh", duration: 1},"-=1")
            .to(".red",{
                x: "100vw",
                borderRadius:"50%",
                backgroundColor:"green",
                duration: 1
            },"+=0.1")
            .to(".green",{
                y: "100vh",
                borderRadius:"50%",
                backgroundColor:"blue",
                duration: 1          
            },"<")
            .to(".blue",{
                x: "-100vw",
                borderRadius:"50%",
                backgroundColor:"yellow",
                duration: 1
            },"<")
            .to(".yellow",{
                y: "-100vh",
                borderRadius:"50%",
                backgroundColor:"red",
                duration: 1
            },"<")
            .to(".red",{x:"100vw", duration: 2.5, ease: "power.in"})
            .to(".green",{ x:"100vw", duration: 2.5,ease: "power.in"},"<")
            .to(".blue",{x:"-100vw", duration: 2.5, ease: "power.in"},"<")
            .to(".yellow",{x:"-100vw", duration: 2.5, ease: "power.in"},"<")