<!DOCTYPE html>
<html>
<head>
	<title>TaInCasa</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Titan+One&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Quicksand&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<script src = "pesquisa.js"></script>
</head>

<style type="text/css">

/*Plano de fundo*/
	body{
		background-color: #ff3600;
		margin: 0;
		}
/*logo*/
	#tic{
		display: flex;
		position: absolute;
		top: -12%;
    	left:41%;
    	padding: 0;
    	margin: 0;
 	text-align: center;
 	font-family: titan One;
 	font-size: 150px;
 	color:blue;
 	-webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: #cc3700;}
/*caixa de pesquisa*/
    .search-box{
    	position: absolute;
    	top: 50%;
    	left:50%;
    	transform: translate(-50%,-50%);
    	height: 50px;
    	background-color: white;
    	border-radius: 40px;
    	padding: 10px;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	font-size: 18px;}

    .search-text{
    	background: none;
    	border: none;
    	outline: 0;
    	width: 0;
        height: 25px;
    	padding: 0px;
    	transition: 0.4s;
    	cursor: pointer;}
    .branco{display: none;}
    .search-btn{
    	width: 50px;
    	height: 50px;
    	display: flex;
 		justify-content: center;
 		align-items: center;
 		border-radius: 40px;}
    .search-box:hover > .search-text{
    	width: 320px;
    	padding-left: 20px}
     .search-box:hover > .search-btn{
	    background-color: #ff4500;
	    border-radius: 40px;}
    .search-box:hover > .search-btn .azul{display: none;}
     .search-box:hover > .search-btn .branco{display: block;}
   
::-webkit-input-placeholder{

	font-size: 18px;
	font-family: "Quicksand";
	color:orange;}

/*cardapios iniciais*/

.bigcontainer{
    position: absolute;
    left: 50%;
    top: 110%;
    transform: translate(-50%,-50%);}
