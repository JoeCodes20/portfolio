export const pageAnimation = {
       hidden: {
              opacity: 0,
              y: 300
       },
       show: {
              opacity: 1,
              y: 0,
              transition: {
                     ease: "easeOut",
                     duration: 1,
                     staggerChildren: .75
              }
       },
       exit: {
              opacity: 0,
              y : 300,
              transition: {
                     duration: 1
              }
       }
}
export const first ={
       hidden: {
              opacity: 0,
              y: 300,
       },
       show: {
              opacity: 1,
              y: 0,
              duration: 1
       },
       transition: {
              ease: "easeIn"
       }
}
export const second ={
       hidden: {
              opacity: 0,
              y: 300,
       },
       show: {
              opacity: 1,
              y: 0,
              duration: 1
       },
       transition: {
              ease: "easeIn"
       }
}
export const third ={
       hidden: {
              opacity: 0,
              y: 300,
       },
       show: {
              opacity: 1,
              y: 0,
              duration: 1
       },
       transition: {
              ease: "easeIn"
       }
}