<?php
	/*$datei = fopen("countlog.txt","r");
	$count = fgets($datei,1000);
	fclose($datei);
	$count=$count + 1 ;
	$datei = fopen("countlog.txt","w");
	fwrite($datei, $count);
	fclose($datei);		
	echo $count;*/
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
	echo $count;
?>