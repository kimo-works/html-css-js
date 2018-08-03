window.onload = function() {
    // alert('1');
    // console.log('Helo world');
    // var a = 123;
    // console.log('a = ' + a + ' ' + typeof a + '\r\n');
    // var str = 'строковая переменная';
    // console.log('str = ' + str + ' ' + typeof str + '\r\n');
    // var array = [1, 'строковое значение', 3];
    // console.log('array = ' + array + ' ' + typeof array + '\r\n');
    // var obj = {
    //     name:'Dmity',
    //     age:'37'
    // }
    // console.log(obj);
    // var bool = false;
    // var name = null;
    // var data;
    // console.log(data);


    var productsItem = document.querySelectorAll('.productsItem');

    for (var i = 0; i < productsItem.length; i++ ){
        console.log(i);
        productsItem[i].onclick = function(){
            console.log(this);
            this.classList.toggle('productsItem-unactive')
        };
    }
};

