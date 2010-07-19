<?php 
	$i = '<![CDATA[';
	$o = ']]>';
?>
<learn>
	<sections>
		<?php foreach ($sections as $section): ?>
		<section id="<?php echo $section['id']; ?>">
			<label><?php echo $i.$section['label'].$o; ?></label>
			<content><?php echo $i.$section['content'].$o ?></content> 
		</section>
		<?php endforeach; ?>
	</sections>
</learn>