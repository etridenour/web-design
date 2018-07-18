function buildPage(){
    // cleared original HTML content
    document.body.innerHTML = '';
    row1();
    row2();
    row3();
    row4();
    row5();
    row6();
}

function row1(){
    var head = document.createElement('div');
    head.setAttribute('class', 'row header');
    var col11 = document.createElement('div');
    col11.setAttribute('class', 'col-3');
    var h2 = document.createElement('h2');
    h2.setAttribute('class', 'high');
    h2.textContent = 'High On Coding';
    var col12 = document.createElement('h5');
    col12.setAttribute('class', 'col-2 home');
    col12.textContent = 'Home';
    var col13 = document.createElement('h5');
    col13.setAttribute('class', 'col-2 home')
    col13.textContent = 'Categories';

    col11.appendChild(h2);
    head.appendChild(col11);
    head.appendChild(col12);
    head.appendChild(col13);
    document.body.appendChild(head);
}

function row2(){
    var row2 = document.createElement('div');
    var curse = document.createElement('h3');
    var p1 = document.createElement('p');

    row2.setAttribute('class', 'greyBox');
    p1.setAttribute('class', 'p1');

    curse.textContent = 'Curse of the Current Reviews';
    p1.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem temporibus vero et ab minus quas, modi porro ea corporis tenetur doloribus earum cum rem totam fugit nulla dolorum quidem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem temporibus vero et ab minus quas, modi porro ea corporis tenetur doloribus earum cum rem totam fugit nulla dolorum quidem!';
    
    row2.appendChild(curse);
    row2.appendChild(p1);
    document.body.appendChild(row2);
}

function row3(){
    var row3 = document.createElement('div');
    var hello = document.createElement('h4');
    var p2 = document.createElement('p');

    row3.setAttribute('class', 'whiteBox');
    p2.setAttribute('class', 'p1');

    hello.textContent = 'Hello WatchKit';
    p2.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem temporibus vero et ab minus quas, modi porro ea corporis tenetur doloribus earum cum rem totam fugit nulla dolorum quidem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem temporibus vero et ab minus quas, modi porro ea corporis tenetur doloribus earum cum rem totam fugit nulla dolorum quidem!';

    row3.appendChild(hello);
    row3.appendChild(p2);
    document.body.appendChild(row3);
}

function row4(){
    var orange = document.createElement('div');
    var comment = document.createElement('div');
    var like = document.createElement('div');

    orange.setAttribute('class', 'row orangeBox');
    comment.setAttribute('class', 'col-2 white');
    like.setAttribute('class', 'col-3 white');

    comment.textContent = '12 comments';
    like.textContent = '124 likes';

    orange.appendChild(comment);
    orange.appendChild(like);
    document.body.appendChild(orange);
}

function row5(){
    var row3 = document.createElement('div');
    var hello = document.createElement('h4');
    var p2 = document.createElement('p');

    row3.setAttribute('class', 'whiteBox');
    p2.setAttribute('class', 'p1');

    hello.textContent = 'Introduction to Swift';
    p2.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem temporibus vero et ab minus quas, modi porro ea corporis tenetur doloribus earum cum rem totam fugit nulla dolorum quidem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem temporibus vero et ab minus quas, modi porro ea corporis tenetur doloribus earum cum rem totam fugit nulla dolorum quidem!';

    row3.appendChild(hello);
    row3.appendChild(p2);
    document.body.appendChild(row3);
}


function row6(){
    var orange = document.createElement('div');
    var comment = document.createElement('div');
    var like = document.createElement('div');

    orange.setAttribute('class', 'row orangeBox');
    comment.setAttribute('class', 'col-2 white');
    like.setAttribute('class', 'col-3 white');

    comment.textContent = '15 comments';
    like.textContent = '45 likes';

    orange.appendChild(comment);
    orange.appendChild(like);
    document.body.appendChild(orange);
}