<?php 
	$i = '<![CDATA[';
	$o = ']]>';
?>
<craft>
	<?php foreach($services as $service): ?>
		<item id="<?= strtolower(str_replace(" ", "_", $service)); ?>"><?= $i.$service.$o; ?></item>
	<?php endforeach; ?>
</craft>