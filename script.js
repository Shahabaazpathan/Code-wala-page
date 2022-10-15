document.getElementById('flashcard').style.display="none"
alert("By default No blog is created. " + "\n" + "Try Posting your Blog," + "\n" + "You can also edit and delete the blog.")

class Blog {
    constructor(title,detail){
        this.Title=title
        this.Detail=detail
        this.addTitle()
        this.addDetails()
    }

    addTitle (){
        document.getElementById('flashcard').style.display="inherit"
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.Title;
    }

    addDetails (){
        var detail_card = document.createElement('p');
        detail_card.setAttribute("id","blog-description");
        console.log(detail_card);
        document.getElementById('card-text').appendChild(detail_card);
        detail_card.innerText += this.Detail;
    }
}

let popup = document.getElementById('popupContact')

document.getElementById('addBlog').onclick= function (){
    popup.style.display="inherit";
    document.getElementById('title').value=''
    document.getElementById('detail').value=''
}

document.getElementById('close').onclick = function (){
    popup.style.display="none";
}

document.getElementById('post').onclick= function (){
    let Title = document.getElementById('title').value 
    let Detail = document.getElementById('detail').value
    let obj = new Blog(Title,Detail)
    popup.style.display="none";
}

document.getElementById('delete').onclick = function (){
    document.getElementById('card-text').removeChild(document.getElementById('blog-title'))
    document.getElementById('card-text').removeChild(document.getElementById('blog-description'))
    document.getElementById('flashcard').style.display="none"
    
}

document.getElementById('edit').onclick = function (){
    popup.style.display="inherit"
    document.getElementById('card-text').removeChild(document.getElementById('blog-title'))
    document.getElementById('card-text').removeChild(document.getElementById('blog-description'))
}