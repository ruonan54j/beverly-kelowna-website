<?php
include('scandir.php');

function makecards($image_folder,$images){
	$image_type = explode("/",$image_folder)[2];
	foreach ($images as $image) {
		$path = $image_folder."/".$image;
			echo "<div class='col-sm-3 imagecard grid-item {$image_type}'>
				<div class='lisitngs-outer'>
					<img src='{$path}' class='img-responsive' alt='' style='height:auto' >
				</div>
			</div>";
	}

}


 ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Gallery</title>

	<link rel="icon" href="logo.png" type="image">
		<!-- bootstrap link -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

	<!-- google font CDN -->
	<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>

	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

	<!-- font-awesome script cdn -->
	<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

	<!-- css links -->
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/gallery.css">

	<!-- javascript and jquery cdn -->
	<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

	<!-- external javascript file -->

</head>
<body data-target="#my-navbar">
	<div id="header">
		<nav class="navbar-default navbar navbar-fixed-top navbar-scroll" id="my-navbar">
			<div class="container-fluid">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
						<div class="hamburger" id="hamburger-1">
									<span class="line"></span>
									<span class="line"></span>
									<span class="line"></span>
								</div>
					</button>
					<a href="index.html" class="navbar-brand"><img src="logo.png"  class="img-fluid"></a>
					<a href="index.html" style="text-decoration:none"><h4 class="align-middle">BEVERLY KELOWNA</h4></a>
				</div>
				<div class="collapse navbar-collapse" id="navbar-collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="floorplans.html">FLOOR PLANS</a></li>
						<li><a href="features.html">FEATURES</a></li>
						<li><a href="neighbourhood.html">NEIGHBOURHOOD</a></li>
						<li><a href="gallery.html">GALLERY</a></li>
						<li><a href="team.html">TEAM</a></li>
						<li id="contact"><a href="contact.html">CONTACT</a></li>
						<li><a id="register" style="color:white" href="brochure.pdf">Download Brochure</a></li>
						<li><a id="register" style="color:white" href="register.html">REGISTER</a></li>
					</ul>
				</div>
			</div>
		</nav>

	</div>

	<style media="screen">
		.second-nav{
			margin-top: 30px;
			}
		.second-nav li{
				color: white;
	      display: inline-block;
				padding: 10px 15px 10px 15px;
				font-size:12px
		}
		.image-selector{
			cursor: pointer;
		}
		.image-selector:hover {
			color:black;
		}
		.checked{
			color : black;
		}
		.imagecard{
			padding: 0px 5px 0px 5px
		}
		.grid{
			margin: 0px 10px 0px 10px
		}
	</style>



	<div class="" style="margin-bottom: 10px;padding:0px 15px 0px 15px;">
		<div class="second-nav" style="background-color:darkred;text-align:center;width:100%">
					<button style="display:none" class="button is-checked" data-category="original-order">original order</button>
			<ul>
				<li class="image-selector" id="interiors" data-category="building">BUILDING</li>
				<li class="image-selector" data-category="neighbourhood">NEIGHBOURHOOD</li>
			</ul>
		</div>
	<!-- row for listings -->


	<div class="row grid" id="images" style="padding-top:20px">

		<?php
			$isfirst = true;
			foreach ($image_folders as $key => $value) {
				makecards($key,$value);
			}
		 ?>
		 	<script src='https://npmcdn.com/isotope-layout@3/dist/isotope.pkgd.js'></script>
		 	<script  src="js/index.js"></script>

	</div>

</div> <!-- container end -->



<!-- footer -->
<!-- footer -->
<section  class="foooter-outer">
	<div class="" id="footer-set" style="font-size:11px;padding:0px 10px 0px 10px; color:white">
		<div class="row">
			<div class="col-md-2">

			</div>
			<div class="col-md-2" style="border-right:solid white 1px">
				<ul id="footer-nav" style="">
					<li class=""><a href="index.html">HOME</a></li>
					<li class=""><a href="floorplans.html">FLOOR PLANS</a></li>
					<li class=""><a href="features.html">FEATURES</a></li>
					<li class=""><a href="neighbourhood.html">NEIGHBOURHOOD</a></li>
					<li class=""><a href="gallery.html">GALLERY</a></li>
					<li class=""><a href="team.html">TEAM</a></li>
					<li class=""><a href="contact.html">CONTACT</a></li>
					<li class=""><a href="register.html">REGISTER</a></li>
				</ul>
			</div>
			<div class="col-md-4"  style="font-size:16px;font-family:Raleway">
				<br>
				<br>
				Address:<br>
				1925 Enterprise Way, Kelowna, BC <br>
				Email:<br>
				info@beverlykelowna.ca
			</div>
			<div class="col-md-4">
				<div id="regbtn">
					REGISTER NOW
				</div>
			</div>
		</div>
	</div> <!-- container-fluid end -->
</section>


</body>
</html>
