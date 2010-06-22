<?php 
	$i = '<![CDATA[';
	$o = ']]>';

?>
<craft>
<?php foreach(array_keys($services) as $service): 
		$id = strtolower(str_replace(" ", "_", $service));
		$c = 1;?>
	<loadables type="<?php echo $id; ?>">
		<label> <?php echo $i.$service.$o; ?></label>
		<?php while ($c <= $services[$service]): ?>					
			<loadable id="<?php echo $id."_".$c; ?>" path="<?php echo $imagesPath.$id."/".$c.".jpg"; ?>" needs_baseURL="yes" width=""/>
		<?php $c++; endwhile; ?>
	</loadables>
<?php endforeach; ?>

</craft>