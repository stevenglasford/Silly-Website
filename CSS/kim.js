
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
 
(function(){
 
var counter = 0,
$items = document.querySelectorAll('.kim figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
 
[].forEach.call( $items, function(el){
el.classList.remove('show');
});
 
$items[itemToShow].classList.add('show');
};
 
document.querySelector('.next').addEventListener('click', function() {
counter++;
showCurrent();
}, false);
 
document.querySelector('.prev').addEventListener('click', function() {
counter--;
showCurrent();
}, false);
 
})();