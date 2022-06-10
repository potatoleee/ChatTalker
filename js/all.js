$(document).ready(function(){

// scrolltop
     $('.top-icon').click(function(){
        $('html,body').animate({
         scrollTop:0
        },
         1000);
 });

//faq-list 
    $('.faq-list').click(function(e){
        e.preventDefault();
        $(this).toggleClass('text-blue');
        $(this).siblings('.faq-list-text').slideToggle();
        $(this).find('.plus').toggle();
        $(this).find('.minus').toggle();
    })

//方案選擇區
$('.charge-10').click(function(){
     // 點擊此按鈕後此按鈕加上藍色背景
    $(this).addClass('button-bg-blue');
     //移除button>父層li>同一層的li>子層的button>移除有button-bg-blue的按鈕
    $(this).parent().siblings().find('button').removeClass('button-bg-blue');
    $('.charge-number-p').text('10000');
       $('.charge-price-basic').text('600');
       $('.charge-price-standard').text('1600');
   })

    $('.charge-15').click(function(){
         // 點擊此按鈕後此按鈕加上藍色背景
        $(this).addClass('button-bg-blue');
        //移除button>父層li>同一層的li>子層的button>移除有button-bg-blue的按鈕
        $(this).parent().siblings().find('button').removeClass('button-bg-blue');
     $('.charge-number-p').text('15000');
        $('.charge-price-basic').text('700');
        $('.charge-price-standard').text('1700');
       
    })
 

    $('.charge-20').click(function(){
         // 點擊此按鈕後此按鈕加上藍色背景
   $(this).addClass('button-bg-blue');
   //移除button>父層li>同一層的li>子層的button>移除有button-bg-blue的按鈕
   $(this).parent().siblings().find('button').removeClass('button-bg-blue');
        $('.charge-number-p').text('20000');
           $('.charge-price-basic').text('800');
           $('.charge-price-standard').text('1800');
       })

    $('.charge-25').click(function(){
         // 點擊此按鈕後此按鈕加上藍色背景
        $(this).addClass('button-bg-blue');
         //移除button>父層li>同一層的li>子層的button>移除有button-bg-blue的按鈕
        $(this).parent().siblings().find('button').removeClass('button-bg-blue');
        $('.charge-number-p').text('25000');
           $('.charge-price-basic').text('900');
           $('.charge-price-standard').text('1900');
       })

    $('.charge-30').click(function(){
         // 點擊此按鈕後此按鈕加上藍色背景
        $(this).addClass('button-bg-blue');
         //移除button>父層li>同一層的li>子層的button>移除有button-bg-blue的按鈕
        $(this).parent().siblings().find('button').removeClass('button-bg-blue');
           $('.charge-number-p').text('>25000');
              $('.charge-price-basic').text('1000');
              $('.charge-price-standard').text('6666');
          })   


        
      /* 自訂初始化的 Swiper 套件的函式 */
function initSwiper() {
   /* 
   id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
   要抓取 id "#comment-swiper"
   可以參考 CodePen 來看這個 id 是對應到哪個區塊
   */
     
   const swiper = new Swiper(".mySwiper", {
       
     /*  預設要顯示幾個卡片 */
     slidesPerView: 1,
       
     /* 斷點設定 */
     breakpoints: {
      
       /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
       768: {
         slidesPerView: 1
       },
       /* 更小時都顯示 1 欄 */
       0: {
         slidesPerView: 1
       }
     },
     /* 卡片元素的間隔 */
     spaceBetween: 16,
     pagination: {
       /* 想將分頁圓點綁在哪個 class */
       el: ".swiper-pagination",
       /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
       clickable: true,
       
     }
   });
 }
 
 /* 觸發自己定義的函式 */
 initSwiper();

   
})