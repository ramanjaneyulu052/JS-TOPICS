var birthdayWishes=[

    {
    title: `Wishing a day to remember, filled with love and prosperity, and your heart’s desires. Have a great birthday ahead!`
    },
    {
    title: `Wishing you a beautiful day with happiness and good health forever! Happy Birthday!`
    },
    {
    title:`Wishing You a day that is as special in every way as you are. Happy birthday!`
    },
    {
    title:`Your birthday is a very special day for me as it reminds us that you came on this day by bringing new hopes and joy into our lives. Have a wonderful birthday.`
    },
    {
    title: `May all your wishes and desires come true! Have an amazing year ahead`
    },
    {
    title:`Your birthday is a very special day for me as it reminds us that you came on this day by bringing new hopes and joy into our lives. Have a wonderful birthday.`
    },
    {
    title: `May all your wishes and desires come true! Have an amazing year ahead`
    },
    {
    title:`Your birthday is a very special day for me as it reminds us that you came on this day by bringing new hopes and joy into our lives. Have a wonderful birthday.`
    },
    {
    title: `May all your wishes and desires come true! Have an amazing year ahead`
    }
]




function myfun(request) 
{
    //Target input_by_Id_Reference----
    var textarea_dom=document.getElementById('sourcecode')
   
   textarea_dom.value=request  //li_textarea assigned to textarea

    //Target output_img_by_Id_Reference----
    var output_dom = document.getElementById('code_result')    

    //update textarea_input_As_Response to output_tag
    output_dom.innerHTML=textarea_dom.value.length
 }

