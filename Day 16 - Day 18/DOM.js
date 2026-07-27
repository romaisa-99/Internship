function changeData(){


    // 1. innerText
    let heading = document.getElementById("title");

    heading.innerText = "DOM Set Methods";


    // 2. innerHTML
    let paragraph = document.getElementById("para");

    paragraph.innerHTML = "<b>Text changed using innerHTML</b>";



    // 3. setAttribute()

    let image = document.getElementById("image");

    image.setAttribute("src","new.jpg");



    // 4. Attribute Property

    let input = document.getElementById("username");

    input.value = "Aleena";



    // 5. removeAttribute()

    image.removeAttribute("width");


}