<!DOCTYPE html>
<html lang="">
<head>
	<title>Bones</title>
  	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="description" content="I am a 4 year old miniature pinscher/whippet mix in Baltimore." />
  	<meta name="keywords" content="dog, whippet, minpin, rescue, woofer, pupper, doggo, bonesdotdog" />
	<script src="https://use.typekit.net/exa2crz.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
	<link rel="stylesheet" href="assets/css/style.css" />
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');	
	  ga('create', 'UA-69347618-1', 'auto');
	  ga('send', 'pageview');
	</script>
</head>
<body>
	<?php
		require_once('counter/conn.php');
		require_once('counter/counter.php');
		updateCounter("index");			
		$sql = "SELECT * FROM ".$GLOBALS['hits_table_name'];
		$query = $db->prepare($sql);
		$query->execute();
		$page_hits = $query->fetchAll();
		$total_hits = 0;
		foreach($page_hits as $ind_page){
			$total_hits += $ind_page['count'];
		}
		$count = $total_hits;
	?>
	<div id="intro">
		<h1>Turn on your sound</h1>
		<span>B</span>
		<span>O</span>
		<span>N</span>
		<span>E</span>
		<span>S</span>
	</div>
	<div id="grid">
	  <div class="box hide-mobile"><div class="about">&#128021;<span>View my profile</span></div></div>
	  <div class="box hide-mobile"><div><a href="https://instagram.com/bones.dog" target="_blank">&#128247;<span>Follow @bones.dog on Instagram</span></a></div></div>
	  <div class="box hide-mobile"><div><a href="https://twitter.com/bonesdotdog" target="_blank">&#128038;<span>Follow @bonesdotdog on Twitter</span></a></div></div>
	  <div class="box top"><div class="treat">&#127820;<span>Give me that banana!</span></div></div>
	  <div class="box hide-mobile"><div class="treat">&#129363;<span>Give me some bacon!</div></div>
	  <div class="box hide-mobile"><div><a href="mailto:woof@bones.dog">&#128140;<span>Send a love letter to woof@bones.dog</span></a></div></div>
	</div>
	<h1 id="cta" data-default="Good boy">Good boy</h1>
	<div id="count"><h2><?php echo $count; ?></h2></div>
	<div id="dog">
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-1.png" />
		<img src="assets/images/bones-1.png" />		
		<img src="assets/images/bones-2.png" class="preload" />
	</div>
	<div id="profile">
		<article>
			<p class="back">Go Back</p>
			<p>My name is Bones and I'm a whippet-minpin mix. I'm head of security at <a href="https://drxlr.com" target="_blank">Drexler</a>, but I just nap and act cute most of the time. When I grow up I am going to be a sweet potato farmer.</p>
			<p>I found my humans through <a href="https://onedogmore.org/" target="_blank">One Dog More</a> and have been with them since I was 2. <a href="https://www.instagram.com/sacallage/" target="_blank">The pretty one</a> painted my portrait and <a href="https://www.instagram.com/danielgivens/" target="_blank">the big one</a> made this website for me.</p>
			<p>Follow me on <a href="https://www.instagram.com/bones.dog/" target="_blank">Instagram</a> and <a href="https://twitter.com/bonesdotdog" target="_blank">Twitter</a> to see what I'm up to. Send love letters to <a href="mailto:woof@bones.dog">woof@bones.dog</a>.</p>
		</article>
		<figure class="">
			<video autoplay="autoplay" loop muted data-src="assets/video/clip1.mp4">
				<source src="" />
			</video>
		</figure>
		<figure class="">
			<video autoplay="autoplay" loop muted data-src="assets/video/clip2.mp4">
				<source src="" />
			</video>
		</figure>
		<figure class="shown">
			<video autoplay="autoplay" loop muted data-src="assets/video/clip3.mp4">
				<source src="" />
			</video>
		</figure>
	</div>
	<script src="assets/js/libs.min.js"></script>
	<script src="assets/js/base.min.js"></script>	
</body>
</html>