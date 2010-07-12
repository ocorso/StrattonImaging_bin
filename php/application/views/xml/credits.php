<?php 
	$i = '<![CDATA[';
	$o = ']]>';

?>
<credits>
	<loadables>
<?php foreach($credits as $credit): ?>
		<loadable id="<?php echo $credit['id']; ?>" filename="<?php echo $imagesPath.$credit['filename']; ?>" needs_baseURL="yes" width=""><?php echo $i.$credit['title'].$o; ?></loadable>
<?php endforeach; ?>
	</loadables>
</credits>