<?php 
	$i = '<![CDATA[';
	$o = ']]>';

?>
<craft>
<?php foreach(array_keys($services) as $service): 
		$id = strtolower(str_replace(" ", "_", $service));
		$c = 1;?>
	<loadables type="<?= $id; ?>">
		<label> <?= $i.$service.$o; ?></label>
		<?php while ($c <= $services[$service]): ?>					
			<loadable id="<?= $id."_".$c; ?>" path="<?= $imagesPath.$id."/".$c.".jpg"; ?>" needs_baseURL="yes" width=""/>
		<?php $c++; endwhile; ?>
	</loadables>
<?php endforeach; ?>

</craft>