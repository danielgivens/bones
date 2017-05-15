<?php
	$datei = fopen("countlog.txt","r");
	$count = fgets($datei,1000);
	fclose($datei);
	$count=$count + 1 ;
	$datei = fopen("countlog.txt","w");
	fwrite($datei, $count);
	fclose($datei);		
	echo $count;
?>