<?php 
	$i = '<![CDATA[';
	$o = ']]>';
?>
<craft>
<?php foreach($services as $service): 
		$id = $service[1];
		$c = 1;?>
	<loadables type="<?php echo $id; ?>">
		<label> <?php echo $i.$service[0].$o; ?></label>
		<?php while ($c <= $service[2]): ?>					
			<loadable id="<?php echo $id."_".$c; ?>" path="<?php echo $imagesPath.$id."/".$c.".jpg"; ?>" needs_baseURL="yes" width=""/>
		<?php $c++; endwhile; ?>
	</loadables>
<?php endforeach; ?>

</craft>