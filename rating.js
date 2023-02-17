const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// //CASE 1: default = 5
// const ratingItems = $$('.rating-item')
// ratingItems.forEach((ratingItem, e)=> {
//     ratingItems[4].classList.add('active')
//     ratingItem.onclick = function(){
//         $(".rating-item.active").classList.remove('active')
//         ratingItem.classList.add('active')
//         const index = ++e
//         $('.result-text').innerText = `You selected ${index} out of 5`;
//     }
//         $('.result-text').innerText = `You selected 5 out of 5`
// });
// $('.submit').onclick = function(){
//     $('.submitted').style.display = "block"
//     $('.form').style.display = "none"//
// }

//CASE 2: Rating without default
const ratingItems = $$('.rating-item')
ratingItems.forEach((ratingItem, e)=> {
    ratingItem.onclick = function(){
        ratingItems.forEach(rating => rating.classList.remove('active'))
        this.classList.add('active')
        const index = ++e
        $('.error--msg').style.display = "none"
        $('.result-text').innerText = `You selected ${index} out of 5`;
                $('.submit').onclick = function(){
                        $('.submitted').style.display = "block"
                        $('.form').style.display = "none"
                }
        }
        $('.submit').onclick = function(){
            $('.error--msg').style.display = "block"
    }
});
