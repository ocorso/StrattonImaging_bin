<xml>
	<files>
		<?php foreach($files as $file): ?>
		<file filename="<?= $file['name']; ?>" modification_date="<?= $file['date_modified']; ?>" size="<?= $file['size'] ?>"/>
		<?php endforeach; ?>
	</files>
</xml>