.bigcontainer2{
    position: absolute;
    left: 80%;
    top: 110%;
    transform: translate(-50%,-50%);}
    .container{
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        transition: all .5s;
        position: absolute;
        top: 110%;
        left:20%;
        transform: translate(-50%,-50%);
        padding: 20px;
        width: 350px;
        flex-direction: column;
        border: 5px solid white;
        margin: 20px;
        border-radius: 20px;}
    .container .card {
        
        width: 300px;
        height: 140px;
        padding: 5px;
        background-color: white;
        margin: 20px;
        border: 1px solid black;
        overflow: hidden;
        border-radius: 20px;
        transition: 0.5s;
        
        }
    .container .card img{
        width: 120px; float: left;margin-right: 5px; border-radius: 5px;margin-bottom: 10px;}
    .container h1{text-align: center; font-size: 35px; margin: 0;font-family: 'Comfortaa', cursive;}
    .container .card .cont p{font-family: 'Quicksand', sans-serif; font-size: 14px;margin-bottom: 4px;}
    .container .card .cont .title-food {font-family: 'Comfortaa', cursive; font-weight: bold; text-align: center; margin-bottom: -2px;font-size: 20px;}
    .container .card .cont a{background: #ff4500; border:2px solid black;margin: 5px; border-radius: 5px;display: flex;width: 70px;height: 20px; text-align: center;color: white; padding: 5px; font-family: 'Quicksand';text-decoration: none;}
    .container .card .cont .btns{display: flex;flex-direction: row;}
    
    /*menu lateral*/
.menu-btn img{width: 80px; cursor:pointer;}
ul a{text-decoration: none;
color: black;display: block;color: white;padding: 20px 5px;font-family: "Quicksand"; transition-timing-function: ease; transition-duration:2s; }

ul a:hover{
    background-color: #ff3600;
    color: black;
    transition-timing-function: ease; transition-duration:1s;
}
ul{list-style: none;
    top: 90px;
    position:absolute;
    width: 100%;
}

input[type ="checkbox"]{display: none;}

nav{position:absolute;
    background-color: rgba(16,16,16,.5);
    width: 450px;
    height: 100%;
    left: -450px;
transition: all .5s;}

input[type ="checkbox"]:checked ~ nav
{transform: translateX(450px);}
input[type ="checkbox"]:checked ~ .container
{display: none;}
input[type ="checkbox"]:checked ~ .name 
{display: none;}

.menu-btn{padding: 20px; position: absolute;z-index: 1;}
.user-img img{
    position: absolute;
    left: 90%;
    top: 30px;
    width:70px;
    height: 60px;
    cursor: pointer;}
.name p{
    font-family: titan one;
    position: absolute;
    font-size: 60px;
    left: 110px;
    top: -40px;
    color: white;

}     
</style>
<body>
    <div class="name"><p>Ta In Casa</p> </div>
    <div class="user-img">
        <img src="user.png">
    </div>
<input type="checkbox" id="chec">
<label class="menu-btn" for="chec">
  <img src="menu.png">
</label>
<nav>
    <ul>
        <li><a href=""> LOGIN</a></li>
        <li><a href=""> CATÉGORIA</a></li>
        <li><a href="envrec.php"> ENVIAR RECEITA</a></li>
        <li><a href=""> RECEITAS</a></li>
        <li><a href="sobrenos.php"> SOBRE NÓS</a></li>
    </ul>


</nav>



</nav>
	<div id="tic">
	<p style="color:white">
		TIC

	</p>

</div>
<div class="search-box">
		<input type="text" class="search-text"   placeholder="O que vai querer hoje?" id='pesquisar'>
        <button onclick="procurar()" class="search-btn">
		<img src="blue.svg" class="azul" alt="" height="25px" width="25px">
		<img src="loupe-white.svg" class="branco" alt="" height="25px" width="25px"></a></div>
</div>
<div class="container">
    <h1>Para vc</h1>

    <div class="card">
       <div class="cont">
            <img src="https://imgs.search.brave.com/hjevGbzVst4Umdu-ox2UfP18zy-6y26oApQeJUhw3Js/rs:fit:1024:721:1/g:ce/aHR0cHM6Ly9wb3J0/YWxzYWJvcmVzLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMy8wNy9QYXN0/ZWwtZGUtQ2FybmUt/Mi0xMDI0eDcyMS5q/cGc">
            <p class="title-food">Pastel de carne</p>
            <p> Um pastel caseiro mas muito gostoso </p> 
            <div class="btns">
            <a href="#">Comprar</a>
            <a href="#">Receita</a>
        </div>
        </div>  </div>

    <div class="card">

        <div class="cont">
            <img src="https://imgs.search.brave.com/hjevGbzVst4Umdu-ox2UfP18zy-6y26oApQeJUhw3Js/rs:fit:1024:721:1/g:ce/aHR0cHM6Ly9wb3J0/YWxzYWJvcmVzLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMy8wNy9QYXN0/ZWwtZGUtQ2FybmUt/Mi0xMDI0eDcyMS5q/cGc">
            <p class="title-food">Pastel de carne</p>
            <p> Um pastel caseiro mas muito gostoso </p> 
            <div class="btns">
            <a href="#">Comprar</a>
            <a href="#">Receita</a>
        </div>
        </div> </div>

    <div class="card">
        
        <div class="cont">
            <img src="https://imgs.search.brave.com/nY9A0kYz8n2s5ugY4HsIks5eZYg5NauJRmtySb6Sb4I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/Y3liZXJjb29rLmNv/bS5ici9yZWNlaXRh/cy83MzEvbGFzYW5o/YS0zLmpwZWc">
            <p class="title-food"> Lasanha </p>
            <p>Uma lasanha muito saborosa facil de fazer.</p>
            <div class="btns">
            <a href="#">Comprar</a>
            <a href="#">Receita</a>
        </div>
        </div> </div></div>
<div class="bigcontainer">
       <div class="container">
         <h1>Perto de vc</h1>

          <div class="card">
       <div class="cont">
            <img src="https://imgs.search.brave.com/hjevGbzVst4Umdu-ox2UfP18zy-6y26oApQeJUhw3Js/rs:fit:1024:721:1/g:ce/aHR0cHM6Ly9wb3J0/YWxzYWJvcmVzLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMy8wNy9QYXN0/ZWwtZGUtQ2FybmUt/Mi0xMDI0eDcyMS5q/cGc">
            <p class="title-food">Pastel de carne</p>
            <p> Um pastel caseiro mas muito gostoso </p> 
            <div class="btns">
            <a href="#">Comprar</a>
            <a href="#">Receita</a>
        </div>
        </div>  </div>

          <div class="card">

        <div class="cont">
            <img src="https://imgs.search.brave.com/hjevGbzVst4Umdu-ox2UfP18zy-6y26oApQeJUhw3Js/rs:fit:1024:721:1/g:ce/aHR0cHM6Ly9wb3J0/YWxzYWJvcmVzLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMy8wNy9QYXN0/ZWwtZGUtQ2FybmUt/Mi0xMDI0eDcyMS5q/cGc">
            <p class="title-food">Pastel de carne</p>
            <p> Um pastel caseiro mas muito gostoso </p> 
            <div class="btns">
            <a href="#">Comprar</a>
            <a href="#">Receita</a>
        </div>
        </div> </div>
 
         <div class="card">
        
        <div class="cont">
            <img src="https://imgs.search.brave.com/nY9A0kYz8n2s5ugY4HsIks5eZYg5NauJRmtySb6Sb4I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/Y3liZXJjb29rLmNv/bS5ici9yZWNlaXRh/cy83MzEvbGFzYW5o/YS0zLmpwZWc">
            <p class="title-food"> Lasanha </p>
            <p>Uma lasanha muito saborosa facil de fazer.</p>
            <div class="btns">
            <a href="#">Comprar</a>
            <a href="#">Receita</a>
        </div>
        </div> </div></div></div>
<div class="bigcontainer2">
       <div class="container">
         <h1>Fast-food</h1>

          <div class="card">
       <div class="cont">
            <img src="https://imgs.search.brave.com/hjevGbzVst4Umdu-ox2UfP18zy-6y26oApQeJUhw3Js/rs:fit:1024:721:1/g:ce/aHR0cHM6Ly9wb3J0/YWxzYWJvcmVzLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMy8wNy9QYXN0/ZWwtZGUtQ2FybmUt/Mi0xMDI0eDcyMS5q/cGc">
            <p class="title-food">Pastel de carne</p>
            <p> Um pastel caseiro mas muito gostoso </p> 
            <div class="btns">
            <a href="#">Comprar</a>
            <a href="#">Receita</a>
        </div>
        </div>  </div>

          <div class="card">

        <div class="cont">
            <img src="https://imgs.search.brave.com/hjevGbzVst4Umdu-ox2UfP18zy-6y26oApQeJUhw3Js/rs:fit:1024:721:1/g:ce/aHR0cHM6Ly9wb3J0/YWxzYWJvcmVzLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMy8wNy9QYXN0/ZWwtZGUtQ2FybmUt/Mi0xMDI0eDcyMS5q/cGc">
            <p class="title-food">Pastel de carne</p>
            <p> Um pastel caseiro mas muito gostoso </p> 
            <div class="btns">
            <a href="#">Comprar</a>
            <a href="#">Receita</a>
        </div>
        </div> </div>
 
         <div class="card">
        
        <div class="cont">
            <img src="https://imgs.search.brave.com/nY9A0kYz8n2s5ugY4HsIks5eZYg5NauJRmtySb6Sb4I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/Y3liZXJjb29rLmNv/bS5ici9yZWNlaXRh/cy83MzEvbGFzYW5o/YS0zLmpwZWc">
            <p class="title-food"> Lasanha </p>
            <p>Uma lasanha muito saborosa facil de fazer.</p>
            <div class="btns">
            <a href="#">Comprar</a>
            <a href="#">Receita</a>
        </div>
        </div> </div></div></div>       

 <script>
        var search = document.getElementById('pesquisar');
        search.addEventListener("keydown", function(event) {
        if (event.key === "Enter") 
        {
            procurar();
        }
        });
        function procurar()
        {
            window.location = 'tcc2.php?search='+search.value;
        }
       

</script>
<?php
include_once('config.php');
 if(!empty($_GET['pesquisa']))
 {
     $data = $_GET['pesquisa'];
     $sql = "SELECT * FROM cad_receitas WHERE id LIKE '%$data%' or nome LIKE '%$data%' or descricao LIKE '%$data%' ORDER BY id DESC";
     echo $_GET['pesquisa'];
 }
 else
 {
     $sql = "SELECT * FROM cad_receitas ORDER BY id DESC";
 }
 $result = $conexao->query($sql);

?>
</body>
</html>