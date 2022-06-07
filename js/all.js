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

   
})