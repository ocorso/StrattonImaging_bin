<?php 
	$i = '<![CDATA[';
	$o = ']]>';

?>
<craft>
	<loadables>
		<?php foreach($services as $service): ?>
			<loadable id="<?= strtolower(str_replace(" ", "_", $service)); ?>" path="<?= $imagesPath.strtolower(str_replace(" ", "_", $service))."/".$filename; ?>" needs_baseURL="yes">
				<?= $i.$service.$o; ?>
			</loadable>
		<?php endforeach; ?>
	</loadables>
</craft>